import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="navbar bg-white fixed top-0 right-0 left-0 z-[999]">
      <div className="container">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Company Profile</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <HiMenuAlt1 size={30} />
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Home
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
