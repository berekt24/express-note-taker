const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = 3001;
const app = express();
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
const writeFromFile = util.promisify(fs.writeFile);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => {
    const notes = [].concat(JSON.parse(data));
    res.json(notes);
  })
});

app.post('/api/notes', (req, res) => {
  const note = req.body;
  readFromFile('./db/db.json').then((data) => {
    const notes = [].concat(JSON.parse(data));
    note.id = notes.length + 1
    notes.push(note);
    return notes
  }).then(function (notes) {
    writeFromFile('./db/db.json', JSON.stringify(notes))
    res.json(notes);
  })
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteID = parseInt(req.param.id);
  readFromFile('./db/db.json').then((data) => {
    const notes = [].concat(JSON.parse(data));
    const newNotes = []
  

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);












app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);