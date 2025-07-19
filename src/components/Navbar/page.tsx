"use client";
import useHash from "@/hooks/useHash";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [hash, setHash] = useHash();

  console.log("Current hash:", hash);
  return (
    <nav className=" w-full bg-light border-b border-dark text-dark fixed top-0 z-30">
      <div className="w-full  py-4  bg-light rounded-2xl max-w-7xl mx-auto px-8 md:px-20 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl text-dark">
            Kuliner<span className="text-primary">Ku.</span>
          </h1>
        </div>
        <div>
          <ul className="md:flex hidden gap-8  font-medium text-lg items-center justify-center">
            {[
              { link: "#home", label: "Home" },
              { link: "#menu", label: "Menu" },
              { link: "#about", label: "Tentang Kami" },
              { link: "#galery", label: "Galeri" },
              { link: "#contact", label: "Hubungi Kami" },
            ].map((item) => (
              <li key={item.link}>
                <button
                  onClick={() => setHash(item.link)}
                  className={`${
                    hash === item.link ? "text-primary font-bold" : "text-dark"
                  }text-lg font-medium hover:text-primary transition-colors px-2  relative duration-200 group`}
                >
                  <Link href={item.link} className="w-full h-full">
                    {item.label}{" "}
                  </Link>
                  <div
                    className={`${
                      hash === item.link ? "scale-x-100" : ""
                    } ease-in-out duration-300 bg-primary transition-all left-0  group-hover:scale-x-100 scale-x-0 h-0.5 absolute -bottom-[5px] w-full`}
                  ></div>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link
            className="font-semibold text-lg flex gap-3 hover:text-primary transition-all ease-in-out duration-150 hover:drop-shadow-2xl items-center"
            href={"/whatsapp"}
          >
            <FaWhatsapp className="text-2xl" />
            WhatsApp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
