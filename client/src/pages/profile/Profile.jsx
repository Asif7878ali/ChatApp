import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { FaPlus } from "react-icons/fa";

const Profile = () => {
  
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  async function verifyUser() {
    const server = import.meta.env.VITE_SERVER_URL;
    const Url = `${server}/api/auth/verify/user`;
    try {
      const result = await axios.post(Url, {}, {
        withCredentials: true // Token cookies ke through send
      });
      console.log(result);
      const {email} = result.data.user;
      setEmail(email);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    verifyUser();
  }, []);

  //Handle image change and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture({ image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeImageClick = () => {
     setProfilePicture(null);
  };

  const submitProfile = async (e) => {
    e.preventDefault();
    // Process form data and send it to the server
    const formdata = {
      username: username,
      image: profilePicture
   }
     console.log(formdata); 
  };

  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      {/* Sidebar */}
      <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
          <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
          <span className="flex items-center px-3 py-2.5 font-bold bg-white text-black border rounded-full">
            Public Profile
          </span>
          <span className="flex items-center px-3 py-2.5 font-semibold text-indigo-900 hover:border hover:rounded-full">
            Account Settings
          </span>
          <span className="flex items-center px-3 py-2.5 font-semibold text-red-600 hover:border hover:rounded-full">
            Delete Account
          </span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Profile</h2>
            <form onSubmit={submitProfile}>
              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  {profilePicture ? (
                    <img
                      className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-black"
                      src={profilePicture}
                      alt="Profile"
                    />
                  ) : (
                    <label
                      htmlFor="image"
                      className="flex justify-center items-center w-40 h-40 p-1 border border-black rounded-full ring-2 cursor-pointer">
                      <FaPlus size={30} className="text-black" />
                      <input
                        id="image"
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <button
                      type="button"
                      className={`py-3.5 px-7 text-base font-medium rounded-lg ${profilePicture
                          ? "text-white bg-indigo-700 hover:bg-indigo-800 cursor-pointer"
                          : "text-gray-500 bg-gray-300 cursor-not-allowed"
                        }`}
                        onClick={handleChangeImageClick}
                    >
                      Change picture
                    </button>
                  </div>
                </div>

                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div className="mb-2 sm:mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      className="border border-black rounded-lg block w-full p-2.5"
                      placeholder="E-mail"
                      value={email}
                      readOnly
                      title="You cannot change the E-mail Address during Profile Setup"
                      required/>
                  </div>

                  <div className="mb-2 sm:mb-6">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium">
                      Username
                    </label>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      className=" border border-black rounded-lg block w-full p-2.5"
                      placeholder="Username"
                      value={username}
                      onChange={ (event) => setUsername(event.target.value) }
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Profile;
