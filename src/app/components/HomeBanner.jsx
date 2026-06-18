
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { FaTelegram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
  
  
export default function HomeBanner() {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [
    {
      title: "Welcome to The Spa Delhi — 5 Star Hotel Spa In Delhi",
      link: "https://api.whatsapp.com/send?phone=918826482370",
      image: "/images/hb1.webp"
      
    },
    {
      title: "Explore Spa Delhi With 12+ Spa Outlets in Delhi NCR",
      link: "https://api.whatsapp.com/send?phone=918826482370",
      image: "/images/hb2.webp"
    },
    {
      title: "Book Massage at the best massage centre in Delh",
      link: "https://api.whatsapp.com/send?phone=918826482370",
      image: "/images/hb3.webp"
    },
  ];
{/* Hero Slider */}
      <section className="relative w-full h-[45vh] sm:h-[60px] md:h-[70vh] lg:h-[85vh] xl:h-[80vh]">
        <Swiper
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Autoplay, Pagination]}
          className="w-full h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 sm:px-8 md:px-24 z-10">
                  <motion.h2
                    className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold max-w-2xl md:max-w-3xl leading-snug mb-4 font-serif"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <a 
                        href="https://t.me/+a5Bu6FBPN9FlOWM9" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                      >
                        <FaTelegram className="text-xl mr-3" />
                        Join for latest staff updates
                      </a>

                     {/* <a href={slide.link} className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base transition duration-300 shadow-lg hover:shadow-xl">
                      Book a Spa Session Now
                    </a>  */}
                    <a href="/massage-service-in-delhi" className="bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base transition duration-300 border border-white">
                      Explore Our Spa Services
                    </a>
                    
                    
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
}