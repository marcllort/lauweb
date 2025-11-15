const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Journeys by Laura',
    currentPage: 'home'
  });
});

app.get('/maps', (req, res) => {
  res.render('maps', {
    title: 'My Pinpoints - Journeys by Laura',
    currentPage: 'maps'
  });
});

app.get('/guides', (req, res) => {
  res.render('guides', {
    title: 'My Guides - Journeys by Laura',
    currentPage: 'guides'
  });
});

// Sample guide detail route (for future use)
app.get('/guides/:slug', (req, res) => {
  const { slug } = req.params;
  res.render('guide-detail', {
    title: `Guide - Journeys by Laura`,
    currentPage: 'guides',
    slug: slug
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
