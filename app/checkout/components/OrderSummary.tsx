export default function OrderSummary() {
    const products = [
        {id: 1, name: "Libro de matemáticas 3ºESO", quantity: 1, price: 35}
    ]
    return (
        <div>
            <h2>Resumen del pedido</h2>
            <div>
                <ul className="list-disc pl-5 mb-4">                    
                {products.map((p) => (
                    <div key={p.id}>
                        <li>{p.name} x {p.quantity} - {p.price}€</li>
                    </div>
                ))}
                </ul>
            </div>
        </div>
    );
}