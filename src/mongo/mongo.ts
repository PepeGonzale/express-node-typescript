import 'dotenv/config'
import {connect } from 'mongoose'
const MONGODB_URI=process.env.MONGODB_URI
async function dbConnect(): Promise<void> {
    await connect(<string>MONGODB_URI)
}

export default dbConnect
