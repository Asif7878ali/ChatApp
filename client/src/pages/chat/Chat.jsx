import {useState ,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSucces } from "../../slices/AuthSlice.js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import ContactContainer from "./componet/contactContainer/ContactContainer.jsx";
import EmptyChatContainer from "./componet/emptyChatContainer/EmptyChatContainer.jsx";
import ChatContainer from "./componet/chatContainer/ChatContainer.jsx";

const Chat = () => {

  const [loading, setLoading] = useState(false);
  const userinfo = useSelector((state) => state?.auth?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function verifyUser() {
    const server = import.meta.env.VITE_SERVER_URL;
    const Url = `${server}/api/auth/verify/user`;
    try {
      const result = await axios.post(Url, {}, { withCredentials: true } );
      console.log(result);
      const { user } = result.data;
      dispatch(loginSucces(user));
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    if (userinfo?.profileSetup === false) {
      console.log(userinfo.profileSetup);
      toast("Please Setup Profile to Continue to Chat");
      navigate("/profile");
    }
    verifyUser();
  }, []);

  return (
    <div className="flex h-[100vh] overflow-hidden">
      <ContactContainer />
      {/* <EmptyChatContainer /> */}
      <ChatContainer />
    </div>
  );
};

export default Chat;
