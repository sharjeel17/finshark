import logo from "../assets/logo.png";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="relative p-6 shadow-md bg-blue-300">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="finshark logo"/>
          <div className="font-bold flex">
            <a href="" className="text-black hover:text-darkBlue">
              Dashboard
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-black">
          <div className="hover:text-darkBlue cursor-pointer">Login</div>
          <a
            href=""
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;