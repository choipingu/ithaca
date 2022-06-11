import book from "../../models/book";
import { signToken } from "../middleware/signToken";
import { verifyToken } from "../middleware/verifyToken";

const regist = async (req, res) => {
    const { name, author, rental, publicationDate } = req.body;
    const data = await user.findOne({ where: { name, author } })
    if (!data) {
        await book.create({ name, author, rental, publicationDate })
    }
}
export default { regist }