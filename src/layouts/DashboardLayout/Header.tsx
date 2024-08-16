import { useState } from "react";

const Header = ({ userData, isOpen, setIsOpen }: any) => {
  function handleClick() {
    setIsOpen(!isOpen);
  }

  const [showNotificationDropdown, setNotificationDropdown] = useState(false)
  const initials = `${userData.firstName.charAt(0)}${userData.lastName.charAt(
    0
  )}`;

  const notifications = [
    {
      type: 'Job Appliation',
      time: '12:00 PM',
      desc: 'Lorem ipsum dolor sit amet . '
    },
    {
      type: 'Job Appliation',
      time: '12:00 PM',
      desc: 'Lorem ipsum dolor sit amet . '
    },
    {
      type: 'Job Appliation',
      time: '12:00 PM',
      desc: 'Lorem ipsum dolor sit amet . '
    },
    {
      type: 'Job Appliation',
      time: '12:00 PM',
      desc: 'Lorem ipsum dolor sit amet . '
    }
  ]

  return (
    <nav className="fixed top-0 right-0 h-[80px] flex items-center flex-wrap bg-[#fff] p-5 lg:px-10 w-full  lg:w-[82%] ml-auto lg:justify-between justify-between z-40">
      <div className="flex gap-5  divide-x divide-[#E8EAED]">
        {/* Notification Dropdown */}
        <div className="flex items-center gap-x-3 relative">
          <div
            className="w-[30px] h-[30px] md:w-[41px] md:h-[41px]  rounded-full overflow-hidden bg-[#FFF5EF] font-bold flex items-center justify-center uppercase cursor-pointer"
            onClick={() => setNotificationDropdown(!showNotificationDropdown)}
          >
            <img
              src="/icons/notification.svg"
              alt=""
              className="w-[1rem] md:w-[1.2rem]"
            />
            <span className="w-2 h-2 rounded-full bg-danger-600 absolute left-[0.9rem] top-[0.35rem] md:left-[1.3rem] md:top-[0.6rem] border border-white"></span>
          </div>
        </div>
        {/* Notification Dropdown */}

        <div className="">
          <div className="ml-5  flex items-center gap-x-3 relative">
            <div className="w-[30px] h-[30px] md:w-[41px] md:h-[41px]  rounded-full overflow-hidden bg-[#FFF5EF] font-bold flex items-center justify-center uppercase">
              {userData.photo ? (
                <img src={userData.photo} />
              ) : (
                <span className="text-xs md:text-base">{initials}</span>
              )}
              <span className="w-2 h-2 rounded-full bg-[#4BB543] absolute right-[-1px] bottom-0 md:left-8 md:bottom-1"></span>
            </div>
            <p className="font-medium text-sm hidden lg:block text-neutral-800">
              {userData.firstName} {userData.lastName}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
