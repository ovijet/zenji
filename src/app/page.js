import Hero from "@/component/Hero";


import FeaturedProduct from "./shop/page";

// const FetchData = async () => {
//   const res = await fetch("http://localhost:3000/data.json");
//   return res.json();
// };

export default async function Home() {
  return (
    <div>
    
      <Hero />
      <FeaturedProduct/>
    </div>
  );
}
