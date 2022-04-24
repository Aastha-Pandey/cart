const Quantity = ({ cartItems, setCartItems, item, index }) => {
  return (
    <>
      <div className='tw-flex tw-space-x-2 tw-items-center tw-justify-center tw-px-4 tw-py-1 tw-border  '>
        <button
          onClick={() => {
            if (cartItems[index].quantity > 1) {
              let cartItemscopy = [...cartItems];
              cartItemscopy[index] = {
                ...cartItemscopy[index],
                quantity: cartItemscopy[index].quantity - 1,
              };

              setCartItems(cartItemscopy);
            }
          }}
          className='tw-text-[#CCCCCC]'
        >
          -
        </button>
        <div className='tw-flex tw-h-4 tw-w-6 tw-justify-center tw-text-xs tw-font-bold xl:tw-text-sm tw-text-[#101418]'>
          {item.quantity}
        </div>
        <button
          onClick={() => {
            let cartItemscopy = [...cartItems];
            cartItemscopy[index] = {
              ...cartItemscopy[index],
              quantity: cartItemscopy[index].quantity + 1,
            };

            setCartItems(cartItemscopy);
          }}
          className='tw-text-[#CCCCCC]'
        >
          +
        </button>
      </div>
    </>
  );
};

export default Quantity;
