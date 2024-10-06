import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiDotsVertical } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { clearChatUser } from "../../../../../../slices/ChatSlice";

const ChatHeader = () => {

  const chatUserinfo = useSelector((state) => state?.chat?.chatUser);
  const dispatch = useDispatch();

  function clearChat(){
    console.log('Clear Chat')
     dispatch(clearChatUser())
  }

  return (
    <div className="h-[10vh] border-b-2 border-black flex ">
      <div className="flex items-center">
        {!chatUserinfo ? (
          <div className="flex px-10 items-center space-x-5">
            <img
              src="https://wingandaprayer.live/wp-content/uploads/2018/07/no-image-available.jpg"
              alt="User Profile"
              className="w-12 h-12 rounded-full"
            />
            <h2>chatUserinfo...</h2>
          </div>
        ) : (
          <div className="flex px-10 items-center space-x-5">
            <img
              src={chatUserinfo?.image}
              alt="User Profile"
              className="w-12 h-12 rounded-full"
            />
            <h2>{chatUserinfo?.firstname} <span>{chatUserinfo?.lastname}</span></h2>
          </div>
        )}
      </div>
      <div className="flex space-x-4 ml-auto xl:mr-10 lg:mr-10 md:mr-5 cursor-pointer">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CiSearch size={28} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Search Messages</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HiDotsVertical size={28} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Menu</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Contact Info</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Select Messages</DropdownMenuItem>
            <DropdownMenuItem>Mute Notification</DropdownMenuItem>
            <DropdownMenuItem onClick ={clearChat}>Close Chat</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
            <DropdownMenuItem>Block</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ChatHeader;
