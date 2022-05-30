import { signToken } from "../middleware/signToken";
const login = async (req, res) => {
    const { userId, password } = req.body;
    const userIdFind = await user.findOne({ where: { userId } })
    const passwordFind = await user.findOne({ where: { userId, password } })
    if (!userIdFind) {
        res.status(404).send('invaild user');
    }
    else if (!passwordFind) {
        res.status(404).send('incorrect password');
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
export default { login }