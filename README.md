# req-is

Validation middleware

### Install

npm install --save req-is

### Use

    var reqIs = require('req-is');

    app.get('/users-only', reqIs.user);
    app.get('/ajax-is-fun', reqIs.xhr);
