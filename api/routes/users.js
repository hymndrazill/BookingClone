import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js"
import { verifyToken, verifyUser, verifyUserIsAdmin } from "../utils/verifyToken.js"

const router = express.Router()


// check if token is valid or non existent

//! auth middlewares

// router.get("/checkauthentication", verifyToken, (req,res,next) => {
//     res.send("Hello user, you're authenticated")
// })

// // check if the user is the one who owns the account/ can delete it
// router.get("/checkuser/:id", verifyUser, (req,res,next) => {
//     res.send("Hello user, you're authenticated and could delete your account")
// })

// // check is the user is the admin.
// router.get("/checkadmin/:id", verifyUserIsAdmin, (req,res,next) => {
//     res.send("Hello admin, you are logged in and can delete anything. ")
// })

// UPDATE
router.put("/:id",verifyUser ,updateUser)
// DELETE
router.delete("/:id", verifyUser, deleteUser)
// GET
router.get("/:id", verifyUser, getUser)
// GET ALL
router.get("/",verifyUserIsAdmin, getUsers)

export default router