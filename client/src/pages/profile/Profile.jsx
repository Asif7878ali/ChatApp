import { useEffect } from "react";
import axios from "axios";
import { IoMdArrowBack } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Profile = () => {
 
  async function verifyUser() {
    const server = import.meta.env.VITE_SERVER_URL;
    const Url = `${server}/api/auth/verify/user`;
    try {
      const result = await axios.post(Url, {},{
        withCredentials : true // Token cookies ke through send
      });
      console.log(result);
    } catch (error) {
      console.warn(error);
    }
  }
  useEffect(() => {
    verifyUser();
  }, []);

  return (
  
     <div className="bg-black h-[100vh] flex items-center justify-center flex-col gap-10">
      <div className="flex flex-col gap-10 w-[80vh] md:w-max">
        <div>
        <IoMdArrowBack className="text-4xl lg:text-6xl text-white cursor-pointer"/>
        </div>
        <div className="grid grid-cols-2">
         <div className="h-full w-32 md:w-48 md:h-48 relative flex items-center justify-center">
         <Avatar className="h-32 w-32 md:w-48 rounded-full overflow-hidden">
           <AvatarImage src="https://github.com/shadcn.png" alt='profile' className="object-cover w-full h-full bg-black"/>
            <AvatarFallback>CN</AvatarFallback>
         </Avatar>

         </div>
        </div>
      </div>
     </div>

  )
};
export default Profile;
