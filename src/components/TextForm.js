import React , {useState} from 'react'

function TextForm(props) {
    
    
    const  handleUp = ()=>{
        // console.log("clicked");
        let newText  = text.toUpperCase();
        setText(newText);
    }
    const handlelo=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const   handleClear = ()=>{
        setText("");
    }
    const handleOnChange = (event)=>{
        // console.log("change text");
        setText(event.target.value);
       
    }
   
    
    const [text,setText] = useState("");
    return (
        <>
        <div style={{color : props.mode==="dark"?"white":"black"}}>
            <h3>{props.heading}</h3>

            <div className="mb-3">
 
            <textarea className="form-control" id="mybox" value={text} style={{backgroundColor : props.mode==="dark"?"#121212":"white" , color : props.mode==="dark"?"white":"black"}}  rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUp}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handlelo}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear TextArea</button>  
            <button className="btn btn-primary mx-2 my-1" onClick={() =>  navigator.clipboard.writeText(text)}>copy</button>

</div>
<div className="container my-4" style={{color : props.mode==="dark"?"white":"black"}}>
    <h3>Text Summary </h3>
    <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
    <h5>Time to read {(text.split(" ").filter((e)=>{return e.length!==0}).length ) *0.008} </h5>
    <h3 className="my-3">Preview Text </h3>
    
    <p>{text}</p>
    
</div>
</>
    )
}

export default TextForm
