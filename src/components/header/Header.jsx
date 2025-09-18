import React from 'react'
import { Container, Logo , LogoutBtn } from "../index";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Header() {
    const authStatus = useSelector((state)=>state.auth.status);
    const navigate = useNavigate();


    const navItems =[
        {
            name:'Home',
            slug:"/",
            active:true
        },
        {
            name:'Login',
            slug:"/login",
            active:!authStatus
        },
        {
            name:'Signup',
            slug:"/signup",
            active:!authStatus
        },
        {
            name:'Blogs',
            slug:"/all-posts",
            active:authStatus
        },
        {
            name:'Create Blog',
            slug:"/add-post",
            active:authStatus
        },
        {
            name:'Profile',
            slug:"/profile",
            active:authStatus
        },

        
    ]
  return (
    <header className='py-6 shadow bg-gray-900/20 w-full '>
        <Container>
            <nav className='flex'>
                <div className='mr-4'>
                    <Link to='/'>
                        <Logo width='80px'/>
                    </Link>
                </div>
                <ul className='flex ml-auto place-content-around gap-5'>
                    {navItems.map((item)=>(
                        item.active?(
                            <li key={item.name} >
                                <button
                                    onClick={()=> navigate(item.slug)}
                                    className='p-2 cursor-pointer hover:text-blue-400'
                                >{item.name}</button>
                            </li>
                        ) : null
                    ))}


                    {
                        authStatus && (//only if true
                            <li>
                                <LogoutBtn/>
                            </li>
                        )
                    }

                </ul>
            </nav>
        </Container>

    </header>
)
}

export default Header