import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    Producto: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    Descripcion: {
      type: String,
      trim: true,
    },
    Precio: {
      type: Number,
      default: 0,
    },
    Foto: {
      secure_url: String,
      public_id: String
    }},
    {
    timestamps: true
  },
  )

export default mongoose.model("Productos", productoSchema);