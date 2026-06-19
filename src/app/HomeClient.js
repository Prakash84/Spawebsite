
import HomeBanner from './components/HomeBanner';
import AboutSection from './components/AboutSection';
import HomeServicesSection from './components/HomeServicesSection';
import HomeWhyChoiceus from './components/HomeWhyChoiceus'
import HomeFaqSection from './components/Homefaqsection';
import HomeOurProcess from './components/HomeOurProcess';
import HomeOutlet from './components/HomeOutlet';
import HomeLocations from './components/HomeLocations';
import HomePricing from './components/HomePricing';
import Relaxinghomecontent from './components/Relaxinghomecontent';
import HomeTherapyest from './components/HomeTherapyest';
import HomeHealthBenefits from './components/HomeHealthBenefits';
import HomeTestimonials from './components/HomeTestimonials';
import HomeLocation2 from './components/HomeLocation2';
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import WhatsappFloat from './components/WhatsappFloat';
const specialFeatures = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",

  "5 Star Hotels",
  "Female Therapist",
  "Foreigner Therapist",
];

export default function HomeClient() {
  

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
      <HomePricing/>

      <section className="bg-gray-50 py-16"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6"> {/* First Row */} <div className="grid md:grid-cols-2 gap-8 items-center"> <div> <Image src="/images/80535.webp" alt="Luxury Spa in Delhi" width={600} height={400} loading="lazy" className="rounded-2xl shadow-md w-full h-auto" /> </div> <div className="bg-white shadow-md p-6 md:p-8 rounded-xl"> <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"> Visit Our Massage Centre{" "} <span className="text-amber-600"> in Delhi for Deep Relaxation </span> </h2> 
        <p className="text-gray-600 leading-relaxed">
              At the massage centre in Delhi, we offer a wide range of premium massage services to help you experience soothing relaxation after a long, stressful working day. We have a team of Indian and International massage therapists from all over the world. Whenever you need a b2b massage, a full body massage, or a <span className="font-semibold text-amber-700"><a href="/couples-massage-in-delhi">couples massage in delhi</a></span>, our team of certified massage therapists is here to fulfil all your needs. Our massage spa in Delhi offers a very affordable package without compromising on quality or services. At Spa Delhi, we offer hotel massage to home massage, so whatever the occasion, our team will always be ready to serve you the best. Contact us today and let our team of therapists bring you the pleasure you have dreamed of.
            </p> </div> </div> {/* Second Row */} <div className="grid md:grid-cols-2 gap-8 items-center mt-16"> <div className="bg-white shadow-md p-6 md:p-8 rounded-xl order-2 md:order-1"> 
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"> Get Top-Rated Full Body{" "} <span className="text-amber-600"> Massage At Spa in Connaught Place </span> </h2> 
              <p className="text-gray-600 leading-relaxed">
            Our full-body massage at <span className="font-semibold text-amber-700"><a href="/spa-in-connaught-place">spa in Connaught Place</a></span> is the perfect place to relax and refresh yourself. In our spa in Delhi we have combined modern massage with the traditional healing practices in order to come up with therapy plans that are in line with your body and lifestyle. Our mission to offer peace, comfort, and the best massage experience to all those who come has been our goal since the set up of our establishment some years ago. We are referred to as one of the most relied spas in Delhi at Luxury Spa due to our professional therapists, exquisite oils and customized treatments. Visit and have a relaxing time that leaves you in full relaxation and rejuvenated.
            </p> </div> <div className="order-1 md:order-2"> <Image src="/images/453.webp" alt="Full Body Massage in Connaught Place" width={600} height={400} loading="lazy" className="rounded-2xl shadow-md w-full h-auto" /> </div> </div> </div> </section>
    
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

          <Relaxinghomecontent/>
          <HomeTherapyest/>
          <HomeHealthBenefits/>
      
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

    <HomeTestimonials/>
     
     {/* Testimonials */}
<section className="mt-16 py-14 px-4 sm:px-8 bg-amber-800 rounded-3xl">
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Book a Massage{" "}
      <span className="text-amber-300">
        Spa in Delhi Instantly
      </span>
    </h2>

    <p className="text-amber-200 max-w-3xl mx-auto mb-10">
      For stress relief and removing muscle pain. Book a massage spa in Delhi
      at 24+ premium locations across Delhi NCR.
    </p>

    <div className="grid md:grid-cols-3 gap-4">

      <a
        href="tel:+919217255113"
        className="bg-white text-amber-800 py-4 px-6 rounded-xl font-semibold"
      >
        📞 Call to Book
      </a>

      <a
        href="/contact"
        className="border border-white text-white py-4 px-6 rounded-xl font-semibold"
      >
        ✉️ Send Inquiry
      </a>

      <a
        href="/spa-in-rohini"
        className="bg-amber-300 text-amber-900 py-4 px-6 rounded-xl font-semibold"
      >
        💆 View Outlets
      </a>

    </div>

  </div>
</section> 
                  <HomeFaqSection /> 
                  <HomeLocation2/>
      <WhatsappFloat />
      
    </div>
    </main>
     
  );
}



{/* Relaxing  content section */}
      //     <section className="relative bg-gradient-to-br from-[#FFF9F0] via-[#fcf5e9] to-[#f9f1e2] py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">

      // <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-amber-100/30 blur-xl"></div>
      // <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full bg-amber-100/30 blur-xl"></div>
      
      // <div className="absolute top-24 left-12 opacity-20 rotate-12">
      //   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="1.5">
      //     <path d="M12 2s-7 6.5-7 12a7 7 0 1 0 14 0c0-5.5-7-12-7-12z" />
      //   </svg>
      // </div>
      // <div className="absolute bottom-32 right-16 opacity-20 -rotate-12">
      //   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="1.5">
      //     <path d="M12 2s-7 6.5-7 12a7 7 0 1 0 14 0c0-5.5-7-12-7-12z" />
      //   </svg>
      // </div>
      
      // <div className="max-w-7xl mx-auto">
      //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      //     {/* Left Side: Image Gallery */}
      //     <div className={`space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      //       <div className="relative rounded-3xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300 group">
      //         <div className="relative h-96">
      //           <Image 
      //             src="/images/haboutus.webp" 
      //             alt="Relaxing Spa Massage"
      //             layout="fill"
      //             objectFit="cover"
      //             className="transition-transform duration-700 group-hover:scale-105"
      //           />
      //           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      //         </div>
      //         <div className="absolute bottom-4 left-4 text-white font-medium text-lg">Signature Massage</div>
      //       </div>
            
      //       <div className="grid grid-cols-2 gap-6">
      //         <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300 group">
      //           <div className="relative h-56">
      //             <Image 
      //               src="/images/hb1.webp" 
      //               alt="Spa Ambience"
      //               layout="fill"
      //               objectFit="cover"
      //               className="transition-transform duration-700 group-hover:scale-105"
      //             />
      //             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      //           </div>
      //         </div>
              
      //         <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300 group">
      //           <div className="relative h-56">
      //             <Image 
      //               src="/images/steptodown.com870307.webp" 
      //               alt="Spa Ambience"
      //               layout="fill"
      //               objectFit="cover"
      //               className="transition-transform duration-700 group-hover:scale-105"
      //             />
      //             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>

      //     <div className={`transition-all duration-1000 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      //       <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-50">
      //         <div className="flex items-center mb-6">
      //           <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white text-xl">
      //             🌿
      //           </div>
      //           <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 ml-4 font-serif">
      //             Relaxing Body to Body Massage in Delhi With Female Therapists
      //           </h2>
      //         </div>
      //         <span className="font-semibold text-amber-600">Exclusive Body Spa Outlets.</span>
      //         <p className="text-gray-700 text-lg mb-8 leading-relaxed">
      //           Want Full body to body massage in Delhi? Book Spa Delhi with professional female therapists for your deep relaxation. Our therapists focus on 100% safety & Privacy during your session. We have 24+ spa outlets, including 5-star hotels in Delhi. Whenever you are feeling stressed and want some enjoyable time. Book Body to body massage in Delhi with female therapists.
      //         </p>
             

      //         <div className="mb-8">
      //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      //             <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
      //               <div className="text-amber-500 text-2xl mr-3 mt-1">💆‍♀️</div>
      //               <div>
      //                 <h3 className="font-bold text-gray-800 mb-1">Lajpat Nagar</h3>
      //                 <p className="text-gray-600 text-sm">Prime Location</p>
      //               </div>
      //             </div>
                  
      //             <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
      //               <div className="text-amber-500 text-2xl mr-3 mt-1">🕯️</div>
      //               <div>
      //                 <h3 className="font-bold text-gray-800 mb-1">Aerocity</h3>
      //                 <p className="text-gray-600 text-sm">Luxury Spa</p>
      //               </div>
      //             </div>
                  
      //             <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
      //               <div className="text-amber-500 text-2xl mr-3 mt-1">🏨</div>
      //               <div>
      //                 <h3 className="font-bold text-gray-800 mb-1">Connaught Place</h3>
      //                 <p className="text-gray-600 text-sm">Central Access</p>
      //               </div>
      //             </div>
                  
      //             <div className="bg-amber-50/50 p-4 rounded-xl flex items-start">
      //               <div className="text-amber-500 text-2xl mr-3 mt-1">🌱</div>
      //               <div>
      //                 <h3 className="font-bold text-gray-800 mb-1">Dwarka</h3>
      //                 <p className="text-gray-600 text-sm">Exclusive Service</p>
      //               </div>
      //             </div>
      //           </div>
                
      //           <div className="prose prose-amber max-w-none mb-8">
      //             <p className="text-gray-700 mb-4">
      //               Trying to remove tensions and anxiety and improve circulation. Our professional therapists apply old and new techniques for your amazing body-to-body massage in Delhi. Once you enter one of our outlets, you will be warmly greeted by the air of hospitality, experienced therapists, and massage service, which will restore your energy and your thoughts.
      //             </p>
                  
      //             <p className="text-gray-700">
      //              All sessions are created for your complete comfort and satisfaction. Our female therapists come and give you a relaxing massage experience during your session. We maintain proper hygiene and cleanliness.
      //             </p>
      //           </div>
      //         </div>
              
      //         <div className="flex flex-col sm:flex-row gap-4">
      //           <a
      //             href="https://api.whatsapp.com/send?phone=919217255113"
      //             className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-4 rounded-full text-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      //           >
      //             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      //               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      //             </svg>
      //             Book Via WhatsApp
      //           </a>
                
      //           <a
      //             href="/spa-price-in-delhi"
      //             className="flex-1 inline-flex items-center justify-center bg-white border-2 border-amber-500 text-amber-600 px-6 py-4 rounded-full text-lg font-medium hover:bg-amber-50 transition-all duration-300 shadow hover:shadow-md"
      //           >
      //             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      //               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-10H8v2h2v2h2v-2h2v-2h-2V8h-2v2zm7 5h-7v-2h7v2z"/>
      //             </svg>
                  
      //             View Packages
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      //     </section>
          {/* end content section */}