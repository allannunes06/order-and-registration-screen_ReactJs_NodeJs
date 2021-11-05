import React, { useRef, useState } from 'react';
import axios from 'axios';
import Burger from '../../assets/burger.png';
import {Div,H1,P,IMG,Input,Button} from './styles';


const App =() => {

  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrder(){

    const {data: newOrder} = await axios.post("http://localhost:3001/orders",{
        order: inputOrder.current.value,
        name: inputName.current.value,
    });
    setOrders([...orders,newOrder,]);
  }



  return (
    <Div>
      <IMG alt="IMAGEM" src={Burger}></IMG>
    <H1>Faça seu pedido!</H1>
      <P>Pedido</P>
      <Input ref={inputOrder}></Input>
      <P>Nome do cliente</P>
      <Input ref={inputName}></Input>
      <Button to="/orders" onClick={addNewOrder}>Novo Pedido</Button>
      
    </Div>
    
   );
}

export default App;
