import { IUserModel, UserModel } from "../models/user.model";
// Get user by params (email, phone)
const getUserByParams = async (params: {}): Promise<IUserModel | null> => { // params: { email: string, phone: string }
  const user = await UserModel.findOne(params).exec();
  return user;
}

const getAllUsersFromDB = async (): Promise<IUserModel[] | void> => {
  try {
    const users = await UserModel.find().exec();
    console.log(users);
    return users;

  } catch (error: any) {
    console.log(error.message);
  }
}

const save = async (user: IUserModel): Promise<IUserModel> => {
  const newUser = await user.save();
  return newUser;
}

const update = async (user: IUserModel): Promise<IUserModel> => {
  const updatedUser = await user.save();
  return updatedUser;
}

const deleteUser = async (id: string): Promise<IUserModel> => {
  const deletedUser = await UserModel.findByIdAndDelete(id).exec();
  return deletedUser;
}

export default {
  getUserByParams,
  getAllUsersFromDB,
  save
};


