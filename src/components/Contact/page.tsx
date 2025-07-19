import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className=" text-dark " id="contact">
        <div className="wfull max-w-7xl mx-auto px-8 lg:px-20 py-20 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-10">
            <h1 className="text-3xl font-bold">Hubungi Kami</h1>
            <p className="text-center text-gray-600 max-w-2xl">
              Kami siap membantu kebutuhan kuliner Anda – baik pemesanan, kerja
              sama, maupun informasi produk.
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full items-center">
            <div className="flex gap-5 w-full max-w-4xl">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full p-2 rounded-lg border border-gray-400"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full p-2 rounded-lg border border-gray-400"
              />
            </div>
            <div className="flex gap-5 w-full max-w-4xl">
              <input
                type="text"
                placeholder="Email*"
                className="w-full p-2 rounded-lg border border-gray-400"
              />
            </div>
            <div className="flex gap-5 w-full max-w-4xl">
              <textarea
                className="w-full p-2 rounded-lg h-48 border border-gray-400"
                placeholder="Tulis Pesan....."
                name=""
                id=""
              ></textarea>
            </div>
            <div className="w-full flex items-start max-w-4xl">
              <Link
                href={""}
                className="bg-primary mt-4  text-white px-4  py-2 rounded-full hover:shadow-2xl hover:bg-white hover:border-1 border-primary hover:text-primary  transition-all ease-in-out duration-150 shadow-primary"
              >
                Kirim Pesan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
