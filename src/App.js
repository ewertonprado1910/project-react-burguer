import React, { useState } from "react";
import Burguer from "./assets/burger 1.png";
import Trash from "./assets/18297 4.png";
import { Container, Image, H1, InputLabel, Input, Button, User } from "./styles";

function App() {
    const [orders, setOrders] = useState([]);
    const [orderInput, setOrderInput] = useState("");
    const [nameInput, setNameInput] = useState("");

    function handleOrderChange(event) {
        setOrderInput(event.target.value);
    }

    function handleNameChange(event) {
        setNameInput(event.target.value);
    }

    function handleAddNewOrder() {
        if (orderInput && nameInput) {
            setOrders([...orders, { id: Math.random(), order: orderInput, name: nameInput }]);
            setOrderInput("");
            setNameInput("");
        }
    }

    function handleDeleteOrder(id) {
        const updatedOrders = orders.filter(order => order.id !== id);
        setOrders(updatedOrders);
    }

    return (
        <Container>
            <Image src={Burguer} alt="primeira-image" />
            <H1>Make your wish!</H1>

            <InputLabel>Order</InputLabel>
            <Input placeholder="Order" value={orderInput} onChange={handleOrderChange} />

            <InputLabel>Client name</InputLabel>
            <Input placeholder="Client name" value={nameInput} onChange={handleNameChange} />

            <Button onClick={handleAddNewOrder}>Order</Button>

            <ul>
                {orders.map((user) => (
                    <User key={user.id}>
                        <p>{user.order}</p> - <p>{user.name}</p>
                        <button onClick={() => handleDeleteOrder(user.id)}>
                            <img src={Trash} alt="lixeira" />
                        </button>
                    </User>
                ))}
            </ul>
        </Container>
    );
}

export default App;