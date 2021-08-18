# mp3-streamer

This project uses Express to start a server which streams a MP3 file.

The file to play is selected randomly from the `audios` directory, in the root of the project.

### Run server for production

The following environment variables are required:

- ENV. The environment in which the server is started. In this case 'production'.
- PORT. The port where you want the server to be started.
- WHITELIST_DOMAINS. A comma separated list of allowed domains.

There is an example of the final `.env` file in `/.env.example`.

To start the server simply run:

```
npm start
```
