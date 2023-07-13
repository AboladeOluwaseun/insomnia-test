import { NavLink } from "react-router-dom";
const PageNav = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className=" text-3xl font-bold">Insomnia Test</h2>
        <nav>
          <ul className="flex gap-5 items-center justify-between">
            <li className=' hover:bg-[#454566] cursor-pointer p-2 rounded-md'>
              {" "}
              <NavLink  to={"/"}>BpiIndex Page</NavLink>
            </li>
            <li className="hover:bg-[#454566] cursor-pointer p-2 rounded-md">
              {" "}
              <NavLink to={"/nft-list"}>NFTList Page</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default PageNav;
