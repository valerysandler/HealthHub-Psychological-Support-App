import { model, Schema } from "mongoose";

export interface ICategory {
    id?: number;
    name: string;
    description: string;
}

const CategorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

export const CategoryModel = model<ICategory>("Category", CategorySchema);