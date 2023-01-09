import Router from 'express'
import { postItem } from '../controllers/controller';
// import { postItem } from '../controllers/index.info';
const router = Router();

router.post("/file", postItem)
router.get("/file", (req, res) => {
    res.send("Bienvenido al puerto 3000").status(200)
});

export default router