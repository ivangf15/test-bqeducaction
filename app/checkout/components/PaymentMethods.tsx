function PaymentMethods() {
    return (
         <>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input type="radio" name="payment-method" value="transfer" className="form-radio" />
                    <span className="ml-2">Tranferencia</span>
                </label>
            </div>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input type="radio" name="payment-method" value="bizum" className="form-radio" />
                    <span className="ml-2">Bizum</span>
                </label>
            </div>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input type="radio" name="payment-method" value="credit-card" className="form-radio" />
                    <span className="ml-2">Tarjeta de crédito</span>
                </label>
            </div>
        </>
    );
}
                   
export default PaymentMethods;
