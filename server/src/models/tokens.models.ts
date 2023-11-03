import { Document, Schema, model } from "mongoose";

export interface Token {
    userId:  Schema.Types.ObjectId;
    token: string;
    createdAt: Date;
    updatedAt: Date;
}

export const TokenSchema = new Schema<Token & Document>({
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 3600 },
    updatedAt: { type: Date, default: Date.now, expires: 3600 }

},
    { timestamps: true });

export const TokenModel = model<Token & Document>("Token", TokenSchema);