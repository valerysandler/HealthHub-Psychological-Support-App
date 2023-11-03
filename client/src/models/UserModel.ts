import Role from "./Role";

class UserModel {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public role!: Role;
    public birthDate!: Date;
    public country!: string;
    public city!: string;
    public address!: string;
    public phone!: string;
    public userImageUrl!: string;
    public isActive!: boolean;
    public isConfirmed!: boolean;
    public isSpecialist!: boolean;
    public createdAt!: Date;
    public updatedAt!: Date;
    public token!: string;    
}

export default UserModel;