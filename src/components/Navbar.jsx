import { navLists } from "../constants";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-40 my-8 max-lg:mx-10 max-sm:mx-4">
      <img
        width={20}
        height={20}
        src="./assets/images/apple.svg"
        alt="apple logo"
      />
      <div className="flex max-md:hidden">
        {navLists.map((link) => {
          return (
            <div
              className="mx-4 text-lg text-gray cursor-pointer hover:text-white transition"
              key={link}
            >
              {link}
            </div>
          );
        })}
      </div>
      <div className="flex gap-8">
        <img
          width={20}
          height={20}
          src="./assets/images/search.svg"
          alt="search"
        />
        <img width={20} height={20} src="./assets/images/bag.svg" alt="bag" />
      </div>
    </div>
  );
};
export default Navbar;
