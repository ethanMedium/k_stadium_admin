import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({ authService }) {
  const navigate = useNavigate();
  useEffect(() => {
    authService.signIn().then((result) => {
      if (!result) {
        navigate("/login");
      }
    });
  });

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div class="relative grid grid-cols-1 gap-4 p-4 mb-2 border rounded-lg cursor-pointer bg-white shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="relative flex gap-4">
              <img
                src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
                class="relative rounded-lg -mb-4 bg-white border h-12 w-12"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col">
                <div class="flex justify-between">
                  <p class="relative text-l whitespace-nowrap truncate overflow-hidden">
                    COMMENTOR
                  </p>
                </div>
                <p class="text-gray-400 text-sm">20 April, 2022</p>
              </div>
              <p class="text-gray-500 text-sm word-break: break-all overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing el
                it.asdfasdfkhasdkflksdhjflashdfklahsdfklqohsqrzkomrshqzokmsqrhozkqrmohzrqkmoak
              </p>
            </div>
          </div>
          <div class="relative grid grid-cols-1 gap-4 p-4 mb-2 border rounded-lg bg-white shadow-lg cursor-pointer bg-white shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="relative flex gap-4">
              <img
                src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
                class="relative rounded-lg -mb-4 bg-white border h-12 w-12"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col">
                <div class="flex justify-between">
                  <p class="relative text-l whitespace-nowrap truncate overflow-hidden">
                    COMMENTOR
                  </p>
                </div>
                <p class="text-gray-400 text-sm">20 April, 2022</p>
              </div>
              <p class="text-gray-500 text-sm word-break: break-all overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing el
                it.asdfasdfkhasdkflksdhjflashdfklahsdfklqohsqrzkomrshqzokmsqrhozkqrmohzrqkmoak
              </p>
            </div>
          </div>
          <div class="relative grid grid-cols-1 gap-4 p-4 mb-2 border rounded-lg bg-white shadow-lg cursor-pointer bg-white shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="relative flex gap-4">
              <img
                src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
                class="relative rounded-lg -mb-4 bg-white border h-12 w-12"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col">
                <div class="flex justify-between">
                  <p class="relative text-l whitespace-nowrap truncate overflow-hidden">
                    COMMENTOR
                  </p>
                </div>
                <p class="text-gray-400 text-sm">20 April, 2022</p>
              </div>
              <p class="text-gray-500 text-sm word-break: break-all overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing el
                it.asdfasdfkhasdkflksdhjflashdfklahsdfklqohsqrzkomrshqzokmsqrhozkqrmohzrqkmoak
              </p>
            </div>
          </div>
          <div class="relative grid grid-cols-1 gap-4 p-4 mb-2 border rounded-lg bg-white shadow-lg cursor-pointer bg-white shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="relative flex gap-4">
              <img
                src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
                class="relative rounded-lg -mb-4 bg-white border h-12 w-12"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col">
                <div class="flex justify-between">
                  <p class="relative text-l whitespace-nowrap truncate overflow-hidden">
                    COMMENTOR
                  </p>
                </div>
                <p class="text-gray-400 text-sm">20 April, 2022</p>
              </div>
              <p class="text-gray-500 text-sm word-break: break-all overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing el
                it.asdfasdfkhasdkflksdhjflashdfklahsdfklqohsqrzkomrshqzokmsqrhozkqrmohzrqkmoak
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center">
            <span class="text-sm text-gray-700 dark:text-gray-400">
              Showing{" "}
              <span class="font-semibold text-gray-900 dark:text-white">1</span>{" "}
              to{" "}
              <span class="font-semibold text-gray-900 dark:text-white">
                10
              </span>{" "}
              of{" "}
              <span class="font-semibold text-gray-900 dark:text-white">
                100
              </span>{" "}
              Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Prev
              </button>
              <button class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </button>
            </div>
          </div>

          {/* 여기서 부터 포스트 */}

          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
            <a
              href="#"
              class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>

            <a
              href="#"
              class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>

            <a
              href="#"
              class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>

            <a
              href="#"
              class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>

            <a
              href="#"
              class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}

export default Home;
