import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

if(!secret){
    throw new Error("JWT_Secret não recebido | Não Definido!")
}

const jwtSecret: string = secret;

export function generateTopken(payload:object){
    return jwt.sign(payload,jwtSecret,{
        expiresIn: process.env.JWT_SECRET || "1d",
    })
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, jwtSecret);
  } catch {
    return null;
  }
}