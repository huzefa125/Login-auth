import { Router } from "express";
import { registerUser,loginUser,LogoutUser } from "../controllers/auth.controller.js";
import { authMiddleware,adminMiddleware} from "../middleware/authMiddleware.js";
import { adminRegister,adminLogin,adminLogout } from "../controllers/auth.controller.js";

const router = Router();

router.post("/user/register", registerUser);
router.post("/user/login",loginUser)
router.post("/user/logout",LogoutUser)
router.get("/user/profile",authMiddleware,(req,res)=>{
    res.json({user:req.user})
})

router.post("/admin/register",adminRegister);
router.post("/admin/login",adminLogin);
router.post("/admin/logout",adminLogout);


export default router;