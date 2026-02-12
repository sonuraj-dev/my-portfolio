import {motion ,AnimatePresence} from 'framer-motion'


export default function OverlayMenu({isOpen,onClose}){
  return(
<AnimatePresence>

{isOpen && (
<div>


  
</div>


)




}


</AnimatePresence>

  )
}