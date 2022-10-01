import express from "express"
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotelController.js"
import Hotel from "../models/Hotel.js"
import { verifyUserIsAdmin } from "../utils/verifyToken.js"

const router = express.Router()

// CREATE
router.post("/", verifyUserIsAdmin, createHotel)
// UPDATE
router.put("/:id" ,verifyUserIsAdmin,updateHotel)
// DELETE
router.delete("/:id" ,verifyUserIsAdmin, deleteHotel)
// GET
router.get("/find/:id", getHotel)

// GET ALL
router.get("/", getHotels)
// count by city
router.get("/countByCity", countByCity)
// count by type
router.get("/countByType", countByType)

// get hotel rooms
router.get("/room/:id", getHotelRooms)


export default router