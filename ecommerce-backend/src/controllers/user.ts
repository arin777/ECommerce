import { NextFunction } from "express";
import { Request } from "express";
import { Response } from "express";
import { user } from "../models/user";
import { NewUserRequestBody } from "../types/types";
export const newUser = async (req : Request<{},{},NewUserRequestBody>,
    res:Response ,
     next:NextFunction

)=> {
    try{
   const {name,email,photo,gender,role,_id,dob} = req.body;
    await user.create({});
    res.status(200).json({
       success:true,
       message:`Welcome,${user.name}`,
    });
    } catch (error){}
};