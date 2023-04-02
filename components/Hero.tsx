import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                    Howdy Learners !!!
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Your search for helper ends here. 
                    Get help from AI based Tools which will provide accurate & to-the-point responces.
                    Just enter your queries and get responce in quick seconds.
                </p>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Learn, ask doubts and get answers. Get services for courses recommendations, on demand project idea generations, interview & test preperations and guidance for resume building and social media handling.
                </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://res.cloudinary.com/dwdntz8et/image/upload/v1680453766/back_dubtyf.jpg" alt="mockup" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero
