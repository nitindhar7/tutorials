{
  "baseUrl": "../lib",
  "paths": {
    "mylib": "../main"
  },
  "include": ["../tools/almond", "main"],
  "exclude": ["jquery"],
  "out": "../dist/mylib.js"
  "wrap": {
    "startFile": "wrap.start",
    "endFile": "wrap.end"
  }
}