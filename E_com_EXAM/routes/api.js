import express from "express";
const router = express.Router();
import * as UserController from "../app/controllers/UserController.js";
import * as UserTaskController from "../app/controllers/UserTaskController.js";
import AuthVerifyMiddleware from "../app/middlewares/AuthVerifyMiddleware.js";


// Users
router.post("/Registration",UserController.Registration)
router.post("/Login",UserController.Login)


// Task
router.post("/ProfileUpdate",AuthVerifyMiddleware,UserTaskController.ProfileUpdate)
router.get('/SingleReadProfile',AuthVerifyMiddleware,UserTaskController.SingleReadProfile)
router.get('/AllUserReadProfile',UserTaskController.AllUserReadProfile);
router.get("/Delete",AuthVerifyMiddleware,UserTaskController.Delete)

export default router;

