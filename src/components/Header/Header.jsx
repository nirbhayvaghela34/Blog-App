import { Link, useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth.js';
import { Container, Logo, LogoutBtn } from '../index'
import { useSelector } from 'react-redux';

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  return (
    <header>
      <header className='py-3 shadow bg-gray-500'>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'>
                <Logo width='70px' />

              </Link>
            </div>
            <ul className='flex ml-auto gap-3'>
              {
                navItems.map((item) => (
                  item.active ? (
                  <li key={item.name} className='py-1'>
                    <button onClick={() => navigate(item.slug)}>{item.name}</button>
                  </li>) : null
                ))
              }
              {authStatus && (
                <li>
                  <LogoutBtn/>
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>
    </header>
  )
}
