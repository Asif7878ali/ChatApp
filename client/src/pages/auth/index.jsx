import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import axios from "axios";

const Auth = () => {
      
       const[firstname, setFirstname] = useState('');
       const[lastname, setLastname] = useState('');
       const [email , setEmail] = useState('');
       const [password , setPassword] = useState('');
       //validation
       function validationsignup() {
        switch (true) {
          case !firstname.length:
            toast.error('Firstname is required');
            return false;

          case !lastname.length:
              toast.error('Lastname is required');
              return false;  
      
          case !email.length:
            toast.error('Email is required');
            return false;
      
          case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email):
            toast.error('Please enter a valid email');
            return false;
      
          case !password.length:
            toast.error('Password is required');
            return false;
      
          default:
            return true;
        }
      }

      function validationlogin() {
        switch (true) {     
          case !email.length:
            toast.error('Email is required');
            return false;
      
          case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email):
            toast.error('Please enter a valid email');
            return false;
      
          case !password.length:
            toast.error('Password is required');
            return false;
      
          default:
            return true;
        }
      }
           //Handle Auth Request
       const Logfuc = async (event) =>{
        event.preventDefault();
        if(!validationlogin()){
          return
          }
            const data = {
               email: email,
               password: password
            }
          console.log(data); 
          try {
            const server = import.meta.env.VITE_SERVER_URL;
            const Url = `${server}/api/auth/login`;
            const result = await axios.post(Url, data);
            console.log(result);
            let msg = result.data.msg;
            toast.success(msg);
           } catch (error) {
            let msg = error.response.data.msg;
            console.warn("Sign in errror:", error);
            toast.error(msg);
           }
             // Reset form fields
          setEmail('');
          setPassword('');
      }

       const Signfuc = async (event) =>{
        event.preventDefault();
        if(!validationsignup()){
            return
        }
        const formdata = {
          firstname: firstname,
          lastname: lastname,  
          email: email,
          password: password
       }
         console.log(formdata);  
         //api call
         try {
          const server = import.meta.env.VITE_SERVER_URL;
          const Url = `${server}/api/auth/signup`;
          const result = await axios.post(Url, formdata);
          console.log(result);
          let msg = result.data.msg;
          toast.success(msg);
         } catch (error) {
          let msg = error.response.data.msg;
          console.warn("Sign in errror:", error);
          toast.error(msg);
         }
           // Reset form fields
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
       }
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='h-[80vh] bg-white bottom-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2'>
         <div className='flex flex-col gap-10 items-center justify-center'>
            <div className='flex items-center justify-center flex-col'>
               <div className='flex items-center justify-center'>
                <h1 className='text-5xl font-bold md:text-6xl'>Welcome</h1>
               </div>
               <p className='font-medium text-center'>fill the details to get started with the Chat-App</p>
            </div>
            <div className='flex items-center justify-center w-full'>
              <Tabs className='w-3/4' defaultValue='login'>
                <TabsList className='bg-transparent rounded-none w-full'>
                  <TabsTrigger className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300' value='login'>Login</TabsTrigger>
                  <TabsTrigger className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300' value='signup'>Signup</TabsTrigger>
                </TabsList>
                <TabsContent className='flex flex-col gap-5 mt-10' value='login'>
                   {/* Email */}
                   <form onSubmit={Logfuc} className='flex flex-col gap-5'>
                  <Input placeholder='Enter E-mail' type='email' value={email} onChange={(event) => setEmail(event.target.value)} className='rounded-full p-6' autoComplete=''/>
                  {/* Password */}
                  <Input placeholder='*******' type='password' value={password}onChange={(event) => setPassword(event.target.value)}  className='rounded-full p-6' autoComplete=''/>
                  <Button className='rounded-full p-5 bg-black text-white font-bold hover:bg-slate-950' type='submit'>Login</Button>
                  </form>
                </TabsContent>
               
                <TabsContent className='flex flex-col gap-5' value='signup'>
                        {/* Firstname */}
                  <form onSubmit={Signfuc} className='flex flex-col gap-5'>     
                    <Input placeholder='FirstName' type='text' value={firstname} onChange={(event) => setFirstname(event.target.value)} className='rounded-full p-6' autoComplete=''/>
                         {/* Lastname */}
                    <Input placeholder='LastName' type='text' value={lastname} onChange={(event) => setLastname(event.target.value)} className='rounded-full p-6' autoComplete=''/>
                         {/* Email */}
                    <Input placeholder='E-mail' type='email' value={email}onChange={(event) => setEmail(event.target.value)}
                     className='rounded-full p-6' autoComplete=''/>
                         {/* Password */}
                    <Input placeholder='Password' type='password' value={password}onChange={(event) => setPassword(event.target.value)}
                      className='rounded-full p-6' autoComplete=''/>
                    <Button className='rounded-full p-5 bg-blue-600 text-white font-bold hover:bg-blue-700' type='submit'>Signin</Button>
                 </form>
                </TabsContent>
              </Tabs>
            </div>
         </div>
           <div className='hidden xl:flex justify-center items-center'>
               <img src="https://img.freepik.com/free-vector/conversation-concept-illustration_114360-1305.jpg?w=740&t=st=1724871547~exp=1724872147~hmac=d39930e9f3c3337fb5876fd3ec18e8091f4e8b65c2e2c0fc6ac3b3defe6ec792" className='h-[500px]' alt="image" />
           </div>
      </div>
    </div>
  )
}

export default Auth