import { signupService } from "../services/signup";

export const saveSignupData = async(req: any, res: any) => {
    
    const response = await signupService.saveData(req, res);
    if( response && response.message) {
        return res.status(400).send(response);    
    }
    return res.send(response);
}