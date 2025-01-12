import pics from '../tasks.png'
import illustration from '../rb_76248.png'
import { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import '../register.css'
import 'aos/dist/aos.css';
import { CalendarDays, CheckCircle2, Sparkles, Timer } from 'lucide-react'

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
   return (
   <div id='bg' className='bg-gradient-to-b from-violet-50 to-white'>
   <div className='flex justify-center text-center'>
   <div className="">
 <h1  id='l-h1' className="md:text-5xl text-2xl font-medium md:mt-32 mt-12 p-0 md:mb-4 font-poppin"><p className='pb-0'>The Only Tool You Will Ever</p> <p className='pt-0'>Need to Manage All Your Activities</p>
 </h1>  
   <h2 className="text-base p-0 text-gray-600">
    <p className="py-0 my-0 md:text-base text-sm">Seamlessly track, organize, and triangulate your tasks with fludity, all in one</p>
   <p className="py-0 mb-0 md:text-base text-sm">web-based solution designed to boost your productivity and keep you on</p>
  <p className='py-0 md:text-base text-sm'> top of everything. </p>
   </h2> <Link to='/register'>
   <button className="px-4 py-3 m-1 text-white font-bold bg-gradient-to-r from-[#6a11cb] to-[#2575fc] rounded-full shadow-xl border-2 border-transparent hover:border-white hover:shadow-2xl hover:scale-110 transform transition-all duration-300 relative overflow-hidden">
   <span className="absolute inset-0 bg-gradient-to-r from-[#ffffff33] via-[#ffffff1a] to-[#ffffff00] opacity-40 blur-lg"></span>
   <span className="relative z-10">Get Started</span>
  </button>
  </Link>
   </div>
  
  
   </div>
<div className="flex justify-center">
 <img data-aos="zoom-in" src={pics} alt="hero" className=" rounded-2xl w-5/6 mt-12 hidden sm:block"/>
  </div>

  {/* <h3 data-aos="fade-up" className='text-4xl text-center p-24 font-ubuntu italic'>Increase Your Productivity And Be Time Conscious<br/> Of All You Do</h3> */}

    <div data-aos='fade-up' className="min-h-screen ">
      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 p-8 text-white">
              <h3 className="text-2xl font-bold">Powerful Task Management</h3>
              <p className="mt-4 text-violet-100">
                Create, organize, and track your tasks with our intuitive interface.
                Stay productive with smart features designed for modern workflows.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Timer,
                  title: "Time Tracking",
                  description: "Monitor task duration",
                },
                {
                  icon: CheckCircle2,
                  title: "Task Progress",
                  description: "Track completion status",
                },
                {
                  icon: CalendarDays,
                  title: "Due Dates",
                  description: "Never miss deadlines",
                },
                {
                  icon: Sparkles,
                  title: "Smart Features",
                  description: "AI-powered insights",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <feature.icon className="h-8 w-8 text-violet-500" />
                  <h4 className="mt-4 font-semibold">{feature.title}</h4>
                  <p className="mt-2 text-sm text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-aos='fade-up'  className="mb-20">
          <div className="rounded-3xl bg-violet-950 p-12 text-white">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">About Lumin</h2>
                <p className="mt-4 text-violet-200">
                  Welcome to the future of task management. We've reimagined how modern professionals organize their work
                  and achieve their goals. Our platform combines beautiful design with powerful functionality to create
                  an experience that makes productivity effortless.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { number: "50K+", label: "Active Users" },
                    { number: "1M+", label: "Tasks Completed" },
                    { number: "99.9%", label: "Uptime" },
                    { number: "24/7", label: "Support" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-violet-300">{stat.number}</div>
                      <div className="text-sm text-violet-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
                <img src={illustration} alt="" />
            </div>
          </div>
          </div>
        </section>

        <section data-aos='fade-up'  className="mb-20">
          <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-purple-600 p-12 text-center text-white">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Transform Your Workflow?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-violet-100">
              Join thousands of professionals who have already revolutionized their task management with Lumin.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
         <Link to='/register'>
              <button className="rounded-md bg-white px-8 py-3 font-semibold text-violet-500 hover:bg-violet-50">
                Get Started Now
              </button>
              </Link>
              <button className="rounded-md border border-white px-8 py-3 font-semibold text-white hover:bg-white/10">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-violet-950">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="font-semibold text-violet-500">Product</h3>
              <ul className="mt-4 space-y-2 text-white">
                <li><a href="#features" className="text-sm text-gray-300 hover:text-violet-500">Features</a></li>
                <li><a href="#pricing" className="text-sm text-gray-300 hover:text-violet-500">Pricing</a></li>
                <li><a href="#security" className="text-sm text-gray-300 hover:text-violet-500">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-violet-500">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#about" className="text-sm text-gray-300 hover:text-violet-500">About</a></li>
                <li><a href="#blog" className="text-sm text-gray-300 hover:text-violet-500">Blog</a></li>
                <li><a href="#careers" className="text-sm text-gray-300 hover:text-violet-500">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-violet-500">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#documentation" className="text-sm text-gray-300 hover:text-violet-500">Documentation</a></li>
                <li><a href="#help" className="text-sm text-gray-300 hover:text-violet-500">Help Center</a></li>
                <li><a href="#contact" className="text-sm text-gray-300 hover:text-violet-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-violet-500">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#privacy" className="text-sm text-gray-300 hover:text-violet-500">Privacy</a></li>
                <li><a href="#terms" className="text-sm text-gray-300 hover:text-violet-500">Terms</a></li>
                <li><a href="#cookies" className="text-sm text-gray-300 hover:text-violet-500">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
            <p className="text-sm text-gray-300">© 2024 Lumin. All rights reserved.</p>
            <div className="mt-4 flex space-x-6 sm:mt-0">
              <a href="#twitter" className="text-gray-300 hover:text-violet-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#github" className="text-gray-300 hover:text-violet-500">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>



</div>
  
   );
  };
  
  export default Hero;
  