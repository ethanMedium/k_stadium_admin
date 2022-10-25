import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import Card from "../components/Card";
import Comments from "../components/Comments";
import Modal from "../components/Modal";

function Home({ authService, discourseService }) {
  const navigate = useNavigate();
  const [topics, setTopics] = useState("");
  const [comments, setComments] = useState("");
  const [page, setPage] = useState("");
  // modal
  const [showModal, setShowModal] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("");

  const pagination = (where) => {
    if (where === "next") {
      setPage((page) => {
        return {
          ...page,
          start: page.start + 5,
          end: page.end + 5,
        };
      });
    } else if (where === "prev") {
      setPage((page) => {
        return { ...page, start: page.start - 5, end: page.end - 5 };
      });
    }
  };

  useEffect(() => {
    authService.signIn().then((result) => {
      if (!result) {
        navigate("/login");
      } else {
        discourseService.getTopics().then((result) => {
          setTopics(result);
        });
        discourseService.getPosts().then((result) => {
          setComments(result);
          setPage({
            start: 0,
            end: 5,
            current: 1,
            limit: result.length,
          });
        });
        return;
      }
    });
  }, [authService, navigate, discourseService]);

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
          {comments !== ""
            ? comments
                .slice(page.start, page.end)
                .map((item) => (
                  <Comments
                    key={item.id}
                    content={item.raw}
                    postNumber={item.post_number}
                    topicNumber={item.topic_id}
                    name={item.name}
                    created={item.created_at}
                  />
                ))
            : ""}
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {page.start}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {page.end >= page.limit ? page.limit : page.end}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {comments.length}
              </span>
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              {page.start <= 0 ? (
                ""
              ) : (
                <button
                  onClick={() => pagination("prev")}
                  className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Prev
                </button>
              )}
              {page.end >= page.limit ? (
                ""
              ) : (
                <button
                  onClick={() => pagination("next")}
                  className=" py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              )}
            </div>
          </div>

          {/* 여기서 부터 포스트 */}
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
            {topics !== ""
              ? topics.map((item) => (
                  <Card
                    key={item.id}
                    title={item.title}
                    id={item.id}
                    image={item.image_url}
                    created={item.created_at}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setCurrentTopic={setCurrentTopic}
                  />
                ))
              : ""}
          </section>
          {/* /End replace */}
        </div>
      </main>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currentTopic={currentTopic}
        discourseService={discourseService}
      />
    </>
  );
}

export default Home;
