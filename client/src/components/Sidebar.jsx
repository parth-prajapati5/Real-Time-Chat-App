import React from 'react'
import assets, { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({selectedUser, setSelectedUser}) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-[#8185B2]/10 h-full  p-5 text-white rounded-r-2xl overflow-y-scroll ${selectedUser ? 'max-md:hidden' : ''}`}>
      <div className='pb-5'>
        <div className='flex justify-between items-center'>
          <img src={assets.logo} alt="logo" className='max-w-40' />
          <div className='relative py-2 group '>
            <img src={assets.menu_icon} alt="menuicon" className='max-h-5  cursor-pointer' />

            <div className='absolute top-full right-0 w-32 z-20 p-5  border border-gray-600  rounded-md bg-[#282142]  text-gray-100 hidden group-hover:block'>
              <p className='cursor-pointer text-sm' onClick={() => navigate('/profile')}>Edit Profile</p>
              <hr className='my-2 border-t border-gray-500' />
              <p className='cursor-pointer text-sm'>Logout</p>
            </div>
          </div>
        </div>

        <div className='bg-[#282142] rounded-full flex  items-center gap-2 py-3 px-4 mt-5'>
          <img src={assets.search_icon} alt="search" className='w-3' />
          <input type="text" placeholder='Search User...' className='bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1' />
        </div>
      </div>


      <div className='flex flex-col'>
        {userDummyData.map((user, index) => {
          return (
            <div  onClick={()=>{
              setSelectedUser(user)
            }}
            key={index} className={`flex relative items-center gap-2  p-2 pl-4 rounded cursor-pointer max-sm:text-sm hover:bg-gray-400/20 ${selectedUser?._id === user._id &&  'bg-[#282142]/50'}`}>
              <img src={user?.profilePic || assets.avatar_icon} alt="pic" className='w-[35px] aspect-[1/1]  rounded-full' />
              <div className=' flex flex-col leading-5 '>
                <p>{user.fullName}</p>
                {
                  index < 3
                    ?<span className='text-green-400 text-xs'>Online</span>
                    :<span className='text-neutral-400 text-xs'>Offline</span>
                }
              </div>
              {index > 2 && <p className='absolute top-4 right-4 text-xs h-5 w-5 rounded-full bg-violet-500/50 text-white flex justify-center items-center '>{index}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar