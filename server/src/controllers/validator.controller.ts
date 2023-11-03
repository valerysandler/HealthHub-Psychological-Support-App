import { Request, Response, NextFunction } from "express";
import { validateService } from "../services/validator.service";

const validator = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { username, email, phoneNumber } = request.body;
    if(username) {
      const usernameIsAvailable = await validateService.validateUsername(username);
      response.status(200).send({ usernameIsAvailable });
      next();
      return;
    } else if(email) {
      const emailIsAvailable = await validateService.validateEmail(email);
      response.status(200).send({ emailIsAvailable });
      next();
      return;
    } else if(phoneNumber) {
      const phoneNumberIsAvailable = await validateService.validatePhoneNumber(phoneNumber);
      response.status(200).send({ phoneNumberIsAvailable });
      next();
      return;
    }
    
  } catch (error: any) {
    response.status(500).send({ message: error.message });
    next();
  };
};

export const validatorController = {
  validator
};