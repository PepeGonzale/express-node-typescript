import { Datos } from "../interface/interface"
import ItemModel from "../models/model"

const insertData = async (datas: Datos) => {
    // let {Name, DNI, Razon, DNI2, Auxilio, Ingreso, Asistencia, Ciudad, Dia, Mes } = req.body
    const responseInsert = await ItemModel.create(datas)
    
    return responseInsert
}
export  {insertData}