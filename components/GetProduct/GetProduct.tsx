export default function GetProduct() {
    const dataCart = JSON.parse(localStorage.getItem("cart"));
    return dataCart;
}
