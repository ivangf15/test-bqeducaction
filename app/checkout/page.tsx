import BillingForm from "./components/BillingForm";
import OrderSummary from "./components/OrderSummary";
import PaymentMethods from "./components/PaymentMethods";

export default function CheckoutPage() {
    return (
        <div className="flex-col md:flex-row flex justify-between px-4 py-6">
            <div className="w-full max-w-md">
                <BillingForm/>
            </div>

            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <OrderSummary/>
                    <PaymentMethods/>
                </div>
            </div>
        </div>
    );
}

