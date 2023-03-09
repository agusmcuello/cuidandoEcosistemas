import express from "express";
const router = express.Router();
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";

router.post("/singup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const docRef = await addDoc(collection(db, "users"), {
        name,
        email,
        password
      });
    res.send(docRef);
  } catch (e) {
    console.error("Error adding user: ", e);
  }
});


export default router;
