
import './App.css'
import conf from './config/conf'
import { Header, Footer,Login,Signup } from './components'
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import authService from "./appwrite/auth"
import { login as storeLogin, logout as storeLogout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import { storePosts } from './store/postSlice';
import appwriteService from './appwrite/config'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const authStatus = useSelector((state)=>state.auth.status);
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
        // console.log("Fetched userData:", userData); 
        if (userData) {

          dispatch(storeLogin(userData));
        } else {
          dispatch(storeLogout());
        }

      })
      .finally(()=> setLoading(false)  )

  }
    , [])

        
    //store posts in global redux store
    useEffect(() => {
        if (authStatus) {
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    dispatch(storePosts(posts.documents))
                }
            })
        }
        else {
            dispatch(storePosts([]))
        }
    }, [authStatus])

  return  loading ? (
    null
  ) : (
    <div className='min-h-screen flex flex-wrap   bg-gradient-to-br from-black  to-blue-950 text-white '>
      <div className='w-full flex flex-col '>
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  )


}

export default App
