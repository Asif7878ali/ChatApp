import React from "react";
import chatlogo from "../../../../assets/chatwave.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EmptyChatContainer = () => {
  return (
    <div className="flex-1 md:flex flex-col justify-center items-center hidden">
      <img className="h-56 w-72" src={chatlogo} alt="our logo" />
      <div className="text-opacity-80 flex flex-col items-center mt-5 lg:text-2xl text-center">
        <h1>Your messages</h1>
        <p className="pb-2 text-sm">Send a message to start a chat.</p>

        <Dialog>
          <DialogTrigger>
            <Button
              className="px-7 py-2 bg-blue-400 hover:bg-blue-500 text-white"
              type="submit"
            >
              Send Message
            </Button>
          </DialogTrigger>
          <DialogContent className="border-none w-[600px] h-[400px] flex flex-col  rounded-lg">
            <DialogHeader className="">
              <DialogTitle className="text-center font-semibold text-lg">
                New Message
              </DialogTitle>
            </DialogHeader>
            <span className="border-b border-gray-600"></span>
            <DialogDescription className="flex items-center space-x-4">
              <p>To:</p>
              <input
                className="w-full focus:outline-none focus:border-transparent"
                type="text"
                placeholder="Search..."/>
            </DialogDescription>
            <span className="border-b border-gray-600"></span>
            <div className="flex-1 p-4 text-gray-400">No account found.</div>
            <div className="text-center">
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white px-28"
                type="submit" >
                Chat
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
