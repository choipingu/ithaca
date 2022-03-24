import { URL } from '../url'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../components/loader'


function Mypage() {
    const [userInfo, setUserInfo] = useState<any>('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData()
        return () => {
            setLoading(false)
        }
    }, [])

    async function fetchData() {
        try {
            const user = await axios.get(`${URL}/getuser`, config)
            setUserInfo(user.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const config = {
        headers: { "Content-type": "application/json" },
        withCredentials: true
    }

    if (loading) return <Loader type="spin" color="#999999" />

    return (
        <>
            <div>mypage</div>
            <div>{userInfo.nickname}</div>
            <div>{userInfo.id}</div>
            <div>{userInfo.password}</div>
            <div>{userInfo.email}</div>
        </>

    )
}

export default Mypage