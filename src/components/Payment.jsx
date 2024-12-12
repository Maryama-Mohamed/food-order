import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cart from "../pages/cart";

const Payment = () => {
  const initialPayment = {
    evc: false,
    zaad: false,
    sahal: false,
  };

  const [paymentMethod, setPaymentMethod] = useState();

  const [updated, setUpdated] = useState(false);

  useEffect(() => {}, [updated]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("maryama")
    // alert("Congratulation🎈. Your Order Sent Succesfully 🙏.");
    toast.success('Congratulation🎈.  Your Order Sent Succesfully 🙏.')

    
  }

  return (
    <div>
      <h2>Pay With </h2>
      <div className="payment-cards">
      <div className="payment-card"
      // className={`payment-card ${paymentMethod.zaad && "selected"}`}
        onClick={() => setPaymentMethod({ ...initialPayment, zaad: true })}>
        <h3>Zaad Service</h3>
      </div>
      <div  className="payment-card"
    //   className={`payment-card ${paymentMethod.evc && "selected"}`}
        onClick={() => setPaymentMethod({ ...initialPayment, evc: true })}>
        <h3>EVC Plus</h3>
      </div>
      <div className="payment-card"
    //    className={`payment-card ${paymentMethod.sahal && "selected"}`}
        onClick={() => setPaymentMethod({ ...initialPayment, sahal: true })}
      >
        <h3>Sahal Service</h3>
      </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="form-cotrol"
         
          placeholder="2526..."
        ></input>
        <button className="btn-proceed"> Proceed!</button>
      </form>
    </div>
  );
};

export default Payment;
