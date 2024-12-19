import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email:{type:String,unique:true,required:true,lowercase:true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        phoneNumber: {type: String, required: true,unique: true},
        password: {type: String, required: true},
        nidNumber: { type: String, unique: true, required: true },
        bloodGroup: {type: String, required: true},
        otp:{type: String, default: 0},
    },
    { timestamps: true , versionKey: false}
)

const UsersModel = mongoose.model("users", userSchema);
export default UsersModel