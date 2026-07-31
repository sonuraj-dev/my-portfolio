import {FaJava, FaReact} from 'react-icons/fa';
import {SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiPython, SiDocker, SiMongodb, SiAngular} from 'react-icons/si';
import {DiNodejsSmall} from 'react-icons/di';




export default function Skills() {


const skills=  [
{ icon: <FaJava />, name: "Java" },
{ icon: <FaReact/>, name: "React"},
{ icon: <SiNextdotjs />, name: "Next.js" },
{ icon: <SiTypescript />, name: "TypeScript"},
{ icon: <SiTailwindcss />, name: "Tailwind CSS" },
{ icon: <SiFastapi />, name: "FastAPI" },
{ icon: <SiPython />, name: "Python" },
{ icon: <SiDocker />, name: "Docker"},
{ icon: <DiNodejs Small />, name: "Node.js" },
{ icon: <SiMongodb />, name: "MongoDB" },
{ icon: <SiAngular />, name: "Angular"},
];


return(
<section id="skills" className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative
bg-pink-800text-white overflow-hidden">
</section>
)

}