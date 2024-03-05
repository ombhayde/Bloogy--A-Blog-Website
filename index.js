import express from "express";
import bodyParser from "body-parser";
import { PassThrough } from "stream";

var check=true;
const app = express();
const port = 3000;
app.use(express.static("d:/web d/4.5 Blog Website/public/"))

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/home",(req, res) => {
    res.render("index.ejs");
});
app.get("/mandir",(req, res) => {
    res.render("mandir.ejs");
});
app.get("/faq",(req, res) => {
    res.render("faq.ejs");
});
app.get("/create-post",(req,res)=>{
    res.render("create.ejs");
});


app.post("/checked",(req, res) => {
    const nameOfPost=req.body["postName"];
    const postContent=req.body["Content"];
    if(nameOfPost===""&&postContent==""){
        check="nothing";
    }
    else{
        check="something";
    }
    res.render("created.ejs",{
        pN:nameOfPost,
        pC:postContent,
    });
})

app.listen(port,()=>{
    console.log("listening on port "+port);
});


