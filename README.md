# hilbert-gallery

Dynamic curation and exhibition system.

## Description

This web application is the main component of the Lively Exhibition system (see below). It provides the backend that
runs in the museum, and the front-end used by the administrators to configure the system, the curators to create 
exhibitions, as well as the front-end that runs in the client display stations.

Powered by Rails 6.1 on Ruby 2.6.

### Lively Exhibition

The Lively Exhibition system allows fast and dynamic curation of exhibitions from videos and photos donated to a museum 
by their community. Museum staff can easily assemble an exhibition by selecting images from the system’s collection and 
placing them on different screens in the space.

The system empowers the museum community to participate in the creation of exhibitions. They can donate images easily 
through a website, even from their phones during a visit.

The project was developed for an installation at the [Fasnachtsmuseum Schloss Langenstein](https://www.fasnachtsmuseum.de/).

### Demo Setup

![lively-exhibition-setup-haus-bastian.jpg](docs%2Fimg%2Flively-exhibition-setup-haus-bastian.jpg)

Picture from a Lively Exhibition setup at the closure event of the Museum 4punkt0 project at Haus
Bastian in Berlin on June 24, 2022. We used an Intel NUC computer (11 i3 PAH) as server and six
screens (Samsung 43" UHD 4K Signage QH43R) to show 3 live-curated exhibitions. The data was gathered
from art, photography and user images and videos for the carnival in 2022 by the Fasnachtsmuseum
Schloss Langenstein.

## Funding

This package is part of the project museum4punkt0 - Digital Strategies for the
Museum of the Future, sub-project Kulturgut Fastnacht digital (Lively
Exhibition). The project museum4punkt0 is funded by the Federal Government
Commissioner for Culture and the Media in accordance with a resolution issued by
the German Bundestag (Parliament of the Federal Republic of Germany). Further
information: www.museum4punkt0.de

![Logo of the Federal Government Commissioner for Culture and the Media][logo-bmk]
![Logo of NeustartKultur][logo-neustartkultur]

## Installation

Check [`docs/server-setup.md`](docs/server-setup.md) for instructions on how to setup the server (with all dependencies) and install the app.

## Dependencies

Dependencies are specified in the [`docs/server-setup.md`](docs/server-setup.md) document. However,
we list the main ones here for convenience:

- Ruby 2.6
- Rails 6.1
- node.js v12
- yarn
- git
- curl
- nginx
- PostgreSQL
- libpq-dev
- redis
- ImageMagick (not installed by rails) for building the image previews.
- ffmpeg (not installed by rails) for building the video previews.
- [`hilbert-gallery-sequencer`](http://www.github.com/IMAGINARY/hilbert-gallery-sequencer)

The system was tested under Ubuntu 22.04, on which we based the installation instructions. It should
work on other Linux distributions as well. The installation instructions might differ in terms of:

- dependencies and their versions
- package manager commands
- creation and configuration of system services

## Configuration

Basic configuration can be found in `config/application.rb` and `config/environments` for
environment specific overrides. All keys are commented.

Secrets have to be set by running

```
EDITOR="vi" rails credentials:edit
```

from the root project directory.

## Maintenance and other tasks

Check [`docs/cookbook.md`](docs/cookbook.md) for several typical maintenance actions.

## Architecture

See [`ARCHITECTURE.md`](ARCHITECTURE.md).

## Credits

Developed by Eric Londaits <eric.londaits@imaginary.org> for IMAGINARY gGmbH.

## License

Copyright © 2022 IMAGINARY gGmbH

Licensed under the MIT license (see the [`LICENSE`](LICENSE) file).

[logo-bmk]:
https://github.com/museum4punkt0/Object-by-Object/blob/77bba25aa5a7f9948d4fd6f0b59f5bfb56ae89e2/04%20Logos/BKM_Fz_2017_Web_de.gif
[logo-neustartkultur]:
https://github.com/museum4punkt0/Object-by-Object/blob/22f4e86d4d213c87afdba45454bf62f4253cada1/04%20Logos/BKM_Neustart_Kultur_Wortmarke_pos_RGB_RZ_web.jpg
