const navTabs = ['product', 'stories', 'skin assessment', 'ingredients', 'blog'];

const Navbar = () => {
  return (
    <>
      <nav className='tw-flex tw-mt-16  tw-justify-center tw-space-x-3 md:tw-space-x-6 lg:tw-space-x-6 xl:tw-space-x-6 tw-py-3 tw-shadow-md'>
        {navTabs.map((tab) => (
          <p className='tw-uppercase tw-text-xs md:tw-text-sm lg:tw-text-sm xl:tw-text-sm tw-text-[#101418] tw-font-medium'>
            {tab}
          </p>
        ))}
      </nav>
    </>
  );
};
export default Navbar;
