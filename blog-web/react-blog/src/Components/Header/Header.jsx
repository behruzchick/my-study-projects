import React from 'react'
import { Navbar } from 'react-bulma-components'
import { supabase } from '../../CreateClient'
import { toast } from 'react-toastify'

const Header = ({ token }) => {


  const logout = () => {
    sessionStorage.removeItem('token');
  }


  return (
    <Navbar style={{ background: "none", padding: "30px", display: "flex", justifyContent: "space-between" }}>
      <Navbar.Brand>
        <Navbar.Item>Behruz Blog</Navbar.Item>
      </Navbar.Brand>
      <Navbar style={{ background: 'none' }}>
        {
          token ?
            <>
              <Navbar.Item>
                Profile
              </Navbar.Item>
              <Navbar.Item href={`/home/thread`}>
                Threads
              </Navbar.Item>
              <Navbar.Item onClick={logout}>
                Logout
              </Navbar.Item>
            </>
            :
            <>
              <Navbar.Item href='/login'>
                Login
              </Navbar.Item>
              <Navbar.Item href='/register'>
                Register
              </Navbar.Item>
            </>

        }

      </Navbar>
    </Navbar>
  )
}

export default Header