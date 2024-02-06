import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeCards from "./components/HomeCards";

export default function Home() {
  useEffect(()=>{
    document.body.style.overflowY = "scroll";
  },[])
  return (
    <>
      <Header/>
      <HomeCards />
      <Footer />
    </>
  );
}
