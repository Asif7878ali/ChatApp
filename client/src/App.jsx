import {BrowserRouter, Navigate, Route , Routes} from 'react-router-dom';
import Auth from './pages/auth/index.jsx';
import Chat from './pages/chat/index.jsx';
import Profile from './pages/profile/index.jsx';

const App = () => {
  return (
      <BrowserRouter>
         <Routes>
            <Route path='/auth' element={<Auth/>} />
            <Route path='*' element={<Navigate to='/auth'/>}/>
            <Route path='/chat' element={<Chat/>} />
            <Route path='/profile' element={<Profile/>} />
         </Routes>
      </BrowserRouter>
  )
}

export default App