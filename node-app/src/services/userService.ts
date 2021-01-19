import { getDBInstanceById } from "../configs/dbConfigs";
import { database } from "../core/types";

export const userService = {
    getData: async(req: any, res: any) => {
        const dbCon: database = await getDBInstanceById();
        console.log(req.params);
        
        if(!req.params) {
            throw new Error("userGUID is missing");
        }
        const user = await dbCon.user.findOne({
            where: {
                UserGUID: req.params.userGUID
            }
        });

        if(!user) {
            return {
                error: true,
                message: "User not found with given GUID"
            }
        }

        const payload = {
            fname: user.dataValues.fname,
            lname: user.dataValues.lname,
            email: user.dataValues.email
        }
        return {
            success: true,
            data: payload
        }
    }
}