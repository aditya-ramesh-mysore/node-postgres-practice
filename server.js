import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json({"limit": "50mb"}));
app.use(express.json());
app.use(cors());

app.listen(8000, () => {
    console.log("Server started...");
});