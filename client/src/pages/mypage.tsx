import { URL } from '../url'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../components/loader'
import styled from 'styled-components'

const Headers = styled.div`
    font-size: 2rem;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    border-radius: 10px;
    border: 2px solid #F1F1F1;
    width: 1100px;
    justify-content: center;
    align-items: center;
    height: 500px;
    margin: auto;
`
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
        <Container>
            <Headers>mypage</Headers>
            <div>nickname : {userInfo.nickname}</div>
            <div>userId : {userInfo.id}</div>
            <div>Password : {userInfo.password}</div>
            <div>email : {userInfo.email}</div>
        </Container>

    )
}

export default Mypage