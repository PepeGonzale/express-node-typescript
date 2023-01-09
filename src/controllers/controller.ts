import { Request, Response } from "express"
import { insertData } from "../services/services"

const postItem = async ({body}: Request, res: Response) => {
    
    
    const response = await insertData(body)
    console.log(response)
    res.send(response).status(200)
}

export {postItem} 