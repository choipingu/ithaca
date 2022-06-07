import user from "../../models/user";
import { signToken } from "../middleware/signToken";
import { verifyToken } from "../middleware/verifyToken";
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
const edit = async (req, res) => {
    const { nickname, password } = req.body;
    const verify = await verifyToken(req, res)

    if (!verify) return res.status(403).json({ message: 'Invalid Accesstoken' })

    const userInfo = await user.findOne({
        where: { id: verify.userInfo.id }
    })

    userInfo.nickname = nickname || userInfo.nickname;
    userInfo.password = password || userInfo.password;


    return res.status(200).json({ data: userInfo })
};
const check = async (req, res) => {
    const { userId, nickname, password } = req.body;

    if (userId) {
        const userInfo = await user.findOne({ where: userId });
        if (userInfo) {
            return res.status(200).json({ message: 'Account already exisits' })
        }
        return res.status(200).json({ message: 'userId available' })
    }

    if (password) {
        const verify = await verifyToken(req, res);
        if (!verify) return res.status(200).json({ message: 'Invalid Accesstoken' })

        const userInfo = await user.findOne({ where: verify.userInfo.userId });

        if (userInfo.password === password) {
            return res.status(200).json({ message: 'password correct!' });
        } else {
            return res.status(200).json({ message: 'incorrect password' })
        }
    }

    if (nickname) {
        const userInfo = await user.findOne({ nickname: nickname });
        if (userInfo) {
            return res.status(200).json({ message: 'nickname already exisits' })
        }
        return res.status(200).json({ message: 'nickname available' })
    }

    return res.status(404).json({ message: 'Bad Request' })
};
const deleteUser = async (req, res) => {
    console.log(req.headers)
    const verify = await verifyToken(req, res);

    if (!verify) return res.status(403).json({ message: 'Invalid Accesstoken' })

    const targetUser = await user.findOne(verify.userInfo.id);

    targetUser.nickname = '';
    targetUser.email = '';
    targetUser.password = '';
    return res
        .clearCookie('accessToken')
        .status(200)
        .json({ message: 'Deleted' })
};
const getUser = async (req, res) => {
    const verify = await verifyToken(req, res)

    if (verify) {
        const userInfo = await user.findOne({
            where: { id: verify.userInfo.id }
        })

        return res.status(201).json({ data: { ...userInfo, content: userContent } })
    } else {
        return res.status(400).json({ message: 'Invalid Accesstoken' })
    }
}
const checkInfo = async (req, res) => {
    const { userId, nickname, password } = req.body;

    if (userId) {
        const userInfo = await userRepository.findOne({ email: email });
        if (userInfo) {
            return res.status(200).json({ message: 'Account already exisits' })
        }
        return res.status(200).json({ message: 'email available' })
    }

    if (password) {
        const verify = await verifyToken(req, res);
        if (!verify) return res.status(200).json({ message: 'Invalid Accesstoken' })

        const userInfo = await user.findOne({ email: verify.userInfo.email });

        if (userInfo.password === password) {
            return res.status(200).json({ message: 'password correct!' });
        } else {
            return res.status(200).json({ message: 'incorrect password' })
        }
    }

    if (nickname) {
        const userInfo = await user.findOne({ nickname: nickname });
        if (userInfo) {
            return res.status(200).json({ message: 'nickname already exisits' })
        }
        return res.status(200).json({ message: 'nickname available' })
    }

    return res.status(404).json({ message: 'Bad Request' })
};
export default { login, logout, signup, edit, deleteUser, getUser, checkInfo }