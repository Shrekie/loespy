const express = require('express');
const router = express.Router();
const redis = require('./redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

router.use(session({

  store: new RedisStore({ 
    host: process.env.REDIS_URL, port: 6379, 
    client: redis
  }),
  
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 48 // 2 days
  },
  
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false

}));

module.exports = router;