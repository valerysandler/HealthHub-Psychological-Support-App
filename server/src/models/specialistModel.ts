import mongoose, { Document, Schema, Model } from 'mongoose';
import { BaseUserModel } from './user.model';


export interface ISpecialistModel extends BaseUserModel {
    specialization: string;
    experience: number;
    license: string;
    education: string;
    description: string;
    photo: string;
    rating: number;
}

// Define the specialist schema
const specialistSchema = new Schema({
    specialization: String,
    experience: Number,
    license: String,
    education: String,
    description: String,
    photo: String,
    rating: Number,
});

export const SpecialistModel: Model<ISpecialistModel> = BaseUserModel.discriminator('SpecialistModel', specialistSchema, 'specialists');