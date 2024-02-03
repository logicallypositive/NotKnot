import Navbar from "./Navbar";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Title from "./Title";

import Container from "@mui/material/Container";

export default function App() {
  const user = "CrochetQueen";
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Navbar>
        <Title />
      </Navbar>
      <Gallery user={user} />
      <Footer />
    </Container>
  );
}

