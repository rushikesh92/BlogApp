
import './App.css'
import conf from './config/conf'
import { Header, Footer,Login,Signup } from './components'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login as storeLogin, logout as storeLogout} from './store/authSlice'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(storeLogin({ userData }));
        } else {
          dispatch(storeLogout());
        }

      })
      .finally(()=> setLoading(false)  )

  }
    , [])

  return  loading ? (
    null
  ) : (
    <div className='min-h-screen flex flex-wrap   bg-slate-800 text-white '>
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
