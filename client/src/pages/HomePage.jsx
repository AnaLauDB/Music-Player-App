import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { testConnection } from "../api/testApi";

function HomePage() {
  useEffect(() => {
    testConnection();
  }, []);

  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default HomePage;
