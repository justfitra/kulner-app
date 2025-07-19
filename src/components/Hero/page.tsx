import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div
        className="min-h-screen flex py-20  items-center justify-center bg-light "
        id="home"
      >
        <div className="w-full max-w-7xl flex items-center justify-between px-20 text-dark">
          <div className="w-1/2 flex flex-col ">
            <p className="text-lg font-medium drop-shadow-2xl shadow-primary text-primary">
              Welcome to Kuliner<span className="">Ku.</span>
            </p>
            <h3 className="text-4xl font-semibold">
              Lezatnya Hidangan Rumahan, Siap Antar ke Meja Anda.
            </h3>
            <p className="mt-4 text-base">
              Rasakan cita rasa lokal dalam setiap suapan — pesan sekarang
              dengan sekali klik.
            </p>
            <div className="mt-10">
              <Link
                href={""}
                className="bg-primary hover:shadow-2xl hover:bg-white hover:border-1 border-primary hover:text-primary  transition-all ease-in-out duration-150 text-white shadow-primary py-5 px-10 rounded-full font-semibold "
              >
                Pesan Sekarang
              </Link>
            </div>
          </div>
          <div className="">
            <Image
              src={"/assets/images/image1.png"}
              alt="Culinary Experience"
              width={500}
              height={500}
              className=" rounded-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
