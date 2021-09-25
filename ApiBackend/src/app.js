const express = require("express");
require("../src/db/conn")
const app = express();
app.use(express.json())
const Contact = require("../src/models/contact");
const router = require("./routers/contact-rout");

const cors = require('cors');


app.use(cors({ origin: 'http://localhost:5000' }));



const port = process.env.PORT || 3000;

app.use(router)



app.listen(port,() => {
       console.log(`Connection is live at port no.${port}`);
})


app.use('/contacts', router);