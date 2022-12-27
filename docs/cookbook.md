## Deploy

After commiting a new version to the master branch, run
```
mina deploy
```

## Edit API keys and other credentials (e.g. google maps)

From the shell

```
cd ~/app/current
EDITOR="vi" bin/rails credentials:edit
```

## Rails Console

From the shell

```
cd ~/app/current
bin/rails console -e production -- --simple-prompt
```

## Restart the app

```
sudo systemctl restart hilbert-gallery-sequencer.service
sudo systemctl restart lively-exhibitions.service
```

## Backup database

```
pg_dump -U imaginary -F c hilbert-gallery > ./hilbert-gallery-production-db-$(date +%Y-%m-%d).dump
```
