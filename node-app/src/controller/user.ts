import { userService } from "../services/userService";

export const userData = async(req: any, res: any) => {
    
    const response = await userService.getData(req, res);
    if( response && response.message) {
        return res.status(400).send(response);    
    }
    return res.send(response);
}