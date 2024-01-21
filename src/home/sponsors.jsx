import sponsors from "../assets/sponsors.svg";

const Sponsors = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='font-medium text-center text-sm lg:text-xl text-content'>
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <img src={sponsors} alt='sponsors' className='mt-5' />
    </div>
  );
};

export default Sponsors;
