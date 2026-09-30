import AllProductCard from "@/component/AllProductCard";

const FetchData = async () => {
  const res = await fetch("http://localhost:3000/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const AllProduct = async () => {
  const data = await FetchData();

  return (
    <section className="py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500">
            ZENJI COLLECTION
          </p>

          <h1 className="text-4xl md:text-5xl font-black italic uppercase mt-2">
            Shop All Btn
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((product) => (
            <AllProductCard
              key={product.id}
              product={product}
              FetchData={FetchData()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
