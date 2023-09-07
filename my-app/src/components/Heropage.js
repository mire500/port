import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import formcontact from './formcontact'
import { useForm, ValidationError } from '@formspree/react';


const navigation = [
  { name: 'Experience', href: '#' },
  { name: 'Project', href: '#' },
  { name: 'Contact me', href: '#' },
]

export default function Heropage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [form, setForm] = useState(true)

  const [state, handleSubmit] = useForm("mleynzon");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }



// needs to reveal the form for contact
  function Revealform() {
setForm(false)
  }

  return (
    <div className="">
      <header className=" top-0 left-0 right-0 inset-x-0 top-0 z-50 f">
        {/* <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav> */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="inset-0 z-50" />
          <Dialog.Panel className="inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-left justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className=" isolate px-6 pt-14 lg:px-8 flex justify-start ">
        <div
          className=" inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
  
        </div>
        <div className="mx-auto sm:max-w-2xl  lg:py-56">
        {form ?  
        (<div className="text-center">
            <h1 className="text-4xl text-left font-bold tracking-tight text-[#D8F1A0] sm:text-6xl">
            Hafsa <br></br> Mire
            </h1>
            <p className="mt-6 w-64 text-left text-sm sm:text-md leading-8 text-white">
            I am Hafsa Mire, an experienced front-end developer and UX designer passionate about creating engaging and intuitive user experiences. 
            </p>
            <div className="sm:mt-10 flex items-center justify-start gap-x-6">
              <a
                href="#"
                className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <div class="flex flex-row">
<div class=" pr-2" onClick={Revealform}> Contact me</div>
<div>      <span class="animate-pulse"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg></span></div>
                </div>
              
          

              </a>

             
            </div>

          </div>  
        ): ( 
          <form class="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label  class="text-white text-left" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email" 
            name="email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <label  class="text-white text-left" htmlFor="email">
            Messages
          </label>
          <textarea
            id="message"
            name="message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button  class="text-white text-left" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>  
      //     <div>
      //     <h1 className="text-4xl font-bold tracking-tight text-[#B8B8B8] sm:text-1xl">
      //     Contact me
      //     </h1>
      //     <p className="mt-6 pb-10 text-md leading-8 text-slate-300">
      //     Send me a quick message.
      //     </p>
      //     <form class="w-full max-w-lg">
      //   <div class="flex flex-col -mx-3 mb-6">
      //     <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      //       <label class="block uppercase tracking-wide text-white text-left text-xs font-bold mb-2" for="grid-first-name">
      //         First Name
      //       </label>
      //       <input class="appearance-none block w-64 bg-transparent  text-gray-700   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent " id="grid-first-name" type="text" placeholder="Name"/>
      //       {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
      //     </div>
      //     <div class="w-full md:w-1/2 px-3">
      //       <label class="block uppercase tracking-wide text-white text-left text-xs font-bold mb-2" for="grid-last-name">
      //         Message
      //       </label>
      //       <input class="appearance-none block w-64 bg-transparent text-white border-b-2 border-[#040D0F] py-3 px-4 leading-tight focus:outline-none focus:bg-[#040D0F] focus:border-transparent" id="grid-last-name" type="text" placeholder="Message"/>
      //     </div>
      //     <div class="flex flex-wrap ml-3 pt-6 -mx-3 mb-6">
      //   <button class="text-[#D8F1A0] text-sm ml-2 py-1 px4  font-bold rounded  gap-1 items-center  flex flex-row">
      //        Send message
      //        <span class="animate-pulse"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      //        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      //      </svg></span>
      //      </button>
      //   </div>
      //   </div>
      
      //   <div class="flex flex-wrap -mx-3 mb-2">
        
        
         
      //   </div>
      // </form>
      // </div> 
      )}
        

        </div>

        </div>
      </div>

  )
}
