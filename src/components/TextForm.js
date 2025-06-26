import React, {useState} from 'react'

export default function TextForm(props) {
    const HandleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" converted to uppercase "," success ")
    }

    const HandleLoClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" converted to lowercase ", "success ")
    }

    const HandlecrClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = "";
        setText(newText);
        props.showAlert(" Clear the text ", "success ")
    }

    const HandleonClick = (event) =>{
        // console.log("Uppercase was HandleonClick");
        setText(event.target.value);
        
    }

    const HandleCopy =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert(" copied to clipboard ", "success ")

    }
        
    const [text, setText] = useState("Enter Text Above..")
  return (
    <>
        <div className='container' style = {{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={HandleonClick}
             style = {{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleUpClick}> Covert To Uppercase </button> 
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleLoClick}> Covert To LowerCase </button> 
            <button disabled={text.length===0}className="btn btn-warning mx-2 my-1" onClick={HandlecrClick}> Clear Text</button> 
            <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={HandleCopy}> copy Text</button> 

        </div>
        <div className='container my-3' style = {{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>Your Text Summery</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}) .length} minutes to read</p>
            <h2> Preview </h2>
            <p>{text.length>0? text:"Nothing to preview here..."}</p>
        </div>
    </>
  )
}
