import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import Auth from './pages/auth/Auth.jsx';
import Chat from './pages/chat/Chat.jsx';
import Profile from './pages/profile/Profile.jsx';
import { useSelector } from 'react-redux';
import LandingPage from './pages/home/LandingPage.jsx';

const App = () => {
     
   const PrivateRoute = ({children}) =>{
      const isAuthenticated = useSelector((state) => state?.auth?.isAuthticate);
        if(isAuthenticated){
            //  If authenticated, render the children
            return children
        } else{
            // If not authenticated, redirect to auth
            return  <Navigate to='/auth'/>
        }
   }

   const AuthRoute = ({children}) =>{
      const isAuthenticated = useSelector((state) => state?.auth?.isAuthticate);
        if(!isAuthenticated){
            // If not authenticated, render the children
            return children
        } else{
           // If authenticated, redirect to chat
           return  <Navigate to='/chat'/>
        }
   }

  return (
   <HashRouter>
   <Routes>
   <Route 
        path='/' 
        element={
             <AuthRoute>
                <LandingPage/>
             </AuthRoute>             
         }/>
     <Route 
        path='/auth' 
        element={
             <AuthRoute>
                 <Auth/>
             </AuthRoute>             
         }/>
     <Route 
        path='/chat' 
        element={
             <PrivateRoute>
                <Chat/>
             </PrivateRoute>
            
        }/>
     <Route 
        path='/profile' 
        element={
             <PrivateRoute>
                 <Profile/>
             </PrivateRoute>
           
        }/>
     <Route path='*' element={<Navigate to='/auth'/>} />
   </Routes>
 </HashRouter>
  )
}

export default App
