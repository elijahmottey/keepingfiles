import { useState } from "react";

function Forms() {
  const [changeValue, setChangeValue] = useState("");
  const [message, setMessage] = useState("");
  const [isdisable, setIsdisable] = useState(true);

 

  const HandleChange = (e) => {
  
    
    if (changeValue === "") {
      setIsdisable(true);
      setMessage(null);
    } else if (changeValue.includes("@")) {
      setMessage("Email is valid");
      setIsdisable(false);
    } else {
      setMessage("Input might not be valid");
      setIsdisable(true); // You should disable the button in this case too
    }
    
    setChangeValue(e.target.value);
   
  }


   const Submit = (e) => {
    e.preventDefault(); // Prevent the form from actually submitting (default behavior)
    window.alert("email submitted")
    setChangeValue('')
    
  }

  return (
    <div className="forms">
      <form onSubmit={Submit}>
        <h2>Get early access today</h2>
       
        <p>It only takes a minute to sign up, and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <input type="email" placeholder="example@fylo.com" id="email" onChange={HandleChange} />
       
        <button type="submit" disabled={isdisable}>Get Started For Free</button>
        {message && <p className="message" style={{
          fontSize:'0.8rem',
          color:'red',
          textTransform:'italic',
          textAlign:'left',
          marginLeft:'5rem'
        }}>{message}</p>}
      </form>
      
    </div>
  );
}

export default Forms;
