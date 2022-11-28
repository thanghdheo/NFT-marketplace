import { Artworks, CreateNFT, Footer, Header, Hero, ShowNFT, Transactions } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero/>
      </div>
      <Artworks/>
      <Transactions/>
      <Footer/>
      <CreateNFT />
      <ShowNFT/>
    </div>
  );
};

export default App;
