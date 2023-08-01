import React from 'react'
import { Box, Head, Menu } from './style'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Head>
      <Box>
        <Link to="/" className='Logo'>EMERGENCY & SOS</Link>
        <Menu>
          <Link to="#" className='Team'>팀원소개</Link>
          <button className='Login'>로그인</button>
        </Menu>
      </Box>
    </Head>
  );
}

export default Header