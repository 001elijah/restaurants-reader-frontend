import { OrderForm } from "../components/OrderForm/OrderForm"

const ShoppingCartPage = ({cart, setCart, handleAmountChange, handleSubmitOrder}) => {
    return (
        <>
            <OrderForm cart={cart} handleAmountChange={handleAmountChange} setCart={setCart} handleSubmitOrder={handleSubmitOrder} />
        </>
    )
}

export default ShoppingCartPage;