import "./App.css";
import CryptoCard from "components/CryptoCard";
import Header from "./components/Header";
import MainContent from "components/MainContent";
import Modal from "components/Modals";
import { useAppContext } from "contexts";

function App() {
  const { isModalOpen } = useAppContext();

  return (
    <div className="App">
      <Header />
      <CryptoCard />
      <MainContent />
      {isModalOpen && <Modal />}
    </div>
  );
}

export default App;
