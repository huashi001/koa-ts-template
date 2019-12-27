import * as Glob from 'glob';

export default function(dirname: string) {
  return new Promise((resolve, reject) => {
    const routes: any[] = [];
    Glob(
      `${dirname}/*`,
      {
        ignore: '**/index.ts'
      },
      (err, files) => {
        if (err) {
          return reject(err);
        }
        files.forEach(file => {
          const route = require(file).default;
          routes.push(route);
        });
        return resolve(routes);
      }
    );
  });
}
