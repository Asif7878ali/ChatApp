import { useState } from "react";
import axios from "axios";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter,      AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { FaPowerOff } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../../../slices/AuthSlice";

const ProfileDisplay = () => {

  const[loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
   
  const handleLogout = async () => {
    setLoading(true);
    const server = import.meta.env.VITE_SERVER_URL;
    const Url = `${server}/api/auth/user/logout`;
    try {
      const result = await axios.post(Url, {}, {
        withCredentials: true
      });
      console.log(result)
      let {status} = result.data;
      let {msg} = result.data;
      if (status == true) {
        toast.success(msg);
        dispatch(logout());
        navigate('/auth');
        setLoading(false);
      } else {
        console.error("Logout failed");
        toast.error('Logout failed');
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('Logoutfailed');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-4 flex items-center space-x-4">
      <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User Profile" className="w-12 h-12 rounded-full"/>
      <div className="flex ">
        <p className="font-bold">Username</p>
        <div className="pt-1 md:pl-20 lg:pl-28">
          <div className="flex space-x-3">
            <button>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <MdOutlineEdit />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit Profile</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </button>
            <button className="text-red-600">
              <AlertDialog>
                <AlertDialogTrigger>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <FaPowerOff size={18} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Logout</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </AlertDialogTrigger>
                <AlertDialogContent className={`${loading && "blur-sm pointer-events-none"}`}>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to Log out?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Come Back Soon
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout} disabled={loading}>
                      {loading ? "Logging out..." : "Logout"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDisplay;