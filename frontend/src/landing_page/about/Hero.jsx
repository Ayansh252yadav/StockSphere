import React from 'react'

const Hero = () => {
  return (
    <div className='px-30 py-10'>
     <div className="mt-40 flex flex-col items-center justify-center">
      
      <h1 className="max-w-xl leading-10 text-2xl text-gray-700 text-center">
        We pioneered the discount broking model in India.
        Now, we are breaking ground with our technology.
      </h1>

    <div className="w-full px-10 mt-20">
  <hr className="border-t border-gray-200" />
</div>
    </div>
    <div className='flex justify-between gap-12 px-10 py-20'>
      <div className='w-1/2'>
        <p className='max-w-lg leading-7 text-gray-600 '>We started building StockSphere with a simple goal — to understand how modern trading and investment platforms work while creating an intuitive experience for users. What began as a learning project gradually evolved into a full-stack application focused on clean design, performance, and real-world functionality.</p>
      <p className='max-w-lg leading-7 text-gray-600 mt-5'>Through this project, we explored frontend development with React, backend architecture, API integration, and responsive user interface design. Every component, feature, and page represents a step in our journey of becoming better software developers and problem solvers.</p>
      <p className='max-w-lg leading-7 text-gray-600 mt-5'>StockSphere is more than just a project; it is a reflection of our passion for technology, continuous learning, and the desire to build applications that deliver value to users. As we continue to grow as developers, we aim to enhance the platform with more advanced features, better user experiences, and innovative solutions.</p>
      </div>
      <div className='w-1/2'>
        <p className='max-w-lg leading-7 text-gray-600'>Beyond building the platform itself, this project represents a continuous journey of learning, experimentation, and growth. Throughout the development process, we explored modern web technologies, software design principles, and real-world problem-solving techniques to create a better user experience.</p>
        <p className='max-w-lg leading-7 text-gray-600 mt-5'>StockSphere serves as a practical demonstration of our skills in full-stack development, combining responsive frontend interfaces, efficient backend services, and scalable application architecture. Every feature added to the platform reflects new concepts learned and challenges overcome during the development journey.</p>
        <p className='max-w-lg leading-7 text-gray-600 mt-5'>
          As technology continues to evolve, we remain committed to improving the platform, exploring new ideas, and implementing innovative features. This project is not just a showcase of what we've built so far—it's a foundation for what we'll continue to create in the future.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Hero
