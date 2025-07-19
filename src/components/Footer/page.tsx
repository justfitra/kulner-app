import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light text-dark flex w-full items-center py-10 justify-center shadow-dark ">
      <div className="flex items-center justify-between max-w-6xl px-14 w-full">
        <div>
          <h2 className="text-2xl font-bold ">
            Kuliner<span className="text-primary">Ku</span>
          </h2>
          <ul className="text-base mt-12 text-gray-500">
            <li>+62 859-4586-8265</li>
            <li>rrqlemkn@gmail.com</li>
            <li>Trenggalek, Jawa Timur</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold ">Layanan Kami</h2>
          <ul className="text-base flex flex-col gap-2 mt-7 text-dark font-medium">
            <li>
              <Link
                className="hover:text-primary transition-all ease-in-out duration-150"
                href={"#menu"}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-all ease-in-out duration-150"
                href={"#order"}
              >
                Cara Pesan
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-all ease-in-out duration-150"
                href={"#order"}
              >
                Gift Card
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold ">Hubungi Kami</h2>
          <ul className="text-base flex flex-col gap-2 mt-7 text-dark font-medium">
            <li>
              <Link
                className="hover:text-primary transition-all ease-in-out duration-150"
                href={"#menu"}
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-all ease-in-out duration-150"
                href={"#order"}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-all ease-in-out duration-150"
                href={"#order"}
              >
                Account
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold ">Layanan Kami</h2>
          <ul className="text-base flex flex-col gap-2 mt-7 text-dark font-medium">
            <li>
              <Link
                className="hover:text-primary transition-all ease-in-out duration-150"
                href={"#menu"}
              >
                WhatsApp
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-all ease-in-out duration-150"
                href={"#order"}
              >
                Gmail
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-all ease-in-out duration-150"
                href={"#order"}
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
