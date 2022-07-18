import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { URL } from '../url';
import Loader from '../components/loader'


function MyPage() {
  const [loading, setLoading] = useState(false);
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  async function fetchData() {
    try {
      setLoading(true)
      const res = await axios.get(`${URL}/user/getuser`, { withCredentials: true })
      const userInfo = res.data.data
      console.log(res)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <Loader type="spin" color="#999999" />

  return (
    <div>
      마이 페이지 입니다.
    </div>
  );
}

export default MyPage;
