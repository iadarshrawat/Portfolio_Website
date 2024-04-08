import React, { useState } from "react";
import toast from "react-hot-toast";
import {addDoc, collection} from "firebase/firestore"
import {db} from '../firebase'
import "../styles/mediaquery.scss"

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e)=>{
    e.preventDefault();
    console.log(name, email, message);
    setDisableBtn(true);
    try{
      await addDoc(collection(db, "contacts"), {
        name, email, message,
      })
  
      toast.success("Message Sent")
      setDisableBtn(false)
    } catch(error){
      toast.error("Error")
      console.log(error)
      setDisableBtn(false)
    }
  }
  

  return (
    <div id='contact'>
      <section>
        <form onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name' required/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' required/>
          <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Your Message' required/>

          <button type='submit'disabled={disableBtn}>Send</button>
        </form>
      </section>
    </div>
  )
}

export default Contact