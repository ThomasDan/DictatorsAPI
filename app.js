const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;



// use "node app" command to launch

// https://malcoded.com/posts/angular-backend-express/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



let dictators = new Array();

app.get('/getDictators', function(req, res) {
    res.json(dictators);
});

app.post('/create', function (req, res) {
    const dictator = req.body;
    dictators.push(dictator);
  });

app.delete('/delete/:id', function (req, res) { 
    //const dictator = req.body.Index;
    const { i } = req.params;
    console.log('Deleted Dictator: ' + dictators.splice(i, 1).values);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
