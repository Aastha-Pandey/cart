const ProductCard = ({ item }) => {
  return (
    <>
      <div className='tw-flex tw-items-center tw-space-x-3'>
        <img className='tw-object-scale-down tw-h-16 xl:tw-h-auto' alt='' src={item.image}></img>
        <div className='tw-text-xs tw-font-bold xl:tw-text-sm tw-text-[#101418] tw-tracking-wider'>
          <p>{item.name}</p>
          <p>({item.netQuantity})</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
