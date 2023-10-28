import { model, Schema, Document } from 'mongoose';
import validator from 'validator';
import { Role } from './role';

export interface IUserModel extends Document {
    role: Role;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    birthDate: Date;
    country: string;
    city: string;
    address: string;
    phone: string;
    isActive: boolean;
    isConfirmed: boolean;
    isSpecialist: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUserModel>({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        minlength: [3, 'First name must be at least 3 characters'],
        maxlength: [50, 'First name must be at most 50 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        minlength: [3, 'Last name must be at least 3 characters'],
        maxlength: [50, 'Last name must be at most 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        minlength: [3, 'Email must be at least 3 characters'],
        maxlength: [50, 'Email must be at most 50 characters'],
        unique: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: 'Email is invalid'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        minlength: [7, 'Password must be at least 2 characters'],
        maxlength: [200, 'Password must be at most 50 characters'],
        validate: {
            validator: (value: string) => validator.isStrongPassword(value),
            message: 'Password is invalid'
        }
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(Role),
        default: Role.CLIENT
    },
    birthDate: {
        type: Date,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    city: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    address: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    isConfirmed: {
        type: Boolean,
        required: true,
        default: false
    },
    isSpecialist: {
        type: Boolean,
        required: [true, 'isSpecialist is required'],
        default: false
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password;
        }
    }
});


export const UserModel = model<IUserModel>('users', userSchema);