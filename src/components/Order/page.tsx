import { FaMoneyCheckAlt, FaWhatsapp } from "react-icons/fa";
import { HiMiniCursorArrowRays } from "react-icons/hi2";
import { MdChecklistRtl, MdMenuBook } from "react-icons/md";

const Order = () => {
  return (
    <>
      <div
        className=" flex py-20  items-center justify-center bg-light "
        id="home"
      >
        <div className="w-full max-w-7xl flex items-center justify-between px-20 text-dark">
          <div className="w-full flex flex-col items-center justify-center gap-4 mb-10">
            <h1 className="text-3xl font-bold">Cara Pesan</h1>
            <p className="text-center text-gray-600 max-w-2xl">
              Gak perlu ribet, kamu bisa pesan makanan favoritmu dari KulinerKu
              dalam hitungan menit! Ikuti langkah mudah berikut:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
              <div className="flex hover:shadow-2xl shadow-dark transition-all ease-in-out flex-col border-2 border-dark rounded-2xl p-6 items-center justify-center gap-4">
                <div className="relative flex ">
                  <MdMenuBook className="text-8xl" />
                  <HiMiniCursorArrowRays className="text-6xl  absolute text-dark  drop-shadow-2xl top-16 left-16 z-30" />
                </div>
                <div className="mt-6">
                  <h1 className="text-lg font-semibold text-center">
                    Pilih Menu Favoritmu
                  </h1>
                  <p className="text-sm text-gray-600 text-center">
                    Jelajahi daftar menu kami di halaman Menu. Tinggal klik
                    makanan yang kamu mau!
                  </p>
                </div>
              </div>
              <div className="flex hover:shadow-2xl shadow-dark transition-all ease-in-out flex-col border-2 border-dark rounded-2xl p-6 items-center justify-center gap-4">
                <div className="relative flex ">
                  <FaWhatsapp className="text-8xl" />
                </div>
                <div className="mt-6">
                  <h1 className="text-lg font-semibold text-center">
                    Hubungi Kami via WhatsApp
                  </h1>
                  <p className="text-sm text-gray-600 text-center">
                    Klik tombol{" "}
                    <span className="font-semibold">
                      &quot;Pesan Sekarang&quot;
                    </span>{" "}
                    atau langsung kirim pesan ke WhatsApp kami: 📲
                    0859-4586-8265
                  </p>
                </div>
              </div>
              <div className="flex hover:shadow-2xl shadow-dark transition-all ease-in-out flex-col border-2 border-dark rounded-2xl p-6 items-center justify-center gap-4">
                <div className="relative flex ">
                  <MdChecklistRtl className="text-8xl" />
                </div>
                <div className="mt-6">
                  <h1 className="text-lg font-semibold text-center">
                    Konfirmasi Pesanan
                  </h1>
                  <p className="text-sm text-gray-600 text-center">
                    Tulis nama menu, jumlah pesanan, dan lokasi pengantaran. Tim
                    kami akan merespons secepat kilat
                  </p>
                </div>
              </div>
              <div className="flex hover:shadow-2xl shadow-dark transition-all ease-in-out  flex-col border-2 border-dark rounded-2xl p-6 items-center justify-center gap-4">
                <div className="relative flex ">
                  <FaMoneyCheckAlt className="text-8xl" />
                </div>
                <div className="mt-6">
                  <h1 className="text-lg font-semibold text-center">
                    Bayar & Nikmati
                  </h1>
                  <p className="text-sm text-gray-600 text-center">
                    Selesaikan pembayaran dan tinggal tunggu makanan datang!
                    Bisa COD atau transfer bank.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
