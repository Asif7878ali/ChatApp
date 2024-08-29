import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button"
const Auth = () => {
       const [username , setUsername] = useState('');
       const [email , setEmail] = useState('');
       const [password , setPassword] = useState('');

       const Logfuc = () =>{
            const data = {
               Username: username,
               Password: password
            }
          console.log(data);  
      }
       const Signfuc = () =>{
        const data = {
          Username: username,
          Email: email,
          Password: password
       }
         console.log(data);  
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
              <Tabs className='w-3/4'>
                <TabsList className='bg-transparent rounded-none w-full'>
                  <TabsTrigger className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300' value='login'>Login</TabsTrigger>
                  <TabsTrigger className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300' value='signup'>Signup</TabsTrigger>
                </TabsList>
                <TabsContent className='flex flex-col gap-5 mt-10' value='login'>
                  <Input placeholder='Username' type='text' value={username} onChange={(event) => setUsername(event.target.value)} className='rounded-full p-6'/>
                  <Input placeholder='*******' type='password' value={password}onChange={(event) => setPassword(event.target.value)}  className='rounded-full p-6' autoComplete=''/>
                  <Button className='rounded-full p-5 bg-black text-white font-bold hover:bg-slate-950' onClick={Logfuc}>Login</Button>
                </TabsContent>
               
                <TabsContent className='flex flex-col gap-5' value='signup'>
                    <Input placeholder='Username' type='text' value={username} onChange={(event) => setUsername(event.target.value)} className='rounded-full p-6'/>
                    <Input placeholder='E-mail' type='email' value={email}onChange={(event) => setEmail(event.target.value)}
                     className='rounded-full p-6'/>
                    <Input placeholder='Password' type='password' value={password}onChange={(event) => setPassword(event.target.value)}
                      className='rounded-full p-6'/>
                    <Button className='rounded-full p-5 bg-blue-600 text-white font-bold hover:bg-blue-700' onClick={Signfuc}>Signin</Button>
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