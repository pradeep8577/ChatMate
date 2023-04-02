import React from 'react'

const About = () => {
  return (
    <>
        <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]" id="about">
        <div className="container lg:flex">
            <div className="flex flex-wrap items-center justify-between ">
                <img className="object-cover w-full lg:mx-12 lg:w-2/2 rounded-3xl h-100 lg:h-96" src="https://res.cloudinary.com/dwdntz8et/image/upload/v1680453766/about_dwgur9.jpg" alt=""/>
            </div>
            
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="mt-10 lg:mt-0">
                    <span className="block mb-2 text-lg font-semibold text-primary">
                        About Us
                    </span>
                    <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                        Get insights of our work
                    </h2>
                    <p className="mb-8 text-base text-body-color">
                        This AI based platform is created by using OpenAI GPT-3 for creation of various tools that are mainly expected to help learners & students. 
                    </p>
                    <p className="mb-12 text-base text-body-color">
                        Our main focus is on helping students free of cost by using AI based platform. Any potential and eager developer can make use of this platform to its fullest potential.
                    </p>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
