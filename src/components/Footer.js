import React, {useState} from 'react'

export default function Footer(props) {
  const [text] = useState("© Copyright 2022 - TrueTEXTs | All rights reserved.");
  const [text2] = useState("Developed by AHMAD");
  return (
    <>
<div class="text-center">
    <p class={`${props.mode2==='light'?'dark':'light'}`}>{text}</p>
    <p class={`${props.mode2==='light'?'dark':'light'}`}>{text2}</p>
    
</div>

</>
  )
}
