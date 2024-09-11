import React from "react";

const Navbar = () => {
  const navList = [
    {
      listName: "Home",
    },
    {
      listName: "How To Use",
    },
    {
      listName: "About Us",
    },
    {
      listName: "Contact Us",
    },
  ];

  return (
    <>
      <div className="nav flex justify-between items-center bg-black text-white h-14 px-2 bg-[url] ">
        <img src="" alt="Logo Image" />
        <ul className="flex items-center cursor-pointer justify-center gap-2">
          {navList.map((item , index) => {
            return <li key={index}>{item.listName}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
