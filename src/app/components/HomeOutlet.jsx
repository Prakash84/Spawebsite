"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from 'react-icons/fa';

export default function HomeOutlet() {
  const outlets = [
  {
    title: 'Spa in Aerocity',
    description: 'Enjoy the best spa in Aerocity with relaxing body massage services at 5-star hotels like Lemon Tree, Andaz, IBIS and more for a truly peaceful experience.',
    image: '/images/NovotelNewDelhiAerocity.webp',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Spa in Defence Colony',
    description: 'Relax at our spa in Defence Colony with expert body massage services to refresh your mind and body, serving hotel guests in NFC at places like The Suryaa for complete comfort and relaxation.',
    image: '/images/TheSuryaaNewDelhi(NFC).webp',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Spa in Connaught Place',
    description: 'Enjoy a relaxing experience at our spa in Connaught Place with professional body massage services, serving top hotels like Radisson Blu, The Lalit, The Park and more for your complete comfort and relaxation.',
    image: '/images/TheParkConnaughtPlace.webp',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
  {
    title: 'Spa in Dwarka',
    description: 'Feel at ease in our spa in Dwarka with professional massage therapists who come to your hotel room where you can have on-demand hotel spa to have a serene and relaxing stay at the hotel.',
    image: '/images/TheGrandNewDelhi.webp',
    link: 'https://api.whatsapp.com/send?phone=918826482370',
  },
];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
     {/* Decorative background elements */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
             <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-amber-100/20 to-transparent rounded-full filter blur-[100px]"></div>
             <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-amber-200/20 to-transparent rounded-full filter blur-[100px]"></div>
             
             {/* Floating leaves */}
             {[...Array(8)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute text-amber-300/30"
                 initial={{ y: 0, rotate: 0 }}
                 animate={{ 
                   y: [0, -20, 0],
                   rotate: [0, 5, 0]
                 }}
                 transition={{
                   duration: 8,
                   repeat: Infinity,
                   delay: i * 0.5,
                   ease: "easeInOut"
                 }}
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                   fontSize: `${Math.random() * 24 + 24}px`,
                 }}
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                   <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                 </svg>
               </motion.div>
             ))}
           </div>
     
           <div className="max-w-7xl mx-auto relative z-10">
             {/* Section Header */}
             <motion.div 
               className="text-center mb-20"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
             >
               <motion.div
                 className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-5 py-2 rounded-full mb-6"
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.2, duration: 0.5 }}
               >
                 <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                 <span className="text-amber-700 font-medium tracking-wider">PREMIUM LOCATIONS</span>
               </motion.div>
               
               <motion.h2
                 className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 font-serif"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3, duration: 0.6 }}
               >
                 Our 5-Star <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Hotel Spa in Delhi</span>
               </motion.h2>
               
               <motion.p
                 className="text-amber-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4, duration: 0.5 }}
               >
                 Our exclusive spa Delhi outlets offer world-class therapies In 5 Star <a href="/spa-in-rohini">Hotels Spa In Delhi</a>
               </motion.p>
               
               <motion.div
                 className="flex justify-center mt-10"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
               >
                 <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
               </motion.div>
             </motion.div>
     
             {/* Outlets Grid */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               {outlets.map((outlet, index) => (
                 <motion.div
                   key={outlet.id}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.7, delay: index * 0.15 }}
                   viewport={{ once: true, margin: "-100px" }}
                   className="relative group"
                 >
                   {/* Card */}
                   <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border border-amber-100">
                     {/* Image section */}
                     <div className="relative h-80 overflow-hidden">
                       {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div> */}
                       <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-transparent z-10"></div>
                        <Image
                             src={outlet.image} // example: "/images/lajpat-nagar.jpg"
                             alt={outlet.title}
                             fill
                             className="object-cover"
                             priority
                           />
                       
                       {/* Rating badge */}
                       <div className="absolute top-6 right-6 z-20">
                         <div className="flex items-center gap-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 py-1.5 rounded-full shadow-lg">
                           <FaStar className="text-amber-200" />
                           <span className="font-bold">{outlet.rating}</span>
                         </div>
                       </div>
                       
                       {/* Location */}
                       <div className="absolute bottom-6 left-6 z-20">
                         <div className="flex items-center text-white">
                           <FaMapMarkerAlt className="mr-2 text-amber-300" />
                           <span className="font-medium">{outlet.location}</span>
                         </div>
                       </div>
                       
                       {/* Decorative corner */}
                       <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-500 rounded-tl-3xl z-10"></div>
                     </div>
     
                     {/* Content section */}
                     <div className="p-8 flex-1 flex flex-col">
                       <div className="flex-1">
                         <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4 font-serif group-hover:text-amber-700 transition-colors">
                           {outlet.title}
                         </h3>
                         <p className="text-amber-800/80 mb-8 leading-relaxed">
                           {outlet.description}
                         </p>
                       </div>
                       
                       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                         {/* <a
                           href="#"
                           className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium py-4 px-6 rounded-xl transition-all group-hover:shadow-lg group-hover:scale-[1.02]"
                         >
                           <FaWhatsapp className="text-xl" />
                           <span className="font-medium tracking-wide">Book on WhatsApp</span>
                         </a> */}
                         <a 
                             href="https://t.me/+a5Bu6FBPN9FlOWM9" 
                             target="_blank"
                             rel="noopener noreferrer"
                             className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                           >
                             <FaTelegram className="text-xl mr-3" />
                            Join for daily updates
                           </a>
                         
                         <div className="text-center sm:text-right">
                           <div className="text-amber-700 text-sm font-medium">Starting from</div>
                           <div className="text-amber-900 font-bold text-2xl">₹14,999</div>
                         </div>
                       </div>
                     </div>
                   </div>
                   
                   {/* Floating decorative element */}
                   <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500/10 rounded-full z-0 group-hover:bg-amber-500/20 transition-colors"></div>
                 </motion.div>
               ))}
             </div>       
             {/* View all button */}
             <motion.div 
               className="text-center mt-16"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               viewport={{ once: true }}
             >
               <button className="relative inline-flex items-center gap-3 group">
                 <a href="/spa-in-rohini"><span className="text-amber-800 font-medium text-lg tracking-wider group-hover:text-amber-900 transition-colors">
                   VIEW ALL OUTLETS
                 </span></a>
                 <div className="relative h-0.5 bg-amber-800/30 overflow-hidden w-24">
                   <div className="absolute inset-0 w-0 bg-amber-800 group-hover:w-full transition-all duration-500"></div>
                 </div>
                 <div className="text-amber-700 group-hover:text-amber-900 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M5 12h14"/>
                     <path d="m12 5 7 7-7 7"/>
                   </svg>
                 </div>
               </button>
             </motion.div>
           </div>
    </section>
  );
}