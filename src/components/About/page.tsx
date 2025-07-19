const About = () => {
  return (
    <>
      <div className="flex py-20  items-center justify-center " id="about">
        <div className="w-full max-w-7xl flex items-center justify-between px-8 lg:px-20 text-dark">
          <div className="flex w-full flex-col  justify-center gap-4 mb-10">
            <h1 className="text-3xl font-bold text-center">Tentang Kami</h1>
            <p className="text-start text-gray-600">
              KulinerKu lahir dari dapur kecil dengan mimpi besar — menyajikan
              cita rasa rumahan yang bikin rindu.
            </p>
            <p className="text-start text-gray-600">
              Kami percaya, makanan bukan cuma soal kenyang, tapi soal kenangan,
              kehangatan, dan kebahagiaan yang dibagikan lewat setiap suapan.
            </p>
            <p className="text-start text-gray-600">
              Dari resep keluarga yang diturunkan turun-temurun, kami menyajikan
              menu favorit harian dengan bahan segar, tanpa pengawet, dan
              pastinya halal. Mulai dari lauk rumahan, camilan kekinian, hingga
              minuman segar — semua kami olah dengan cinta dan semangat lokal.
            </p>
            <div className="w-full flex flex-col items-start justify-center">
              <h2 className="text-2xl font-semibold mt-6">Kenapa Kulinerku</h2>
              <ul className="mt-2  text-gray-600">
                <li>✅ Masakan fresh setiap hari</li>
                <li>✅ Rasa rumahan yang otentik</li>
                <li>✅ Harga ramah di kantong</li>
                <li>✅ Bisa pesan via WA, GoFood, dan GrabFood</li>
              </ul>
            </div>
            <div className="w-full flex flex-col items-start justify-center">
              <p>
                Kami siap jadi teman makanmu — dari sarapan pagi sampai makan
                malam bareng keluarga. Yuk, kenalan lebih dekat dan rasakan
                sendiri kelezatannya! 🍽️
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
