import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-600 mt-10">
        Made with 💗 by Bhushan Pralhad Bobade
      </div>
    </div>
  );
};

export default AppLayout;
