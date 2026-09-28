import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">
          ZENJI
        </p>

        <h1 className="text-8xl md:text-[180px] font-black italic leading-none">
          404
        </h1>

        <h2 className="mt-6 text-2xl md:text-4xl font-bold uppercase italic">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400 max-w-md mx-auto">
          Looks like this page has disappeared into the shadows.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-white text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-gray-200 transition"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
