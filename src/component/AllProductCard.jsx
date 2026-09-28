import React from "react";

const AllProductCard = ({ product }) => {
  const { name, price, category, image, sizes } = product;

  return (
    <div className="card bg-base-100 w-full shadow-sm hover:shadow-xl transition">

      {/* Image */}
      <figure className="h-80 bg-base-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </figure>

      {/* Body */}
      <div className="card-body">

        {/* Title + Badge */}
        <h2 className="card-title">
          {name}

          <div className="badge badge-secondary">
            NEW
          </div>
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-xl font-bold">
          ৳{price}
        </p>

        {/* Sizes */}
        <div className="flex gap-2 flex-wrap">
          {sizes.map((size) => (
            <div
              key={size}
              className="badge badge-outline"
            >
              {size}
            </div>
          ))}
        </div>

        {/* Category + Cart */}
        <div className="card-actions justify-between items-center mt-4">

          <div className="badge badge-outline">
            {category}
          </div>

          <button className="btn btn-neutral btn-sm">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default AllProductCard;