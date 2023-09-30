import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid_product() {
    return (
        <div className="Grid_product mt-2">
            <Container>
                <Row>
                    <Col><img src="https://shopdunk.com/images/uploaded/Bonus%20banner-36.png" alt="" width='400' /></Col>
                    <Col><img src="https://shopdunk.com/images/uploaded/Bonus%20banner-26.png" alt="" width='400' /></Col>
                    <Col><img src="https://shopdunk.com/images/uploaded/Bonus%20banner-16.png" alt="" width='400' /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Grid_product;