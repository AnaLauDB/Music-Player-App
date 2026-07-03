import { useSelector } from "react-redux";

function HomePage() {
  const theme = useSelector((state) => state.app.theme);
  console.log(import.meta.env.VITE_API_URL);

  return (
    <main className="container">
      <h1>🎵 Music Explorer</h1>
      <p>Tema actual: {theme}</p>
    </main>
  );
}

export default HomePage;
