'use client'

import Image from 'next/image';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex-grow py-32 md:py-52 -mt-2"
        style={{
          backgroundImage: 'url("/images/store.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto text-center text-white relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Discover the Pride of West Visayas
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl">
            Abing&apos;s Darag Chicken - Bringing the best of local flavors
          </p>
          <a
            href="#what-is-darag"
            className="mt-8 inline-block bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
          >
            Learn More About Darag
          </a>
        </div>
      </section>

      {/* What is Darag Chicken? */}
      <section id="what-is-darag" className="p-4 md:p-8 text-black">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">What is Darag Chicken?</h2>
        <p className="text-base md:text-lg">
          Darag chicken is a native breed in the Philippines, celebrated for its superior flavor and quality...
        </p>
        <Image
          src="/images/darag.jpg"
          alt="Darag Chicken"
          width={600}
          height={400}
          className="mt-4 rounded-lg shadow-lg"
        />
      </section>

      {/* Why Darag Chicken? */}
      <section id="why-darag" className="bg-gray-100 p-4 md:p-8 text-black">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Why Darag Chicken?</h2>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-lg md:text-xl font-semibold">Superior Taste</h3>
            </div>
            <p className="text-sm md:text-base">
              Darag chicken offers a rich and unique flavor profile that stands
              out from other breeds...
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-lg md:text-xl font-semibold">Health Benefits</h3>
            </div>
            <p className="text-sm md:text-base">
              Packed with essential nutrients and lower in fat, Darag chicken is
              a healthier choice...
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-lg md:text-xl font-semibold">Sustainable Farming</h3>
            </div>
            <p className="text-sm md:text-base">
              Darag chicken farming has a lower environmental impact, making it
              a sustainable choice...
            </p>
          </div>
        </div>
      </section>

      {/* Success Story with Carousel */}
      <section id="success-story" className="p-4 md:p-8 text-black">
  <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
    Who is Abing&apos;s Darag?
  </h2>
  <div className="flex flex-col md:flex-row items-start md:space-x-8">
    {/* Story Text */}
    <div className="md:flex-1 text-justify">
      <p className="text-base md:text-lg">
        Starting as a small karinderia, Abing&apos;s Darag has grown into a leading business, known for Darag chicken breeding
        baeufgfb ueghfbqfjqf9 hefpighq39[fqefh qpeiurghfpiqwbndpiqwhr ugwefuobweourg08qer]...
      </p>
      <br></br>
      <p className="text-base md:text-lg">
        The brand stands as a symbol of dedication to quality and local tradition.ebfuogqwfd qwgrougwjdebquowdf quowdfouqwvfdofuqwf
        qwfghqouwb yhffoqghwfo qw oiwgouqwgdoiqhw  dq iwghdouqwgdohqwfg ouqgfougqwfo qw Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Quas quod enim autem exercitationem quibusdam praesentium et corporis earum officia ut, voluptate voluptas quo officiis omnis maiores consequatur 
        dolorem, consectetur velit?
      </p>
    </div>

    {/* Image Carousel */}
    <div className="md:flex-1">
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        dynamicHeight={false} // Prevent dynamic height adjustments
        showStatus={false}
        showIndicators
        showArrows
      >
        <div>
          <Image
            src="/images/store.jpg"
            alt="Darag Chicken Breeding"
            width={800}   // Set a fixed width
            height={400}  // Set a fixed height
            className="rounded-lg shadow-lg object-cover" // Ensure the image covers the area without distortion
            style={{ width: '100%', height: '400px' }} // Define a fixed height to prevent layout shift
          />
        </div>
        <div>
          <Image
            src="/images/store2.jpg"
            alt="Darag Chicken Preparation"
            width={800}   // Set a fixed width
            height={400}  // Set a fixed height
            className="rounded-lg shadow-lg object-cover" // Ensure the image covers the area without distortion
            style={{ width: '100%', height: '400px' }} // Define a fixed height to prevent layout shift
          />
        </div>
        <div>
          <Image
            src="/images/darag2.jpg"
            alt="Abing's Darag Farm"
            width={800}   // Set a fixed width
            height={400}  // Set a fixed height
            className="rounded-lg shadow-lg object-cover" // Ensure the image covers the area without distortion
            style={{ width: '100%', height: '400px' }} // Define a fixed height to prevent layout shift
          />
        </div>
      </Carousel>
    </div>
  </div>
</section>


      {/* Suppliers Section */}
      <section id="suppliers" className="p-4 md:p-8 text-black">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Suppliers</h2>
        <p className="text-base md:text-lg">Diri namon gina kuha ang amon nga mga manok</p>
        <Image
          src="/images/success.jpg"
          alt="Success Story"
          width={600}
          height={400}
          className="mt-4 rounded-lg shadow-lg"
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 p-4 md:p-8 text-black">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-base md:text-lg">
          For inquiries, please reach out to us at contact@abingsdaragchicken.com or visit us in West Visayas.
        </p>
      </section>
    </>
  );
};

export default HomePage
