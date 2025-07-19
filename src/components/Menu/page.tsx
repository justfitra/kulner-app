import menu from "@/data/menu";
import Card from "../Card/page";

const Menu = () => {
  return (
    <>
      <div className=" text-dark " id="menu">
        <div className="wfull max-w-7xl mx-auto px-20 py-20 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-10">
            <h1 className="text-3xl font-bold">Menu</h1>
            <p className="text-center text-gray-600 max-w-2xl">
              Temukan kreasi favorit kami, dibuat dengan penuh semangat dan
              disajikan dengan bangga
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {menu.map((item) => {
                return (
                  <Card
                    key={item.id}
                    menu={{
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      description: item.description,
                      image: item.image,
                      url: item.url,
                    }}
                  />
                );
              })}
              {/* <Card /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
