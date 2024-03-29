export type User={
    sucess:boolean,
    user:{
        name:string;
        password:string;
        email:string;
        resetPasswordOTP:number|null;
        resetPasswordOTPExpiry:Date|null;
        createdAt:Date;
        updateAt:Date;
        role:string;
        avatar:string;
        _id:string
    },
    token:string
}