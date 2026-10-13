import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import ScrollProgress from "./components/ScrollProgress";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <ScrollProgress />

      <Toaster position="top-right" />

      <Home />

      <BackToTop />
    </>
  );
}

export default App;
