fis.config.merge({
    project: {
      charset : 'utf-8',
      fileType : {
        text : 'jade'
      }
    },
    modules : {
      parser : {
        jade : 'jade'
      }
    },
    settings : {
      parser : {
        jade : { pretty : true }
      }
    },
    roadmap : {
      ext : {
        jade : 'html'
      }
    }
});
