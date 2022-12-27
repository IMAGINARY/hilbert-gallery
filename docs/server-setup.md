# hilbert-gallery server setup

These instructions document the steps that were followed to install the server for the Lively Exhibition system at the 
Fasnachtsmuseum Schloss Langenstein.

They were applied on Ubuntu 22.04 LTS Server (standard installation, not minimal).

## Account setup

1. Changed the root password
2. Setup passwordless ssh
3. Created a new user
    ```
    adduser imaginary
    adduser imaginary sudo
    ```
4. Disallow root login and password auth
   Edit `/etc/ssh/sshd_config`
    ```
    # Authentication:
    ...
    PermitRootLogin no
    ```
   and
    ```
    # Change to no to disable tunnelled clear text passwords
    PasswordAuthentication no
    ```
   set timeout
    ```
    ClientAliveInterval 1200
    ClientAliveCountMax 3
    ```
   Then restart sshd
    ```
    sudo systemctl restart sshd
    ```
5. Setup firewall
    ```
    apt install ufw && ufw allow 22 && ufw logging off && ufw enable && ufw status
    ```
6. Install rsync
    ```
   apt-get install rsync
    ```

## Install fail2ban

    ```
    apt-get update && apt-get upgrade -y
    apt-get install fail2ban
    ```

Create config override files, that you can edit to change defaults

    ```
    cp /etc/fail2ban/fail2ban.conf /etc/fail2ban/fail2ban.local
    cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
    ```

Edit jail.local to configure ssh jail:

    ```
    [sshd]
    enabled = true
    maxretry = 6
    # To use more aggressive sshd modes set filter parameter "mode" in jail.local:
    # normal (default), ddos, extra or aggressive (combines all).
    # See "tests/files/logs/sshd" or "filter.d/sshd.conf" for usage example and details.
    #mode   = normal
    port    = ssh
    logpath = %(sshd_log)s
    backend = %(sshd_backend)s
    ```

Reload config

    ```
    fail2ban-client reload
    fail2ban-client status
    ```

## Install ruby and dependencies

1. Install required packages
    ```
    apt install curl git nginx postgresql libpq-dev ffmpeg imagemagick redis
    ```
2. Install [node](https://github.com/nodesource/distributions#debinstall) v12
   ```
   curl -sL https://deb.nodesource.com/setup_12.x | bash -
   apt-get install -y nodejs
   ```
3. Install [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
   ```
   curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
   echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
   sudo apt update && sudo apt install yarn
   ```
4. Install [rvm](https://rvm.io/)
   ```
   gpg --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
   \curl -sSL https://get.rvm.io | bash -s stable 
   ```
5. Log-out and log-in to enable rvm
6. Install ruby and the bundler gem
   NOTE: See special instructions for Ubuntu >= 22.04
   ```
   rvm install 2.6.3 && rvm --default use 2.6.3 && gem update --system && gem install bundler -v 1.17.2
   ```
   On Ubuntu 22.04 the ruby installation failed because it ships with OpenSSL 3, which is only supported
   by Ruby >= 3.1.0. This problem is described [here](https://stackoverflow.com/a/72216805/2812635).
   A solution is to install openssl 1 through rvm and then point rvm to the installation:
   ```
   rvmsudo rvm pkg install openssl
   rvm install 2.6.3 --with-openssl-dir=/home/root/.rvm/usr && rvm --default use 2.6.3 && gem update --system && gem install bundler -v 1.17.2
   ```

## Setting up the Ruby on Rails app

1. Create a user and database for the app (ignore "could not change directory to /root" errors)
   ```
   sudo -u postgres createuser imaginary
   sudo -u postgres createdb hilbert-gallery --owner=imaginary
   ```
3. Create a ssh key for deployment
   ```
   ssh-keygen && cat ~/.ssh/id_rsa.pub
   ```
4. Add the deploy key to the [github repository](https://github.com/IMAGINARY/hilbert-gallery/settings/keys) (Settings > Deploy keys > Add deploy key)
5. In the local system run
   ```
   mina setup
   ```
6. Copy the local `config/master.key` to `~/app/shared/config/master.key`
7. In the local system run
   ```
   mina deploy
   ```
8. Create the `/home/imaginary/app/shared/sockets` directory
9. Create `/etc/systemd/system/lively-exhibitions.service` with the following contents
    ```
    [Unit]
    Description=Puma HTTP Server
    After=network.target
    
    # Uncomment for socket activation (see below)
    # Requires=puma.socket
    
    [Service]
    # Foreground process (do not use --daemon in ExecStart or config.rb)
    Type=simple
    
    # Preferably configure a non-privileged user
    User=imaginary
    Group=imaginary
    
    # The path to the your application code root directory.
    # Also replace the "<YOUR_APP_PATH>" place holders below with this path.
    # Example /home/username/myapp
    WorkingDirectory=/home/imaginary/app/current
    
    # Helpful for debugging socket activation, etc.
    Environment=RAILS_ENV=production
    
    # SystemD will not run puma even if it is in your path. You must specify
    # an absolute URL to puma. For example /usr/local/bin/puma
    # Alternatively, create a binstub with `bundle binstubs puma --path ./sbin` in the WorkingDirectory
    # ExecStart=/<FULLPATH>/bin/puma -C <YOUR_APP_PATH>/puma.rb
    
    # Variant: Rails start.
    # ExecStart=/<FULLPATH>/bin/puma -C <YOUR_APP_PATH>/config/puma.rb ../config.ru
    
    # ExecStart=/usr/local/rvm/wrappers/default/bundle exec puma -C /home/imaginary/app/current/config/puma.rb

    # ExecStop=/usr/local/rvm/wrappers/default/bundle exec puma -S /home/imaginary/app/current/config/puma.rb
    
    # Variant: Use `bundle exec --keep-file-descriptors puma` instead of binstub
    # Variant: Specify directives inline.
    # ExecStart=/<FULLPATH>/puma -b tcp://0.0.0.0:9292 -b ssl://0.0.0.0:9293?key=key.pem&cert=cert.pem
    
    # Variant: Rails start.
    # ExecStart=/<FULLPATH>/bin/puma -C <YOUR_APP_PATH>/config/puma.rb ../config.ru
    
    ExecStart=/usr/local/rvm/wrappers/default/bundle exec puma -C /home/imaginary/app/current/config/puma.rb  -b unix:///home/hilbert/app/shared/sockets/hilbert.sock

    ExecStop=/usr/local/rvm/wrappers/default/bundle exec pumactl -S /home/imaginary/app/current/tmp/pids/server.pid

    # Variant: Use `bundle exec --keep-file-descriptors puma` instead of binstub
    # Variant: Specify directives inline.
    # ExecStart=/<FULLPATH>/puma -b tcp://0.0.0.0:9292 -b ssl://0.0.0.0:9293?key=key.pem&cert=cert.pem
    
    Restart=always
    
    [Install]
    WantedBy=multi-user.target
    ```   
10. Start the service
    ```
    systemctl daemon-reload
    systemctl enable lively-exhibitions.service
    systemctl start lively-exhibitions.service
    ```
    check the status
    ```
    systemctl status lively-exhibitions.service
    ```
11. Add rvm to the .bashrc
    ```
    echo 'source /usr/local/rvm/scripts/rvm' >> ~/.bashrc
    ```

## Set up the web server

1. Login as root
2. Create the directory `/home/imaginary/www`
3. Disable the default site
   ```
   rm /etc/nginx/sites-enabled/default
   ```
4. Create a configuration at `/etc/nginx/sites-available/lively-exhibitions` with contents
   ```
   upstream lively-exhibitions {
       server unix:/home/imaginary/app/shared/sockets/lively-exhibitions.sock fail_timeout=0;
   }
   
   server {
       listen 80;
       server_name le-server.local;
   
       root /home/imaginary/app/current/public;
   
       location /assets/  {
           gzip_static on; # serve pre-gzipped version
           expires 1M;
           add_header Cache-Control public;
       }
   
       location / {
           try_files $uri @app;
       }
   
       location @app {
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header Host $http_host;
           proxy_redirect off;
           proxy_pass http://lively-exhibitions;
       }
   }
   
   server {
       listen 80;
       server_name le-server.local;
   
       root /home/imaginary/www;
   
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   
   server {
       listen 80;
       server_name le-server.local;
       return 301 http://le-server.local$request_uri;
   }
   ``` 
5. Enable the configuration
   ```
   ln -s /etc/nginx/sites-available/lively-exhibitions /etc/nginx/sites-enabled/lively-exhibitions
   ```
6. Reload nginx if the configuration is OK
   ```
   nginx -t && systemctl reload nginx 
   ```
7. Enable port 80 in the firewall:
   ```
   ufw allow 80
   ```
8. Check if the web server responds correctly.
   If not, check logs at `/var/log/nginx/error.log`, `/home/imaginary/app/shared/log/`

## Add the hilbert-gallery-sequencer

1. Create the `/home/imaginary/hilbert-gallery-sequencer` directory
2. Clone the repository at https://github.com/IMAGINARY/hilbert-gallery-sequencer.git
   ```
   git clone https://github.com/IMAGINARY/hilbert-gallery-sequencer.git
   ```
3. Install the dependencies
   ```
   cd hilbert-gallery-sequencer
   npm install
   ```
4. Create a random API key for the sequencer
   ```
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
5. Create a random API key for the server
  ```
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
5. Create a .env file with the following contents
   ```
   API_KEYS=<The API key created in step 4>
   HILBERT_GALLERY_API_URL=http://le-server.local
   HILBERT_GALLERY_API_KEY=<The API key created in step 5>
   ```
   You may also add a PORT key to change the port the sequencer listens on (defaults to 4123).
6. Create a systemd service at `/etc/systemd/system/hilbert-gallery-sequencer.service` with the following contents
   ```
    [Unit]
    Description=Hilbert Gallery Sequencer
    After=network.target
   
    [Service]
    Type=simple
    User=imaginary
    Group=imaginary
    WorkingDirectory=/home/imaginary/hilbert-gallery-sequencer
    ExecStart=/usr/bin/npm start
    Restart=always
    
    [Install]
    WantedBy=multi-user.target
   ```
7. Start the service
   ```
    systemctl daemon-reload
    systemctl enable hilbert-gallery-sequencer.service
    systemctl start hilbert-gallery-sequencer.service
    ```
8. Check the status
   ```
   systemctl status hilbert-gallery-sequencer.service
   ```
9. Add the sequencer's address to the app configuration at `/home/imaginary/app/current/config/environments/production.rb`:
   ```
   config.x.sequencer_api_url = "http://le-server.local:4123"
   ```
   If necessary adjust the server address or port number as appropriate.
10. Set the API keys in rails:
   ```
   EDITOR="vi" rails credentials:edit
   ```
   set
   ```
   api_keys: 
      - <The API key created in step 5>
   hilbert_sequencer_api_key:  <The API key created in step 4>
   ```
