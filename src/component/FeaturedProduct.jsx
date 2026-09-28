import AllProductCard from "./AllProductCard";

const FeaturedProduct = async () => {
  const data = await FetchData();

  const products = data.slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <AllProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default FeaturedProduct;