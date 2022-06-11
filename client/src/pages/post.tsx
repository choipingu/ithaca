import axios from 'axios'
import { useState } from 'react'
import { URL } from '../url'

function Post() {

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

    const submitPost = async () => {
        await axios.post(`${URL}/posting`, post, config)
    }

    return (
        <div>
            <div>Post</div>
            <input placeholder="name" value={post.title} onChange={onChange1}></input>
            <input placeholder="main" value={post.main} onChange={onChange1}></input>
            <button onClick={submitPost}>책등록</button>
        </div>
    )
}

export default Post