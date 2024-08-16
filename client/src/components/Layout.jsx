import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/Navbar';

function Layout() {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
