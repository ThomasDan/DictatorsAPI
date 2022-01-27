const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;



// use "node app" command to launch

// https://malcoded.com/posts/angular-backend-express/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



let dictators = [];

app.get('/getDictators', function(req, res) {
    res.json(dictators);
    console.log(dictators);
});

app.post('/create', function (req, res) {
    const dictator = req.body;
    console.log('Attempted to create a dictator!');
    
    dictators.push(dictator);
  });

app.delete('/delete', function (req, res) { 
    const dictator = req.body.Index;
    dictators.splice(dictator, 1);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
