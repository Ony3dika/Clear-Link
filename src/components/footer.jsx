import socials from "../assets/socials.svg"

const Footer = () => {
  return (
    <main className='mt-28 lg:mb-10 mb-5'>
      <section></section>
      <section className='flex lg:flex-row flex-col justify-between'>
        <p className='text-content lg:text-start text-center'>© 2023 ClearLink. All rights reserved.</p>

        <img src={socials} className="lg:h-auto h-4 lg:mt-0 mt-3" alt="socials" />
      </section>
    </main>
  );
};

export default Footer;
