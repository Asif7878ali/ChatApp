import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileDisplay from './componenet/profileDisplay/ProfileDisplay.jsx';
import { useSelector } from 'react-redux';

const ContactContainer = () => {
  const [contacts, setContacts] = useState([]); // State to store contacts
  const userinfo = useSelector((state) => state?.auth?.user);
  const senderId = userinfo?._id;

  // Function to fetch contact list
  async function getContactList() {
    const server = import.meta.env.VITE_SERVER_URL;
    const url = `${server}/api/auth/get/contact/dm/messages`;
   console.log('Sender id', senderId);
    try {
      const result = await axios.post(url, { senderId });
      console.log('Fetched Contacts:', result.data.contacts);
      setContacts(result.data.contacts); // Update state with contacts
    } catch (error) {
      console.warn('Error fetching contacts:', error);
    }
  }

 // Fetch contacts on component mount
  useEffect(() => {
    if(senderId){
      getContactList();
    }
   
  }, [senderId]);

  return (
    <div className="relative md:w-[35vw] xl:w-[20vw] border-r border-gray-300 w-full h-screen">
      <section className="left flex flex-col h-full">
        <ProfileDisplay />

        <div className="overflow-y-auto flex-grow">
          <div className="py-4 flex items-center justify-center lg:text-2xl border-b-[1px] border-x-gray-100">
            <h3>Messages</h3>
          </div>

          {/* Conditional Rendering of Contacts */}
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <div
                key={contact._id}
                className="contact-item flex items-center justify-between p-4 cursor-pointer border-b-[1px]"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={contact.image || 'https://via.placeholder.com/40'}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-bold">
                      {contact.firstname} {contact.lastname}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(contact.lastMessageTime).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-4">
              <h1>No Contact List</h1>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactContainer;
