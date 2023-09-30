import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRef,useEffect } from "react";
import './style.css'
import { useSelector, useDispatch } from "react-redux";
import { getCates } from "../Redux/CateSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiCartAlt } from "react-icons/bi";

import { BsFillCartCheckFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import axios from "axios";
import Swal from 'sweetalert2'
import Table from 'react-bootstrap/Table';
import { AiOutlineShopping } from "react-icons/ai";

function BasicExample() {
  const dispatch = useDispatch();
  const { cates, loading } = useSelector((state) => state.cate);
  const [login, setlogin] = useState('')
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const Loginchange = e => setlogin(e.target.value)
  const [email22, setemail] = useState('')
  const Emailchange = e => setemail(e.target.value)
  const [phone, setphone] = useState('')
  const Phonechange = e => setphone(e.target.value)
  const [diachi, setDiachi] = useState('')
  const Diachichange = e => setDiachi(e.target.value)
  const [hoadon, viewhoadon] = useState([])
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5= () => setShow5(true);
  ///chi tiết hóa đơn tham số
  const [chitiethoadon, viewchitiethoadon] = useState([])


  

  useEffect(() => {
    dispatch(getCates());
  }, []);

  let view_cart

  // Hàm đăng nhập
  function setNativeValue(element, value) {
    let lastValue = element.value;
    element.value = value;
    let event = new Event("input", { target: element, bubbles: true });
    event.simulated = true;
    let tracker = element._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    element.dispatchEvent(event);
  }
  const submitlogin = () => {
    var api_token3 = localStorage.getItem("api_token");
    if (api_token3 == null) {
      axios({
        method: 'post',
        url: 'https://students.trungthanhweb.com/api/checkLoginhtml',
        data: {
          email: login
        },
        responseType: 'stream'

      }).then(function (response) {
        const api_token = JSON.parse(response.data);
        console.log(api_token.apitoken);
        localStorage.setItem("api_token", api_token.apitoken);
        localStorage.setItem("email", login)
        var input = document.getElementById("form-login");
        setNativeValue(input, api_token.apitoken);
        document.getElementById("submit_login").innerHTML = "Đăng xuất"
        document.getElementById("api_token").innerHTML = "API TOKEN"
        document.getElementById("email").innerHTML = login
        Swal.fire({
          title: 'success',
          text: 'Bạn đã đăng nhập',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        }).then(function () {
          window.location.reload()
        })
      });
    }
    if (api_token3 != null) {
      localStorage.removeItem('api_token')
      Swal.fire({
        title: 'success',
        text: 'Bạn đã đăng xuất thành công',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      }).then(function () {
        window.location.reload()
      })
    }

  }
  let value2;
  let title;
  let api_token3;
  let login_title;
  let button_login;
  const api_token2 = localStorage.getItem("api_token")
  const email = localStorage.getItem("email");
  if (api_token2 == null) {
    value2 = login;
    title = "Login";
    api_token3 = "Email address";
    login_title = "Đăng nhập";
    button_login = "Đăng nhập";
  }
  if (api_token2 != null) {
    value2 = api_token2;
    title = "Đăng xuất"
    api_token3 = "API TOKEN";
    login_title = email;
    button_login = "Tài khoản";
  }
  //view hóa đơn chi tiết
  //load sản phẩm home
  
  //Thêm giỏ hàng
  //Load catagories
 let listItems2;
 let listItems3;
 var k = localStorage.getItem("api_token")
 if(k!=null){
  // console.log(cates);
  listItems2 = cates.map((cate) =>
  <NavDropdown.Item href="#action/3.1">{cate.name}</NavDropdown.Item>
  );
  console.log(listItems2);
 }else{
  listItems2 =""
 }
 console.log(listItems2);

 localStorage.setItem("current_page",1)
 localStorage.setItem("max_page2",6)


  //xem chi tiết sản phẩm
  //xem giỏ hàng
  let price;
  const gio_hang = localStorage.getItem('cart')
  if (gio_hang == null) {
    price = '0đ';
  }
  if (gio_hang != null) {
    
    console.log("đã có hàng");
    

    var arr = [];
    var list_cart_local = localStorage.getItem('cart');
    var list_cart_local2 = list_cart_local.split("#");
    var price_tong=0;
    for (let index = 0; index < list_cart_local2.length; index++) {
      
      const element = list_cart_local2[index];
      if(element!=""){
        arr.push(element)
        var z =parseInt(element.split(",")[2].split(":")[1])*parseInt(element.split(",")[1].split(":")[1])
        price_tong+=z
      }
      
    }
    listItems3 = arr.map((cate) =>
    <tr>
    <td><img width="50" src={String(cate.split(",")[6]).split(":")[1]+":"+String(cate.split(",")[6]).split(":")[2]} alt="" /></td>
    <td>{String(cate.split(",")[5]).split(":")[1]}</td>
    <td>{String(cate.split(",")[2]).split(":")[1]+",000,000"}</td>
    <td>{String(cate.split(",")[1]).split(":")[1]}</td>
    <td>{parseInt(String(cate.split(",")[2]).split(":")[1])*parseInt(String(cate.split(",")[1]).split(":")[1])+",000,000"}</td>
    <td><Button onClick={() => Delete(String(cate.split(",")[0]).split(":")[1])}>Xóa</Button></td>
  </tr>
  );
  price=price_tong+",000,000";
  console.log(listItems3);
  
  }
  
  function Delete(name) {
    console.log(name);
    var list_local11=localStorage.getItem('cart');
  var list_local112 = list_local11.split("#");
  var cart = ""
  for (let index = 0; index < list_local112.length; index++) {
    var element = list_local112[index];
    if(list_local112[index]!=""){
      console.log(element.split(","));
      var id = element.split(",")[0].split(":")[1]
      if(id!=name){
        cart+=list_local112[index]+"#"
      }
    } 
  }
  console.log(cart);
  localStorage.setItem("cart",cart)
  Swal.fire({
    title: 'success',
    text: 'Xóa thành công',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500
  }).then(function () {
    window.location.reload()
  })
  }
  

  //thanh toán
  function thanh_toan() {
    console.log(email22)
    console.log(phone)
    console.log(diachi)
    var diachi2 =String(diachi)
    var phone1 =String(phone)
    var email2222 =String(email22)
    var arr7 =[]
    var list_cart4 = localStorage.getItem("cart").split("#")
    for (let index = 0; index <list_cart4.length; index++) {
      if(list_cart4[index]!=""){
      var element = list_cart4[index];
      var id34 = Number(element.split(",")[0].split(":")[1])
      var sl = Number(element.split(",")[1].split(":")[1])
      arr7.push([id34,sl])
      } 
    }
    console.log(arr7);
    var K1110=JSON.stringify(arr7);
    axios({
      method: 'post',
      url: 'https://students.trungthanhweb.com/api/createBill',
      data: {
        tenKH: email2222,
        phone: phone1,
        address: diachi2,
        cart: K1110,
        apitoken: localStorage.getItem('api_token')
      }

    }).then(function (response) {
      console.log(response);
      localStorage.removeItem("cart")
      Swal.fire({
        title: 'success',
        text: 'Thanh Toán Thành Công',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })
    }).then(function () {
      window.location.reload()
    })

    // axios({
    //   method: 'get',
    //   url: 'https://students.trungthanhweb.com/api/bills?apitoken=Sf6v5OIkLScoLYUEljQ4dJtDJyffsuRXchD24atYwE6KrU2wLfui1RC9PLHz'

    // }).then(function (response) {
    //   console.log(response);
    // })

    // axios({
    //   method: 'get',
    //   url: 'https://students.trungthanhweb.com/api/singlebill?apitoken=Sf6v5OIkLScoLYUEljQ4dJtDJyffsuRXchD24atYwE6KrU2wLfui1RC9PLHz&id=406'

    // }).then(function (response) {
    //   console.log(response);
    // })
   
      
      
    
  }
   

  let view_cart2;
  ///view single bill
  function singlebill(id) {
    console.log(id);
    axios({
      method: 'get',
      url: 'https://students.trungthanhweb.com/api/singlebill?apitoken=Sf6v5OIkLScoLYUEljQ4dJtDJyffsuRXchD24atYwE6KrU2wLfui1RC9PLHz&id='+id

    }).then(function (response) {
      viewchitiethoadon([])
      console.log(response.data.result);
      var k118 =response.data.result
      view_cart2 = k118.map((cate) =>
    <tr>
    <td>{cate.productname}</td>
    <td><img width="50" src={"https://students.trungthanhweb.com/images/"+cate.image} alt="" /></td>
    <td>{cate.price}</td>
    <td>{cate.qty}</td>
  </tr>
  );
  viewchitiethoadon(chitiethoadon => [...chitiethoadon, view_cart2]);
  console.log(chitiethoadon);
    })
  }
  //view hóa đơn chi tiết
  function view_hoa_don_chi_tiet() {
    viewhoadon([])
    axios({
      method: 'get',
      url: 'https://students.trungthanhweb.com/api/bills?apitoken=Sf6v5OIkLScoLYUEljQ4dJtDJyffsuRXchD24atYwE6KrU2wLfui1RC9PLHz'

    }).then(function (response) {
      console.log("hóa đơn chi tiết");
      // console.log(response.data.bills);
      var bill_chi_tiet = response.data.bills
      view_cart = bill_chi_tiet.map((cate) =>
    <tr>
    <td>{cate.id}</td>
    <td>{cate.tenKH}</td>
    <td>{cate.phone}</td>
    <td>{cate.address}</td>
    <td>{cate.created_at}</td>
    <td><Button style={{height:"40px"}} onClick={() => singlebill(cate.id)}><p onClick={handleShow5}>chi tiết</p></Button></td>
  </tr>
  );
  viewhoadon(hoadon => [...hoadon, view_cart]);
    })
   
  }
  

  
  
  return (
    
    <Navbar style={{ height: '80px' }} expand="lg" className="bg-body-tertiary w-100" data-bs-theme="dark">
      <Container >
    

      
      {/* chi tiết hóa đơn */}
      <Modal
                show={show5}
                onHide={handleClose5}
                backdrop="static"
                size="lg"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title id="email">Chi tiết hóa đơn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>Tên sản phẩm</th>
          <th>Hình ảnh</th>
          <th>Giá</th>
          <th>Số lượng</th>
        </tr>
      </thead>
      <tbody>
      {chitiethoadon}
      </tbody>
    </Table>
                </Modal.Body>
                <Modal.Footer>

                  
                </Modal.Footer>
              </Modal>


        <Navbar.Brand style={{ color: 'white', fontWeight: '500' }} href="home1" className="Brand">
          <img className='ms-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAsVBMVEVHcExgvUf4axpivUf2bx/0biIIUKLedS/0biNivEYKUaH3biEeqWk8jnfaczkXTaIET6VUwUn4bhxZwEj8ZhkGTKAGTar0bBsEUKL1axv5ZxJfvkcGS59YuTrzbyVjvEcLUaH///5ZuTkBTqH9388AR51fu0H0Zwi7zuXV7c14xV/0bRrS3eyLqtD7zLLm8exljMD4nW/+9O6d1Y2u3KD1hEfu9Pr6tZG24Kowaa7A5LZeHNBjAAAAHnRSTlMAhFHIOPOJCMjo5pwdEBknazRwXSTOSN+7t3uW3M9FLUrwAAABcUlEQVQ4jc2Sx3aDMBBFZTqmGzBuUcE0g8HG3fn/D4skSrII6+QeFjq8J2nmaQD4h6g9U7qw1jjCxHYN9kwYNoMeBT9/W67CcYNoMKxVYPkzBtWdFe5YSfJgMIAnIg7dP+917C7gWIKJ0GBwcdqBl0aVcyAMZlnMyYC6wnXBqOdO9EyShn532fq4HRifJTB3NWE86tCGCV+SVjP1W7e8gmVaPPaMVBHulyav8idpNz7K4iu5xhkCbvogx+Ox2GN305JLkiQXAoUZQvGNlBktUnmTEzWcU+ysnyRhtHJAe4wPhDahg/BMzuwGjO2oIRXrsdJsHaHsdIoREgEuTu99HxMtoYvJo3pJXtSwBfv6zHWsCLC58xPgwmeGV0mv8AGNqctxacC806G0ZRnGrAQPDDmH1vjUsi0OQYvqYNg56vgQNKZBtxwwZ4SKA6TRYHg6R5yZwPyeivEp5YlpMsYDfh9YW4MyQ1tMjLMqddgT+l/yBY2ePq0b/uNNAAAAAElFTkSuQmCC" alt="" className='me-2' />FPT Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="Loại sản phẩm" id="basic-nav-dropdown">
              {listItems2}
            </NavDropdown>
            {/* <NavDropdown title="Brand sản phẩm" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Brand sản phẩm</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="todo1">Todo list Redux</Nav.Link>
            <Nav.Link href="todo2">Todo list API</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Button style={{ backgroundColor: 'black', color: 'white' }} onClick={handleShow2}><img src="" alt="" /><AiOutlineShopping /></Button>
              <Modal size="lg" show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title className='ss'><BsFillCartCheckFill className='mb-2' /> Giỏ hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                      <th>Hình ảnh</th>
                        <th>Sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>Tùy chỉnh</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listItems3}
                    </tbody>
                  </Table>
                </Modal.Body>
                <Modal.Footer>
                  <p className='Thanh-tien'>Thành tiền: <span>{price}</span></p>
                  <Button variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleShow4}>
                    Thanh toán
                  </Button>

                  <Modal
                show={show4}
                onHide={handleClose4}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <BiUser style={{ fontSize: '20px', fontWeight: "600px" }} className='me-2' />
                  <Modal.Title id="email">Form thanh toán đơn hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Label id="Email">Tên</Form.Label>
                  <Form.Control id="form-email" type="email" placeholder="name" onChange={Emailchange} />
                  <Form.Label id="Phone">Phone</Form.Label>
                  <Form.Control id="form-Phone" type="email" placeholder="ex:0256413567" onChange={Phonechange} />
                  <Form.Label id="Address">Address</Form.Label>
                  <Form.Control id="form-Address" type="email" placeholder="name@example.com" onChange={Diachichange} />
                </Modal.Body>
                <Modal.Footer>

                  <Button variant="primary" id="submit_login" onClick={thanh_toan}>Thanh toán</Button>
                </Modal.Footer>
              </Modal>

                </Modal.Footer>
              </Modal>
            </Col>
            <Col xs="auto">
              <Button style={{ backgroundColor: 'black', color: 'white' }} onClick={handleShow}><BiUser /> {button_login}</Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <BiUser style={{ fontSize: '20px', fontWeight: "600px" }} className='me-2' />
                  <Modal.Title id="email">{login_title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Label id="api_token">{api_token3}</Form.Label>
                  <Form.Control id="form-login" type="email" placeholder="name@example.com" onChange={Loginchange} value={value2} />
                </Modal.Body>
                <Modal.Footer>

                  <Button variant="primary" id="submit_login" onClick={submitlogin}>{title}</Button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col xs="auto">


            <Button id="bill1" style={{ backgroundColor: 'black', color: 'white' ,display:'flex',height:'38px'}} onClick={handleShow3}><img src="" alt="" /><AiOutlineShopping className='me-2 mt-1'/> <p onClick={view_hoa_don_chi_tiet}>Hóa đơn chi tiết</p></Button>
            <Modal size="lg" show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                  <Modal.Title className='ss'><BsFillCartCheckFill className='mb-2' /> Hóa đơn chi tiết</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        
                        <th>Mã hóa đơn</th>
                        <th>Tên khách hàng</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ người nhận</th>
                        <th>Ngày mua</th>
                        <th>Chi tiết đơn hàng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hoadon}
                    </tbody>
                  </Table>
                </Modal.Body>
                <Modal.Footer>
                
                  <Button variant="secondary" onClick={handleClose3}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

export default BasicExample;