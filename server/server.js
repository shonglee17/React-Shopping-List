const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`

// GET ROUTE //
app.get('/shoppinglist', (req, res) => { 
    const sqlText = `
    SELECT * FROM shoppinglist ORDER BY id;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})



// POST ROUTE //
app.post('/shoppinglist', (req, res) => {
    // const list = req.body;
    const sqlText = `INSERT INTO shoppinglist (name, quantity)
                     VALUES ($1, $2)`;
    const sqlValues = [req.body.name, req.body.quantity]
    pool.query(sqlText, sqlValues)
        .then((result) => {
            console.log(`Added item to the database`, list);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('POST /shoppinglist fail', error);
            res.sendStatus(500); 
        })
})



// DELETE ROUTE //
app.delete('/shoppinglist/:id', (req, res) => {
    console.log(req.params);
    let idToDelete = req.params.id;
  
    let sqlQuery = `
      DELETE FROM "shoppinglist"
        WHERE "id"=$1;        
    `
    let sqlValues = [idToDelete];
    pool.query(sqlQuery, sqlValues)
      .then((dbRes) => {
        // That worked! Tell "OK" to the client:
        res.sendStatus(200);
      })
      .catch((dbErr) => {
        console.log('shit broke in DELETE /shoppinglist/:id', dbErr);
        res.sendStatus(500);
      })
  })

// PUT ROUTE //
app.put('/shoppinglist/:id', (req,res)=>{
    let idToUpdate = req.params.id
    let newStatus = req.body.status
    let sqlValues = [newStatus, idToUpdate]
    let sqlQuery = `
    UPDATE "shoppinglist"
        SET "status" = $1
        WHERE "id" = $2;
    `;
    pool.query(sqlQuery, sqlValues)
    .then((dbRes)=>{
        console.log('successful update from put: serverside');
        res.sendStatus(201)
    }).catch(( dbErr)=>{
        console.log('broke in PUT serverside', dbErr);
        res.sendStatus(500)
    })
})






/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});