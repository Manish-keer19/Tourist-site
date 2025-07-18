import React from 'react'
import Home from './Home'
import Places from './Places'

import Staff from './Staf'
import Footer from './Footer'
import { motion } from 'framer-motion';
function Layout() {

  // Customizable variables
const COLORS = {
  gradient: {
    dark: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    light: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
    accent: 'linear-gradient(90deg, #ff8a00 0%, #e52e71 100%)'
  },
  text: {
    primary: '#ffffff',
    secondary: '#e2e8f0',
    accent: '#fbbf24'
  }
};
  return (

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen transition-colors duration-300 overflow-hidden relative"
      style={{
        background: COLORS.gradient.dark
      }}
    > 

  
    <div >
    
    <Home/>
    <Places/>
    <Staff/>
    <Footer/>
    </div>
       
       </motion.div>
  )
}

export default Layout