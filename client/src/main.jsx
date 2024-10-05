import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Toaster } from "@/components/ui/sonner";
import {Provider} from 'react-redux';
import Store from './store/Store.js';
import SocketProvider from './context/SocketContext.jsx'

createRoot(document.getElementById('root')).render( 
<>
 
 <Provider store={Store}>
 <SocketProvider>
   <App/> 
   <Toaster/> 
   </SocketProvider>   
 </Provider>

</>
);
