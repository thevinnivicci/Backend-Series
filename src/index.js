import connectDB from "./DB/index.js";
import dotenv from "dotenv"
import { app } from "./app.js"

dotenv.config()

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 9000, () => {
            console.log(`⚙️ Server is running at port :${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MongoDB Connection failed:", err);
    })