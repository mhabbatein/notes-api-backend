const Hapi = require('@hapi/hapi');
const routes = require('./routes.js');
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  server.route(routes);

  await server.start();
  console.log(`server dijalankan pada ${server.info.uri}`);
};

init();
