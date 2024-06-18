import { MainPageComponent } from "./pages/main/MainPageComponent";
import { Footer } from "./shared/Footer/Footer";
import { Header } from "./shared/Header/Header";

function App() {
  return (
    <div className=" flex flex-col  px-10 bg-gradient-to-r from-indigo-400 to-red-700 h-screen">
      <Header />
      <MainPageComponent />
      <Footer />
    </div>
  );
}

export default App;
