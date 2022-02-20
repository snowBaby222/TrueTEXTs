import React, {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("Enter text here..");  //setting the state of text

  const handleUpClick = ()=>{
      console.log("uppercase was clicked" + text);
      let newText = text.toLocaleUpperCase();
      setText(newText);
  }

  const handlelowClick = ()=>{
    console.log("lowercase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
}

const handleDelClick = ()=>{
    console.log("deletetext was clicked" + text);
    let newText = '';
    setText(newText);
}

const handleSymClick = ()=>{
    console.log("removeSymbol was clicked" + text);
    //let newText = text.bind();
    const val = /[0-9/A-Z/a-z/ /]/g;
    const letters = text.match(val);
    const res1 = letters.join('');
    setText(res1);
}

const handleNumExtract =()=>{
    const regex = /[0-9/ /]/g;
    const digits = text.match(regex);
    const res = digits.join('');
   setText(res)
    };

const capitalFirstLetter = ()=>{
    let words = text.split(" ")
let uppercaseword = ''
    words.forEach(element => {
    uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword)
}

const handleSPerLineClick =() =>{
    let newText = text.replaceAll('.',"\n");
    setText(newText);
}

const handleCopyClick=()=>{
      var text = document.getElementById('box');
      text.select();
      navigator.clipboard.writeText(text.value);
}

const removeSpaces=()=>{
    let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
}

/*const [myStyle, setmyStyle] = useState({
    background: 'white',
    color: 'black'
})

const [btnText, setbtnText] = useState('Enable Dark Mode')

const toggleStyle =() =>{
    if(myStyle.color === 'white'){
        setmyStyle({
            background: 'white',
            color: 'black'
        })
        setbtnText('Enable Dark Mode')
    }
    else{
        setmyStyle({
            background: '#484848',
            color: 'white'
        })
        setbtnText('Disable Dark Mode')
    }
}*/

  const handleOnChange = (event)=>{
    console.log("changing text");
    setText(event.target.value);
  }

  return (
      <>
     <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
</div>
      <button className="btn btn-info mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
    <div className='container my-3'>
        <h1 className='my-3'>{props.heading}</h1>
        
        <div className="mb-3">
        <button className="btn btn-primary mx-1 my-2" onClick={capitalFirstLetter}>Aa</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>AA</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handlelowClick}>aa</button>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="8"></textarea>
        </div>
        {/*<div>
        <button className="btn btn-primary mx-1 my-1" onClick={handlefontClick}>italic</button>
        </div>*/}
        
        <button className="btn btn-success mx-1 my-1" onClick={handleSPerLineClick}>Next Line</button>
        <button className="btn btn-secondary mx-1 my-1" onClick={handleSymClick}>Remove symbols</button>
        <button className="btn btn-warning mx-1 my-1" onClick={handleNumExtract}>Extract numbers</button>
        <button className="btn btn-secondary mx-1 my-1" onClick={removeSpaces}>Remove spaces</button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleDelClick}>Delete all text</button>
    
    </div>

    <div className='container my-3'>
        <h3>Text summary: </h3>
        <p>{text.split(" ").length} words, {text.length} characters (read in {0.008*text.split(" ").length} minutes)</p>
        <h3>Text preview: </h3>
        <p>{text}</p>
    </div>
    </>
  )
}
