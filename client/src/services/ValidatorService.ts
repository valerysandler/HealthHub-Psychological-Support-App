import axios from "axios";

class ValidatorService {

    public async validate(value: string): Promise<string> {
        try {
            const response = await axios.post("http://localhost:3001/api/validate", value);
            console.log('response', response);
            return response.data.message;
        } catch (error) {
            console.log(error);
        }
    }
}

export const validateService = new ValidatorService();