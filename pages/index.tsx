import Head from "next/head";
import { Space_Grotesk } from "@next/font/google";
import Header from "../components/Header";
import Service from '../components/Service'
import Hero from '../components/Hero'
import About from '../components/About'

const spaceGrotesk = Space_Grotesk({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

export default function Home() {

  return (
    <>
      <div className={`${spaceGrotesk.className} flex flex-col items-center m-0 `}>
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
        <Hero />
        <Service/>
        <About/>
      </div>
    </>
  );
}
