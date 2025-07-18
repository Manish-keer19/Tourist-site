



// import React from 'react';
// import { motion } from 'framer-motion';
// import rajesh from "../assets/rajesh.jpg"
// import singaji from "../assets/singaji.jpeg"

// // Customizable variables
// const COLORS = {
//   gradient: {
//     dark: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #4c1d95 100%)',
//     light: 'linear-gradient(135deg, #1e40af 0%, #5b21b6 50%, #7e22ce 100%)'
//   },
//   accent: '#7c3aed'
// };

// // const OWNER_DETAILS = {
// //   name: 'Hari Halwai Kakriay',
// //   title: 'Founder & Spiritual Guide',
// //   description: [
// //     "With over 20 years of spiritual experience, Shri Santosh Singh has dedicated his life to preserving and sharing the teachings of Sant Singaji. Born in the sacred lands where Sant Singaji meditated, he carries forward the legacy through these transformative tours.",
// //     "His vision is to create authentic spiritual experiences that connect devotees with the divine energy of these holy sites. Each tour is carefully crafted to provide not just sightseeing, but true spiritual awakening.",
// //     "\"Our mission is not just to show you places, but to help you experience the divine presence that Sant Singaji embodied in these sacred spaces.\""
// //   ],
// //   imageUrl: 'https://manish-portfolio19.vercel.app/assets/m2-ySUA4ya2.jpg'
// // };


// const OWNER_DETAILS = {
//   name: 'पंडित हरि हलवाई तिवारी ककरिया जी',
//   title: 'संस्थापक एवं आध्यात्मिक मार्गदर्शक',
//   description: [
//     "पंडित हरि हलवाई तिवारी ककरिया जी एक प्रतिष्ठित एवं अनुभवी धार्मिक मार्गदर्शक हैं, जिन्होंने पिछले 10 वर्षों से लोगों को धर्म और आस्था के मार्ग पर चलने की प्रेरणा दी है।",
//     "वे भारत के प्रमुख धार्मिक स्थलों पर दर्शन कराने की सेवा प्रदान करते हैं, जिससे श्रद्धालु उन पवित्र स्थानों की दिव्यता का अनुभव कर सकें।",
//     "उनका उद्देश्य केवल यात्रा नहीं, बल्कि हर व्यक्ति को आध्यात्मिक शांति और सच्चे दर्शन का अनुभव कराना है।",
//     "वे श्रद्धालुओं को हर प्रमुख धार्मिक स्थल – जैसे उज्जैन, काशी, वृंदावन, हरिद्वार, अयोध्या, द्वारका आदि – पर दर्शन कराते हैं, और उनकी यात्रा को एक पवित्र अनुभव में बदलते हैं।"
//   ],
//   imageUrl: rajesh
  

// };


// const PAGE_CONTENT = {
//   title: 'Welcome to Sant Singaji Tourist Party',
//   subtitle: 'Your spiritual journey begins with us'
// };

// function Home() {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="min-h-screen transition-colors duration-300 overflow-hidden"
//       style={{
//         background: COLORS.gradient.dark
//       }}
//     >
//       {/* Animated floating particles */}
//       <div className="absolute inset-0 overflow-hidden opacity-20">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-purple-400"
//             initial={{
//               x: Math.random() * 100,
//               y: Math.random() * 100,
//               width: Math.random() * 10 + 2,
//               height: Math.random() * 10 + 2,
//               opacity: 0
//             }}
//             animate={{
//               y: [null, (Math.random() - 0.5) * 100],
//               x: [null, (Math.random() - 0.5) * 100],
//               opacity: [0, 0.4, 0],
//               transition: {
//                 duration: Math.random() * 20 + 10,
//                 repeat: Infinity,
//                 repeatType: 'reverse'
//               }
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10">
//         {/* Welcome Section */}
//         <motion.div 
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
//           className="py-20 px-4 sm:px-6 lg:px-8 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
//             {PAGE_CONTENT.title}
//           </h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 1 }}
//             className="text-2xl text-purple-200 max-w-3xl mx-auto font-light"
//           >
//             {PAGE_CONTENT.subtitle}
//           </motion.p>
//         </motion.div>

//         {/* Owner Section */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8, type: 'spring' }}
//             className="flex flex-col md:flex-row items-center gap-12 bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-purple-900/50"
//           >
//             {/* Owner Image - Left Side */}
//             <motion.div 
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               className="md:w-1/3"
//             >
//               <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-purple-500/20">
//                 <img 
//                   src={OWNER_DETAILS.imageUrl}
//                   alt={`${OWNER_DETAILS.name} - ${OWNER_DETAILS.title}`}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//             </motion.div>

//             {/* Owner Details - Right Side */}
//             <div className="md:w-2/3 space-y-6">
//               <motion.h2 
//                 initial={{ x: 20, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
//               >
//                 {OWNER_DETAILS.name}
//               </motion.h2>
              
//               <motion.p 
//                 initial={{ x: 20, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 className="text-xl text-purple-300"
//               >
//                 {OWNER_DETAILS.title}
//               </motion.p>
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4, staggerChildren: 0.1 }}
//                 className="space-y-4 text-gray-300"
//               >
//                 {OWNER_DETAILS.description.map((paragraph, index) => (
//                   <motion.p 
//                     key={index}
//                     initial={{ y: 10, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                     className="text-lg leading-relaxed"
//                   >
//                     {paragraph}
//                   </motion.p>
//                 ))}
//               </motion.div>

//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.8 }}
//                 className="flex flex-wrap gap-4 pt-6"
//               >
//                 <motion.button 
//                   whileHover={{ scale: 1.05, backgroundColor: COLORS.accent }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition duration-300 shadow-lg shadow-purple-500/20"
//                 >
//                   Contact Owner
//                 </motion.button>
                
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Home;











import React from 'react';
import { motion } from 'framer-motion';
import rajesh from "../assets/rajesh.jpg";
import singaji from "../assets/singaji.jpeg";



const OWNER_DETAILS = {
  name: 'पंडित हरि हलवाई तिवारी ककरिया जी',
  title: 'संस्थापक एवं आध्यात्मिक मार्गदर्शक',
  description: [
    "पंडित हरि हलवाई तिवारी ककरिया जी एक प्रतिष्ठित एवं अनुभवी धार्मिक मार्गदर्शक हैं, जिन्होंने पिछले 10 वर्षों से लोगों को धर्म और आस्था के मार्ग पर चलने की प्रेरणा दी है।",
    "वे भारत के प्रमुख धार्मिक स्थलों पर दर्शन कराने की सेवा प्रदान करते हैं, जिससे श्रद्धालु उन पवित्र स्थानों की दिव्यता का अनुभव कर सकें।",
    "उनका उद्देश्य केवल यात्रा नहीं, बल्कि हर व्यक्ति को आध्यात्मिक शांति और सच्चे दर्शन का अनुभव कराना है।",
    "वे श्रद्धालुओं को हर प्रमुख धार्मिक स्थल – जैसे उज्जैन, काशी, वृंदावन, हरिद्वार, अयोध्या, द्वारका आदि – पर दर्शन कराते हैं, और उनकी यात्रा को एक पवित्र अनुभव में बदलते हैं।"
  ],
  imageUrl: rajesh
};

const PAGE_CONTENT = {
  title: 'Welcome to Sant Singaji Tourist Party',
  subtitle: 'Your spiritual journey begins with us',
  quote: '"The true journey is the one that takes you within."'
};

function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen transition-colors duration-300 overflow-hidden relative"
      
    >
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-400 to-pink-500"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              opacity: 0
            }}
            animate={{
              y: [null, (Math.random() - 0.5) * 100],
              x: [null, (Math.random() - 0.5) * 100],
              opacity: [0, 0.6, 0],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
          />
        ))}
      </div>

      {/* Glowing blobs */}
      <div className="fixed -z-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Singaji Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-96 w-full overflow-hidden"
        >
          <img 
            src={singaji}
            alt="Sant Singaji"
            className="w-full h-full object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 text-center p-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Experience Divine Journeys
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-yellow-200 max-w-3xl mx-auto"
            >
              {PAGE_CONTENT.quote}
            </motion.p>
          </div>
        </motion.div>

        {/* Welcome Section */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
          className="py-16 px-4 sm:px-6 lg:px-8 text-center relative"
        >
         
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500">
              {PAGE_CONTENT.title}
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl text-purple-200 max-w-3xl mx-auto font-light"
          >
            {PAGE_CONTENT.subtitle}
          </motion.p>
          
         
        </motion.div>

        {/* Owner Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex flex-col md:flex-row items-center gap-12 bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-purple-900/50 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-yellow-600/20 blur-3xl"></div>
            
            {/* Owner Image - Left Side */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="md:w-1/3 relative"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 relative">
                <img 
                  src={OWNER_DETAILS.imageUrl}
                  alt={`${OWNER_DETAILS.name} - ${OWNER_DETAILS.title}`}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold">10+ Years</span> Experience
              </div>
            </motion.div>

            {/* Owner Details - Right Side */}
            <div className="md:w-2/3 space-y-6 relative z-10">
              <motion.h2 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold text-white"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  {OWNER_DETAILS.name}
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-purple-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                {OWNER_DETAILS.title}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, staggerChildren: 0.1 }}
                className="space-y-4 text-gray-300"
              >
                {OWNER_DETAILS.description.map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-lg leading-relaxed border-l-4 border-yellow-500 pl-4 py-1"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-6"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Owner
                </motion.button>
                
               
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>

    
    </motion.div>
  );
}

export default Home;