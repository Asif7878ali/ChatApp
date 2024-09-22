import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toast} from 'sonner';

const Chat = () => {
  const userinfo = useSelector((state) => state?.auth?.user);
  const navigate = useNavigate();

 
  useEffect(() => {
    if (userinfo?.profileSetup === false) {
      console.log(userinfo.profileSetup);
      toast('Please Setup Profile to Continue to Chat');
      navigate("/profile");
    }
  },[userinfo, navigate]);

  return( 
    
        <div>Chat</div>
);
};

export default Chat;
