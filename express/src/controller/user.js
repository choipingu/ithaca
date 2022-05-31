import user from "../../models/user";
import { signToken } from "../middleware/signToken";
const signup = async (req, res) => {
    const { userId, nickname, password } = req.body;
    const userData = await user.findOne({ where: { userId } })
    const nickNameData = await user.findOne({ where: { nickname } })
    if (userData) {
        res.status(409).json({ message: 'Account already exists' })
    }
    else if (nickNameData) {
        res.status(409).json({ message: 'nickname already exists' })
    }
    else {
        await user.findOrCreate({ where: { userId, nickname, password } })
            .then(([result, created]) => {
                if (created) {
                    res.status(201).json({ message: 'create account' })
                }
                else {
                    res.status(409).json({ message: 'exist userId' })
                }
            }).catch((err) => console.log(err))
    }
}

const login = async (req, res) => {
    const { userId, password } = req.body;
    const userIdFind = await user.findOne({ where: { userId } })
    const passwordFind = await user.findOne({ where: { userId, password } })
    if (!userIdFind) {
        res.status(404).json({ message: 'invaild user' });
    }
    else if (!passwordFind) {
        res.status(404).json({ message: 'incorrect password' });
    }
    else {
        const payload = {
            id: userIdFind.id,
            userId: userIdFind.userId,
            nickname: userIdFind.nickname,
            createdAt: userIdFind.createdAt,
            updatedAt: userIdFind.updatedAt
        };
        const accessToken = await signToken(payload)
        res.cookie('accessToken', accessToken);
        res.status(200).json({ data: payload, message: 'login success' });
    }
}
const logout = async (req, res) => {
    return res.clearCookie('accessToken').status(205).json({ message: 'Logout Success' })
}

export default { login, logout, signup }