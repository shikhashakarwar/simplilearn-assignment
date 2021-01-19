import { getDBInstanceById, createConnection } from "../configs/dbConfigs";
import { database } from "../core/types";
import { Sequelize } from "sequelize";
import {userTable} from "../models/Users";
import { signToken } from "./authService";
import * as bcrypt from "bcrypt";


export const signupService = {
    saveData: async(req: any, res: any) => {
        const dbCon: database = await getDBInstanceById();
        const getQueryInterface = await (await createConnection()).getQueryInterface();
        await getQueryInterface.createTable('Users', userTable);
        
        if(!req.body) {
            throw new Error("body is missing");
        }
        const user = await dbCon.user.findOne({
            where: {
                email: req.body.email
            }
        });

        if(!user) {
            // const jwtToken = signToken(req.body);
            let pwdHash = await bcrypt.hash(req.body.password, 10);
            console.log(pwdHash);
            
            const payload = {
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                password: pwdHash
            }
            const userCreated = await dbCon.user.create(payload);
            return {
                userCreated: true
            }
        }

        return {
            message: "user already exist in system",
            error: true
        }
    }
}