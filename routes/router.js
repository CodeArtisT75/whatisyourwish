const Wish = require('../models/Wish');

module.exports = app => {
  app.post('/wish', (req, res) => {
    let newWish = new Wish({
      wish: req.body.wish,
      ip: req.ip,
      created_at: Date.now(),
    });

    newWish
      .save()
      .then(wish => {
        return res.json({
          success: true,
        });
      })
      .catch(err => {
        return res.status(500).json({ error: 'Error saving wish' });
      });
  });

  app.get('*', (req, res) => {
    return res.sendFile('../public/index.html', { root: __dirname });
  });
};
