import { Usuario } from "../models/Usuario"

export function omitPassword(user:Usuario){
    const {password, ...rest} = user
    return rest
}