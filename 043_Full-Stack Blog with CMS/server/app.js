const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const db = new sqlite3.Database('./blog.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the blog database.');
});

// Create tables if they don't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// Routes
app.get('/api/posts', (req, res) => {
  db.all('SELECT * FROM posts ORDER BY createdAt DESC', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM posts WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  db.run(
    'INSERT INTO posts (title, content) VALUES (?, ?)',
    [title, content],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, title, content });
    }
  );
});

app.put('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.run(
    'UPDATE posts SET title = ?, content = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?',
    [title, content, id],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ id, title, content });
    }
  );
});

app.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM posts WHERE id = ?', [id], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: 'Post deleted successfully' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});