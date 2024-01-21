import remove from "../assets/remove.svg"
import add from "../assets/add.svg";

const Support = () => {
  return (
    <main className='lg:mt-48 lg:flex justify-between mt-20'>
      <section className='basis-[47%]'>
        <p className='text-blu font-semibold'>Support</p>
        <h1 className='text-title font-semibold text-2xl lg:text-5xl mt-2 lg:mt-5'>
          FAQs
        </h1>

        <p className='lg:mt-8 mt-5 text-content text-base lg:text-xl'>
          Everything you need to know about the product{" "}
          <br className='lg:block hidden' /> and billing. Can&apos;t find the
          answer you&apos;re looking <br className='lg:block hidden' /> for?
          Please <span className='underline'>chat to our friendly team.</span>
        </p>
      </section>

      <section className='basis-[47%] lg:mt-0 mt-10'>
        <div className='bg-secondary border-[1.5px] border-border rounded-md p-6'>
          <div className='flex justify-between items-center'>
            <p className='text-title font-semibold'>
              How many participants can join a ClearLink video conference?
            </p>

            <img src={remove} className="h-5" alt='remove' />
          </div>

          <p className='mt-5 text-content'>
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </p>
        </div>

        {/* One */}

        <div className='flex justify-between mx-2 lg:mx-5 mt-5 py-3 lg:py-5 items-center'>
          <p className='font-semibold text-title'>
            Can I use ClearLink on multiple devices?
          </p>
          <img src={add} className="h-5" alt='add' />
        </div>
        <hr />

        {/* Two */}

        <div className='flex justify-between mx-2 lg:mx-5 mt-5 py-3 lg:py-5 items-center'>
          <p className='font-semibold text-title'>
            Is ClearLink compatible with other video conferencing platforms?
          </p>
          <img src={add} className="h-5" alt='add' />
        </div>
        <hr />

        {/* Three */}
        <div className='flex justify-between mx-2 lg:mx-5 mt-5 py-3 lg:py-5 items-center'>
          <p className='font-semibold text-title'>
            How does ClearLink ensure the security of my video conferences?
          </p>
          <img src={add} className="h-5" alt='add' />
        </div>
        <hr />

        {/* Four */}
        <div className='flex justify-between mx-2 lg:mx-5 mt-5 py-3 lg:py-5 items-center'>
          <p className='font-semibold text-title'>
            Do I need to download any software to use ClearLink?
          </p>
          <img src={add} className="h-5" alt='add' />
        </div>
        <hr />

        {/* Five */}
        <div className='flex justify-between mx-2 lg:mx-5 mt-5 py-3 lg:py-5 items-center'>
          <p className='font-semibold text-title'>
            What kind of customer support does ClearLink provide?
          </p>
          <img src={add} className="h-5" alt='add' />
        </div>
      </section>
    </main>
  );
};

export default Support;
