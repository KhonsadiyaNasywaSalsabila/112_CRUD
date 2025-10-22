const express = require("express");
let mysql = require("mysql2");
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.send('Hello World!');
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3309,
    password: '905.Nasywa',
    database: 'mahasiswa'
});

db.connect((err)=> {
    if(err){
        console.log('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected successfully');

});
