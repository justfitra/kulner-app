import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Menu {
  id: string;
  title: string;
  price: string;
  description: string;
  image: StaticImageData;
  url: string;
}

interface MenuProps {
  menu: Menu;
}

const Card: React.FC<MenuProps> = ({ menu }) => {
  return (
    <div className="bg-white hover:shadow-primary shadow-2xl transition-all ease-in-out duration-150 rounded-2xl max-w-sm mx-auto overflow-hidden">
      <div className="h-48 pb-2 w-full overflow-hidden flex items-center justify-center">
        <Image
          src={menu.image}
          alt="Card Image"
          className="hover:scale-110 w-full duration-300 ease-in-out transiton-all "
        />
      </div>

      <div className="p-6 h-52 overflow-y-scroll ">
        <h2 className="text-2xl font-semibold mb-2">{menu.title}</h2>
        <h4 className="text-base uppercase mb-2 font-semibold">{menu.price}</h4>
        <p className="text-gray-400 text-sm mb-4">{menu.description}</p>
      </div>
      <div className="pb-6">
        <Link
          href={menu.url}
          className="bg-primary mt-4  text-white px-4 m-6 py-2 rounded-full hover:shadow-2xl hover:bg-white hover:border-1 border-primary hover:text-primary  transition-all ease-in-out duration-150 shadow-primary"
        >
          Order Sekarang
        </Link>
      </div>
    </div>
  );
};

export default Card;
