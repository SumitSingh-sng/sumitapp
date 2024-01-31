import React, { useState } from 'react'

export default function Textbox(props) {
   
    const [text,setText] = useState("Enter your text Here");
    const [email,setEmail] = useState("");
    const handleOnClick = (event) => {
        setText(event.target.value)
    }

    const handleToUpper = () => {
        setText(text.toUpperCase());
        props.showAlert("The text is converted to upper case.","success")
    }
    const handleToLower = () => {
        setText(text.toLowerCase());
        props.showAlert("The text is converted to Lower case.","success")
    }
    const getClear = () =>{
        setText("");
        setEmail("");
        props.showAlert("The text is cleared.","success")
    }
    const searchEmail = () => {
        text.split(" ").forEach(ele => {
            if(ele.includes("@")){
                setEmail(email + ele);
            }
        });
    
      }
        return (
    <>
    <div className="container" >
        <h1 className='my-3 container'>Enter your text</h1>
        <textarea name="textbox" id="textbox" cols="100" rows="10" onChange={handleOnClick} value={text}>

        </textarea>
        <p>The number of characters is {text.length} and the number of words is {text.split(" ").length}</p>
        <p>The emails in the textArea are : {email}</p>
        <div className="btns">
            <button className="btn btn-primary mx-3"  onClick={handleToUpper}>Convert to Upper Case</button>
            <button className="btn btn-danger mx-3"  onClick={handleToLower}>Convert to Lower Case</button>
            <button className="btn btn-success mx-3" onClick={getClear}>Clear</button>
            <button className="btn btn-dark mx-3" onClick={searchEmail}>Search for Emails</button>
        </div>
    </div>
    
    
    </>
  )
}
