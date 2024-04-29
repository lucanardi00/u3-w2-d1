import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap";

const MyFooter = () => (
    <Container fluid>
        <Row className="bg-body-tertiary">
            <Col mx-5>
                <Stack>
                    <h2>EpicStore</h2>
                    <p>Books made easier</p>
                </Stack>
            </Col>
            <Col>
                <Nav className="flex-column fs-5">
                    <NavLink href="#" className="text-dark">Home</NavLink>
                    <NavLink href="#" className="text-dark">About</NavLink>
                    <NavLink href="#" className="text-dark">Browse</NavLink>
                    <NavLink href="#" className="text-dark">Privacy & Policy</NavLink>
                </Nav>
            </Col>
            <Col>
                <h4>Contact Us!</h4>
                <p>email@epicstore.com</p>
            </Col>
        </Row>
    </Container>
)

export default MyFooter