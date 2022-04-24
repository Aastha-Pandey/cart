const Footer = () => {
  return (
    <>
      <div className='tw-w-full tw-bg-[#222222] tw-space-y-4 tw-flex-col xl:tw-flex-row tw-divide-y tw-divide-solid tw-divide-[#CECECE] tw-p-4 xl:tw-px-48 xl:tw-py-10'>
        <div className='tw-w-full  tw-flex-col xl:tw-flex-row '>
          <div className='tw-flex tw-flex-col tw-space-y-3 tw-w-full '>
            <p className='tw-text-white tw-font-normal tw-text-4xl tw-uppercase'>Brand Name</p>
            <div className='tw-flex-col tw-flex tw-space-y-4 xl:tw-flex-row tw-justify-start xl:tw-space-x-24'>
              <div className='tw-flex tw-flex-col'>
                <p className='tw-text-white tw-font-medium tw-text-lg tw-uppercase'>Information</p>
                {['about us', 'faqs', 'refund policy', 'terms and conditions'].map((j) => (
                  <a href='.\' className='tw-text-[#CDCDCD] tw-font-medium tw-text-sm tw-uppercase'>
                    {j}
                  </a>
                ))}
              </div>
              <div className='tw-flex tw-flex-col'>
                <p className='tw-text-white tw-font-medium tw-text-lg tw-uppercase'>Support</p>
                <a
                  href='mailto:hello@sample.com'
                  className='tw-text-[#CDCDCD] tw-font-medium tw-text-sm '
                >
                  hello@sample.com
                </a>
              </div>
              <div className='tw-flex tw-flex-col tw-space-y-4 tw-w-full'>
                <p className='tw-text-white tw-font-medium tw-text-lg tw-uppercase'>Newsletter</p>
                <p className='tw-text-[#CDCDCD] tw-font-medium tw-text-sm '>
                  subscribe to receive updates,<br></br> access deals and more
                </p>
                <input
                  autoFocus
                  placeholder='Enter Email Address'
                  className='placeholder:tw-text-xs focus:tw-outline-none tw-bg-white tw-rounded-md xl:tw-w-5/6 tw-px-2 tw-py-1'
                ></input>
                <button className='tw-text-white tw-bg-[#007E3D] tw-rounded-sm tw-w-1/2 tw-uppercase tw-px-2 tw-py-1'>
                  subscribe
                </button>
              </div>
            </div>
          </div>
          <div className='tw-flex tw-w-full tw-space-x-4 tw-pt-3'>
            {['./Vector3.svg', './Vector4.svg', './Vector5.svg'].map((icon) => (
              <img alt='' src={icon}></img>
            ))}
          </div>
        </div>
        <footer className='tw-flex tw-w-full tw-justify-between tw-items-center tw-py-4'>
          <p className='tw-text-sm tw-font-medium tw-text-[#CDCDCD]'>Copyright 2021</p>
          <p className='tw-text-sm tw-font-medium tw-text-[#CDCDCD]'>Privacy policy</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
