import Image from "next/image";
import menu from "./menu.js";
const Header = () => {
  return (
    <header className="z-10">
      <div className="container py-4 flex justify-between items-center text-xl font-bold">
        <Image width={64} height={64} alt="logo" src="/logo.svg" />
        <div className="flex select-none">
          {menu.map((map, key) => {
            return (
              <div className="mx-4" key={key}>
                {map?.title}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};
export default Header;
