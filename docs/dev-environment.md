# Development Environment

## Start

Start the hilbert-gallery-sequencer by going to its root directory and running

```bash
npm run start
```

Run the rail server in development mode:

```bash
bin/rails server -b 0.0.0.0 -p 3000 -e development
```

The server will be available at `http://localhost:3000`.

## Database backup

```bash
pg_dump -U ericlondaits --dbname="hilbert_gallery_development" --file="hilbert-gallery-development-db-$(date +%Y-%m-%d)-dump.sql"
```

## Tests

Tests can be run with

```bash
rails test
```

or using the test runner in the IDE.
