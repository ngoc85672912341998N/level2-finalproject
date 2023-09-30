import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './style.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../Redux/productSlice";
function Product() {
    const [cart1, checksetcart] = useState([]);
    const dispatch = useDispatch();
     const { products, loading } = useSelector((state) => state.product);
    
    useEffect(() => {
        dispatch(getProducts());
      }, []);
    // console.log(products)
    //Mua hàng
    function cart(name) {
        if(localStorage.getItem("cart")===null){
        var qty =1
        var list = "id:"+name+",soluong:"+qty
        localStorage.setItem("cart", list)
        }
        if(localStorage.getItem("cart")!=null){
        var cart = localStorage.getItem("cart")
        
        
      }


    const listItems = products.map((cate1) =>
    <Col>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://students.trungthanhweb.com/images/`+cate1.images} />
        <Card.Body>
            <Card.Title>{cate1.name}</Card.Title>
            <Card.Text className='text-product'>
                <p><span style={{ color: "black", fontWeight: "700" }}>Giá:</span> {Intl.NumberFormat('en-US').format(cate1.price)}</p>
                <p><span style={{ color: "black", fontWeight: "700" }}>Loại sản phẩm:</span> {cate1.catename}</p>
                <p><span style={{ color: "black", fontWeight: "700" }}>Thương hiệu:</span> {cate1.brandname}</p>
            </Card.Text>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button id={cate1.id} onClick={() => cart(cate1.id)} className='me-2'>Mua hàng</Button>
                    <Button style={{fontSize:"14px"}}> Xem chi tiết</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </Card.Body>
    </Card>
</Col>
  );
  console.log("tesst");
  console.log(listItems);
    return (
    <Container className='mt-4 mb-3'>
        <Row>
          {listItems} 
          ugigiho 
        </Row>
        <Container className='mt-4 mb-3'>
        
    </Container>
    </Container>
    
    
    );
  }}
  
  export default Product;