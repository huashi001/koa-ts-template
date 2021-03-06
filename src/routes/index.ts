import routesLoader from '../utils/routesLoader';

export default function(app: any) {
  routesLoader(`${__dirname}`).then((routes: any) => {
    routes.forEach((route: any) => {
      app.use(route.routes()).use(
        route.allowedMethods({
          throw: true
        })
      );
    });
  });
}