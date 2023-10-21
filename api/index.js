const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { log } = require('console');
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.options('*', cors()) //enable pre-flight checks
app.use(cors());

const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

app.post('/', async (req, res) => {
  return res.status(400).json({ status: 'fail', message: "Bad Request" })
})

app.get(['/meals','/meals/:id'], async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  const requestedID = req.params.id;
  // log(requestedID)
  if(!requestedID) {
    log("NO ID REQUESTED")
    db.query("SELECT * FROM `meals`", (queryErr, queryRes) => {
      if (queryErr) return res.status(400).json(queryErr)
      return res.json(queryRes)
    });
  } else {
    log("ID REQUESTED")
    db.query(`SELECT * FROM meals WHERE ID='${requestedID}'`, (queryErr, queryRes) => {
      if (queryErr) return res.status(400).json(queryErr)
      return res.json(queryRes)
    });
  }
});

app.get('/current', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  db.query('SELECT * FROM meals WHERE ID IN (SELECT meal_id FROM current_list)', (queryErr, queryRes)=> {
    if (queryErr) return res.status(400).json(queryErr)
    log("CURRENT LIST REQUESTED")
    return res.json(queryRes)
  });
});

app.listen(3000, '0.0.0.0', () => {
  console.log(`Server running`);
});

