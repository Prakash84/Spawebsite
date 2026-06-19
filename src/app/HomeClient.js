"use client";
import { motion } from 'framer-motion';
import HomeBanner from './components/HomeBanner';
import AboutSection from './components/AboutSection';
import HomeServicesSection from './components/HomeServicesSection';
import HomeWhyChoiceus from './components/HomeWhyChoiceus'
import HomeFaqSection from './components/Homefaqsection';
import HomeOurProcess from './components/HomeOurProcess';
import HomeOutlet from './components/HomeOutlet';
import HomeLocations from './components/HomeLocations';
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { FaSpa, FaHotel, FaCrown, FaCheckCircle, FaStar } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import WhatsappFloat from './components/WhatsappFloat';
import Link from "next/link";




const specialFeatures = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",

  "5 Star Hotels",
  "Female Therapist",
  "Foreigner Therapist",
];

const teamMembers = [
  {
    name: "Chelsea Foster",
    designation: "Spa Therapist",
    image: "/images/spamodel.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Lane Parsons",
    designation: "Spa Therapist",
    image: "/images/spaExper2.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Haven West",
    designation: "Spa Therapist",
    image: "/images/spamodel2.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
  {
    name: "Avery Grace",
    designation: "Spa Therapist",
    image: "/images/spaExpert4.webp",
    socials: {
      WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
      instagram: "https://www.instagram.com/delhi.luxury_spa/",
      // twitter: "https://twitter.com",
    },
  },
];
export default function HomeClient() {
  
const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 
const testimonials = [
    {
      id: 1,
      name: "Akash Sharma",
      role: "Corporate Professional",
      content: "After long office hours, I wanted a place to relax. Delhi Body Spa in Connaught Place gave me the perfect body massage. The ambience was soothing, and I felt completely stress-free after the session. Highly recommended for anyone looking for the best body spa in Delhi",
      date: "April 15, 2023",
      rating: 5,
      initials: "JD",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 2,
      name: "Rohit Verma",
      role: "Entrepreneur",
      content: "I have visited several spas in Delhi, but it was quite a different experience. Therapists are trained, the spa facility is clean and the massage actually helped me to shed off the body pains. This must have been one of the best body spas in Delhi.",
      date: "May 3, 2023",
      rating: 5,
      initials: "SA",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      name: "Sonu Kapoor",
      role: "Fitness Enthusiast",
      content: "After my workout sessions, I visit Delhi Body Spa for full body massage. The team is very professional, and the oils they use are premium quality. This is the perfect spot for relaxation and body care in Delhi",
      date: "June 8, 2023",
      rating: 4,
      initials: "MR",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];
  const pricingPlans = [
    {
      title: "Spa Outlet",
      price: "₹1999/-",
      description: "Perfect for individual relaxation sessions",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "60 min Consultation", "shower"],
      highlight: false,
      ctaLink: "https://api.whatsapp.com/send?phone=919217255113",
      icon: <FaSpa className="text-amber-500" />
    },
    {
      title: "Hotel Outlet",
      price: "₹15000/-",
      description: "Premium experience with luxury amenities",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
      highlight: true,
      ctaLink: "https://api.whatsapp.com/send?phone=919217255113",
      icon: <FaHotel className="text-amber-500" />
    },
    {
      title: "5 Star Hotel Spa",
      price: "₹20000/-",
      description: "Comprehensive spa experience with added treatments",
      features: ["Foreigner Therapist", "5 Start Property", "Private Sweets", "Aromatherapy", "120 min Session"],
      highlight: false,
      ctaLink: "https://api.whatsapp.com/send?phone=919217255113",
      icon: <FaCrown className="text-amber-500" />
    }
  ];
 // Physical Benefits Data
  const physicalBenefits = [
    { 
      id: 1, 
      title: "Muscle Relief", 
      description: "Stimulates knotted muscles and relieves pain.",
      icon: "💆"
    },
    { 
      id: 2, 
      title: "Improved Circulation", 
      description: "Increases blood circulation.",
      icon: "❤️"
    },
    { 
      id: 3, 
      title: "Detoxification", 
      description: "Helps the body naturally eliminate toxins.",
      icon: "✨"
    },
    { 
      id: 4, 
      title: "Flexibility Boost", 
      description: "Improves distribution of movement throughout the joints.",
      icon: "🧘"
    },
    { 
      id: 5, 
      title: "Pain Management", 
      description: "Relieves acute and chronic pain.",
      icon: "🛡️"
    }
  ];
  // Spiritual Benefits Data
  const spiritualBenefits = [
    { 
      id: 1, 
      title: "Stress Reduction", 
      description: "Helps to calm the mind and the nerves.",
      icon: "🧘‍♀️"
    },
    { 
      id: 2, 
      title: "Mental Clarity", 
      description: "Helps you concentrate and relax.",
      icon: "⚖️"
    },
    { 
      id: 3, 
      title: "Emotional Balance", 
      description: "It is calming for the mind and soul.",
      icon: "💡"
    },
    { 
      id: 4, 
      title: "Energy Flow", 
      description: "Opens and revitalizes the body energy.",
      icon: "🕊️"
    },
    { 
      id: 5, 
      title: "Deep Relaxation", 
      description: "Connects the body, the mind and the spirit.",
      icon: "🌀"
    }
  ];
const locations2 = [
  { name: "Sandwich Massage", link: "/sandwich-massage-in-delhi" },
  { name: "Couple Massage", link: "/couples-massage-in-delhi" },
  { name: " B2B Massage", link: "/b2b-massage-in-delhi" },
  { name: "Spa Jobs in Delhi", link: "/spa-therapist-jobs-in-delhi" },
  { name: "Full Body Massage", link: "/full-body-massage-in-delhi" },
  
  { name: "Spa in Aerocity ", link: "/spa-in-aerocity" },
  { name: "Spa in Connaught Place", link: "/spa-in-connaught-place" },
  { name: "Spa in Lajpat Nagar", link: "/spa-in-lajpat-nagar " },
  { name: "Spa in Gurugram", link: "/spa-in-gurgaon" },
  { name: "Spa in Noida ", link: "/spa-in-noida" },
];
  return (
    <main>
    <div className="font-sans overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-amber-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-amber-600/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-amber-300/15 blur-3xl" />
      </div>
      {/* //// */}
     <HomeBanner />
     <AboutSection />
    <HomeServicesSection />
    <HomeWhyChoiceus />
    
       <HomeOurProcess/>
      <HomeOutlet />
      {/* Pricing Section */}
      <section id= "Pricing" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-amber-100 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-amber-200 opacity-15 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-amber-100 rounded-full text-amber-800 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaStar className="text-amber-500" />
            Affordable Luxury
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Budget-Friendly <span className="text-amber-600">Spa Prices in Delhi for a Luxury Experience</span>
          </motion.h2>
          <motion.p
            className="text-amber-800 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Tailored spa experiences starting from just ₹1999. Choose from our exclusive massage options, designed for your total relaxation and rejuvenation.
            Check our affordable <strong className="text-amber-600 font-medium"><a href="/spa-price-in-delhi">spa price in Delhi.</a></strong> 
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl overflow-hidden ${plan.highlight ? "transform lg:-translate-y-4" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Featured badge */}
              {plan.highlight && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold z-20 rotate-12 shadow-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`h-full flex flex-col border ${plan.highlight ? "border-amber-500 shadow-xl" : "border-amber-100 shadow-lg"} rounded-3xl overflow-hidden bg-white`}>
                <div className={`p-8 pb-6 ${plan.highlight ? "bg-gradient-to-r from-amber-600 to-amber-700" : "bg-amber-800"}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">
                      {plan.icon}
                    </div>
                    <h3 className={`text-2xl font-bold font-serif ${plan.highlight ? "text-white" : "text-amber-100"}`}>
                      {plan.title}
                    </h3>
                  </div>
                  <p className={`text-lg ${plan.highlight ? "text-amber-100" : "text-amber-200"}`}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="p-8 pt-12 pb-10 -mt-6 relative">
                  {/* Price circle */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">
                      {plan.price}
                    </span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                        <span className="text-amber-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={plan.ctaLink}
                    className={`mt-auto block text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                      plan.highlight 
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl hover:from-amber-600 hover:to-amber-700"
                        : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                    }`}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* End Pricing Section */}
    {/* luxury spa content section */}
        <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* First Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-14">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/80535.webp"
              alt="Luxury Spa in Delhi"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg p-8 rounded-xl"
          >
            <motion.h2
                          className="text-3xl md:text-5xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          Visit Our Massage Centre <span className="relative">
                            <span className="text-amber-600 z-10 relative">in Delhi for Deep Relaxation</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
                          </span>
                        </motion.h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At the massage centre in Delhi, we offer a wide range of premium massage services to help you experience soothing relaxation after a long, stressful working day. We have a team of Indian and International massage therapists from all over the world. Whenever you need a b2b massage, a full body massage, or a <span className="font-semibold text-amber-700"><a href="/couples-massage-in-delhi">couples massage in delhi</a></span>, our team of certified massage therapists is here to fulfil all your needs. Our massage spa in Delhi offers a very affordable package without compromising on quality or services. At Spa Delhi, we offer hotel massage to home massage, so whatever the occasion, our team will always be ready to serve you the best. Contact us today and let our team of therapists bring you the pleasure you have dreamed of.
            </p>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg p-8 rounded-xl order-2 md:order-1"
          >
            <motion.h2
                          className="text-3xl md:text-5xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          Get Top-Rated Full Body <span className="relative">
                            <span className="text-amber-600 z-10 relative">Massage At Spa in Connaught Place</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 z-0"></span>
                          </span>
                        </motion.h2>
            <p className="text-gray-600 text-lg leading-relaxed">
            Our full-body massage at <span className="font-semibold text-amber-700"><a href="/spa-in-connaught-place">spa in Connaught Place</a></span> is the perfect place to relax and refresh yourself. In our spa in Delhi we have combined modern massage with the traditional healing practices in order to come up with therapy plans that are in line with your body and lifestyle. Our mission to offer peace, comfort, and the best massage experience to all those who come has been our goal since the set up of our establishment some years ago. We are referred to as one of the most relied spas in Delhi at Luxury Spa due to our professional therapists, exquisite oils and customized treatments. Visit and have a relaxing time that leaves you in full relaxation and rejuvenated.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <Image
              src="/images/453.webp"
              alt="Full Body Massage in Connaught Place"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>       
      </div>
    </section>
    {/* end luxury spa content section */}
    <HomeLocations/>    
          {/* 18+ Section */}
          <section 
  className="relative py-20 px-6 text-center bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{ backgroundImage: "url('/images/18+bodyspa.webp')" }}
>
  {/* Enhanced gradient overlay with subtle grain texture */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#3A2415]/80 to-black/90 z-0" />
  <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-soft-light z-1" />

  <div className="relative z-10 max-w-6xl mx-auto text-[#FAF3E9]">
    {/* Elegant heading with decorative elements */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4A866] to-transparent mb-8" />
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4 text-[#F9D9A9] tracking-wide">
        <span className="block text-xl font-light tracking-widest text-[#D4A866] mb-2">
          PREMIUM WELLNESS DESTINATIONS
        </span>
        24+ Exclusive Spa Delhi Outlets
      </h2>
      <div className="w-16 h-0.5 bg-[#D4A866] mt-6" />
    </div>

    {/* Refined description */}
    <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed font-raleway tracking-wide">
      Indulge in unparalleled luxury & holistic wellness experiences across our premier 5-star locations worldwide.
    </p>

    {/* Sophisticated features grid */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
      {specialFeatures.map((item, index) => (
        <li key={index}>
          <div className="flex items-start gap-3 p-5 rounded-xl border border-[#D4A866]/30 bg-gradient-to-b from-[#2D1B0F]/60 to-[#1A1109]/60 backdrop-blur-sm hover:border-[#D4A866]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-black/20">
            <svg
              className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#D4A866] group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 
                0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 
                36.204 0L192 312.69 432.095 72.596c9.997-9.997 
                26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 
                9.997 26.206 0 36.204l-294.4 294.401c-9.998 
                9.997-26.207 9.997-36.204-.001z"/>
            </svg>
            <span className="text-left font-light text-[#FAF3E9] group-hover:text-[#F9D9A9] transition-colors">
              {item}
            </span>
          </div>
        </li>
      ))}
    </ul>

    {/* Decorative corner elements */}
    <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#D4A866]/50" />
    <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#D4A866]/50" />
    <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#D4A866]/50" />
    <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#D4A866]/50" />
  </div>
      </section>
          {/* end 18+ section */}
          {/* content section */}
          <section className="relative bg-gradient-to-br from-[#FFF9F0] via-[#fcf5e9] to-[#f9f1e2] py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-amber-100/30 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full bg-amber-100/30 blur-xl"></div>
      
      {/* Leaf patterns */}
      <div className="absolute top-24 left-12 opacity-20 rotate-12">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="1.5">
          <path d="M12 2s-7 6.5-7 12a7 7 0 1 0 14 0c0-5.5-7-12-7-12z" />
        </svg>
      </div>
      <div className="absolute bottom-32 right-16 opacity-20 -rotate-12">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="1.5">
          <path d="M12 2s-7 6.5-7 12a7 7 0 1 0 14 0c0-5.5-7-12-7-12z" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image Gallery */}
          <div className={`space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300 group">
              <div className="relative h-96">
                <Image 
                  src="/images/haboutus.webp" 
                  alt="Relaxing Spa Massage"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-4 left-4 text-white font-medium text-lg">Signature Massage</div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300 group">
                <div className="relative h-56">
                  <Image 
                    src="/images/hb1.webp" 
                    alt="Spa Ambience"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300 group">
                <div className="relative h-56">
                  <Image 
                    src="/images/steptodown.com870307.webp" 
                    alt="Spa Ambience"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className={`transition-all duration-1000 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-xl">
                  🌿
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 ml-4 font-serif">
                  Relaxing Body to Body Massage in Delhi With Female Therapists
                </h2>
              </div>
              <span className="font-semibold text-amber-600">Exclusive Body Spa Outlets.</span>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Want Full body to body massage in Delhi? Book Spa Delhi with professional female therapists for your deep relaxation. Our therapists focus on 100% safety & Privacy during your session. We have 24+ spa outlets, including 5-star hotels in Delhi. Whenever you are feeling stressed and want some enjoyable time. Book Body to body massage in Delhi with female therapists.
              </p>
              {/* <span className="font-semibold text-amber-600">Ultimate Choice for Best Body Massage in Delhi</span> */}
              

              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
                    <div className="text-amber-500 text-2xl mr-3 mt-1">💆‍♀️</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Lajpat Nagar</h3>
                      <p className="text-gray-600 text-sm">Prime Location</p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
                    <div className="text-amber-500 text-2xl mr-3 mt-1">🕯️</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Aerocity</h3>
                      <p className="text-gray-600 text-sm">Luxury Spa</p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
                    <div className="text-amber-500 text-2xl mr-3 mt-1">🏨</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Connaught Place</h3>
                      <p className="text-gray-600 text-sm">Central Access</p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
                    <div className="text-amber-500 text-2xl mr-3 mt-1">🌱</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Dwarka</h3>
                      <p className="text-gray-600 text-sm">Exclusive Service</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose prose-amber max-w-none mb-8">
                  <p className="text-gray-700 mb-4">
                    Trying to remove tensions and anxiety and improve circulation. Our professional therapists apply old and new techniques for your amazing body-to-body massage in Delhi. Once you enter one of our outlets, you will be warmly greeted by the air of hospitality, experienced therapists, and massage service, which will restore your energy and your thoughts.
                  </p>
                  
                  <p className="text-gray-700">
                   All sessions are created for your complete comfort and satisfaction. Our female therapists come and give you a relaxing massage experience during your session. We maintain proper hygiene and cleanliness.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=919217255113"
                  className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-4 rounded-full text-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book Via WhatsApp
                </a>
                
                <a
                  href="/spa-price-in-delhi"
                  className="flex-1 inline-flex items-center justify-center bg-white border-2 border-amber-500 text-amber-600 px-6 py-4 rounded-full text-lg font-medium hover:bg-amber-50 transition-all duration-300 shadow hover:shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-10H8v2h2v2h2v-2h2v-2h-2V8h-2v2zm7 5h-7v-2h7v2z"/>
                  </svg>
                  
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
          </section>
          {/* end content section */}
{/* Our Therapy Experts */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#FFF9F0] via-[#fcf5e9] to-[#f9f1e2]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
          <motion.p
            className="text-amber-300 uppercase font-semibold tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experts Therapy
          </motion.p>
          
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Expert Therapists at <span className="text-amber-600"> Our Massage Parlour in Delhi</span>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
             We have indian and foreign therapists at our premium massage parlour in Delhi. Our therapists come from Russia, Afghanistan, Thailand, and Uzbekistan. They have many years of experience giving massage services.
          </motion.p>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden text-center relative group"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                  loading="lazy"
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                    <h3 className="text-white text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-yellow-300">{member.designation}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-4 pb-4">
                  <a href={member.socials.WhatsApp} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaWhatsapp /></a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaInstagram /></a>
                  {/* <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaTwitter /></a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* End Our Therapy Experts */}
       {/* Benefits section */}
       <div className="bg-gradient-to-br from-amber-50 to-amber-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            className="text-amber-300 uppercase font-semibold tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Holistic Wellbeing
          </motion.p>
          
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Benefits Of <span className="text-amber-600"> Choosing Our</span> Massage Spa in Delhi
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            By choosing us you will improve sleep quality, blood circulation, and skin tone. Our massage spa in Delhi has certified therapists for your relaxing massage service.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Physical Benefits */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 p-4 rounded-xl mr-4">
                <div className="text-3xl text-amber-600">🏃‍♂️</div>
              </div>
              <h3 className="text-3xl font-bold text-amber-900">Physical Benefits</h3>
            </div>
            
            <div className="space-y-6">
              {physicalBenefits.map((benefit) => (
                <motion.div 
                  key={benefit.id}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: benefit.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-amber-50 p-3 rounded-lg mr-4 mt-1">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-800">{benefit.title}</h4>
                    <p className="text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Spiritual Benefits */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 p-4 rounded-xl mr-4">
                <div className="text-3xl text-amber-600">🧘</div>
              </div>
              <h3 className="text-3xl font-bold text-amber-900">Spiritual Benefits</h3>
            </div>
            
            <div className="space-y-6">
              {spiritualBenefits.map((benefit) => (
                <motion.div 
                  key={benefit.id}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: benefit.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-amber-50 p-3 rounded-lg mr-4 mt-1">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-800">{benefit.title}</h4>
                    <p className="text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
         <a href="/massage-service-in-delhi">
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Discover Our Treatments
          </button>
          </a> 
        </motion.div>
      </div>
    </div>
      
      {/* end */}
      <section className="w-full bg-[#f8f6f3] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-4">
            Why Choose Spa Delhi?
          </h2>
          <p className="text-[#6b6b6b] max-w-2xl mx-auto">
           We made thousands of trusted customers by giving professional massage service in Delhi. We have 24+ luxury spa outlets all over Delhi and the NCR Regions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          {/* Outlets */}
          <div className="bg-white rounded-2xl shadow-md py-12 px-6 hover:shadow-xl transition">
            <h3 className="text-5xl font-bold text-[#9c6b3b] mb-3">24+</h3>
            <p className="text-lg text-[#2c2c2c] font-medium">Outlets</p>
            <p className="text-sm text-[#6b6b6b] mt-2">
              Premium spa outlets across top locations
            </p>
          </div>

          {/* Hotel Partners */}
          <div className="bg-white rounded-2xl shadow-md py-12 px-6 hover:shadow-xl transition">
            <h3 className="text-5xl font-bold text-[#9c6b3b] mb-3">5★</h3>
            <p className="text-lg text-[#2c2c2c] font-medium">Hotel Partners</p>
            <p className="text-sm text-[#6b6b6b] mt-2">
              Collaborations with luxury five-star hotels
            </p>
          </div>

          {/* Happy Clients */}
          <div className="bg-white rounded-2xl shadow-md py-12 px-6 hover:shadow-xl transition">
            <h3 className="text-5xl font-bold text-[#9c6b3b] mb-3">20k+</h3>
            <p className="text-lg text-[#2c2c2c] font-medium">Happy Clients</p>
            <p className="text-sm text-[#6b6b6b] mt-2">
              Thousands trust us for relaxation & wellness
            </p>
          </div>

        </div>
      </div>
    </section>
      {/* // */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-[#FFF9F0] via-[#fcf5e9] to-[#f9f1e2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
              className="text-amber-300 uppercase font-semibold tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Client Experiences
            </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Customers Said <span className="text-amber-600"> About our Spa in Delhi?</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
             During our service, our therapists focus on how to make customers satisfied with the service. For this reason, we are the most reputable spa in Delhi for premium massage service.
          </motion.p>
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Quote Icon */}
              <div className="absolute top-4 right-4 text-indigo-100 text-6xl z-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {testimonial.content}
                </p>
                
                {/* Date */}
                <p className="text-xs text-gray-400">Posted on {testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section> 
     {/* Testimonials */}
                  <section className="mt-20 py-18 px-16 md:px-16 bg-gradient-to-br from-amber-900 to-amber-700 relative overflow-hidden rounded-3xl shadow-xl">
              {/* Decorative Pattern Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="pattern-dots pattern-amber-500 pattern-bg-transparent pattern-opacity-100 pattern-size-4 w-full h-full"></div>
              </div>
    
              {/* Main Content Container */}
              <div className="max-w-7xl mx-auto relative z-10 text-center">
                {/* Heading and Subheading */}
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6 font-serif"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Book a massage <span className="text-amber-300">spa in Delhi Instantly</span>
                </motion.h2>
    
                <motion.p
                  className="text-amber-300 uppercase font-semibold tracking-wider mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  For stress relief and removing muscle pain. Book a massage spa in Delhi at 24+ locations.
                </motion.p>
    
                {/* CTA Buttons */}
                <div className="grid md:grid-cols-3 gap-6 justify-center items-center">
                  <a
                    href="tel:+919217255113"
                    className="bg-white text-amber-700 px-8 py-4 rounded-full font-bold shadow-md hover:bg-amber-100 transition-all duration-300"
                  >
                    📞 Call to Book: +91 9217255113
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-bold shadow-md hover:bg-white/10 transition-all duration-300"
                  >
                    ✉️ Send Inquiry
                  </a>
                  <a
                    href="/spa-in-rohini"
                    className="bg-amber-300 text-amber-900 px-8 py-4 rounded-full font-bold shadow-md hover:bg-amber-400 transition-all duration-300"
                  >
                    💆‍♀️ View Outlets
                  </a>
                </div>
              </div>
                  </section>   
                  <HomeFaqSection /> 
    {/* //// */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {locations2.map((location, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            href={location.link}
            className="block bg-red-800 text-white font-semibold text-lg py-4 rounded-xl shadow-md hover:bg-red-700 transition duration-300"
          >
            {location.name}
          </Link>
        </motion.div>
      ))}

    </div>
  </div>
</section>
      <WhatsappFloat />
      
    </div>
    </main>
     
  );
}
