import Footer from "./components/page-components/Footer";
import Header from "./components/page-components/Header";
import Homepage from "./components/page-components/Homepage";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
