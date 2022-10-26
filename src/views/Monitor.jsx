import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Comments from "../components/Comments";

function Monitor({ authService, discourseService }) {
  const navigate = useNavigate();
  const [comments, setComments] = useState("");
  const [topics, setTopics] = useState("");
  const search = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    discourseService.getUserComments(value).then((result) => {
      if (result.posts.length !== 0) {
        setComments(result.posts);
        setTopics(result.topics);
      }
    });
  };
  useEffect(() => {
    authService.signIn().then((result) => {
      if (!result) {
        navigate("/login");
      }
    });
  }, [authService, discourseService, navigate]);

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Monitor
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <form onSubmit={(e) => search(e)}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                name="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <div className="text-xl border-b-8 py-5 my-4">POSTS</div>
          <div>
            {comments !== ""
              ? comments.map((item) => (
                  <Comments
                    key={item.id}
                    content={item.blurb}
                    postNumber={item.post_number}
                    topicNumber={item.topic_id}
                    name={item.name}
                    created={item.created_at}
                  />
                ))
              : ""}
          </div>
          <div className="text-xl border-b-8 py-5 my-4">TOPIC</div>
          <div>
            {topics !== ""
              ? topics.map((item) => (
                  <Comments
                    key={item.id}
                    content={item.title}
                    postNumber={0}
                    topicNumber={item.id}
                    name={item.name}
                    created={item.created_at}
                  />
                ))
              : ""}
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}

export default Monitor;
