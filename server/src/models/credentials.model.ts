import { model, Schema } from "mongoose";

export interface ICredentialsModel extends Document {
    email: string;
    password: string;
}

const credentialsSchema = new Schema<ICredentialsModel>({
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        minlength: [3, 'Email must be at least 3 characters'],
        maxlength: [50, 'Email must be at most 50 characters'],
        unique: true,
        lowercase: true,
        // match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        minlength: [7, 'Password must be at least 2 characters'],
        maxlength: [200, 'Password must be at most 50 characters'],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/, 'Invalid password'],
        select: false,
        validate: {
            validator: function (value: string) {
                return !value.toLowerCase().includes("password");
            },
            message: "Password cannot contain 'password'"
        },

    }
});

// Dont save credentials in database and not create document for them 
credentialsSchema.set('toObject', { virtuals: false });
credentialsSchema.set('toJSON', { virtuals: false });

const CredentialsModel = model<ICredentialsModel>("", credentialsSchema, "users");




export default CredentialsModel;