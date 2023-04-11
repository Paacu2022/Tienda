import Productos from "../productos/productosModelo.js"
import {uploadImage, deleteImage} from '../utils/cloudinary.js'
import fs from 'fs-extra'


export const productos=(req, res)=>{
  res.render ("productos")
}

export const cargar= async (req, res)=>{
  const {Producto, Descripcion, Precio}= req.body
  try {
    const newProducto = new Productos({
      Producto,
      Descripcion,
      Precio,
    });

    if (req.files?.Foto) {
      const result = await uploadImage(req.files.Foto.tempFilePath)
      console.log(result)
      newProducto.Foto = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.Foto.tempFilePath)
    }
    
    const savedProduct = await newProducto.save();
    return res.json(savedProduct);
  } catch (error) {
    if (req.files?.image) {
      await fs.unlink(req.files.Foto.tempFilePath)
    }
    return res.status(500).json({ message: error.message });
  }
}

  
