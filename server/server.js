/* eslint-disable no-console */
import cors from 'cors';
import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import IntlWrapper from '../client/modules/Intl/IntlWrapper';
import { io } from './util/socketio-server';
// import AWS from 'aws-sdk';
const AWS = require('aws-sdk');
// console.log('AWS is :', AWS);
// const credentials = new AWS.SharedIniFileCredentials({
//   // profile: 'live2vod',
//   profile: 'dnops_sandbox',
// });
// AWS.config.credentials = credentials;
// AWS.config.update({ region: 'ap-southeast-2' });

// Create an S3 client
const s3 = new AWS.S3();

// Initialize the Express App
const app = new Express();
const server = require('http').createServer(app);
const client = require('socket.io').listen(server);

// console.log('socketIO is :', socketIO);
io(client);

// Load the SDK and UUID
// const AWS = require('aws-sdk');
// const uuid = require('node-uuid');


// Set Development modes checks
const isDevMode = process.env.NODE_ENV === 'development' || false;
const isProdMode = process.env.NODE_ENV === 'production' || false;

// Run Webpack dev server in development mode
if (isDevMode) {
  // Webpack Requirements
  // eslint-disable-next-line global-require
  const webpack = require('webpack');
  // eslint-disable-next-line global-require
  const config = require('../webpack.config.dev');
  // eslint-disable-next-line global-require
  const webpackDevMiddleware = require('webpack-dev-middleware');
  // eslint-disable-next-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    watchOptions: {
      poll: 1000,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
}


// React And Redux Setup
import { configureStore } from '../client/store';
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';

// Import required modules
import routes from '../client/routes';
import { fetchComponentData } from './util/fetchData';

import postRouter from './routes/post.routes';
import { postData } from './dummyData';

import userRouter from './api/user/user.router';
import { signup, signin, protect } from './util/auth';

import ChefRouter from './api/Chef/routes';
import chefData from './api/Chef/dummyData';

import FoodRouter from './api/Food/routes';
import foodData from './api/Food/dummyData';

import ShopcartRouter from './api/Shopcart/routes';
import shopcartData from './api/Shopcart/dummyData';

import LocationRouter from './api/Location/routes';
import locationData from './api/Location/dummyData';

import OrderRouter from './api/Order/routes';
import orderData from './api/Order/dummyData';

import PencilRouter from './api/Pencil/routes';
import pencilData from './api/Pencil/dummyData';

import BookRouter from './api/Book/routes';
import bookData from './api/Book/dummyData';

// import RecipeRouter from './api/Recipe/routes';
// import recipeData from './api/Recipe/dummyData';

import ShipmentRouter from './api/Shipment/routes';
import shipmentData from './api/Shipment/dummyData';

import SearchRouter from './api/Search/routes';
import searchData from './api/Search/dummyData';

import SocialRouter from './api/Social/routes';
import socialData from './api/Social/dummyData';


import serverConfig from './config';


// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(serverConfig.mongoURL, (error) => {
    try {
      // feed some dummy data in DB.
      chefData();
      foodData();
      locationData();
      orderData();
      pencilData();
      postData();
      // recipeData();
      searchData();
      bookData();
      socialData();
      shipmentData();
      shopcartData();
    } catch (e) {
      console.error('Please make sure Mongodb is installed and running!', e); // eslint-disable-line no-console
      throw error;
    }
  });
}

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }), cors());
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }), cors());
app.use(Express.static(path.resolve(__dirname, '../dist/client')));

app.use('/signup', signup);
app.use('/signin', signin);

app.use('/api/pencils', protect);

app.use('/api/user', userRouter);

app.use('/api', postRouter);
app.use('/api', FoodRouter);
app.use('/api', ChefRouter);
app.use('/api', PencilRouter);
app.use('/api', BookRouter);

app.use('/api', ShopcartRouter);
app.use('/api', LocationRouter);
// app.use('/api', RecipeRouter);
app.use('/api', OrderRouter);

app.use('/api', ShipmentRouter);
app.use('/api', SearchRouter);
app.use('/api', SocialRouter);


// MEDIA LIVE API CALL Handling

app.use('/api/create/channel', async (req, res) => {
  console.log('req in media/create is :', req.params);
  const params = {};
  try {
    await s3.listBuckets(params, (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
      return res.status(200).send({
        message: data,
      });
    });
  } catch (e) {
    return res.status(400).end(e);
  }
});


// Render Initial HTML
const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind();

  // Import Manifests
  const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  const chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return `
    <!doctype html>
    <html>
      <head>
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${head.script.toString()}

        ${isProdMode ? `<link rel='stylesheet' href='${assetsManifest['/app.css']}' />` : ''}
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />
      </head>
      <body>
        <div id="root">${process.env.NODE_ENV === 'production' ? html : `<div>${html}</div>`}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          ${isProdMode ?
          `//<![CDATA[
          window.webpackManifest = ${JSON.stringify(chunkManifest)};
          //]]>` : ''}
        </script>
        <script src='${isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js'}'></script>
        <script src='${isProdMode ? assetsManifest['/app.js'] : '/app.js'}'></script>
      </body>
    </html>
  `;
};

const renderError = err => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace = isProdMode ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use((req, res, next) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    const store = configureStore();

    return fetchComponentData(store, renderProps.components, renderProps.params)
      .then(() => {
        const initialView = renderToString(
          <Provider store={store}>
            <IntlWrapper>
              <RouterContext {...renderProps} />
            </IntlWrapper>
          </Provider>
        );
        const finalState = store.getState();

        res
          .set('Content-Type', 'text/html')
          .status(200)
          .end(renderFullPage(initialView, finalState));
      })
      .catch((error) => next(error));
  });
});


// start app
server.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});


export default app;
