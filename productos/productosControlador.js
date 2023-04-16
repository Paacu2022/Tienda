import Productos from "../productos/productosModelo.js"
import {uploadImage, deleteImage} from '../utils/cloudinary.js'
import fs from 'fs-extra'


export const productos= async (req, res)=>{
  try {
    const products = await Productos.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const formularioCargaProductos=(req, res)=>{
  res.render ("formularioCargaProductos")
}



export const cargar= async (req, res)=>{
  const {Producto, Descripcion, Precio}= req.body
  try {
    const newProducto = new Productos({
      Producto,
      Descripcion,
      Precio,
    });

    if (req.files?.Foto1) {
      const result = await uploadImage(req.files.Foto1.tempFilePath)
      newProducto.Foto1 = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.Foto1.tempFilePath)
    }

    if (req.files?.Foto2) {
      const result = await uploadImage(req.files.Foto2.tempFilePath)
      newProducto.Foto2 = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.Foto2.tempFilePath)
    }

    if (req.files?.Foto3) {
      const result = await uploadImage(req.files.Foto3.tempFilePath)
      newProducto.Foto3 = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.Foto3.tempFilePath)
    }

    if (req.files?.Foto4) {
      const result = await uploadImage(req.files.Foto4.tempFilePath)
      newProducto.Foto4 = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.Foto4.tempFilePath)
    }
    
    const savedProduct = await newProducto.save();
    const ok=true
    res.render("formularioCargaProductos", {ok})
  } catch (error) {
    if (req.files?.image) {
      await fs.unlink(req.files.Foto.tempFilePath)
    }
    const nc=true
    res.render("formularioCargaProductos", {nc})
  }
}

  
