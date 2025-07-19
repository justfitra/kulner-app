// "use client";
import Image from "next/image";

const Galeri = () => {
  return (
    <div className="bg-light  text-dark" id="galery">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-20 py-10">
        <div className="mb-10 flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold">Galeri Kami</h1>
          <p className="max-w-2xl text-center text-gray-600">
            Rasakan kelezatan dari setiap sudut dapur kami. Dari proses
            pembuatan hingga sajian ke meja Anda, semua penuh cinta dan cita
            rasa.
          </p>
        </div>

        <div className="h-auto w-full">
          <div className="mx-auto w-full px-4 md:px-8">
            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {[
                {
                  title: "Food",
                  span: "",
                  image: "/assets/images/food-galery.jpg",
                },
                {
                  title: "Kitchen",
                  span: "md:col-span-2",
                  image: "/assets/images/restaurant1.jpg",
                },
                {
                  title: "Restaurant",
                  span: "md:col-span-2",
                  image: "/assets/images/restaurant2.jpg",
                },
                {
                  title: "Food",
                  span: "",
                  image: "/assets/images/food-galery2.jpg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${item.span}`}
                >
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt={`Gallery image ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
