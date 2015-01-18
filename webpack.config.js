module.exports =
{ // this is the entry point of the app
  entry: "./app"

, output:
    { filename: "bundle.js"
    }
, resolve:
    // configure what files you can require without specifying their extensions
    { extensions:
      [ ""
      , ".js"
      , ".jsx"
      ]
    }
, module:
    { loaders: [
      // compile js or jsx with react-tool
      { test: /\.jsx?$/, loaders: ["jsx?harmony"], exclude: /node_modules/}]
    }
}