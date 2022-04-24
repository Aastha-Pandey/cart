import { createContext, useEffect, useState } from 'react';
import Cart from './components/cart/cart';
import Footer from './components/footer';
import Header from './components/header';
import Modal from './components/modal';
import Navbar from './components/navbar';

import './index.css';
export const QuantityContext = createContext();
function App() {
  const [cartItems, setCartItems] = useState([
    {
      image: './Frame9.png',
      name: 'Body Cleanser',
      netQuantity: '250ml',
      price: 250,
      quantity: 2,
    },
    {
      image: './Frame10.png',
      name: 'Body Cleanser',
      netQuantity: '250ml',
      price: 250,
      quantity: 1,
    },
    {
      image: './Frame11.png',
      name: 'Body Cleanser',
      netQuantity: '250ml',
      price: 250,
      quantity: 1,
    },
  ]);
  const [showModal, setShowModal] = useState();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      {showModal && (
        <Modal setShowModal={(value) => setShowModal(value)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className='tw-bg-[#007E3D] tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-h-2/4 tw-w-4/5 xl:tw-w-1/2 tw-py-4  tw-px-5 tw-text-white tw-text-2xl tw-font-normal'
          >
            Success!
          </div>
        </Modal>
      )}
      <div
        className={`${
          showModal && 'tw-fixed tw-inset-0'
        } tw-min-h-screen tw-min-w-screen tw-flex tw-flex-col `}
      >
        <QuantityContext.Provider
          value={{
            cartItems,
            setCartItems,
            setShowModal,
          }}
        >
          <Header />
          <Navbar />
          <Cart />
          <Footer />
        </QuantityContext.Provider>
      </div>
    </>
  );
}

export default App;
