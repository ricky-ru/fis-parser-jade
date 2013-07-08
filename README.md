# fis-parser-jade

A parser plugin for fis to compile jade file.

## usage

    $ npm install -g fis-parser-jade
    $ vi path/to/project/fis-conf.js

```javascript
//file : path/to/project/fis-conf.js
fis.config.merge({
    roadmap : {
        ext : {
            md : 'html'
        }
    },
    modules : {
        parser : {
            md : 'jade'
        }
    }
});
