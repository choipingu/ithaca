import {useState} from 'react'
import axios from 'axios'

function SignUp() {
    const [info,setInfo] = useState({
        email:'',
        nickname:'',
        password:''
      })
      const config = {
        headers: { "Content-type": "application/json" },
        withCredentials: true
    }
    const onChange = (e: any) => {
        if (e.target.placeholder === 'email') {
          setInfo({ ...info, email: e.target.value })
        }
        if (e.target.placeholder === 'nickname') {
          setInfo({ ...info, nickname: e.target.value })
        }
        if (e.target.placeholder === 'password') {
          setInfo({ ...info, password: e.target.value })
        }
    }
    const submitSign =async()=>{
        await axios.post(`${URL}/signup`,info,config)
     }
    return (
        <div>
            <div>SignUp</div>
            <input placeholder="email" value={info.email} onChange={onChange}></input>
            <input placeholder="nickname" value={info.nickname} onChange={onChange}></input>
            <input placeholder="password" value={info.password} onChange={onChange}></input>
            <button onClick={submitSign}>signup!</button>
        </div>

    )
}

export default SignUp