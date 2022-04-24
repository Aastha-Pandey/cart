import { useContext } from 'react';
import { QuantityContext } from '../App';

const Header = () => {
  const { cartItems } = useContext(QuantityContext);
  return (
    <>
      <header className='tw-bg-white tw-flex tw-justify-end tw-items-center tw-space-x-3 tw-px-14 md:tw-px-24 lg:tw-px-24 xl:tw-px-24 tw-py-5 tw-shadow-lg'>
        {['./searchicon.svg', './usericon.svg', './carticon.svg'].map((icon, index) => {
          if (index !== 2) {
            return <img alt='' src={icon}></img>;
          }
          if (index === 2) {
            return cartItems.length < 1 ? (
              <img className='tw-relative' alt='' src={icon}></img>
            ) : (
              <div>
                <img className='tw-relative' alt='' src={icon}></img>
                <div className='tw-absolute tw-ml-3 -tw-mt-2 tw-bg-red-500 tw-text-white tw-text-xs tw-font-medium tw-rounded-full tw-w-5 tw-h-5 tw-flex tw-justify-center tw-items-center '>
                  {cartItems.length >= 1 &&
                    cartItems.map((k) => k.quantity).reduce((prev, curr) => prev + curr)}
                </div>
              </div>
            );
          }
        })}
      </header>
    </>
  );
};

export default Header;
