import {motion ,AnimatePresence} from 'framer-motion'


export default function OverlayMenu({isOpen,onClose}){
  return(
<AnimatePresence>

{isOpen && (
<motion.div className="fixed inset-0 flex items-center justify-center z-50">
<button>
<fix/>


</button>


</motion.div>


)




}


</AnimatePresence>

  )
}