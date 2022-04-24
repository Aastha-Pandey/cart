import { useContext } from 'react';
import { QuantityContext } from '../../App';
import ProductCard from './productCard';
import Quantity from './quantity';

const CartTable = () => {
  const { cartItems, setCartItems } = useContext(QuantityContext);

  return (
    <>
      <table
        style={{
          borderCollapse: 'separate',
          borderSpacing: '0.5rem',
        }}
        className='table-fixed  xl:tw-w-3/4 '
      >
        <thead>
          <tr className='tw-h-10'>
            {['product', 'price', 'quantity', 'total', ' '].map((k, i) => (
              <th
                className={`tw-text-[#101418] ${
                  i === 0 && 'tw-text-left'
                } tw-uppercase tw-text-sm tw-font-bold`}
              >
                {k}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <tr className=' tw-w-full '>
                <td className=' tw-w-full  '>
                  <ProductCard item={item} />
                </td>
                <td className=' tw-text-center  xl:tw-px-5 tw-w-full tw-text-xs tw-font-bold xl:tw-text-sm tw-text-[#101418]'>
                  &#8377;{item.price}
                </td>
                <td className='tw-w-full  xl:tw-px-5 tw-text-center'>
                  <Quantity
                    item={item}
                    cartItems={cartItems}
                    setCartItems={(value) => {
                      setCartItems(value);
                    }}
                    index={index}
                  />
                </td>
                <td className='tw-w-full  xl:tw-px-5 tw-text-center'>
                  <p className='tw-text-xs tw-font-bold xl:tw-text-sm tw-text-[#101418]'>
                    &#8377;{item.price * item.quantity}
                  </p>
                </td>
                <td className='tw-w-full tw-text-center'>
                  <button
                    onClick={() => {
                      let cartItemscopy = [...cartItems];

                      setCartItems(cartItemscopy.filter((item, i) => i !== index));
                    }}
                    className=' tw-text-xs tw-font-bold xl:tw-text-sm tw-text-[#101418]'
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CartTable;
