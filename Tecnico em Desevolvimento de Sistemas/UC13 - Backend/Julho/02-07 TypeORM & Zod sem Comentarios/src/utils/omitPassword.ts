import { User } from "../models/Usuario";

export function omitPassword(user:User){
    const {password, ...rest} = user
    return rest
}