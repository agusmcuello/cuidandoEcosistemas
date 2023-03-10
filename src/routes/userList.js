import express from "express";
const router = express.Router();
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

router.get("/users", async (req, res) => {
    try{ 
        let userList = collection(db, "users");
        const users = await getDocs(userList);
        let docs = users.docs;

        const response = docs.map((doc) => ({
            email: doc.data().email,
            name: doc.data().name,
    }))

        return res.status(200).json(("200", response))
        } catch (error){
        return res.status(500).json(("500", error));
    }
});

export default router;
