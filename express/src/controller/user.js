
const login = async (req, res) => {
    const { userId, nickname, password } = req.body;
    const data = await user.findOne({ where: { userId, password } })


}
