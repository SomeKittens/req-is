'use strict';

// Validation middleware

exports.xhr = function(req, res, next) {
  if (req.xhr) {
    next();
  } else {
    res.send(400);
  }
};

exports.user = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send(403);
  }
};

exports.anon = function(req, res, next) {
  if (!req.user) {
    next();
  } else {
    res.redirect('/');
  }
};