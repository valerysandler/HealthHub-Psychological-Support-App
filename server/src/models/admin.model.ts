import { Schema, Document, model } from "mongoose";

export interface IAdmin extends Document {
    email: string;
    password: string;
    name: string;
    role: string;
}

const AdminSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: String,
    name: String,
    role: String,
});

const Admin = model<IAdmin>("Admin", AdminSchema, "admins");

export default Admin;