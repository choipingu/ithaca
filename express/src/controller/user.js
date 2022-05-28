
const login = async (req, res) => {
    const { userId, nickname, password } = req.body;
    const data = await user.findOne({ where: { userId, password } })
    if (!data) {
        res.status(404).send('invalid user');
    } else {
        const payload = {
            id: data.id,
            userId: data.userId,
            nickname: data.nickname,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
        // const accessToken = sign(payload, process.env.ACCESS_SECRET, { expiresIn: '10m' });
        res.cookie('id', data.id);
        res.cookie('nickname', data.nickname);
        res.cookie('email', data.email);
        res.cookie('oauth', false);
        res.cookie('accessToken', accessToken);
        res.status(200).json({ data: payload, message: 'login success' });
    }
}
