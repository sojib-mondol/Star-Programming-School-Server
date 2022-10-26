const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors());

// this data for cources catagory
const categories = require('./data/categories.json');
// this data for couces details 
const cources = require('./data/cources.json');

app.get('/couces-categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    // for all cources 
    if(id === '08'){
        res.send(cources);
    }
    else{
        const category_cources = cources.find(n => n.category_id === id);
        res.send(category_cources);
    }
})


app.get('/cources/:id', (req, res) => {
    const id = req.params.id;
    const selectedCources = cources.find(n => n._id === id);
    res.send(selectedCources);
})

app.get('/', (req, res) => {
    res.send("Star programming school api runnig");
});

app.listen(port, () => {
    console.log('Star programmig server running on port', port);
})
