import React, { useState } from "react";

import Burguer from "./assets/burger 1.png"
import Trash from "./assets/18297 4.png"

import { Container, Image, H1, InputLabel, Input, Button, User }
    from "./styles"

function App() {

    const [orders, setOrders] = useState([]);

    function AddNewOrder() {
        setOrders([{ id: Math.random(), order: "X-bacon", name: "Ewerton" }])


    }

    return (
        <Container>
            <Image src={Burguer} alt="primeira-image" />

            <H1>Make your wish!</H1>

            <InputLabel>Order</InputLabel>
            <Input placeholder="Order" />

            <InputLabel>Client name</InputLabel>
            <Input placeholder="Client name" />

            <Button onClick={AddNewOrder}>Order</Button>

            <ul>
                {orders.map((user) => (
                    <User key={user.id}>
                        <p> {user.order}</p> - <p>{user.name}</p>
                        <button> <img src={Trash} alt="lixeira" /> </button>
                    </User>

                ))};
            </ul>

        </Container>
    );

}
export default App;