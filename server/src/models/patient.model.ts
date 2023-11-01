import mongoose, { Document, Schema, Model } from 'mongoose';
import { BaseUserModel } from './user.model';

// Create a patient model that extends the base user model
export interface PatientModel extends BaseUserModel {
  phone: string;
  address: string;
  medicalHistory: string;
  appointments: mongoose.Types.ObjectId[];
  favoriteSpecialists: mongoose.Types.ObjectId[];
  reviews: string[];
}

// Define the patient schema
const patientSchema = new Schema({
  phone: String,
  address: String,
  medicalHistory: String,
  appointments: [Schema.Types.ObjectId],
  favoriteSpecialists: [Schema.Types.ObjectId],
  reviews: [String],
});



export const PatientModel: Model<PatientModel> = BaseUserModel.discriminator('PatientModel', patientSchema, 'patients');