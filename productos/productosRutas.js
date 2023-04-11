import { Router } from "express";
const productosrouter = Router();
import {productos, cargar} from "../productos/productosControlador.js"

productosrouter.get ("/", productos)
productosrouter.post ("/cargar", cargar)

export default productosrouter;