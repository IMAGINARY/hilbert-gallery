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

Check [docs/server-setup.md](docs/server-setup.md) for instructions on how to setup the server (with all dependencies) and install the app.

## Dependencies

- Requires `ffmpeg` (not installed by rails) for building the ActiveStorage previews.

## Configuration

Basic configuration can be found in `config/application.rb` and `config/environments` for
environment specific overrides. All keys are commented.

Some external service keys have to be set by running

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
