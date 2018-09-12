function localtunnel {
  ./node_modules/.bin/lt --subdomain dianble --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
