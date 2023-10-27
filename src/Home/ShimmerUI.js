import { CDN_URL } from "../utils/constants";

const ShimmerUI = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="search m-4 p-4 ">
          <span className="text-lgs">Top Restaurant</span>
          <button className="px-4 py-2 bg-blue-300 m-4  rounded-lg">
            Restaurant
          </button>
        </div>
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search here"
            className="border border-solid border-black rounded-lg p-2 "
          />
          <button
            className="px-4 py-2 bg-blue-300 m-4 rounded-lg"
            width="190px"
            margin={2}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName :</label>
          <input className="m-1 border border-black rounded-lg p-2" />
        </div>
      </div>
      <div className=" mx-5 px-4 flex justify-center">
        <div className="m-4 p-1 w-[260px] h-[350px] bg-gray-100 rounded-lg hover:bg-gray-300 shadow-lg border borer-gray-300">
          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-76 dark:bg-gray-700"></div>
          <div class=" my-10  h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <h4 className=" text-base font-medium text-dark hover:text-primary"></h4>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
        <div className="m-4 p-1 w-[260px] h-[350px] bg-gray-100 rounded-lg hover:bg-gray-300 shadow-lg border borer-gray-300">
        <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-76 dark:bg-gray-700"></div>
          <div class="my-10 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <h4 className=" text-base font-medium text-dark hover:text-primary"></h4>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
        <div className="m-4 p-1 w-[260px] h-[350px] bg-gray-100 rounded-lg hover:bg-gray-300 shadow-lg border borer-gray-300">
          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-76 dark:bg-gray-700"></div>
          <div class="my-10  h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <h4 className=" text-base font-medium text-dark hover:text-primary"></h4>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
        <div className="m-4 p-1 w-[260px] h-[350px] bg-gray-100 rounded-lg hover:bg-gray-300 shadow-lg border borer-gray-300">
          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-76 dark:bg-gray-700"></div>
          <div class="my-10  h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <h4 className=" text-base font-medium text-dark hover:text-primary"></h4>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
        <div className="m-4 p-1 w-[260px] h-[350px] bg-gray-100 rounded-lg hover:bg-gray-300 shadow-lg border borer-gray-300">
          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-76 dark:bg-gray-700"></div>
          <div class="my-10  h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <h4 className=" text-base font-medium text-dark hover:text-primary"></h4>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
      </div>
    </>
  );
};

export default ShimmerUI;
