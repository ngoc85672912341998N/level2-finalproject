import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
      
        
        <Row style={{backgroundColor:"black",color:"white",height:"300px"}}>
          <Col style={{textAlign:"left",marginLeft:'13px',textDecoration:"None",listStyle:"None"}}>
          <li className='mt-2'>Giới thiệu công ty</li>
          <li className='mt-2'>Chính sách bảo mật</li>
          <li className='mt-2'>Quy chế hoạt động</li>
          <li className='mt-2'>Kiểm tra hóa đơn điện tử</li>
          <li className='mt-2'>Tra cứu thông tin bảo hành</li>
          </Col>
          <Col style={{textAlign:"left",marginLeft:'13px',textDecoration:"None",listStyle:"None"}}>
          <li className='mt-2'>Tin tuyển dụng</li>
          <li className='mt-2'>Tin khuyến mãi</li>
          <li className='mt-2'>Hướng dẫn mua hàng online</li>
          <li className='mt-2'>Hướng dẫn mua hàng trả góp</li>
          <li className='mt-2'>Chính sách trả góp</li>
          <li className='mt-2'>Chính sách thu thập và xử lý dữ liệu cá nhân</li>
          </Col>
          <Col>
          <iframe className='mt-2 mb-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251635.1814153402!2d105.16617469453122!3d9.783008299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0e913f675b863%3A0xe246fb9b790aa3c7!2sFPT%20Shop!5e0!3m2!1svi!2s!4v1695699517849!5m2!1svi!2s" width="600" height="250" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
      
    
    );
  }
  
  export default Footer;