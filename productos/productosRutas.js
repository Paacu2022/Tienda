import { Router } from "express";
const productosrouter = Router();
import {productos, cargar, formularioCargaProductos} from "../productos/productosControlador.js"

productosrouter.get ("/", productos)
productosrouter.get ("/formCarga", formularioCargaProductos)
productosrouter.post ("/cargar", cargar)

export default productosrouter;