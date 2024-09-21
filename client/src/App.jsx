import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import Auth from './pages/auth/Auth.jsx';
import Chat from './pages/chat/Chat.jsx';
import Profile from './pages/profile/Profile.jsx';
import { useSelector } from 'react-redux';

const App = () => {
     
   const isAuthenticated = useSelector((state) => state?.auth?.isAuthticate);

  return (
   <HashRouter>
   <Routes>
     <Route 
        path='/auth' 
        element={
              <Auth/>
         }/>
     <Route 
        path='/chat' 
        element={
             <Chat/>
        }/>
     <Route 
        path='/profile' 
        element={
            <Profile/>
        }/>
     <Route path='*' element={<Navigate to='/auth' />} />
   </Routes>
 </HashRouter>
  )
}

export default App
