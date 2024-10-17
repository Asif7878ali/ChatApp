import { useState } from "react";
import chatlogo from "../../../../assets/chatwave.png";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import axios from 'axios'; 
import { useDispatch } from "react-redux";
import { selectUserForChat } from "../../../../slices/ChatSlice";

const EmptyChatContainer = () => {
   
     const [search, setSearch] = useState('');
     const [results, setResults] = useState([]);
     const [loading, setLoading] = useState(false);
     const [openModal, setOpenModal] = useState(false);
     const [selectedUser, setSelectedUser] = useState(null);

     const dispatch = useDispatch();
     console.log(results);


     async function handleSearch(term){
        if (term.trim().length > 0) {
              try {
                setLoading(true)
                const server = import.meta.env.VITE_SERVER_URL;
                const Url = `${server}/api/auth/search/contact`;
                const responce = await axios.post(Url, { search : term});
                console.log(responce);
                let {contacts} = responce.data;
                setResults(contacts || []);
                setLoading(false);
              } catch (error) {
                console.error('Search error:', error);
                setLoading(false);
              }
        } else {
           setResults([]);
        }
     }

      //user is clicked
    const handleUserClick = (user) => {
      console.log(user);
      setSelectedUser(user);
      setSearch(`${user.firstname} ${user.lastname}`); //search input with the users name
  };

  const handleChatClick = () => {
    if (selectedUser) {
        dispatch(selectUserForChat(selectedUser));
        console.log(`Starting chat with ${selectedUser.firstname} ${selectedUser.lastname}`);
        setOpenModal(false);
       
    }
};


  return (
    <div className="flex-1 md:flex flex-col justify-center items-center hidden">
      <img className="h-56 w-72" src={chatlogo} alt="our logo" />
      <div className="text-opacity-80 flex flex-col items-center mt-5 lg:text-2xl text-center">
        <h1>Your messages</h1>
        <p className="pb-2 text-sm">Send a message to start a chat.</p>
         <Dialog open={openModal} onOpenChange={setOpenModal}>
           <DialogTrigger asChild>
             <Button className="px-7 py-2 bg-blue-400 hover:bg-blue-500 text-white"
                     type="button" onClick={() => setOpenModal(true)}>
              Send Message
             </Button>
           </DialogTrigger>
           <DialogContent className="border-none w-[600px] h-[400px] flex flex-col  rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-center font-semibold text-lg">New Message</DialogTitle>
              </DialogHeader>
             <span className="border-b border-gray-600"></span>
             <DialogDescription className="flex items-center space-x-4">
                <span>To:</span>
                <input className="w-full focus:outline-none focus:border-transparent"
                       type="text" placeholder="Search..." value={search}
                        onChange={event =>{ 
                          setSearch(event.target.value) 
                           handleSearch(event.target.value)
                        }}/>
             </DialogDescription>
             <span className="border-b border-gray-600"></span>
             {loading ? (
              <div className="flex-1 p-4 text-gray-400">Searching...</div>
            ) : search.length > 0 && results.length === 0 ? (
              <div className="flex-1 p-4 text-gray-400">No account found.</div>
            ) : (
              <ScrollArea className="h-[250px]">
              <div className="flex flex-col gap-5">
                {results.map((contact) => (
                   <div 
                     key={contact._id} 
                     className="flex gap-3 items-center cursor-pointer" onClick={() => handleUserClick(contact)}>
                     <div className="w-12 h-12 relative">
                        <Avatar className='h-12 w-12 rounded-full overflow-hidden'>
                          { contact.image ? ( 
                              <img src={contact.image} alt='Profile' className='object-cover w-full h-full'/>
                            ) : (
                              <div className="w-12 h-12 rounded-full text-center bg-gray-200 text-blue-600"><h3>
                                 No Image
                              </h3>
                              </div>
                          ) }
                        </Avatar>
                     </div>
                       <h1> {contact.firstname} <span> {contact.lastname}</span></h1> 
                  </div>              
                ))}
              </div>
              </ScrollArea>
            )}           
             <div className="text-center">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-28" type="submit"
                  onClick={handleChatClick}
                  disabled={!selectedUser} >Chat</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyChatContainer;