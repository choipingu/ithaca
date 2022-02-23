import axios from "axios";
import { useState } from 'react'
import {URL} from './url'


function App() {

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
    const submit =async()=>{
       await axios.post(`${URL}/signup`,info,config)
    }
  return (
    <div>
      <input placeholder="email" value={info.email} onChange={onChange}></input>
      <input placeholder="nickname" value={info.nickname} onChange={onChange}></input>
      <input placeholder="password" value={info.password} onChange={onChange}></input>
      <button onClick={submit}>signup!</button>
    </div>
  );
}

export default App;
