import { Outlet } from "react-router-dom";
import WavyHeaderNav from "./components/WavyHeaderNav";
import Footer from "./components/Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <WavyHeaderNav /> */}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}