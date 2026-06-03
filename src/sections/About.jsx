import {motion} from "framer-motion";

import boy from "../assets/boy.jpg"


export default function About(){


  const stats=[
    {label: "Experience", value : "1+ years"},
    {label:"speciality",value: "ML Engineer"},
    {label:"Focus",value: "ML Ops and Deployment"},
  ];
const glows=[
  "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
  "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
]

  return (
    <section id="about" 
    className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden">
<div className="absolute inset-0 pointer-events-none">

  {glows.map((c,i)=>(
    <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}/> 
  ))}
</div>

<div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12 " >
  <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
  initial={{opacity:0 , y: 24}}
  whileInView={{opacity:1 , y:0}}
  transition={{duration:0.6 }}
  viewport={{once:true , amount:0.4}}
  >
<motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#1cd8d2]/20 to-[#302b63]/20 border-[#1cd8d2]/35">
  <img src ={boy} alt ="profile" className="absolute inset-0"/>

</motion.div>
<div className="flex-1-flex flex-col justify-center text-center md:text-left">
  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
    Sonu Raj
  </h2>
  <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
  ML Engineer</p>
  <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
  Passionate about leveraging machine learning to solve real-world problems and drive innovation. With a strong foundation in data analysis, model development, and deployment, I am dedicated to creating impactful solutions that enhance user experiences and optimize business processes.
  </p>
  <div>
    {stats.map((item,i)=> (
      <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
      initial={{opacity:0,y:10}}
      whileInView={{opacity:1,y:0}}
      transition={{delay:0.05*i,duration:0.4}}
      viewport={{once:true,amount:0.3}}>
        <div className="text-sm text-gray-400">{item.label}</div>
        <div className="text-sm font-semibold">{item.value}</div>

      </motion.div>
    ))}
  </div>
</div>
  </motion.div>


</div>
      </section>
  
)
}
