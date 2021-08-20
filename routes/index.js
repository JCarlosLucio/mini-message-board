const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
  {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ad iusto consectetur quo, incidunt modi voluptates eos mollitia dolorem minus nostrum ipsam, impedit fugiat dolor omnis animi in tenetur ratione.',
    user: 'Yoshi',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (_req, res) => {
  res.render('index', { title: 'Mini message board', messages });
});

/* GET create new message page. */
router.get('/new', (_req, res) => {
  res.render('form');
});

/* POST new message page. */
router.post('/new', (req, res) => {
  const { author, messageText } = req.body;

  const newMessage = {
    text: messageText,
    user: author,
    added: new Date(),
  };

  messages.push(newMessage);

  res.redirect('/');
});

module.exports = router;
