const express = require('express');
const app = express();
const config = require("./config.json");

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const {
  name,
  description,
  invite,
  support,
  pfp,
  feature1,
  feature2,
  feature3,
  feature4
} = config;

const port = 8000;

app.use(express.static("assets"));

const redirectUrls = {
  '/discord': support,
  '/server': support,
  '/youtube': 'https://www.youtube.com',
  '/invite': invite,
  '/github': 'https://github.com',
  '/git': 'https://discord.gg/z5yGBHfZt2',
  '/instagram': 'https://discord.gg/z5yGBHfZt2',
  '/ig': 'https://discord.gg/z5yGBHfZt2',
  '/twitter': 'https://discord.gg/z5yGBHfZt2',
  '/reddit': 'https://discord.gg/z5yGBHfZt2'
};

app.get('/', async (req, res) => {
  res.render('index', {
    name,
    description,
    invite,
    support,
    pfp,
    f1: feature1,
    f2: feature2,
    f3: feature3,
    f4: feature4
  });
});

for (const [path, url] of Object.entries(redirectUrls)) {
  app.get(path, async (req, res) => {
    res.redirect(url);
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
