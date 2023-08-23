import React from 'react'
import greeneking from "../Asset/greeneking.jpeg"

function Experience() {
  return (
    <div className="mx-24">
        <div class="container px-6 ">
        <h1 class="font-bold text-lg text-left pb-5">Experience</h1>
        <div class="px-20 py-4">
    <h1 class="font-semibold text-lg text-left text-[#28D2B4]">About me</h1>

    <ul class="list-none text-left pb-4 text-slate-300 text-sm hover:text-slate-100">
<li class="pt-2">My coding journey began in 2021 when I started creating a static website from Dribble Designs. I was inspired to learn web development and enrolled in a tech accelerator boot camp where I learned the fundamentals of web development. Fast forward to today, I've had the privilege to work with the brilliant team at Zone Digital. Here, I created an internal Zone Car Park application, collaborated on and maintained the Greene King platform.</li>
<li class="pt-2">My goal is to create websites that not only look great but also deliver a seamless user experience. I am a creative problem solver and enjoy tackling challenges that come with web development. I am committed to constantly improving my skills and staying up-to-date with the latest technologies.</li>

<li class="pt-2">In my free time, I enjoy horse-riding and bouldering. These activities provide me with a fresh perspective and often inspire me in my work.
I am always looking for new opportunities to work on exciting projects and collaborate with other professionals in the industry. If you are looking for a talented and dedicated front-end developer, please  contact me</li>

</ul>


</div>
            <div class="px-20 py-4 h-full w-full hover:bg-[#010E11] rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 ">
           

                <h1 class="font-semibold text-sm text-left text-[#8EFCE1]">Zone Digital</h1>
                <h1 class="text-lg text-left text-slate-100 pb-4">Junior front-end developer</h1>
                <h1 class="text-sm  text-left text-slate-100  pb-4">10/2021 - 02/2023</h1>
                <ul class="list-none text-left pb-4 text-slate-300 text-sm hover:text-slate-100">
  <li>Developed key branding and promotion features, and increase seasonal product sales for encouraging 1.5M site users, maintaining the client's branding guidelines.</li>
</ul>

<ul class="list-none text-left pb-4 text-slate-300 text-sm hover:text-slate-100">
  <li>Design internal front-end applications from planning to execution, using React.js, Tailwind.js and express.js, to create responsive web applications with various screen sizes</li>
</ul>

<ul class="list-none text-left pb-4 text-slate-300 text-sm hover:text-slate-100" >
  <li>Implemented and introduced call-to-action (CTA) button features, resulting in a 68% increase in user bookings.</li>
</ul>
            </div>
        </div>
        <div class="container px-6">

<div class="px-20 py-4 h-full w-full hover:bg-[#010E11] rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 ">

    <h1 class="font-semibold text-sm text-left text-[#8EFCE1]">Tech accelerator</h1>
    <h1 class="text-lg text-left text-slate-100  pb-4">Junior front-end developer</h1>
    <h1 class="text-sm text-left text-slate-100  pb-4">10/2021 - 02/2023</h1>
    <ul class="list-none text-left pb-4 text-slate-300 text-sm hover:text-slate-100">
<li>Developed key branding and promotion features, and increase seasonal product sales for encouraging 1.5M site users, maintaining the client's branding guidelines.</li>
</ul>

<ol class="list-none text-left pb-4 text-slate-300 text-sm hover:text-slate-100">
<li>Design internal front-end applications from planning to execution, using React.js, Tailwind.js and express.js, to create responsive web applications with various screen sizes</li>
</ol>

<ul class="list-none text-left pb-4 text-slate-300 text-sm hover:text-slate-100">
<li>Implemented and introduced call-to-action (CTA) button features, resulting in a 68% increase in user bookings.</li>
</ul>
</div>
</div>
<div class="container px-6 ">

<div class="px-20 py-4 h-full w-full bg-[#010E11] rounded-md  backdrop-filter backdrop-blur-lg bg-opacity-30 ">
           
<div class="flex flex-row">
  <div class="basis-3/4 p-4">   
   <h1 class="font-semibold text-xs text-left text-[#8EFCE1] pb-2">Web development</h1>
           <h1 class="text-lg text-left text-slate-100 pb-2">Greene King</h1>
           {/* <h1 class="text-sm  pt-2 text-left text-slate-100  pb-4"></h1> */}
           <p  class="text-sm  pt-2 text-left text-slate-100  pb-4">Developed key branding and promotion features, and increase seasonal product sales for encouraging 1.5M site users, maintaining the client's branding guidelines.</p>
         
</div>
<div class="basis-1/4">
<img src={greeneking} alt="React Image" />
</div>
</div>
        
       </div>
</div>
    </div>
  )
}

export default Experience