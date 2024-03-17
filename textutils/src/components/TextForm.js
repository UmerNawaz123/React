import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");
  // text = "new text";  Wrong way to change the state
  // setText("new text");  Correct way to change the state 

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  
  const handleloClick = () => {
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  
  const handleClearClick = () => {
    // console.log("lowercase was clicked" + text);
    let clearText = "";
    setText(clearText);
    props.showAlert("Text Cleared!", "success");
  }
  
  const handleCopy = () => {
    // console.log("copied");
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }
  
  //function to remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} name="" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#363131' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} cols="30" rows="6"></textarea>
        </div>

        <button className="btn btn-info mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-info mx-1" onClick={handleloClick}>Convert To LowerCase</button>
        <button className="btn btn-info mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-info mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-info mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
      </div>
    </>
  )
}
