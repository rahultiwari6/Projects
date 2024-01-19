import React, {useState} from 'react';


export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "Success");
  }

  const handleDownClick = () =>{
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "Success");
  }
  const handleClearText = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Cleared Text", "Success");
  }

  const handleOnChange = (event) =>{
    console.log("On Change");
    setText(event.target.value);
    
  }

  const handlecopy = () => {
    console.log(" I am Copy");
    var text= document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clickboard", "Success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ")); 
    props.showAlert("Extra space Removed", "Success");
  }
  const [text, setText] = useState('');
 
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>

      <button  disabled={text.length===0} className='btn btn-primary mx-3 my-1'  onClick={handleUpClick}> Convert to UpperCase </button>

      <button disabled={text.length===0}  className='btn btn-primary mx-3 my-1'  onClick={handleDownClick}> Convert to LoverCase </button>
      <button  disabled={text.length===0}  className='btn btn-primary mx-3 my-1'  onClick={handleClearText}> Clear Text </button>
      <button  disabled={text.length===0} className='btn btn-primary mx-3 my-1'  onClick={handlecopy}> Copy Text </button>
      <button  disabled={text.length===0}  className='btn btn-primary mx-3 my-1'  onClick={handleExtraSpaces}> Remove Space </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
       <h2> Your Text Summary</h2>

       <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Word and {text.length} Character</p>
    </div>
    </>
  )
}
