import express from "express";
import cors from "cors"
import expresshbs from "express-handlebars"
const app = express();
const PORT = process.env["PORT"] || 3000;
import { connectToDB } from "./config/mongoose.js";
import usuariosrouter from "../Tienda/usuarios/usuariosRutas.js"
import productosrouter from "../Tienda/productos/productosRutas.js"
import fileUpload from "express-fileupload";



  connectToDB();
  app.listen(PORT, (err) => {
    !err
    ? console.log(`Servidor corriendo en puerto: ${PORT}`)
    : console.log(`Servidor caido por error: ${err}`);
    });
  



app.use(express.static(`public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use (cors());

app.locals.id

app.use( fileUpload({
 useTempFiles: true,
tempFileDir: "./uploads",
})
);

app.engine (`.hbs`, expresshbs.engine ({ extname: `hbs` }))
app.set(`view engine`, `hbs`)
app.set (`views`, `./views`)


app.use("/productos", productosrouter)
app.use("/usuarios", usuariosrouter)

app.use("/", (req, res)=>{
  res.render ("home")})

