
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import narmada from "../assets/narmda.jpeg"
// import rammandir from "../assets/rammandir.avif"
// import kashi from "../assets/Kashi_Vishwanath.jpg"
// import krishna from "../assets/krishna.webp"
// import puri from "../assets/puri.webp"
// import rameshwaram from "../assets/rameshwaramm.jpg"
// import badrinath from "../assets/badrinath.jpeg"
// import dwarka from "../assets/dwaraka.jpeg"
// import kedarnath from "../assets/kedarnath.webp"
// import tirumala from "../assets/tirumala.jpeg"
// import vashno from "../assets/vaishno.jpeg"
// import amarnath from "../assets/amarnath.jpg"
// import Pashupatinath from "../assets/Pashupatinath.jpg"
// const Places = () => {
//   const [language, setLanguage] = useState('hindi'); // 'hindi' or 'english'

//   // Language toggle function
//   const toggleLanguage = () => {
//     setLanguage(prev => prev === 'hindi' ? 'english' : 'hindi');
//   };

//   // Content based on language
//   const content = {
//     hindi: {
//       header: {
//         title: "संत सिंगाजी टूरिस्ट पार्टी",
//         subtitle: "आध्यात्मिक यात्राओं का अनूठा अनुभव",
//         blessing: "जय मां नर्मदे | ॥ श्री गणेशाय नमः ॥"
//       },
//       overview: {
//         title: "पवित्र तीर्थ यात्राएँ",
//         description: "हमारे साथ भारत के सबसे पवित्र तीर्थ स्थलों की यात्रा करें। हमारे द्वारा आयोजित यात्राएँ भक्ति, सुविधा और सांस्कृतिक अनुभव का अनूठा संगम प्रदान करती हैं।",
//         highlights: [
//           {
//             title: "मथुरा-वृन्दावन ब्रज यात्रा",
//             content: "ब्रज की 84 कोस परिक्रमा का पुण्य लाभ लें, जिसमें भगवान कृष्ण के जीवन से जुड़े सभी महत्वपूर्ण मंदिरों के दर्शन शामिल हैं।"
//           },
//           {
//             title: "गया-अयोध्या श्राद्ध पक्ष यात्रा",
//             content: "गयाजी में पितृ तर्पण करें, अयोध्या में राम जन्मभूमि के दर्शन करें और काशी विश्वनाथ मंदिर की आध्यात्मिक शक्ति का अनुभव करें।"
//           },
//           {
//             title: "नर्मदा परिक्रमा",
//             content: "पवित्र नर्मदा नदी की पूर्ण परिक्रमा करें, अमरकंटक में उद्गम स्थल के दर्शन करें और इस पवित्र नदी के किनारे स्थित सभी प्रमुख तीर्थों का भ्रमण करें।"
//           },
//           {
//             title: "जगन्नाथपुरी – रामेश्वरम यात्रा",
//             content: "जगन्नाथ जी के भव्य रथ यात्रा में सम्मिलित हों, रामेश्वरम में पवित्र स्नान और ज्योतिर्लिंग के दर्शन करें।"
//           },
//           {
//             title: "9 ज्योतिर्लिंग – नेपाल – गंगासागर यात्रा",
//             content: "भारत के 9 प्रमुख ज्योतिर्लिंगों के दर्शन करें, पशुपतिनाथ नेपाल में पूजा करें और गंगासागर संगम में पुण्य स्नान का लाभ लें।"
//           },
//           {
//             title: "प्रयागराज – अयोध्या – काशी – गया यात्रा",
//             content: "त्रिवेणी संगम में स्नान, अयोध्या में श्रीराम जन्मभूमि, काशी विश्वनाथ के दर्शन एवं गया में पिंडदान करें।"
//           },
//           {
//             title: "एक धाम – रामेश्वरम – 7 ज्योतिर्लिंग यात्रा",
//             content: "रामेश्वरम सहित भारत के सात प्रमुख ज्योतिर्लिंग स्थलों के दर्शन और आध्यात्मिक अनुभव।"
//           }
//         ]
//       },
     

//        sacredPlaces : [
//   {
//     name: "श्री कृष्ण जन्मभूमि",
//     location: "मथुरा, उत्तर प्रदेश",
//     description: "भगवान श्रीकृष्ण का जन्मस्थान, यह मंदिर हिंदुओं के लिए सबसे पवित्र स्थलों में से एक है।",
//     image: krishna,
//     type: "temple"
//   },
//   {
//     name: "काशी विश्वनाथ मंदिर",
//     location: "वाराणसी, उत्तर प्रदेश",
//     description: "भगवान शिव को समर्पित यह मंदिर 12 ज्योतिर्लिंगों में से एक है।",
//     image: kashi,
//     type: "temple"
//   },
//   {
//     name: "राम मंदिर",
//     location: "अयोध्या, उत्तर प्रदेश",
//     description: "भगवान राम की जन्मभूमि पर निर्मित भव्य मंदिर जो हिंदू धर्म के इतिहास में महत्वपूर्ण है।",
//     image: rammandir,
//     type: "temple"
//   },
//   {
//     name: "जगन्नाथ मंदिर",
//     location: "पुरी, ओडिशा",
//     description: "भगवान जगन्नाथ, बलभद्र और सुभद्रा को समर्पित यह मंदिर रथ यात्रा के लिए प्रसिद्ध है।",
//     image: puri,
//     type: "temple"
//   },
//   {
//     name: "रामेश्वरम मंदिर",
//     location: "रामेश्वरम, तमिलनाडु",
//     description: "यह दक्षिण भारत में स्थित 12 ज्योतिर्लिंगों में से एक महत्वपूर्ण तीर्थस्थल है।",
//     image: rameshwaram,
//     type: "temple"
//   },
//   {
//     name: "बद्रीनाथ मंदिर",
//     location: "उत्तराखंड",
//     description: "चारधामों में से एक, यह भगवान विष्णु को समर्पित पर्वतीय तीर्थ है।",
//     image: badrinath,
//     type: "temple"
//   },
//   {
//     name: "द्वारकाधीश मंदिर",
//     location: "द्वारका, गुजरात",
//     description: "भगवान श्रीकृष्ण का राजसी निवास स्थान, चारधामों में से एक।",
//     image: dwarka,
//     type: "temple"
//   },
//   {
//     name: "केदारनाथ मंदिर",
//     location: "उत्तराखंड",
//     description: "भगवान शिव को समर्पित हिमालयी तीर्थ जो 12 ज्योतिर्लिंगों में से एक है।",
//     image: kedarnath,
//     type: "temple"
//   },
//   {
//     name: "तिरुपति बालाजी मंदिर",
//     location: "तिरुमला, आंध्र प्रदेश",
//     description: "भगवान वेंकटेश्वर को समर्पित यह विश्व के सबसे धनी मंदिरों में से एक है।",
//     image: tirumala,
//     type: "temple"
//   },
//   {
//     name: "वैष्णो देवी मंदिर",
//     location: "कटरा, जम्मू",
//     description: "माँ वैष्णो देवी को समर्पित यह पर्वतीय मंदिर उत्तर भारत के प्रमुख तीर्थों में गिना जाता है।",
//     image: vashno,
//     type: "temple"
//   },
//   {
//     name: "अमरनाथ गुफा मंदिर",
//     location: "जम्मू और कश्मीर",
//     description: "यह पवित्र गुफा शिवलिंग के रूप में बर्फ से बनती है, जो शिवभक्तों के लिए अत्यंत पूजनीय है।",
//     image: amarnath,
//     type: "temple"
//   },
//   {
//     name: "पशुपतिनाथ मंदिर",
//     location: "काठमांडू, नेपाल",
//     description: "यह भगवान शिव का अंतरराष्ट्रीय प्रसिद्ध मंदिर है जो यूनेस्को विश्व धरोहर स्थल भी है।",
//     image: Pashupatinath,
//     type: "temple"
//   },
//   {
//     name: "नर्मदा उद्गम स्थल",
//     location: "अमरकंटक, मध्य प्रदेश",
//     description: "पवित्र नर्मदा नदी का उद्गम स्थल जहाँ से नर्मदा परिक्रमा शुरू होती है।",
//     image: narmada,
//     type: "sacred"
//   }
// ],
//       upcomingTours: [
//         {
//           title: "श्री धाम मथुरा वृन्दावन यात्रा",
//           date: "22-10-2025",
//           duration: "8-10 दिन",
//           price: "₹10,500",
//           highlights: [
//             "ब्रज चौरासी कोस की यात्रा",
//             "यम दितीया पर यमुना स्नान",
//             "श्रीराम मंदिर अयोध्या दर्शन",
//             "समस्त ब्रज मंदिरों के दर्शन"
//           ],
//           contact: "पं. हरि तिवारी: 9926622354, 6264757691"
//         },
//         {
//           title: "श्राद्ध पक्ष गया-अयोध्या यात्रा",
//           date: "05-09-2025",
//           duration: "8-10 दिन",
//           price: "₹8,000",
//           highlights: [
//             "गयाजी में पिंडदान",
//             "अयोध्या व चित्रकूट दर्शन",
//             "काशी विश्वनाथ दर्शन",
//             "प्रयागराज में स्नान"
//           ],
//           contact: "पं. हरि तिवारी: 9926622354, 6264757691"
//         },
//         {
//           title: "नर्मदा परिक्रमा यात्रा",
//           date: "03-11-2025",
//           duration: "विवरण के लिए संपर्क करें",
//           price: "विवरण के लिए संपर्क करें",
//           highlights: [
//             "पूर्ण नर्मदा परिक्रमा",
//             "सभी प्रमुख तीर्थ स्थान",
//             "नर्मदा उद्गम दर्शन",
//             "पवित्र स्नान एवं पूजा"
//           ],
//           contact: "पं. हरि तिवारी: 9926622354, 6264757691"
//         }
//       ],
//       experience: {
//         title: "आपका आध्यात्मिक यात्रा अनुभव",
//         points: [
//           {
//             title: "आध्यात्मिक महत्व",
//             content: "हमारी यात्राएँ अधिकतम आध्यात्मिक लाभ प्रदान करने के लिए डिज़ाइन की गई हैं। ब्रज यात्रा 84 लाख योनियों से मुक्ति दिलाती है, गया श्राद्ध पितरों को शांति प्रदान करता है और नर्मदा परिक्रमा पृथ्वी की परिक्रमा के समान मानी जाती है।",
//             icon: "spiritual"
//           },
//           {
//             title: "आरामदायक यात्रा",
//             content: "हम एसी बसें, नियमित भोजन व्यवस्था (प्रतिदिन 2 भोजन + 2 चाय विराम) और सुचारु आध्यात्मिक यात्रा के लिए सभी आवश्यक व्यवस्थाएं प्रदान करते हैं। स्पंज बिस्तर और प्लेट्स उपलब्ध कराई जाती हैं।",
//             icon: "comfort"
//           },
//           {
//             title: "समूह अनुभव",
//             content: "50 यात्रियों के समूह के साथ यात्रा करें। हमारे अनुभवी गाइड प्रत्येक पवित्र स्थल के बारे में ज्ञान प्रदान करते हैं और हम सभी महत्वपूर्ण स्थानों को कवर करने के लिए एक अनुशासित कार्यक्रम बनाए रखते हैं।",
//             icon: "group"
//           },
//           {
//             title: "आदर्श समय",
//             content: "हमारी यात्राएँ आध्यात्मिक रूप से महत्वपूर्ण अवधि के दौरान निर्धारित की जाती हैं - ब्रज यात्रा के लिए कार्तिक मास, गया तीर्थ के लिए श्राद्ध पक्ष और नर्मदा परिक्रमा के लिए सुहावने मौसम के महीने।",
//             icon: "timing"
//           }
//         ]
//       },
//       rules: {
//         title: "यात्रा नियम एवं सूचनाएँ",
//         points: [
//           "बस में 50 सवारी जाएँगी, सवारी पूरी होने पर ही बस रवाना होगी",
//           "5 से 8 वर्ष के बच्चे का आधा टिकट लगेगा (सीट नहीं मिलेगी)",
//           "यात्रा में व्यवस्थापक द्वारा दिया गया समय मान्य होगा",
//           "यात्री अपना आधार कार्ड एवं आवश्यक दवाइयाँ साथ लाएँ",
//           "यात्रा बीच में छोड़ने पर किराया वापस नहीं होगा",
//           "धर्मशाला किराया, टैक्सी एवं गाइड खर्च यात्री द्वारा देना होगा"
//         ]
//       },
//       footer: {
//         address: "संत सिंगाजी टूरिस्ट पार्टी, कांकरिया (देवास)",
//         blessing: "जय मां नर्मदे | हर हर महादेव"
//       },
//       buttons: {
//         bookNow: "सीट बुक करें",
//         viewDetails: "विवरण देखें",
//         contact: "संपर्क करें"
//       }
//     },
//     english: {
//       header: {
//         title: "Sant Singaji Tourist Party",
//         subtitle: "Unique Spiritual Journey Experiences",
//         blessing: "Jai Maa Narmade | ॥ Shri Ganeshaya Namah ॥"
//       },
//       overview: {
//         title: "Divine Pilgrimage Experiences",
//         description: "Embark on a spiritual journey to India's most sacred destinations with our carefully curated pilgrimage tours. Our packages combine devotion, comfort, and cultural immersion for a transformative experience.",
//         highlights: [
//           {
//             title: "Mathura-Vrindavan Braj Yatra",
//             content: "Experience the 84 Kos Braj Parikrama covering all significant temples associated with Lord Krishna's life, including Yamuna snan at Brahmand Ghat on Bhai Dooj."
//           },
//           {
//             title: "Gaya-Ayodhya Shraddha Paksha Tour",
//             content: "Perform pind daan for ancestors in Gaya, visit Ram Janmabhoomi in Ayodhya, and experience the spiritual power of Kashi Vishwanath Temple in Varanasi."
//           },
//           {
//             title: "Narmada Parikrama",
//             content: "Complete the sacred circumambulation of the Narmada river, visiting the origin point at Amarkantak and all major tirthas along this holy river."
//           }
//         ]
//       },
//       sacredPlaces: [
//         {
//           name: "Shri Krishna Janmabhoomi",
//           location: "Mathura, Uttar Pradesh",
//           description: "Birthplace of Lord Krishna, this temple is one of the holiest sites for Hindus.",
//           image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
//           type: "temple"
//         },
//         {
//           name: "Kashi Vishwanath Temple",
//           location: "Varanasi, Uttar Pradesh",
//           description: "Dedicated to Lord Shiva, this temple is one of the 12 Jyotirlingas.",
//           image: "https://images.unsplash.com/photo-1586136192650-4b6f3a5f4e6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
//           type: "temple"
//         },
//         {
//           name: "Ram Temple",
//           location: "Ayodhya, Uttar Pradesh",
//           description: "Grand temple built at Lord Ram's birthplace, significant in Hindu history.",
//           image: "https://images.unsplash.com/photo-1676283960694-5661638a46b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
//           type: "temple"
//         },
//         {
//           name: "Narmada Origin",
//           location: "Amarkantak, Madhya Pradesh",
//           description: "Origin point of holy Narmada river where the Narmada Parikrama begins.",
//           image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
//           type: "sacred"
//         }
//       ],
//       upcomingTours: [
//         {
//           title: "Shri Dham Mathura Vrindavan Yatra",
//           date: "22-10-2025",
//           duration: "8-10 Days",
//           price: "₹10,500",
//           highlights: [
//             "Complete Braj 84 Kos Parikrama",
//             "Holy dip in Yamuna on Bhai Dooj",
//             "Darshan of Shri Ram Temple Ayodhya",
//             "Visit all major Braj temples"
//           ],
//           contact: "Pt. Hari Tiwari: 9926622354, 6264757691"
//         },
//         {
//           title: "Shraddha Paksha Gaya-Ayodhya Yatra",
//           date: "05-09-2025",
//           duration: "8-10 Days",
//           price: "₹8,000",
//           highlights: [
//             "Pind Daan in Gaya",
//             "Darshan in Ayodhya & Chitrakoot",
//             "Kashi Vishwanath Darshan",
//             "Holy bath in Prayagraj"
//           ],
//           contact: "Pt. Hari Tiwari: 9926622354, 6264757691"
//         },
//         {
//           title: "Narmada Parikrama Yatra",
//           date: "03-11-2025",
//           duration: "Contact for details",
//           price: "Contact for details",
//           highlights: [
//             "Complete Narmada Parikrama",
//             "All major pilgrimage sites",
//             "Darshan of Narmada Origin",
//             "Holy bath and worship"
//           ],
//           contact: "Pt. Hari Tiwari: 9926622354, 6264757691"
//         }
//       ],
//       experience: {
//         title: "Your Spiritual Journey Experience",
//         points: [
//           {
//             title: "Spiritual Significance",
//             content: "Our pilgrimages are designed to provide maximum spiritual benefits. The Braj Yatra liberates from 84 lakh yonis, Gaya Shraddha brings peace to ancestors, and Narmada Parikrama is considered equal to circumambulating the earth.",
//             icon: "spiritual"
//           },
//           {
//             title: "Comfortable Travel",
//             content: "We provide AC buses with comfortable seating, regular meal stops (2 meals + 2 tea breaks daily), and all necessary arrangements for a smooth spiritual journey. Sponge bedding and plates are provided.",
//             icon: "comfort"
//           },
//           {
//             title: "Group Experience",
//             content: "Travel with like-minded devotees in groups of 50 pilgrims. Our experienced guides provide insights into each sacred site, and we maintain a disciplined schedule to cover all important locations.",
//             icon: "group"
//           },
//           {
//             title: "Ideal Timing",
//             content: "Our tours are scheduled during spiritually significant periods - Kartik month for Braj Yatra, Shraddha Paksha for Gaya pilgrimage, and pleasant weather months for Narmada Parikrama.",
//             icon: "timing"
//           }
//         ]
//       },
//       rules: {
//         title: "Tour Rules & Information",
//         points: [
//           "Bus will depart only when all 50 seats are filled",
//           "Children aged 5-8 years will be charged half fare (no separate seat)",
//           "Timings provided by the tour organizer will be final",
//           "Passengers must bring their Aadhar card and necessary medicines",
//           "No refund if journey is abandoned midway",
//           "Dharamshala charges, taxi and guide fees to be borne by passengers"
//         ]
//       },
//       footer: {
//         address: "Sant Singaji Tourist Party, Kankaria (Dewas)",
//         blessing: "Jai Maa Narmade | Har Har Mahadev"
//       },
//       buttons: {
//         bookNow: "Book Now",
//         viewDetails: "View Details",
//         contact: "Contact Us"
//       }
//     }
//   };

//   // Get icons based on type
//   const getIcon = (iconType) => {
//     switch (iconType) {
//       case 'spiritual':
//         return (
//           <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//           </svg>
//         );
//       case 'comfort':
//         return (
//           <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//           </svg>
//         );
//       case 'group':
//         return (
//           <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//           </svg>
//         );
//       case 'timing':
//         return (
//           <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         );
//       default:
//         return (
//           <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
//       {/* Language Toggle Button */}
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={toggleLanguage}
//           className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center"
//         >
//           {language === 'hindi' ? (
//             <>
//               <span className="mr-2">🇮🇳</span> हिंदी
//             </>
//           ) : (
//             <>
//               <span className="mr-2">🇬🇧</span> English
//             </>
//           )}
//         </button>
//       </div>

//       {/* Page Header */}
//       <div className="text-center mb-12">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
//         >
//           {content[language].header.title}
//         </motion.h1>
//         <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//           {content[language].header.subtitle}
//         </p>
//         <p className="text-lg text-indigo-600 dark:text-indigo-400 mt-2">
//           {content[language].header.blessing}
//         </p>
//       </div>

//       {/* Pilgrimage Overview Section */}
//       <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6"
//         >
//           {content[language].overview.title}
//         </motion.h2>

//         <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
//           {content[language].overview.description}
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {content[language].overview.highlights.map((highlight, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.03 }}
//               className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
//             >
//               <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">
//                 {highlight.title}
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300">
//                 {highlight.content}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Sacred Places Section */}
//       <div className="max-w-7xl mx-auto mb-16">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
//         >
//           {language === 'hindi' ? "हमारी यात्राओं में शामिल पवित्र स्थल" : "Sacred Places Included in Our Tours"}
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {content[language].sacredPlaces.map((place, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//               className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <img
//                 src={place.image}
//                 alt={place.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-5">
//                 <div className="flex justify-between items-start mb-2">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 dark:text-white">{place.name}</h3>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">{place.location}</p>
//                   </div>
//                   <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded-full">
//                     {place.type === 'temple' ? (language === 'hindi' ? 'मंदिर' : 'Temple') : (language === 'hindi' ? 'तीर्थ' : 'Sacred Site')}
//                   </span>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{place.description}</p>
               
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Upcoming Tours Section */}
//       <div className="max-w-7xl mx-auto mb-16">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
//         >
//           {language === 'hindi' ? "आगामी यात्राएँ" : "Upcoming Tours"}
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {content[language].upcomingTours.map((tour, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-indigo-100 dark:border-gray-700"
//             >
//               <div className="bg-indigo-600 text-white p-4">
//                 <h3 className="text-xl font-bold">{tour.title}</h3>
//                 <div className="flex justify-between mt-2">
//                   <span className="text-sm">{language === 'hindi' ? 'प्रस्थान:' : 'Departure:'} {tour.date}</span>
//                   <span className="text-sm">{language === 'hindi' ? 'अवधि:' : 'Duration:'} {tour.duration}</span>
//                 </div>
//               </div>

//               <div className="p-5">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{tour.price}</span>
//                   <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-3 py-1 rounded-full">
//                     {language === 'hindi' ? 'बुकिंग चालू' : 'Booking Open'}
//                   </span>
//                 </div>

//                 <ul className="space-y-2 mb-5">
//                   {tour.highlights.map((highlight, i) => (
//                     <li key={i} className="flex items-start">
//                       <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//                   <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{language === 'hindi' ? 'संपर्क:' : 'Contact:'}</p>
//                   <p className="font-medium text-indigo-600 dark:text-indigo-400">{tour.contact}</p>
//                   <button className="w-full mt-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300">
//                     {content[language].buttons.bookNow}
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Journey Experience Section */}
//       <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
//         >
//           {content[language].experience.title}
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {content[language].experience.points.map((point, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="flex items-start"
//             >
//               <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
//                 {getIcon(point.icon)}
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{point.title}</h3>
//                 <p className="text-gray-700 dark:text-gray-300">{point.content}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Additional Information */}
//       <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-12">
//         <motion.h3
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4"
//         >
//           {content[language].rules.title}
//         </motion.h3>
//         <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300">
//           <ul className="space-y-3">
//             {content[language].rules.points.map((point, index) => (
//               <motion.li
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="flex items-start"
//               >
//                 <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span>{point}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Footer Note */}
//       <div className="text-center text-gray-500 dark:text-gray-400">
//         <p className="mb-2">{content[language].footer.address}</p>
//         <p className="text-indigo-600 dark:text-indigo-400 font-medium">
//           {content[language].footer.blessing}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Places;













import { useState } from 'react';
import { motion } from 'framer-motion';
import narmada from "../assets/narmda.jpeg"
import rammandir from "../assets/rammandir.avif"
import kashi from "../assets/Kashi_Vishwanath.jpg"
import krishna from "../assets/krishna.webp"
import puri from "../assets/puri.webp"
import rameshwaram from "../assets/rameshwaramm.jpg"
import badrinath from "../assets/badrinath.jpeg"
import dwarka from "../assets/dwaraka.jpeg"
import kedarnath from "../assets/kedarnath.webp"
import tirumala from "../assets/tirumala.jpeg"
import vashno from "../assets/vaishno.jpeg"
import amarnath from "../assets/amarnath.jpg"
import Pashupatinath from "../assets/Pashupatinath.jpg"

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

function Places() {
  const [language, setLanguage] = useState('hindi');

  // Language toggle function
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'hindi' ? 'english' : 'hindi');
  };

  // Content based on language
  const content = {
    hindi: {
      header: {
        title: "संत सिंगाजी टूरिस्ट पार्टी",
        subtitle: "आध्यात्मिक यात्राओं का अनूठा अनुभव",
        blessing: "जय मां नर्मदे | ॥ श्री गणेशाय नमः ॥"
      },
      overview: {
        title: "पवित्र तीर्थ यात्राएँ",
        description: "हमारे साथ भारत के सबसे पवित्र तीर्थ स्थलों की यात्रा करें। हमारे द्वारा आयोजित यात्राएँ भक्ति, सुविधा और सांस्कृतिक अनुभव का अनूठा संगम प्रदान करती हैं।",
        highlights: [
          {
            title: "मथुरा-वृन्दावन ब्रज यात्रा",
            content: "ब्रज की 84 कोस परिक्रमा का पुण्य लाभ लें, जिसमें भगवान कृष्ण के जीवन से जुड़े सभी महत्वपूर्ण मंदिरों के दर्शन शामिल हैं।"
          },
          {
            title: "गया-अयोध्या श्राद्ध पक्ष यात्रा",
            content: "गयाजी में पितृ तर्पण करें, अयोध्या में राम जन्मभूमि के दर्शन करें और काशी विश्वनाथ मंदिर की आध्यात्मिक शक्ति का अनुभव करें।"
          },
          {
            title: "नर्मदा परिक्रमा",
            content: "पवित्र नर्मदा नदी की पूर्ण परिक्रमा करें, अमरकंटक में उद्गम स्थल के दर्शन करें और इस पवित्र नदी के किनारे स्थित सभी प्रमुख तीर्थों का भ्रमण करें।"
          },
          {
            title: "जगन्नाथपुरी – रामेश्वरम यात्रा",
            content: "जगन्नाथ जी के भव्य रथ यात्रा में सम्मिलित हों, रामेश्वरम में पवित्र स्नान और ज्योतिर्लिंग के दर्शन करें।"
          },
          {
            title: "9 ज्योतिर्लिंग – नेपाल – गंगासागर यात्रा",
            content: "भारत के 9 प्रमुख ज्योतिर्लिंगों के दर्शन करें, पशुपतिनाथ नेपाल में पूजा करें और गंगासागर संगम में पुण्य स्नान का लाभ लें।"
          },
          {
            title: "प्रयागराज – अयोध्या – काशी – गया यात्रा",
            content: "त्रिवेणी संगम में स्नान, अयोध्या में श्रीराम जन्मभूमि, काशी विश्वनाथ के दर्शन एवं गया में पिंडदान करें।"
          },
          {
            title: "एक धाम – रामेश्वरम – 7 ज्योतिर्लिंग यात्रा",
            content: "रामेश्वरम सहित भारत के सात प्रमुख ज्योतिर्लिंग स्थलों के दर्शन और आध्यात्मिक अनुभव।"
          }
        ]
      },
      sacredPlaces: [
        {
          name: "श्री कृष्ण जन्मभूमि",
          location: "मथुरा, उत्तर प्रदेश",
          description: "भगवान श्रीकृष्ण का जन्मस्थान, यह मंदिर हिंदुओं के लिए सबसे पवित्र स्थलों में से एक है।",
          image: krishna,
          type: "temple"
        },
        {
          name: "काशी विश्वनाथ मंदिर",
          location: "वाराणसी, उत्तर प्रदेश",
          description: "भगवान शिव को समर्पित यह मंदिर 12 ज्योतिर्लिंगों में से एक है।",
          image: kashi,
          type: "temple"
        },
        {
          name: "राम मंदिर",
          location: "अयोध्या, उत्तर प्रदेश",
          description: "भगवान राम की जन्मभूमि पर निर्मित भव्य मंदिर जो हिंदू धर्म के इतिहास में महत्वपूर्ण है।",
          image: rammandir,
          type: "temple"
        },
        {
          name: "जगन्नाथ मंदिर",
          location: "पुरी, ओडिशा",
          description: "भगवान जगन्नाथ, बलभद्र और सुभद्रा को समर्पित यह मंदिर रथ यात्रा के लिए प्रसिद्ध है।",
          image: puri,
          type: "temple"
        },
        {
          name: "रामेश्वरम मंदिर",
          location: "रामेश्वरम, तमिलनाडु",
          description: "यह दक्षिण भारत में स्थित 12 ज्योतिर्लिंगों में से एक महत्वपूर्ण तीर्थस्थल है।",
          image: rameshwaram,
          type: "temple"
        },
        {
          name: "बद्रीनाथ मंदिर",
          location: "उत्तराखंड",
          description: "चारधामों में से एक, यह भगवान विष्णु को समर्पित पर्वतीय तीर्थ है।",
          image: badrinath,
          type: "temple"
        },
        {
          name: "द्वारकाधीश मंदिर",
          location: "द्वारका, गुजरात",
          description: "भगवान श्रीकृष्ण का राजसी निवास स्थान, चारधामों में से एक।",
          image: dwarka,
          type: "temple"
        },
        {
          name: "केदारनाथ मंदिर",
          location: "उत्तराखंड",
          description: "भगवान शिव को समर्पित हिमालयी तीर्थ जो 12 ज्योतिर्लिंगों में से एक है।",
          image: kedarnath,
          type: "temple"
        },
        {
          name: "तिरुपति बालाजी मंदिर",
          location: "तिरुमला, आंध्र प्रदेश",
          description: "भगवान वेंकटेश्वर को समर्पित यह विश्व के सबसे धनी मंदिरों में से एक है।",
          image: tirumala,
          type: "temple"
        },
        {
          name: "वैष्णो देवी मंदिर",
          location: "कटरा, जम्मू",
          description: "माँ वैष्णो देवी को समर्पित यह पर्वतीय मंदिर उत्तर भारत के प्रमुख तीर्थों में गिना जाता है।",
          image: vashno,
          type: "temple"
        },
        {
          name: "अमरनाथ गुफा मंदिर",
          location: "जम्मू और कश्मीर",
          description: "यह पवित्र गुफा शिवलिंग के रूप में बर्फ से बनती है, जो शिवभक्तों के लिए अत्यंत पूजनीय है।",
          image: amarnath,
          type: "temple"
        },
        {
          name: "पशुपतिनाथ मंदिर",
          location: "काठमांडू, नेपाल",
          description: "यह भगवान शिव का अंतरराष्ट्रीय प्रसिद्ध मंदिर है जो यूनेस्को विश्व धरोहर स्थल भी है।",
          image: Pashupatinath,
          type: "temple"
        },
        {
          name: "नर्मदा उद्गम स्थल",
          location: "अमरकंटक, मध्य प्रदेश",
          description: "पवित्र नर्मदा नदी का उद्गम स्थल जहाँ से नर्मदा परिक्रमा शुरू होती है।",
          image: narmada,
          type: "sacred"
        }
      ],
      upcomingTours: [
        {
          title: "श्री धाम मथुरा वृन्दावन यात्रा",
          date: "22-10-2025",
          duration: "8-10 दिन",
          price: "₹10,500",
          highlights: [
            "ब्रज चौरासी कोस की यात्रा",
            "यम दितीया पर यमुना स्नान",
            "श्रीराम मंदिर अयोध्या दर्शन",
            "समस्त ब्रज मंदिरों के दर्शन"
          ],
          contact: "पं. हरि तिवारी: 9926622354, 6264757691"
        },
        {
          title: "श्राद्ध पक्ष गया-अयोध्या यात्रा",
          date: "05-09-2025",
          duration: "8-10 दिन",
          price: "₹8,000",
          highlights: [
            "गयाजी में पिंडदान",
            "अयोध्या व चित्रकूट दर्शन",
            "काशी विश्वनाथ दर्शन",
            "प्रयागराज में स्नान"
          ],
          contact: "पं. हरि तिवारी: 9926622354, 6264757691"
        },
        {
          title: "नर्मदा परिक्रमा यात्रा",
          date: "03-11-2025",
          duration: "विवरण के लिए संपर्क करें",
          price: "विवरण के लिए संपर्क करें",
          highlights: [
            "पूर्ण नर्मदा परिक्रमा",
            "सभी प्रमुख तीर्थ स्थान",
            "नर्मदा उद्गम दर्शन",
            "पवित्र स्नान एवं पूजा"
          ],
          contact: "पं. हरि तिवारी: 9926622354, 6264757691"
        }
      ],
      experience: {
        title: "आपका आध्यात्मिक यात्रा अनुभव",
        points: [
          {
            title: "आध्यात्मिक महत्व",
            content: "हमारी यात्राएँ अधिकतम आध्यात्मिक लाभ प्रदान करने के लिए डिज़ाइन की गई हैं। ब्रज यात्रा 84 लाख योनियों से मुक्ति दिलाती है, गया श्राद्ध पितरों को शांति प्रदान करता है और नर्मदा परिक्रमा पृथ्वी की परिक्रमा के समान मानी जाती है।",
            icon: "spiritual"
          },
          {
            title: "आरामदायक यात्रा",
            content: "हम एसी बसें, नियमित भोजन व्यवस्था (प्रतिदिन 2 भोजन + 2 चाय विराम) और सुचारु आध्यात्मिक यात्रा के लिए सभी आवश्यक व्यवस्थाएं प्रदान करते हैं। स्पंज बिस्तर और प्लेट्स उपलब्ध कराई जाती हैं।",
            icon: "comfort"
          },
          {
            title: "समूह अनुभव",
            content: "50 यात्रियों के समूह के साथ यात्रा करें। हमारे अनुभवी गाइड प्रत्येक पवित्र स्थल के बारे में ज्ञान प्रदान करते हैं और हम सभी महत्वपूर्ण स्थानों को कवर करने के लिए एक अनुशासित कार्यक्रम बनाए रखते हैं।",
            icon: "group"
          },
          {
            title: "आदर्श समय",
            content: "हमारी यात्राएँ आध्यात्मिक रूप से महत्वपूर्ण अवधि के दौरान निर्धारित की जाती हैं - ब्रज यात्रा के लिए कार्तिक मास, गया तीर्थ के लिए श्राद्ध पक्ष और नर्मदा परिक्रमा के लिए सुहावने मौसम के महीने।",
            icon: "timing"
          }
        ]
      },
      rules: {
        title: "यात्रा नियम एवं सूचनाएँ",
        points: [
          "बस में 50 सवारी जाएँगी, सवारी पूरी होने पर ही बस रवाना होगी",
          "5 से 8 वर्ष के बच्चे का आधा टिकट लगेगा (सीट नहीं मिलेगी)",
          "यात्रा में व्यवस्थापक द्वारा दिया गया समय मान्य होगा",
          "यात्री अपना आधार कार्ड एवं आवश्यक दवाइयाँ साथ लाएँ",
          "यात्रा बीच में छोड़ने पर किराया वापस नहीं होगा",
          "धर्मशाला किराया, टैक्सी एवं गाइड खर्च यात्री द्वारा देना होगा"
        ]
      },
      footer: {
        address: "संत सिंगाजी टूरिस्ट पार्टी, कांकरिया (देवास)",
        blessing: "जय मां नर्मदे | हर हर महादेव"
      },
      buttons: {
        bookNow: "सीट बुक करें",
        viewDetails: "विवरण देखें",
        contact: "संपर्क करें"
      }
    },
    english: {
      header: {
        title: "Sant Singaji Tourist Party",
        subtitle: "Unique Spiritual Journey Experiences",
        blessing: "Jai Maa Narmade | ॥ Shri Ganeshaya Namah ॥"
      },
      overview: {
        title: "Divine Pilgrimage Experiences",
        description: "Embark on a spiritual journey to India's most sacred destinations with our carefully curated pilgrimage tours. Our packages combine devotion, comfort, and cultural immersion for a transformative experience.",
        highlights: [
          {
            title: "Mathura-Vrindavan Braj Yatra",
            content: "Experience the 84 Kos Braj Parikrama covering all significant temples associated with Lord Krishna's life, including Yamuna snan at Brahmand Ghat on Bhai Dooj."
          },
          {
            title: "Gaya-Ayodhya Shraddha Paksha Tour",
            content: "Perform pind daan for ancestors in Gaya, visit Ram Janmabhoomi in Ayodhya, and experience the spiritual power of Kashi Vishwanath Temple in Varanasi."
          },
          {
            title: "Narmada Parikrama",
            content: "Complete the sacred circumambulation of the Narmada river, visiting the origin point at Amarkantak and all major tirthas along this holy river."
          }
        ]
      },
      sacredPlaces: [
        {
          name: "Shri Krishna Janmabhoomi",
          location: "Mathura, Uttar Pradesh",
          description: "Birthplace of Lord Krishna, this temple is one of the holiest sites for Hindus.",
          image: krishna,
          type: "temple"
        },
        {
          name: "Kashi Vishwanath Temple",
          location: "Varanasi, Uttar Pradesh",
          description: "Dedicated to Lord Shiva, this temple is one of the 12 Jyotirlingas.",
          image: kashi,
          type: "temple"
        },
        {
          name: "Ram Temple",
          location: "Ayodhya, Uttar Pradesh",
          description: "Grand temple built at Lord Ram's birthplace, significant in Hindu history.",
          image: rammandir,
          type: "temple"
        },
        {
          name: "Jagannath Temple",
          location: "Puri, Odisha",
          description: "Dedicated to Lord Jagannath, Balabhadra and Subhadra, this temple is famous for Rath Yatra.",
          image: puri,
          type: "temple"
        },
        {
          name: "Rameshwaram Temple",
          location: "Rameshwaram, Tamil Nadu",
          description: "One of the 12 Jyotirlingas located in South India.",
          image: rameshwaram,
          type: "temple"
        },
        {
          name: "Badrinath Temple",
          location: "Uttarakhand",
          description: "One of the Char Dhams, dedicated to Lord Vishnu.",
          image: badrinath,
          type: "temple"
        },
        {
          name: "Dwarkadhish Temple",
          location: "Dwarka, Gujarat",
          description: "Lord Krishna's royal residence, one of the Char Dhams.",
          image: dwarka,
          type: "temple"
        },
        {
          name: "Kedarnath Temple",
          location: "Uttarakhand",
          description: "Dedicated to Lord Shiva, one of the 12 Jyotirlingas.",
          image: kedarnath,
          type: "temple"
        },
        {
          name: "Tirupati Balaji Temple",
          location: "Tirumala, Andhra Pradesh",
          description: "Dedicated to Lord Venkateswara, one of the richest temples in the world.",
          image: tirumala,
          type: "temple"
        },
        {
          name: "Vaishno Devi Temple",
          location: "Katra, Jammu",
          description: "Dedicated to Goddess Vaishno Devi, a major pilgrimage site in North India.",
          image: vashno,
          type: "temple"
        },
        {
          name: "Amarnath Cave Temple",
          location: "Jammu and Kashmir",
          description: "Holy cave where the ice Shiva Lingam forms naturally.",
          image: amarnath,
          type: "temple"
        },
        {
          name: "Pashupatinath Temple",
          location: "Kathmandu, Nepal",
          description: "Internationally renowned temple of Lord Shiva, a UNESCO World Heritage Site.",
          image: Pashupatinath,
          type: "temple"
        },
        {
          name: "Narmada Origin",
          location: "Amarkantak, Madhya Pradesh",
          description: "Origin point of holy Narmada river where the Narmada Parikrama begins.",
          image: narmada,
          type: "sacred"
        }
      ],
      upcomingTours: [
        {
          title: "Shri Dham Mathura Vrindavan Yatra",
          date: "22-10-2025",
          duration: "8-10 Days",
          price: "₹10,500",
          highlights: [
            "Complete Braj 84 Kos Parikrama",
            "Holy dip in Yamuna on Bhai Dooj",
            "Darshan of Shri Ram Temple Ayodhya",
            "Visit all major Braj temples"
          ],
          contact: "Pt. Hari Tiwari: 9926622354, 6264757691"
        },
        {
          title: "Shraddha Paksha Gaya-Ayodhya Yatra",
          date: "05-09-2025",
          duration: "8-10 Days",
          price: "₹8,000",
          highlights: [
            "Pind Daan in Gaya",
            "Darshan in Ayodhya & Chitrakoot",
            "Kashi Vishwanath Darshan",
            "Holy bath in Prayagraj"
          ],
          contact: "Pt. Hari Tiwari: 9926622354, 6264757691"
        },
        {
          title: "Narmada Parikrama Yatra",
          date: "03-11-2025",
          duration: "Contact for details",
          price: "Contact for details",
          highlights: [
            "Complete Narmada Parikrama",
            "All major pilgrimage sites",
            "Darshan of Narmada Origin",
            "Holy bath and worship"
          ],
          contact: "Pt. Hari Tiwari: 9926622354, 6264757691"
        }
      ],
      experience: {
        title: "Your Spiritual Journey Experience",
        points: [
          {
            title: "Spiritual Significance",
            content: "Our pilgrimages are designed to provide maximum spiritual benefits. The Braj Yatra liberates from 84 lakh yonis, Gaya Shraddha brings peace to ancestors, and Narmada Parikrama is considered equal to circumambulating the earth.",
            icon: "spiritual"
          },
          {
            title: "Comfortable Travel",
            content: "We provide AC buses with comfortable seating, regular meal stops (2 meals + 2 tea breaks daily), and all necessary arrangements for a smooth spiritual journey. Sponge bedding and plates are provided.",
            icon: "comfort"
          },
          {
            title: "Group Experience",
            content: "Travel with like-minded devotees in groups of 50 pilgrims. Our experienced guides provide insights into each sacred site, and we maintain a disciplined schedule to cover all important locations.",
            icon: "group"
          },
          {
            title: "Ideal Timing",
            content: "Our tours are scheduled during spiritually significant periods - Kartik month for Braj Yatra, Shraddha Paksha for Gaya pilgrimage, and pleasant weather months for Narmada Parikrama.",
            icon: "timing"
          }
        ]
      },
      rules: {
        title: "Tour Rules & Information",
        points: [
          "Bus will depart only when all 50 seats are filled",
          "Children aged 5-8 years will be charged half fare (no separate seat)",
          "Timings provided by the tour organizer will be final",
          "Passengers must bring their Aadhar card and necessary medicines",
          "No refund if journey is abandoned midway",
          "Dharamshala charges, taxi and guide fees to be borne by passengers"
        ]
      },
      footer: {
        address: "Sant Singaji Tourist Party, Kankaria (Dewas)",
        blessing: "Jai Maa Narmade | Har Har Mahadev"
      },
      buttons: {
        bookNow: "Book Now",
        viewDetails: "View Details",
        contact: "Contact Us"
      }
    }
  };

  // Get icons based on type
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'spiritual':
        return (
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'comfort':
        return (
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'group':
        return (
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'timing':
        return (
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div 
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: COLORS.gradient.dark,
        color: COLORS.text.primary
      }}
    >
      {/* Language Toggle */}
      <div className="flex justify-end mb-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleLanguage}
          className="px-4 py-2 rounded-lg shadow-md transition duration-300 flex items-center"
          style={{ 
            background: COLORS.gradient.accent,
            color: COLORS.text.primary
          }}
        >
          {language === 'hindi' ? 'English' : 'हिंदी'}
        </motion.button>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          {content[language].header.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl max-w-3xl mx-auto"
          style={{ color: COLORS.text.secondary }}
        >
          {content[language].header.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg mt-2"
          style={{ color: COLORS.text.accent }}
        >
          {content[language].header.blessing}
        </motion.p>
      </div>

      {/* Overview Section */}
      <motion.div 
        className="max-w-7xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: COLORS.text.accent }}>
          {content[language].overview.title}
        </h2>
        <p className="mb-8 text-lg text-center">
          {content[language].overview.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].overview.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white/5 p-6 rounded-lg border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.text.accent }}>
                {highlight.title}
              </h3>
              <p className="text-gray-300">
                {highlight.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sacred Places Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: COLORS.text.accent }}>
          {language === 'hindi' ? 'पवित्र तीर्थ स्थल' : 'Sacred Pilgrimage Sites'}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {content[language].sacredPlaces.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl overflow-hidden shadow-lg"
              style={{ borderLeft: `4px solid transparent`, borderImage: COLORS.gradient.accent, borderImageSlice: 1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{place.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{place.location}</p>
                <p className="text-gray-200">{place.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upcoming Tours Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: COLORS.text.accent }}>
          {language === 'hindi' ? 'आगामी यात्राएँ' : 'Upcoming Tours'}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content[language].upcomingTours.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.text.accent }}>
                {tour.title}
              </h3>
              <div className="flex justify-between mb-4">
                <span className="text-gray-300">{tour.date}</span>
                <span className="font-medium">{tour.price}</span>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">
                  {language === 'hindi' ? 'मुख्य आकर्षण' : 'Highlights'}
                </h4>
                <ul className="space-y-2">
                  {tour.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: COLORS.text.accent }}>•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4">
                <p className="font-semibold">{language === 'hindi' ? 'संपर्क' : 'Contact'}:</p>
                <p className="text-gray-300">{tour.contact}</p>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{ 
                    background: COLORS.gradient.accent,
                    color: COLORS.text.primary
                  }}
                >
                  {content[language].buttons.bookNow}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium border border-white/30"
                >
                  {content[language].buttons.viewDetails}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: COLORS.text.accent }}>
          {content[language].experience.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content[language].experience.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-lg border border-white/10"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {getIcon(point.icon)}
                </div>
                <h3 className="text-xl font-semibold" style={{ color: COLORS.text.accent }}>
                  {point.title}
                </h3>
              </div>
              <p className="text-gray-300">
                {point.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rules Section */}
      <div className="max-w-4xl mx-auto mb-16 bg-white/5 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: COLORS.text.accent }}>
          {content[language].rules.title}
        </h2>
        
        <ul className="space-y-3">
          {content[language].rules.points.map((rule, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <span className="mr-2 mt-1" style={{ color: COLORS.text.accent }}>•</span>
              <span>{rule}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div 
        className="text-center mt-16 pt-8 border-t"
        style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <p className="mb-2" style={{ color: COLORS.text.secondary }}>
          {content[language].footer.address}
        </p>
        <p className="font-medium" style={{ color: COLORS.text.accent }}>
          {content[language].footer.blessing}
        </p>
      </div>
    </div>
  );
}

export default Places;