import { Outlet } from "react-router";

export const HomeLayout = () => {
  return (
    <div className="">
      {/* container mx-auto px-4 h-14 */}
      <Outlet />
    </div>
  );
};
