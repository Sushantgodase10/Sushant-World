import React from "react";
import User from "./User";

import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import userprofile from "../components/img/Sushant .png"

const About = () => {
  return (
    <>
      <div className=" w-6/12 p-4  m-auto my-4 bg-gray-50 shadow-lg justify-start">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          {" "}
          About Us
        </h2>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-3 sm:px-4 xl:w-2/4 relative z-10 my-4">
              <img
                src={userprofile}
                alt="Sushant"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-8 text-2xl font-bold text-dark sm:text-2xl">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-8 text-base text-body-color">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <a
                  href="/#"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-blue-500 hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

 <div className="items-center justify-center px-8 py-4 mx-60">
    <div className="items-center justify-center mx-10 font-light">Sushant Godase</div>
    <h4 className="text-lg font-semibold text-dark mx-10">Follow us On</h4>
        <div className="flex items-center mx-(-14)">
          <a
            href="https://www.linkedin.com/in/sushantgodase10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="m-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E5E5E5] hover:bg-opacity-90"
              src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/SushantWorld/Sushant-World"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E5E5E5]"
              src="https://static-00.iconduck.com/assets.00/github-icon-1024x1024-vu0m1lvh.png"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.instagram.com/yourinstagramprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="m-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E5E5E5]"
              src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg"
              alt="Instagram"
            />
          </a>
          <a
            href="https://twitter.com/yourtwitterprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E5E5E5]"
              src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
      </div>
      
    </>
  );
};

// <div className="w-6/12 p-4 m-auto my-4 bg-gray-50 shadow-lg justify-start">
//   <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
//     About Us
//   </h2>

//   <div className="p-1 w-[350px] m-5 bg-gray-100 rounded-lg hover:bg-gray-200 shadow-lg text-left flex justify-between items-center ">
//     <img
//       className="rounded-lg h-50 w-50 items-start"
//       alt="res-logo"
//       src="https://media.licdn.com/dms/image/D5603AQHD5vAVPnDhqQ/profile-displayphoto-shrink_800_800/0/1682156735132?e=1700697600&v=beta&t=mRa9aPq2_38qeF0AkN_gcbXw9brI9AxwUnT9lHONXY0"
//     />

//     <div className=" m-90 my-4 shadow-lg p-4 flex justify-between items-center">
//       <h3 className="font-bold flex text-lg">Sushant Godase</h3>
//       <div>
//       <p className="text-base   text-gray-600">Software Developer</p></div>
//       <p className="text-base font-medium">Mob: 7057445737</p>
//       <p className="text-base font-medium">Location: Pune</p>
//     </div>
//   </div>

//   <div className="text-left flex justify-between items-center space-x-4 mt-4"></div>
// </div>

//===================================

//   <div className='w-6/12 p-4 m-auto my-4 bg-gray-50 shadow-lg  justify-start'>
//    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white  ">
//       About Us
//     </h2>

//     <div className=" m-1 p-1 w-[350px] bg-gray-100 rounded-lg hover:bg-gray-200 shadow-lg text-left flex justify-between" >

//           <img
//           className="rounded-lg"
//           alt="res-logo"
//           src="https://media.licdn.com/dms/image/D5603AQHD5vAVPnDhqQ/profile-displayphoto-shrink_800_800/0/1682156735132?e=1700697600&v=beta&t=mRa9aPq2_38qeF0AkN_gcbXw9brI9AxwUnT9lHONXY0"
//           />

//           <h3 className="font-bold py-4 m-50 text-lg  ">Sushant Godase</h3>

//       </div>

//   {/* <div>This is Sushant World web Series</div>
//  <div  className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 shadow-lg" >
//   loggedIn User
//   <UserContext.Consumer>
//     {({ loggedInUser}) => (
//       <h1 className="text-xl font-bold">{loggedInUser}</h1>
//     )}
//   </UserContext.Consumer>
//  </div> */}

//   <div >
//      {/* <User/>
//      <UserClass/> */}
//   </div>
//   </div>

//==============================================

export default About;
