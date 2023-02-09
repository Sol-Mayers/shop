export default function ClearCart() {
    const dataCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (dataCart !== null || dataCart.length !== 0) {
        localStorage.removeItem("cart");
    }
    window.dispatchEvent(new Event("storage-clear"));
}
