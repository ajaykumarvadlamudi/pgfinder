import { useNavigate } from "react-router-dom";
import { pgList } from "../data/pgdata";
import PGGrid from "../components/PGGrid";
import HeroSection from "../components/HeroSection";
function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection/>
      <PGGrid />
    </div>
  );
}

export default Home;
