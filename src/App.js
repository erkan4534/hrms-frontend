
import Navi from "./layouts/Navi";
import {Col, Container,Row} from "react-bootstrap";
import Side from "./layouts/Side";
import JobAdvertList from "./pages/JobAdvertList";

function App() {
  return (
    <div className="App">
        <Container>
            <Row>
                <Col className="fixed-top"><Navi/></Col>
            </Row>
            <Row>
                <Col className="position-fixed" sm={2}><Side/></Col>
                <Col className="ml-auto" sm={10}><JobAdvertList/></Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
