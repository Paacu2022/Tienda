import { Router } from "express";
const usuariosrouter = Router();
import {registracion, login, tabla} from "../usuarios/usuariosControlador.js"

usuariosrouter.post ("/registracion", registracion)
usuariosrouter.post ("/login", login)
usuariosrouter.post ("/tabla", tabla)


export default usuariosrouter;