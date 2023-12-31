import { connect } from "mongoose";
// const uri = process.env.MONGO_URI!;
const uri = process.env.MONGO_URI!; // Get the MongoDB URI from the environment variables
console.log('uri', uri);

async function connectToMongoDB(): Promise<void> {
    try {
        const db = await connect(uri); // Connect to MongoDB
        console.log('Connected to MongoDB', db.connections[0].db.databaseName);
    }
    catch (error: any) {
        console.error('Error connecting to MongoDB', error);
    }
}

export default {
    connectToMongoDB
};