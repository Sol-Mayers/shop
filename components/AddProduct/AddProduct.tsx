export default function AddProduct(item: any) {
    const dataCart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = item;
    product["amount"] = 1;

    if (
        dataCart === null ||
        dataCart.length === 0 ||
        !dataCart.find((p: { title: any }) => p.title === product.title)
    ) {
        dataCart.push(product);
        localStorage.setItem("cart", JSON.stringify(dataCart));
    } else if (
        dataCart.find((p: { title: any }) => p.title === product.title)
    ) {
        product["amount"] += dataCart.find(
            (p: { title: any }) => p.title === product.title
        ).amount;
        dataCart.splice(
            dataCart.findIndex(
                (p: { title: any }) => p.title === product.title
            ),
            1,
            product
        );
        localStorage.setItem("cart", JSON.stringify(dataCart));
    }
    window.dispatchEvent(new Event("storage"));
}
