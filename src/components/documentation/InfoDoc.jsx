import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMobileAlt, faDatabase } from '@fortawesome/free-solid-svg-icons'


export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-black m-4 border rounded-xl px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        
      </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-green-500">Efficient Development</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">An Enhanced Workflow</h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
                    In the realm of software development, efficiency is paramount. Our approach focuses on crafting robust and scalable solutions, leveraging cutting-edge technologies and best practices. Our goal is to provide an enhanced workflow that empowers development teams to deliver high-quality products swiftly and efficiently.
            </p>
            </div>
            </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                    className="w-[48rem] max-w-none rounded-xl bg-gray-200 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    src="/unsplashSoftware.jpg"
                    alt=""
                /> 
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
                    <p>
                        My software development process is centered around the use of modern and efficient technologies such as React for user interface development, TailwindCSS for adaptable and appealing design, and Node and Express for building robust and scalable servers.
                    </p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-300">
            <li className="flex gap-x-3">
                <FontAwesomeIcon icon={faCode} className="mt-1 h-5 w-5 flex-none text-indigo-300" aria-hidden="true" />
                <span>
                    <strong className="font-semibold text-blue-300">Development with React.</strong> I use React to create interactive and efficient user interfaces, providing a smooth and enjoyable user experience.
                </span>
            </li>
            <li className="flex gap-x-3">
                <FontAwesomeIcon icon={faMobileAlt} className="mt-1 h-5 w-5 flex-none text-indigo-300" aria-hidden="true" />
                <span>
                    <strong className="font-semibold text-purple-300">Design with TailwindCSS.</strong> With TailwindCSS, I can create responsive and appealing designs that look and perform well on any device.
                </span>
            </li>
            <li className="flex gap-x-3">
                <FontAwesomeIcon icon={faDatabase} className="mt-1 h-5 w-5 flex-none text-indigo-300" aria-hidden="true" />
                <span>
                    <strong className="font-semibold text-green-300">Servers with Node and Express.</strong> I use Node and Express to build efficient and scalable servers, ensuring that your application can handle any amount of traffic.
                </span>
            </li>
            </ul>
            <p className="mt-8">
              I offer high-quality software development services at competitive prices. My development process follows a well-defined application lifecycle, starting with requirement gathering and design, followed by implementation and testing, and finally deployment and maintenance. This process ensures that every application I develop is of high quality and meets your specific needs.

              I also offer two hiring modalities: temporary and fixed. Temporary hiring has a duration of 15 days per contract, while fixed hiring is until the project phase is completed. Fixed hiring is a good option for projects from scratch that require planning, while temporary hiring is a good option for maintaining applications or websites, updating them, scaling them, or simply creating a simple website or SWP.

              I am confident that I can provide you with the software development services you need. Contact me today for more information about my services and how I can help you achieve your goals 
            </p>
           
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}
