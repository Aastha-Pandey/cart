const Modal = ({ setShowModal, children }) => {
  return (
    <>
      <div
        onClick={() => setShowModal(false)}
        className=' tw-fixed tw-inset-0 tw-bg-[#007E3D] tw-z-20 tw-bg-opacity-20 tw-flex tw-items-center tw-justify-center '
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
