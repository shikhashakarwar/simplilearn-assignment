import { getDBInstanceById, createConnection } from "../configs/dbConfigs";
import { database } from "../core/types";
import * as bcrypt from "bcrypt";

export const loginService = {
    login: async(req: any, res: any) => {
        const dbCon: database = await getDBInstanceById();
        if(!req.body) {
            throw new Error("body is missing");
        }
        console.log(req.body);
        
        const user = await dbCon.user.findOne({
            where: {
                email: req.body.email
            }
        });
        let isPwdVerified = await bcrypt.compare(req.body.password, user.dataValues.password);
        
        console.log(user.dataValues);
        
        if (isPwdVerified) {
            return {
                success: true,
                userGUID: user.dataValues.UserGUID
            }
        }

        return {
            error: true,
            message: "user does not exist in system"
        }
    }
}