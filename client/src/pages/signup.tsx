import { useState } from 'react'
import axios from 'axios'
import { URL } from '../url'

function SignUp() {
  const [info, setInfo] = useState({
    userid: '',
    nickname: '',
    password: ''
  })
  const config = {
    headers: { "Content-type": "application/json" },
    withCredentials: true
  }
  const onChange = (e: any) => {
    if (e.target.placeholder === 'userid') {
      setInfo({ ...info, userid: e.target.value })
    }
    if (e.target.placeholder === 'nickname') {
      setInfo({ ...info, nickname: e.target.value })
    }
    if (e.target.placeholder === 'password') {
      setInfo({ ...info, password: e.target.value })
    }
  }
  const submitSign = async () => {
    console.log(info)
    await axios.post(`${URL}/user/signup`, info, config)
  }
  return (
    <div>
      <div>SignUp</div>
      <input placeholder="userid" value={info.userid} onChange={onChange}></input>
      <input placeholder="nickname" type='text' value={info.nickname} onChange={onChange}></input>
      <input placeholder="password" type='password' value={info.password} onChange={onChange}></input>
      <button onClick={submitSign}>signup!</button>
    </div>

  )
}

export default SignUp