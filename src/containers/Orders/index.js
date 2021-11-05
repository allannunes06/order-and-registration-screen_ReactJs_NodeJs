import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bag from '../../assets/bag.png';
import Trash from '../../assets/trash.png';
import {List,Div,IMG,H1,Button,Pedido,Nome} from './styles';



const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        async function fetchOrders(){
            const {data: newOrders} = await axios.get("http://localhost:3001/orders");

            setOrders(newOrders);
        }
        fetchOrders();
    }, []);

    async function deleteUser(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);

    const newOrders = orders.filter((order) => order.id !== orderId);

    setOrders(newOrders);
    }
    return (
        <Div>
            <IMG alt="logo-imagem" src={Bag}/>
            <H1>Pedidos</H1>
            <ul>
            {orders.map((order) => (
                    <List key={order.id}>
                        <div>
                        <Pedido> {order.order}</Pedido> <Nome>{order.name}</Nome>
                        </div>
                        <div>
                        <button onClick={() => deleteUser(order.id)}><img alt="🗑" src={Trash} width="28px" height="28px" ></img></button>
                        </div>
                    </List>
                ))
                }  
            </ul>

            <Button to="/">
                 Voltar
            </Button>
        </Div>

    );
}

export default Orders;