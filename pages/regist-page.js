import Layout from "../components/Layout";
import Link from "next/link";
import { getAllPostData } from "../lib/posts";
import { useState } from "react";

import { GoogleFormsView } from "../components/GoogleFormsView";

// SSG + ISR

export default function BlogPage({ filteredPosts }) {
  const [formsContent, setFormsContent] = useState({});
  const [register, setRegister] = useState(false);
  const registFormsContent = async () => {
    // TODO:api処理
    // const objectData = JSON.parse(data);
    // テストデータ
    const data = {
      formId: "1AEjMA7Wxtn8yPHXIhxWUzig22f8JIURa60Rk-1ZnUCY",
      info: {
        title: "インタビューフォーム",
        documentTitle: "インタビ",
        isionId: "00000017",
        responderUri:
          "https://docs.google.com/forms/d/e/1FAIpQLSeYiFISfpboxj0wOXo1HIU91tMNjI0JJjjDlE3vj1ICmY1_Kg/viewform",
        items: [
          {
            itemId: "0d72c87a",
            title: "お名前",
            questionItem: {
              question: {
                questionId: "57ab5e22",
                requd: "True",
                textQuestion: {},
              },
            },
          },
          {
            itemId: "2d5367ab",
            title: "趣味趣味に関する",
            questionItem: {
              question: {
                questionId: "b5f",
                textQuestion: {},
              },
            },
          },
        ],
      },
    };
    const objectData = data;
    setFormsContent(objectData);
    setRegister(true);
  };
  return (
    <Layout title="Blog page">
      {register ? (
        <GoogleFormsView formsContent={formsContent} />
      ) : (
        // filteredPosts.map((post) => <Post key={post.id} post={post} />)
        <div className="flex justify-center flex-col items-center">
          <p className="my-4">Input Goodle Forms Sharing URL</p>
          <input
            className="text-gray-700 my-4"
            onChange={(e) => setFormId(e.target.value)}
          ></input>
          <button className="bg-indigo-500 my-4" onClick={registFormsContent}>
            Regist
          </button>
        </div>
      )}

      <Link href="/main-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            ></path>
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  const filteredPosts = await getAllPostData();
  return {
    props: { filteredPosts },
    revalidate: 3,
  };
}
