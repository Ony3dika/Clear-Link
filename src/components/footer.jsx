import socials from "../assets/socials.svg";
import logo from "../assets/logo.svg";
import app from "../assets/app.svg";

const Footer = () => {
  return (
    <main className='mt-28 lg:mb-10 mb-5'>
      <section className='lg:flex justify-between'>
        {/* Logo */}

        <div className='basis-[30%]'>
          <div className='flex items-center'>
            <img src={logo} className='h-6' alt='logo' />
            <p className='text-title font-semibold ml-3 text-md lg:text-lg'>
              ClearLink<span className='text-blu'>.</span>
            </p>
          </div>

          <p className='text-content text-sm lg:text-base lg:mt-5 mt-3'>
            ClearLink is your gateway to effortless, high- quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>

        {/* List */}

        <div className='basis-[50%] justify-between lg:mt-0 mt-8 flex'>
          {/* Product */}
          <ul className='lg:font-semibold font-medium lg:text-base text-xs leading-loose lg:leading-loose'>
            <li className='text-content lg:text-sm'>Product</li>
            <li className='text-[#475467]'>Overview</li>
            <li className='text-[#475467]'>Features</li>
            <li className='text-[#475467]'>Solutions</li>
            <li className='text-[#475467]'>Tutorials</li>
            <li className='text-[#475467]'>Pricing</li>
          </ul>

          {/* Company */}
          <ul className='lg:font-semibold font-medium lg:text-base text-xs leading-loose lg:leading-loose'>
            <li className='text-content lg:text-sm'>Company</li>
            <li className='text-[#475467]'>About Us</li>
            <li className='text-[#475467]'>Careers</li>
            <li className='text-[#475467]'>Press</li>
            <li className='text-[#475467]'>News</li>
            <li className='text-[#475467]'>Contact</li>
          </ul>

          {/* Resources */}
          <ul className='lg:font-semibold font-medium lg:text-base text-xs leading-loose lg:leading-loose'>
            <li className='text-content lg:text-sm'>Resources</li>
            <li className='text-[#475467]'>Blog</li>
            <li className='text-[#475467]'>Events</li>
            <li className='text-[#475467]'>Help center</li>
            <li className='text-[#475467]'>Tutorials</li>
            <li className='text-[#475467]'>Support</li>
          </ul>

          {/* Legal */}
          <ul className='lg:font-semibold font-medium lg:text-base text-xs leading-loose lg:leading-loose'>
            <li className='text-content lg:text-sm'>Legal</li>
            <li className='text-[#475467]'>Terms</li>
            <li className='text-[#475467]'>Privacy</li>
            <li className='text-[#475467]'>Cookies</li>
            <li className='text-[#475467]'>Licenses</li>
            <li className='text-[#475467]'>Contact</li>
          </ul>
        </div>

        {/* Apps */}

        <div className='basis-[10%]'>
          <p className='text-blu font-semibold lg:text-base text-sm lg:mt-o mt-8'>
            Get the app
          </p>
          <img src={app} className='mt-3' alt='app-store' />
        </div>
      </section>


      <section className='flex lg:flex-row flex-col justify-between mt-10 lg:mt-20'>
        <p className='text-content lg:text-start lg:text-base text-xs text-center'>
          © 2023 ClearLink. All rights reserved.
        </p>

        <img
          src={socials}
          className='lg:h-auto h-4 lg:mt-0 mt-3'
          alt='socials'
        />
      </section>
    </main>
  );
};

export default Footer;
