import express from "express";
import Routers from "./files/routes/routes.js";
import cors from "cors";
const app = express();
import bodyParser from "body-parser";
/********Connection with Db */
import mongoose from "mongoose";
const port =8080;

const connectDB=async()=>{
    const dbName="shop";
    const url=`mongodb://127.0.0.1:27017/${dbName}`;
    const cnx= await mongoose.connect(url);
    console.log(`DBName:${dbName}`);
    console.log(`url:${url}`);
}
connectDB();
/************************** */
app.use(cors({origin:'*'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// indice pour pointer sur le dossier public pour les fichiers
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "files/views");
app.listen(port, () => {
  console.log(`listning port http://localhost:${port}`);
});

app.use(Routers);
