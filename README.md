# fis-parser-jade

A parser plugin for fis to compile jade file.

## usage

    $ npm install -g fis-parser-jade
    $ vi example/fis-conf.js

```javascript
//file : example/fis-conf.js
fis.config.merge({
  modules:{
    parser:{
      jade: 'jade'
    }
  },
  settings:{
    parser:{
      jade: {pretty:true}
    }
  },
  roadmap:{
    ext:{
      jade: 'html'
    }
  }
});
```
```javascript
//set jade option
fis.config.set('settings.parser.jade', {pretty:true});
//or
fis.config.merge({
  settings:{
    parser:{
      jade: {pretty:true}
    }
  }
});
```
## example

    $ cd example
    $ fis release -d output

