






import { motion } from 'framer-motion';
import rajesh from "../assets/rajesh.jpg";

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

const staffData = [
 {
    name: "Rajesh Keer",
    image: rajesh
  },
  {
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Amit Patil",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Neeta Deshpande",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Sanjay Verma",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Meena Yadav",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

function Staff() {
  return (
    <div 
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: COLORS.gradient.dark,
        color: COLORS.text.primary
      }}
    >
      {/* Page Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl max-w-3xl mx-auto"
          style={{ color: COLORS.text.secondary }}
        >
          The faces behind Sant Singaji Tourist Group
        </motion.p>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
        {staffData.map((member, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg group">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"
                style={{ background: COLORS.gradient.accent, opacity: 0.3 }}
              ></div>
            </div>
            
            <h3 className="text-lg font-medium text-center">{member.name}</h3>
           
          </motion.div>
        ))}
      </div>

      {/* Footer Element */}
      <motion.div 
        className="mt-20 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div 
          className="h-1 w-24 rounded-full"
          style={{ background: COLORS.gradient.accent }}
        ></div>
      </motion.div>
    </div>
  );
}

export default Staff;