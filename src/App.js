
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
  background-image: linear-gradient(180deg, #0000008c 0%, #0000008c 100%), url(https://previews.dropbox.com/p/thumb/ACGdwCtxIvyb3ApyAK_vigexOqvKh0CMCIOg5u38pjirYnHiWueXIqtJuvn_4rW32-QeBovNTGz_zn44ASOQ7lMLUdqXRVpFmNDsEeGdof5APm_m39QZBhQG2mOJQUKckFSM1D2T7RhK-ozojZRbOFfBWNVjSnFRYxKdC82ZlJqdl7nIC3ucJ8MCiB5LrRkMCQRqWUhITqShqtEfxgCeVygaSX_8HFX0mRcG1PDms4gwLMsGrg_IJWGDu1MGISNctnOp89ZYCFG4AQ2V5y14QkFvZDYJbqHURrT1HTmgvMmEJjx5Kug87bkZLCanYebfWgyHDjU3HwMxqcqTbV-Rfuw6/p.jpeg);
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 95%, 0 80%);
`