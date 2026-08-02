import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

const experiences =[
{
role: "Programmer",
company: "Technocrats Robotics",
duration: "2025 - Present",
description: "Working on robotics and automation projects, developing software solutions for various applications.",
},
{
role: "University Teaching Assistant",
company: "Vellore Institute of Technology",
duration: "2026",
description: "Gained hands-on experience in teaching and mentoring students.",
},
{
role: "Designer",
company: "Sangam Club",
duration: "2024-2026",
description: "event management and design work for various club activities and events.",
},
];
function ExperienceItem ({exp, idx, start, end, scrollYProgress, layout}){
           const scale = useTransform (scrollYProgress, [start,end], [0,1])
 const opacity = useTransform (scrollYProgress, [start,end,1], [0,1,1])
const y =useTransform(scrollYProgress, [start,end], [idx%2 === 0 ? 30 : -30,0])
const x= useTransform(scrollYProgress, [start, end], [-24, 0])
if(layout === "desktop") {
return(
<div className="relative flex flex-1 justify-center items-center min-w-0">
<motion.div className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
style={{scale, opacity}}
>
</motion.div>
<motion.div className={`absolute ${idx%2==0 ? "-top-8": "-bottom-8"} w-[3px] bg-white/40`}
style={{height: 40, opacity}}
>
</motion.div>
<motion.article className={`absolute ${idx%2===0? "bottom-12" : "top-12"}
bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-7 w-[320px] shadow-lg`}
style={{opacity, y, maxWidth: "90vw"}}
transition={{duration: 0.4, delay: idx*0.15}}
>



<h3 className="text-lg font-semibold break-words">
{exp.role}
</h3>
<p className="text-sm text-gray-400 mb-2 break-words"> {exp.company} | {exp.duration}
</p>
<p className="text-sm text-gray-300 break-words">
{exp.description}
</p>





</motion.article>
</div>      


)
}

if (layout === "mobile") {
  return (
    <div className="relative flex items-start gap-6 min-h-[180px]">
      {/* Timeline Dot */}
      <motion.div
        className="relative z-10 w-6 h-6 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
        style={{ scale, opacity }}
      />

      {/* Card */}
      <motion.article
        className="flex-1 bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-6 shadow-lg"
        style={{
          opacity,
          x,
          maxWidth: "100%",
        }}
        transition={{
          duration: 0.4,
          delay: idx * 0.15,
        }}
      >
        <h3 className="text-lg font-semibold break-words">
          {exp.role}
        </h3>

        <p className="text-sm text-gray-400 mb-2 break-words">
          {exp.company} | {exp.duration}
        </p>

        <p className="text-sm text-gray-300 break-words">
          {exp.description}
        </p>
      </motion.article>
    </div>
  );
}


}









export default function Experience(){
const sceneRef = useRef (null);
const [isMobile, setIsMobile] = useState(false);


useEffect(() => {
const checkMobile = () => setIsMobile(window.innerWidth < 768);
checkMobile();
window.addEventListener("resize", checkMobile)
return () => window.removeEventListener("resize", checkMobile)
}, [])
const SCENE_HEIGHT_VH = isMobile? 160*experiences.length: 120*experiences.length;

const {scrollYProgress} = useScroll({
target: sceneRef,
offset: ["start start", "end end"]
})


const thresholds = useMemo (() => experiences.map((_, i) => (i+1) /experiences.length), [])
const lineSize = useTransform (scrollYProgress, (v) => `${v*100}%`)
return(
<section id="experience" className="relative bg-black text-white">
<div ref={sceneRef}
style={{height: `${SCENE_HEIGHT_VH}vh`, minHeight: "120vh"}}
className="relative"
>
<div className="sticky top-0 h-screen flex flex-col">
<h2 className="text-4xl sm:text-5xl font-semibold mt-5 text-center">
Experience
</h2>
<div className="flex flex-1 items-center justify-center px-6 pb-10">


{!isMobile && (
<div className="relative w-full max-w-7xl">
<div className="relative h-[6px] bg-white/15 rounded">
<motion.div className="absolute left-0 top-0 h-[6px] bg-white rounded origin-left"
style={{width: lineSize}}
>
</motion.div>
</div>
<div className="relative flex justify-between mt-0">
{experiences.map((exp, idx) => (
<ExperienceItem
key={idx}
exp={exp}
idx={idx}
start={idx === 0 ? 0: thresholds [idx-1]}
end={thresholds[idx]}
scrollYProgress={scrollYProgress}
layout="desktop"/>
))}
</div>
</div>
)}

{isMobile && (
<div className="relative w-full max-w-md">
<div className="absolute left-0 top-0 bottom-0 w-[6px] bg-white/15 rounded">
<motion.div className="absolute top-0 left-0 w-[6px] bg-white rounded origin-top"
style={{height: lineSize}}
>
</motion.div>
</div>
<div className="relative flex flex-col gap-10 ml-10 mt-6 pb-28">
{experiences.map((exp,idx) => (
<ExperienceItem
key={idx}
exp={exp}
idx={idx}
start={idx === 0 ? 0: thresholds [idx-1]}
end={thresholds[idx]}
scrollYProgress={scrollYProgress}
layout="mobile"/>
))}
</div>
</div>
)}
</div>
</div>








</div>







 
</section>


)
}
