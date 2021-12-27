# hilbert-gallery

Dynamic curation and exhibition system. 

Powered by Rails 6.1 on Ruby 2.6.

## Installation

Check `doc/vps-setup.md` for full installation instructions on a VPS.

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

Check `doc/cookbook.md` for details.

## Credits

Developed by Eric Londaits <eric.londaits@imaginary.org> for IMAGINARY gGmbH.
