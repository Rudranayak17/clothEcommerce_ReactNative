import {User} from "../types/types"

export interface AuthState{
    user:User|null;
    loading:boolean;
    isAuthenticated:boolean;
    error:string|null;
}