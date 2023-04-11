let express = require("express");
let path = require("path");
let app = express();
let port = 800;

app.use(express.urlencoded());
app.use(express.json());
app.set('view-engine', 'pug');
app.set('views', path.join(__dirname, 'pugfiles'));

app.get('/', (req, res)=>{
    res.status(200).render('index.pug');
})

let users = [{name: "Name", pd: "pd"}]

app.get('/users', (req, res)=>{
    res.json(users);
})

app.post('/users', (req, res)=>{
    let user = {name: req.body.name, pd: req.body.pd};
    users.push(user);
})

app.listen(port,()=>{
    console.log(`Website Running Successfully on localpost port ${port}`)
});