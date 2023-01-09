import mongoose, { Schema, model, Model, Types } from "mongoose";
import { Datos } from '../interface/interface'


const ItemSchema = new mongoose.Schema<Datos>({
    Name: {
        type: String,
        required: true
    },
    DNI: {
        type: String,
        required: true
    },
    Razon: {
        type: String,
        required: true
    },
    DNI2: {
        type: String,
        required: true
    },
   
    Ciudad: {
        type: String,
        required: true
    },
    Dia: {
        type: String,
        required: true
    },
    Mes: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    }
})

// Primer argumento va a ser el nombnre de la tabla en la base de datos
const ItemModel = model('datos', ItemSchema)
export default ItemModel