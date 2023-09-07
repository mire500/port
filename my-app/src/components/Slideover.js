import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import greeneking from "../Asset/greeneking.webm"

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(true)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-[#03090a] py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                      <p class="text-xs text-[#D8F1A0]">Product development</p>
                      <h1 class="text-xl text-[#D8F1A0]">Greene king</h1>
                      <p class="text-xs mt-4 text-slate-300 text-sm hover:text-slate-100">Greene King is the country's leading pub retailer and brewer, running over 1600 pubs, restaurants, and hotels across England, Wales, and Scotland.</p>
       <video controls width="100%" class="my-4">
      <source src="/greeneking.webm" type="video/webm" />
    </video>
    <h2 class="text-[#D8F1A0]">Tech stack</h2>
    <div class="flex flex-row gap-1 my-4">
           <button class="bg-[#171717] text-xs text-[#D8F1A0] font-bold py-1 px-2 rounded">
  Heroku
</button>
<button class="bg-[#171717] text-xs text-[#D8F1A0] font-bold py-1 px-2 rounded">
  React.js
</button>
<button class="bg-[#171717] text-xs text-[#D8F1A0] font-bold py-1 px-2 rounded">
  Scss
</button>
<button class="bg-[#171717] text-xs text-[#D8F1A0] font-bold py-1 px-2 rounded">
  Node.j
</button>
           </div>
           <h1 class="font-semibold text-lg text-left text-[#D8F1A0] ">About me</h1>
<ul class="list-none text-left py-6 text-slate-300 font-light text-xs hover:text-slate-100">
<li class="pt-2 ">My coding journey began in 2021 when I started creating a static website from Dribble Designs. I was inspired to learn web development and enrolled in a tech accelerator boot camp where I learned the fundamentals of web development. Fast forward to today, I've had the privilege to work with the brilliant team at <span class="text-[#D8F1A0]  text-md">Zone Digital</span>. Here, I created an internal Zone Car Park application, collaborated on and maintained the <span class="text-[#D8F1A0]  text-md">Greene King platform.</span></li>
<li class="pt-2">In my free time, I enjoy horse-riding and bouldering. These activities provide me with a fresh perspective and often inspire me in my work.
I am always looking for new opportunities to work on exciting projects and collaborate with other professionals in the industry. If you are looking for a talented and dedicated front-end developer, please  contact me</li>

</ul>
<h2 class="text-[#D8F1A0]">Skills</h2>
<ul class="list-none text-left py-6 text-slate-300 font-light text-xs hover:text-slate-100">
<li class="pt-2 ">Conscious of WCAG 2.1 AA accessibility requirements and follows progressive enhancement methodologies</li>
<li class="pt-2">Solid understanding of Git and version control and working on a team of multiple developers.</li>
<li class="pt-2">Experience working with modern web stacks</li>
</ul>

<h2 class="text-[#D8F1A0]">Website</h2>
<p class="text-slate-300 font-light text-xs pt-2 mb-10">https://www.greeneking.co.uk/pubs/hampshire/raven-hotel/menu</p>

           <div className="">
                    
           <button class="fixed right-0 bottom-0 text-[#171717] w-42 px-64  text-xs bg-[#D8F1A0] font-bold py-4 px-2 ">
  Open project
</button>

           </div>
 
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
  
        </div>
      </Dialog>
    </Transition.Root>
  )
}
