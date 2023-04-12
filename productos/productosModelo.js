import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    Producto: {
      type: String,
      required: true,
      trim: true,
    },
    Descripcion: {
      type: String,
      trim: true,
    },
    Precio: {
      type: Number,
      default: 0,
    },
    Foto1: {
      secure_url: String,
      public_id: String
    },
    Foto2: {
      secure_url: String,
      public_id: String
    },
  Foto3: {
      secure_url: String,
      public_id: String
    },
  Foto4: {
      secure_url: String,
      public_id: String
    }},
    {
    timestamps: true
  },
  )

export default mongoose.model("Productos", productoSchema);