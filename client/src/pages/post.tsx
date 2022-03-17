import axios from 'axios'
import { useState } from 'react'

function Post() {
    const [userInfo, setUserInfo] = useState<any>('')
    const [post, setPost] = useState<any>({
        title: '',
        main: '',
        userId: 1
    })
    const config = {
        headers: { "Content-type": "application/json" },
        withCredentials: true
    }

    const onChange1 = (e: any) => {
        if (e.target.placeholder === 'title') {
            setPost({ ...post, title: e.target.value })
        }
        if (e.target.placeholder === 'main') {
            setPost({ ...post, main: e.target.value })
        }
    }
    const getUser = async () => {
        const user = await axios.get(`${URL}/user`, config)
        setUserInfo(user.data.data)
        console.log(user.data.data)
    }
    const getJoin = async () => {
        const user1 = await axios.get(`${URL}/join`, config)

        console.log(user1.data.data)
    }

    const submitContent = async () => {
        await axios.post(`${URL}/content`, post, config)
    }
    console.log(post)

    return (
        <div>
            <div>Post</div>
            <input placeholder="title" value={post.title} onChange={onChange1}></input>
            <input placeholder="main" value={post.main} onChange={onChange1}></input>
            <button onClick={submitContent}>signup!</button>
            <br />
            <button onClick={getUser}>userget</button>
            <button onClick={getJoin}>contentjoin</button>
            <div>{userInfo.nickname}</div>
            <div>{userInfo.id}</div>
            <div>{userInfo.password}</div>
            <div>{userInfo.email}</div>
        </div>
    )
}

export default Post