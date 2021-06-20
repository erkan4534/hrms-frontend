
import Navi from "./layouts/Navi";
import {Col, Container,Row} from "react-bootstrap";
import Side from "./layouts/Side";
import JobAdvertList from "./pages/JobAdvertList";

function App() {
  return (
    <div className="App">
        <Container>
            <Row>
                <Col sm={12}><Navi/></Col>
            </Row>
            <Row className='mt-3'>
                <Col  sm={2}><Side/></Col>
                <Col  sm={10} >
                    <Container>
                        <Row >
                            <Col sm={12}><JobAdvertList/></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
