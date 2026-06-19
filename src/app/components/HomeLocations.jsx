"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

export default function HomeLocations() {
  const locations = [
  {
    name: "Lajpat Nagar",
    image: "/images/TheSuryaaNewDelhi(NFC).webp", // Replace with actual image URL
   description: (
  <>
    We have a Luxury{" "}
    <a
      href="/spa-in-lajpat-nagar"
      className="text-teal-600 font-semibold underline"
    >
      spa in Lajpat Nagar
    </a>
    . So whenever you are in Lajpat Nagar, you can de-stress with a home and
    massage service. Reach out to us.
  </>
),
    link: "https://wa.me/8826482370"
  },
  {
    name: "Aerocity",
    image: "/images/NovotelNewDelhiAerocity.webp",
    description: (
  <>
    Visit 5 star{" "}
    <a
      href="/spa-in-aerocity"
      className="text-teal-600 font-semibold underline"
    >
      spa in Aerocity
    </a>
    . Get perfect massage service near Delhi airport. At Aerocity, we have
    foreign therapists from all across the world.
  </>),
    link: "https://wa.me/8826482370"
  },
  {
    name: "Connaught Place",
    image: "/images/TheParkConnaughtPlace.webp",
    description: "Looking for a spa in central Delhi? We have a spa in Connaught Place for giving extra ordinary massage service in the heart of Delhi.",
    link: "https://wa.me/8826482370"
  },
  {
    name: "Rohini",
    image: "/images/TheGrandNewDelhi.webp",
    description: "We have our massage outlet available at Rohini location. If you want to experience spa in Rohini, we can deliver the best spa services in Delhi.",
    link: "https://wa.me/8826482370"
  }
];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-12">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-amber-900 font-serif mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Our Luxury <span className="text-amber-600">Spa in Delhi</span>
                </motion.h2>
                <motion.p
                  className="text-gray-600 max-w-2xl mx-auto text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                 Find the perfect spa outlet near you for effortless access to world-class relaxation. Visit Our <span className="font-semibold text-amber-700"><a href="spa-in-rohini">Spa in Rohini</a></span>, Lajpat Nagar, Aerocity and Paschim Vihar.
                </motion.p>
              </div>
      
              {/* Location Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg relative overflow-hidden group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Location Image */}
                    <div className="relative h-56 w-full">
                      <Image
                      loading="lazy"
                        src={location.image}
                        alt={location.name}
                        layout="fill"
                        objectFit="cover"
                        className="transform group-hover:scale-110 transition-all duration-500"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div> */}
                    </div>
      
                    {/* Location Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">{location.name}</h3>
                      <p className="text-gray-700 text-base mb-4">{location.description}</p>
                      {/* <a
                        href={location.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-5 rounded-full text-base transition-all"
                      >
                        <FaWhatsapp className="text-lg" />
                        Book on WhatsApp
                      </a> */}
                      <a 
                              href="https://t.me/+a5Bu6FBPN9FlOWM9" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                            >
                              <FaTelegram className="text-xl mr-3" />
                              See available staff
                            </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
    </section>
  );
}