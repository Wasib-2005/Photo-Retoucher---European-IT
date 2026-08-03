import AllOurServicesCart from "./AllOurServicesCart";

const AllOurServicesCarts = ({ allOurServicesCartsData }) => {
  const totalCart = allOurServicesCartsData?.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center mx-auto gap-6">
      {allOurServicesCartsData?.map((allOurServicesCart, i) => (
        <AllOurServicesCart
          key={("AllOurServicesCart", i)}
          index={i}
          totalCart={totalCart}
          allOurServicesCart={allOurServicesCart}
        />
      ))}
    </div>
  );
};

export default AllOurServicesCarts;
