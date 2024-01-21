import people from "../assets/people.svg";
import video from "../assets/video.svg";
import sound from "../assets/sound.svg";
import lock from "../assets/lock.svg";
import arrow from "../assets/arrow.svg";
import calendar from "../assets/calendar.svg";

const Advantages = () => {
  return (
    <main className='lg:mt-48 mt-28'>
      <section>
        <p className='text-blu font-semibold'>The ClearLink Advantage</p>
        <h1 className='text-title font-semibold text-lg lg:text-5xl mt-2 lg:mt-5'>
          Why choose ClearLink?
        </h1>
        <p className='lg:mt-8 mt-5 text-content text-sm lg:text-xl'>
          In a world where connection is everything, ClearLink takes the lead.
          Our
          <br className='lg:block hidden' /> Cutting-edge video conferencing app
          offers:
        </p>
      </section>

      {/* Advantages */}
      <section className='flex lg:flex-row flex-col lg:mt-5'>
        <div className='lg:order-1 lg:mr-4 flex flex-col justify-around order-2 basis-3/5'>
          {/* First 2 items */}
          <section className='lg:flex justify-between lg:mt-8'>
            {/* Item 1 */}
            <div className='basis-[47%] border-border border-[1px] lg:border-0 p-2 lg:p-0 rounded-xl'>
              <img src={video} className='lg:h-12 h-8' alt='video' />
              <p className='font-semibold text-title lg:text-lg text-md mt-3'>
                Crystal-clear HD video
              </p>
              <p className='text-content mt-3 lg:text-base text-sm'>
                No more pixelation or blurriness — just stunning, lifelike
                clarity that brings your team closer in meetings.
              </p>
            </div>

            {/* Item 2 */}
            <div className='basis-[47%] border-border border-[1px] lg:border-0 p-2 lg:p-0 rounded-xl lg:mt-0 mt-10'>
              <img src={sound} className='lg:h-12 h-8' alt='video' />
              <p className='font-semibold text-title lg:text-lg text-md mt-3'>
                Noise-canceling audio
              </p>
              <p className='text-content lg:text-base text-sm'>
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </p>
            </div>
          </section>

          {/* Last 2 items */}
          <section className='lg:flex justify-between mt-8'>
            {/* Item 3 */}
            <div className='basis-[47%] border-border border-[1px] lg:border-0 p-2 lg:p-0 rounded-xl'>
              <img src={calendar} className='lg:h-12 h-8' alt='video' />
              <p className='font-semibold text-title lg:text-lg text-md mt-3'>
                Scheduling made easy
              </p>
              <p className='text-content lg:text-base text-sm mt-3'>
                Streamline your agenda with ClearLinkis intuitive scheduling.
                Set up meetings, Send invitations, and receive reminders in one
                place.
              </p>
            </div>

            {/* Item 4 */}
            <div className='basis-[47%] border-border border-[1px] lg:border-0 p-2 lg:p-0 rounded-xl lg:mt-0 mt-10'>
              <img src={lock} className='lg:h-12 h-8' alt='video' />
              <p className='font-semibold text-title lg:text-lg text-md mt-3'>
                Bank-grade security
              </p>
              <p className='text-content lg:text-base text-sm mt-3'>
                Your privacy is our priority with bank- grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </p>
            </div>
          </section>
        </div>

        <div className='lg:order-2 order-1 basis-2/5 flex relative justify-center'>
          <img src={arrow} alt='arrow'className="absolute lg:-top-56 top-0 lg:h-auto h-8" />
          <img src={people} className='lg:h-auto h-96' alt='people' />
        </div>
      </section>
    </main>
  );
};

export default Advantages;
