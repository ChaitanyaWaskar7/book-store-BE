import dotenv from "dotenv";
dotenv.config();

export const PORT = 5555;
export const mongoDBURL = process.env.mongoDBURL;

console.log("mongoDBURL:", mongoDBURL);
