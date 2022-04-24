import { useContext } from 'react';
import { QuantityContext } from '../../App';

const CartTotal = () => {
  const { cartItems, setShowModal } = useContext(QuantityContext);
  const total =
    cartItems.length >= 1 &&
    cartItems.map((k) => k.price * k.quantity).reduce((prev, curr) => prev + curr);
  const shippingCharge = 200;

  return (
    <>
      <div className='tw-flex tw-items-start tw-px-6 tw-py-4 tw-flex-col tw-space-y-5 tw-bg-[#F0F9F4]  md:tw-w-1/2 lg:tw-w-1/2 xl:tw-w-1/2'>
        <p className='tw-font-bold tw-text-xl'>Cart Total</p>
        <div className='tw-flex tw-w-full tw-flex-col tw-space-y-8 tw-divide-y tw-divide-solid tw-divide-[#CECECE]'>
          <div className='tw-flex tw-flex-col xl:tw-space-y-2 tw-w-full'>
            {[
              {
                label: 'Sub total',
                value: total,
              },
              {
                label: 'Shipping',
                value: total > 1000 ? 'free' : shippingCharge,
              },
            ].map((text) => (
              <>
                <div className='tw-flex tw-w-full tw-justify-between'>
                  <p className='tw-font-medium tw-text-sm tw-capitalize'>{text.label}</p>
                  <p className='tw-text-[#007E3D] tw-font-bold tw-text-sm'>&#8377;{text.value}</p>
                </div>
              </>
            ))}
          </div>
          <div className='tw-flex tw-w-full tw-py-4 tw-justify-between'>
            <p className='tw-font-medium tw-text-sm tw-capitalize'>Total</p>
            <p className='tw-text-[#007E3D] tw-font-bold tw-text-sm'>
              &#8377;{total > 1000 ? total : total + shippingCharge}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            window.scroll(0, 0);
            setShowModal(true);
          }}
          className='tw-bg-[#007E3D] tw-w-full tw-py-4  tw-px-5 tw-text-white tw-text-2xl tw-font-normal'
        >
          Buy
        </button>
      </div>
    </>
  );
};
export default CartTotal;
