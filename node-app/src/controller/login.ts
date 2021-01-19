import { loginService } from "../services/login";

export const loginData = async(req: any, res: any) => {
    
    const response = await loginService.login(req, res);
    if (response && response.error) {
        return res.status(400).send(response);
    }
    return res.send(response);
}