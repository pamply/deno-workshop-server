FROM hayd/ubuntu-deno:1.4.1
WORKDIR /app
ADD . /app
CMD ./start.sh
