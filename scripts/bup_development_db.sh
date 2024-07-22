DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../work/db || exit
FILENAME="hilbert-gallery-development-db-$(date +%Y-%m-%d-%H-%M-%S)-dump.sql"
pg_dump -U ericlondaits --dbname="hilbert_gallery_development" --file="$FILENAME"
echo "Database dump saved to $FILENAME"