for file in "$@"
do
	curl "https://purge.jsdelivr.net/gh/dotennin/dotennin@main/$file"
done
