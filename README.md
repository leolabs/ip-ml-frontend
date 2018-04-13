# Sketch Me If You Can Frontend

This is the Polymer-based web frontend for the game Sketch Me If You Can, a demonstrator for
using machine learning in a graphical context to recognize objects in drawings.

This frontend is developed using [Polymer](https://www.polymer-project.org/) and uses WebSockets to
communicate with our AI server. It is split into three views – intro, game and result – which can be found in 
the `src/views` folder. 

## Getting Started

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. To install the additional required components, run:
 
```
$ npm i -g bower yarn polymer-cli gulp && yarn && bower i
```

Then run `gulp serve` to serve your application locally.

## Viewing Your Application

```
$ gulp serve
```

By default, the application will try to connect to the hosted AI server on Heroku. If you want to host the AI 
server locally, you can clone and setup the [IPML API](https://github.com/leolabs/ip-ml-api). To tell the frontend
to connect to the local backend, you can pass the connection string after a hash. E.g.

```
http://127.0.0.1:8081/#127.0.0.1:9000
```

## Building Your Application

```
$ gulp
```

Any changes pushed to this repo's master branch will automatically be deployed to
[ipml.netlify.com](https://ipml.netlify.com)