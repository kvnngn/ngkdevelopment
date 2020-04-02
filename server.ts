import 'zone.js/dist/zone-node';

import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { join } from 'path';
import 'localstorage-polyfill'

// Express server
export const app = express();
const PORT = process.env.PORT || 1234;

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const DIST_FOLDER = join(process.cwd(), 'dist/browser');
const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(DIST_FOLDER, 'index.html')).toString();
const win = domino.createWindow(template);
global['window'] = win;
global['location'] = win.location;
global['Node'] = win.Node;
global['navigator'] = win.navigator;
global['Event'] = win.Event;
global['KeyboardEvent'] = win.Event;
global['MouseEvent'] = win.Event;
global['Event']['prototype'] = win.Event.prototype;
global['document'] = win.document;
global['localStorage'] = localStorage;
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP,
  ngExpressEngine,
  provideModuleMap,
} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', (_, options, callback) => {
  const engine = ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP),
    ],
  });

  engine(_, options, callback);
});

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get(
  '*.*',
  express.static(DIST_FOLDER, {
    maxAge: '1y',
  }),
);

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req, res }, (err, html) => {
    if (html) {
      if (req.headers.host.indexOf('amazonaws.com') > 0) {
        console.log(html)
        console.log('in')
        html = html.replace('<base href="/', '<base href="/dev/');
      }
      res.send(html);
    } else {
      res.send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
