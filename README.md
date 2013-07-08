# fis-parser-jade

> **WARNING** : Node.js ``v0.8.12`` required!!!

A parser plugin for fis to compile sass file.

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
```
