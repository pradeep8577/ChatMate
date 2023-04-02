import Head from "next/head";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Space_Grotesk } from "@next/font/google";
import { SearchIcon } from "@heroicons/react/outline";
import { ArrowSmRightIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";

import ResizablePanel from "../../components/ResizablePanel";

import Header from "../../components/Header";

const spaceGrotesk = Space_Grotesk({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [generatedTitles, setGeneratedTitles] = useState("");
  const [text, setText] = useState("");

  const prompt = `Generate 2 project title,description based name on ${text}. Make sure to generate 2 and its relevant and not out out of context.`;

  const generateArticleTitle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) {
      toast.error("Type a word to generate the quotes!");
      return;
    }

    setGeneratedTitles("");
    setLoading(true);

    setTimeout(() => {
      toast.error("Free trail has expired");
      setLoading(false);
    }, 30000);

    const response = await fetch("/api/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      setLoading(false);
      return;
    }
    const data = response.body;

    if (!data) {
      return;
    }
    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      setGeneratedTitles((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  return (
    <>
      <div className={`flex flex-col items-center m-0 `}>
        <Head>
          <title>ChatMate: Your Intelligent Buddy for Everyday Conversations</title>
          <meta
            name="description"
            content="Using Quotes Generator can help you get exact quote you are looking for. Do you have an idea of where to find? Generate your quotes idea with ease."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="https://i.postimg.cc/j5S0SV3g/logo2.png" />
        </Head>

        <Header />

        {/*body*/}
        <div className="flex flex-col items-center w-full max-w-screen-md px-4 pt-14 md:px-0">
          <h1
            className={`${spaceGrotesk.className} text-6xl font-bold text-gray-900 dark:text-zinc-300  sm:leading-9 sm:truncate mb-2 text-center sm:text-4xl lg:text-6xl xl:text-6xl`}
          >
            Project title and description
          </h1>
          <p className="mt-5 text-slate-500">4,118 quotes generated so far.</p>

          <form
            onSubmit={(e) => generateArticleTitle(e)}
            className="flex w-full mt-5 transition-all ease-linear hover:shadow-lg focus-within:shadow-lg  rounded-full border border-blue-700 dark:border-blue-700 p-1.5 pl-5 items-center"
          >
            <SearchIcon className="h-5 mr-3 text-blue-700 dark:text-gray-100" />
            <label htmlFor="search" className="sr-only"></label>
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              className="flex-grow text-gray-700 bg-transparent focus:outline-none dark:text-white"
              placeholder="What's on your mind?"
              id="search-box"
            />
            <button
              className="flex items-center justify-center w-10 h-10 bg-blue-700 border rounded-full dark:border-zinc-600"
              id="submit"
              aria-label="search-button"
            >
              <ArrowSmRightIcon className="w-6 h-6 text-white" />
            </button>
          </form>

          <div className="flex items-center justify-between w-full max-w-screen-md mt-8 mb-2">
            {loading && (
              <div className="mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 animate-spin text-black-600 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
            )}
          </div>
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            toastOptions={{ duration: 3000 }}
          />
          <div className="w-full h-px max-w-screen-md border-b dark:border-zinc-700"></div>
          <ResizablePanel>
            <AnimatePresence mode="wait">
              <motion.div className="my-5 space-y-4">
                {generatedTitles && (
                  <>
                    <p className="text-xs text-center uppercase text-slate-500">
                      Click on any quote to copy it to your clipboard
                    </p>
                    <div className="grid max-w-screen-md grid-cols-1 gap-2 m-auto md:grid-cols-2">
                      {generatedTitles
                        .match(/[0-9]+.[^0-9]+/g)
                        ?.sort((a, b) => b.length - a.length)
                        ?.map((generatedTitle, index) => {
                          const textContent = generatedTitle
                            .replace(/^"|"$|[0-9]+. /g, "")
                            .trim();

                          return (
                            <div
                              className="p-3 transition border rounded-md bg-zinc-100 dark:bg-darkOffset dark:text-gray-100 hover:bg-gray-100 cursor-copy border-zinc-200 dark:border-zinc-800"
                              onClick={() => {
                                navigator.clipboard.writeText(textContent);
                                toast.success("Title copied to clipboard");
                              }}
                              key={index}
                            >
                              <p className="text-zinc-800 dark:text-zinc-300">
                                {textContent}
                              </p>
                            </div>
                          );
                        })}
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </ResizablePanel>
        </div>
      </div>
    </>
  );
}
