import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

interface Payload{
    id:number,
    email: string
}

dotenv.config()

const {JWT_Secret,JWT_EXPIRES_IN} = process.env

export function generateToken(payload:Payload){
    if(!JWT_Secret){
      throw new Error("JWT Ausente!")
    }
    return jwt.sign(payload,JWT_Secret,{
        expiresIn: Number(JWT_EXPIRES_IN)
    })
}

export function verifyToken(token:string){
    try{
        return jwt.verify(token,JWT_Secret!)
    }catch(erro){
         return null
    }
}



