import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


import consultationRoute from "./routes/consultation.route.js";


const app = express();

/* MIDDLEWARE */

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

/* ROUTES */

app.use("/api", consultationRoute);

/* SERVER */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On Port ${PORT}`
  );
});