
import Navbar from './components/Navbar';
import Inicio from "./Screens/Inicio";
import Servicios from "./Screens/Servicios";
import Contactanos from "./Screens/Contactanos";
import Nosotros from "./Screens/Nosotros";
import styled from 'styled-components';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
function App() {
  return (
    <>
      <HeaderCont>
        <Navbar/>
        <Inicio/>
      </HeaderCont>
      <Servicios/>
      <Contactanos/>
      <Nosotros/>
      <Footer/>
      <WhatsAppButton/>
    </>
  );
}

export default App;

const HeaderCont = styled.div`
  background-image: linear-gradient(180deg, #0000008c 0%, #0000008c 100%), url(https://dl.dropboxusercontent.com/scl/fi/l2p9h7kyprapgxgapzbtf/backgound.jpeg?rlkey=j78vj1evkzagz7az72g6f99ku&dl=0);
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 95%, 0 80%);
`