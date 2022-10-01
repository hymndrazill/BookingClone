import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/roomController.js"
import { verifyUserIsAdmin } from "../utils/verifyToken.js"

const router = express.Router()

// CREATE
router.post("/:hotelid", verifyUserIsAdmin, createRoom)
// UPDATE
router.put("/:id" ,verifyUserIsAdmin,updateRoom)

router.put("/availability/:id" ,updateRoomAvailability)

// DELETE
router.delete("/:id/:hotelid" ,verifyUserIsAdmin, deleteRoom)
// GET
router.get("/:id", getRoom)
// GET ALL
router.get("/", getRooms)

export default router