import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/loader";
import "./App.css";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App  bg-slate-900 min-h-screen flex flex-col justify-between">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Header />
          <main className="flex-grow relative z-index-10 ">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
