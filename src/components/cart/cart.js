import CartTable from './cartTable';
import CartTotal from './cartTotal';

const Cart = () => {
  return (
    <>
      <section className=' tw-z-10 tw-flex tw-flex-col tw-w-full tw-items-center  tw-space-y-4'>
        <p className='tw-text-[#101418] tw-font-bold tw-py-2 xl:tw-py-16 tw-text-2xl xl:tw-text-5xl'>
          Shopping Cart
        </p>
        <div className=' xl:tw-py-10 tw-flex tw-flex-col md:tw-flex-row lg:tw-flex-row xl:tw-flex-row md:tw-space-x-6 lg:tw-space-x-6 xl:tw-space-x-6 tw-w-full tw-px-2 md:tw-px-48 lg:tw-px-48 xl:tw-px-48 md:tw-items-start lg:tw-items-start xl:tw-items-start tw-justify-center'>
          <CartTable />
          <CartTotal />
        </div>
      </section>
    </>
  );
};

export default Cart;
