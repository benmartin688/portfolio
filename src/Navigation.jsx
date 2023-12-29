function Navigation() {
  return (
    <div className="font-bold m-2 absolute flex flex-row items-center w-full">
      <div>
        <img
          className="w-16 cursor-pointer"
          src={"./assets/icon.png"}
          alt="Logo"
        />
      </div>
      <div className="mr-4 ml-auto">
        <ul className="flex text-xl">
          <li>
            <a
              className="mx-5 nav-link hover:text-[#b5b7b1] duration-300"
              href="Hi"
            >
              Home
            </a>
            <a
              className="mx-5 nav-link hover:text-[#b5b7b1] duration-300"
              href="Hi"
            >
              Projects
            </a>
            <a
              className="mx-5 nav-link hover:text-[#b5b7b1] duration-300"
              href="Hi"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
