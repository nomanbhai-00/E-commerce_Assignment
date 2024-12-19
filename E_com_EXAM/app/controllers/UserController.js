import mongoose from "mongoose";
import {TokenEncode} from "../utility/tokenUtility.js";
import UsersModel from "../model/UserModel.js";
import UserModel from "../model/UserModel.js";

//Registration
export const Registration=async(req,res)=>{
    try {
        let reqBody=req.body;
        await UsersModel.create(reqBody)
        return res.json({status:"success","Message":"User registered successfully"})
    }catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}


// Login
export const Login=async(req,res)=>{

    try {
        let reqBody=req.body;
        let data=await UsersModel.findOne(reqBody)

        if(data===null){
            return res.json({status:"fail","Message":"User not found"})
        }
        else {
            let token=TokenEncode(data['email'],data['_id'])
            return res.json({status:"success",Token:token,"Message":"User Login successfully"})
        }


    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }

}






