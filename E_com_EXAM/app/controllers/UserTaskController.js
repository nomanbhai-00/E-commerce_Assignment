import mongoose from "mongoose";
import {TokenEncode} from "../utility/tokenUtility.js";

import UsersModel from "../model/UserModel.js";


export const ProfileUpdate=async(req,res)=>{
    try {
        let reqBody=req.body;
        let user_id=req.headers['user_id'];
        await UsersModel.updateOne({"_id":user_id},reqBody)
        return res.json({status:"success","Message":"User Update successfully"})
    } catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }

}



export const SingleReadProfile = async(req,res)=>{
    try{
        console.log("a")
        let user_id = req.headers['user_id'];
        console.log(user_id)
        let data = await UsersModel.findOne({_id:user_id});
        return res.json({status:"success", message: "Profile Read successfully", data:data})
    }catch (e) {
        return res.json({status:"failed","Message":e.toString()})
    }
}


export const AllUserReadProfile = async(req,res)=>{
    try{
        let result = await UsersModel.find({});
        return res.json({status:"success", message: " AllUser Profile Read successfully", data:result})
    }catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}

export const Delete=async(req,res)=>{
    try{
        let user_id = req.headers['user_id'];
        let data = await UsersModel.findByIdAndDelete({_id:user_id});
        return res.json({status:"success", message: "Profile Delete successfully", data:data})
    }catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}
