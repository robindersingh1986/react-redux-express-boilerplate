const express = require('express');
const webpack = require('webpack');
const path = require('path');
const app = express();
const HTTP_PORT = process.env.HTTP_PORT || 9800;
const HOST = process.env.HOST || null;

const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(express.json());
app.use(require('webpack-dev-middleware')(compiler, {
  clientLogLevel: 'warning',
  hot: true,
  inline: true,
  progress: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  const fileName = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(fileName, (err, file) => {
    if(err){
      return res.status(400)(err);
    }

    return res.send(file.toString());
  });
  //res.send("Welcome to app");
});

//start server
app.listen(HTTP_PORT, HOST, error => {
  if (!error) {
    console.log(`Server Started at ${HOST} @ port : ${HTTP_PORT}`);
  } else if (error) {
    console.log(`Error encountered : ${error}`);
  }
})
