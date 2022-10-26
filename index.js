const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Star programming school api runnig");
});

app.listen(port, () => {
    console.log('Star programmig server running on port', port);
})
