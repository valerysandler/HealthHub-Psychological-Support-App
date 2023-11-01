import { BaseUserModel } from "../models/user.model";
// Get user by params (email, phone)
const getUserByParams = async (params: {}): Promise<BaseUserModel | null> => { // params: { email: string, phone: string }
  const user = await BaseUserModel.findOne(params).exec();
  if (!user) {
    return null;
  }
  return user;
}

const getAllUsersFromDB = async (): Promise<BaseUserModel[] | void> => {
  try {
    const users = await BaseUserModel.find().exec();
    console.log(users);
    return users;

  } catch (error: any) {
    console.log(error.message);
  }
}

const saveUser = async (user: BaseUserModel): Promise<BaseUserModel> => {
  const newUser = await user.save();
  return newUser;
}

const updatedUser = async (user: BaseUserModel): Promise<BaseUserModel> => {
  const updatedUser = await user.save();
  return updatedUser;
}

const deleteUser = async (id: string): Promise<BaseUserModel> => {
  const deletedUser = await BaseUserModel.findByIdAndDelete(id).exec();
  return deletedUser;
}



export default {
  getUserByParams,
  getAllUsersFromDB,
  saveUser,
  updatedUser,
  deleteUser
};


