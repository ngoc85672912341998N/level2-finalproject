
import './style.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useEffect, useState } from "react";
import Footer from './fotter';
import Footer2 from './fotter2';
import Swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal';
import { BiUser } from "react-icons/bi";


function Nofication3() {
  const [cart11, checksetcart1] = useState([]);

  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  const [image_gallery, check_image_gallery] = useState([]);
  const [name, name_product12] = useState('');
  const [content_product11, content_product23] = useState([]);
  const [price21, price_product23] = useState([]);
  const [image123, image_product23] = useState([]);
  const [id_prd, id_prd23] = useState([]);
  function cart(name) {
    if(localStorage.getItem("api_token")!=null){
      const Swal = require('sweetalert2')
    var price = document.getElementById(name).textContent;
     var name2= "name_"+name
     var name31= "image_"+name
     var name3 = document.getElementById(name2).textContent;
     var name311 = document.getElementById(name31).getAttribute("src");
     console.log(price.split(" ")[1]);
     console.log(name);
     console.log(name311);
   if (localStorage.getItem("cart") == null) {
     var qty = 1
     var list = "id:" + name + ",soluong:" + qty +",gia:"+price.split(" ")[1]+",ten:"+name3+ ",img:"+name311+ "#"
     localStorage.setItem("cart", list)
     console.log(1);
   } else {
     
     var cart = localStorage.getItem("cart")
     var cart2 = cart.split("#")
     for (let index = 0; index < cart2.length; index++) {
       if (cart2[index] != "") {
         var element = cart2[index].split(",")[0].split(":")[1];
         var cart = []
         cart.push(element)
       }
     }
     console.log(cart);
     const fromDb = undefined;
     const arr = fromDb || cart;
     const result1 = arr.includes(name);
     console.log(result1);

     if (result1 === false) {
       console.log("khong co trong gio hang");
       var local = localStorage.getItem("cart");
       var qty = 1
       var list = local + "id:" + name + ",soluong:" + qty +",gia:"+price.split(" ")[1]+",ten:"+name3+ ",img:"+name311+ "#"
       localStorage.setItem("cart", list)
     } else {
       var local2 = localStorage.getItem("cart")
       var local3 = local2.split("#")
       var string = ""
       for (let index = 0; index < local3.length; index++) {
         if (local3[index] != "") {
           const element = local3[index];
           var element2 = element.split(",")[0].split(":")[1]
           // console.log(element2);
           if (element2 === name) {
             var qty = parseInt(element.split(",")[1].split(":")[1]) + 1
             var list55 = "id:" + name + ",soluong:" + qty+",gia:"+price.split(" ")[1]+",ten:"+name3+ ",img:"+name311+ "#"
             string += list55
           } else {
             var qty = 1
             var list66 = "id:" + element.split(",")[0].split(":")[1] + ",soluong:" + element.split(",")[1].split(":")[1]+",gia:"+price.split(" ")[1]+",ten:"+name3 + ",img:"+name311+ "#"
             string += list66
           }
         }
       }
       console.log(string);
       localStorage.setItem("cart", string)
       
     }
   }
   Swal.fire({
    title: 'success',
    text: 'Bạn đã đặt hàng thành công',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500
  })
    }else{
      Swal.fire({
        title: 'warning',
        text: 'Vui lòng đăng nhập trước khi mua hàng',
        icon: 'warning',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
 }
  
  let listitem;
  const submitlogin1 = () =>{
    var page_number = localStorage.getItem("current_page")
    var k=parseInt(page_number)+1
    localStorage.setItem("current_page",k)
    axios({
      method: 'get',
      url: 'https://students.trungthanhweb.com/api/home?apitoken=Sf6v5OIkLScoLYUEljQ4dJtDJyffsuRXchD24atYwE6KrU2wLfui1RC9PLHz&page='+k,
      responseType: 'stream'

    }).then(function (response) {
      // console.log(JSON.parse(response.data));
      var k1= JSON.parse(response.data)
      var k2= k1.products.data
      listitem = k2.map((cate) =>
        <Col className='mt-2'>
      <Card style={{ width: '18rem' }}>
          <Card.Img id={"image_"+cate.id} variant="top" src={`https://students.trungthanhweb.com/images/`+cate.images} />
          <Card.Body>
          <Card.Title id={"name_"+cate.id}>{cate.name}</Card.Title>
              <Card.Text className='text-product'>
              <p id={cate.id}><span style={{ color: "black", fontWeight: "700" }}>Giá:</span> {Intl.NumberFormat('en-US').format(cate.price)}</p>
                  <p><span style={{ color: "black", fontWeight: "700" }}>Loại sản phẩm:</span> {cate.catename}</p>
                  <p><span style={{ color: "black", fontWeight: "700" }}>Thương hiệu:</span> {cate.brandname}</p>
              </Card.Text>
              <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup className="me-2" aria-label="First group">
                      <Button id={cate.id} onClick={() => cart(cate.id)} className='me-2'>Mua hàng</Button>
                      <Button onClick={() => view_chi_tiet_san_pham(cate.id)} style={{fontSize:"16px", height: "40px" }}> <p onClick={handleShow6}>Xem chi tiết</p></Button>
                  </ButtonGroup>
              </ButtonToolbar>
          </Card.Body>
      </Card>
  </Col>
     
     
      
  );
 
  checksetcart1(cart11 => [...cart11, listitem]);
    })
    
    }
    console.log(cart11);
    // xem sản phẩm đơn
  let listItems318
  let content
  let price3
  let image_first
  let id_first
  function view_chi_tiet_san_pham(number_id) {
    axios({
      method: 'get',
      url: 'https://students.trungthanhweb.com/api/single?apitoken=Sf6v5OIkLScoLYUEljQ4dJtDJyffsuRXchD24atYwE6KrU2wLfui1RC9PLHz&id=' + number_id,

    }).then(function (response) {
      name_product12('')
      check_image_gallery([])
      content_product23([])
      price_product23([])
      image_product23([])
      id_prd23([])
      console.log(response.data);
      var image1 = response.data.gallery
      listItems318 = image1.map((cate) =>
        <img style={{cursor:'pointer'}} onClick={() => setsingleimage(cate)}  width="50px" src={cate} alt="" />
      );
      content = response.data.products[0].content
      price3 = response.data.products[0].price
      image_first = response.data.products[0].images
      id_first = response.data.products[0].id
      name_product12(response.data.products[0].name)
      console.log(response.data.products[0].name);
      check_image_gallery(image_gallery => [...image_gallery, listItems318]);
      content_product23(content_product11 => [...content_product11, content]);
      price_product23(price21 => [...price21, price3]);
      image_product23(image123 => [...image123, image_first]);
      id_prd23(id_prd=> [...id_prd, id_first]);
    })
  }
  
  //set single hình ảnh
  function setsingleimage(url) {
    image_product23([])
    console.log(url.split("/")[4]);
    image_product23(image123 => [...image123, url.split("/")[4]]);
  }

    return (
      <div className="Nofication">
        {/* chi tiết sản phẩm */}
      <Modal
        show={show6}
        onHide={handleClose6}
        backdrop="static"
        size="lg"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <BiUser style={{ fontSize: '20px', fontWeight: "600px" }} className='me-2' />
          <Modal.Title id="email">Chi tiết sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{name}</h3>
          <Container>
            <Row>
              <Col>
                <img width="400px" src={`https://students.trungthanhweb.com/images/` + image123} alt="" />
                <div className="gallery">
                  {image_gallery}
                </div>
              </Col>
              <Col>
                <h3>Giá: <span>{Intl.NumberFormat('en-US').format(price21)}</span></h3>
                <Button variant="primary" className='me-2' onClick={() => cart(id_prd)}>Mua hàng</Button>
                <Button variant="primary">Thông tin trả góp</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className='mt-2'> Bài viết sản phẩm</h3>
                <div dangerouslySetInnerHTML={{ __html: content_product11 }}></div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
        <Container className='mt-1 mb-3 check'>
        <Row>
        {cart11} 
        </Row>
        </Container>
          
       
         <Button style={{fontSize:"14px"}} onClick={submitlogin1} className='me-2 mb-2'>Xem thêm</Button>
         <Footer></Footer>
         <Footer2></Footer2>
      </div>
    );
  }
  
  export default Nofication3;