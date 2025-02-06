import { useState } from "react";



export default function IfXHasMillion({initialIsFan}){
    const [isFan,setIsFan] = useState(initialIsFan)
    const [target,setTarget] = useState('করলা')
    const formatted_target = <span style={{color:'red'}}>{target===''?'X':target}</span>
    let formatted_text
    if(isFan){
        formatted_text = <>If {formatted_target} has a million fans, then I am one of them. 
        If {formatted_target} has ten fans, then I am one of them. If {formatted_target} 
        has only one fan then that is me. 
        If {formatted_target} has no fans, then that means I am no longer on earth. 
        If the world is against {formatted_target}, then I am against the world.</>
    }else{
        formatted_text = <>If {formatted_target} has a million haters, then I am one of them. 
        If {formatted_target} has ten haters, then I am one of them. If {formatted_target} 
        has only one hater then that is me. 
        If {formatted_target} has no haters, then that means I am no longer on earth. 
        If the world is with {formatted_target}, then I am against the world.</>
    }
    return(
        <>
            <h2>If X has a Million {isFan?'Fans':'Haters'} Copypasta Generator</h2>
            <label>
                <input type="checkbox" checked={isFan} 
                onChange={(e)=>{setIsFan(e.target.checked)}}/>
                {' '} Generate For {isFan?'Fan':'Hater'}
            </label>
            <h3>{formatted_text}</h3>
            
            <input value={target} placeholder='Type here to change' 
            onChange={(e)=>{setTarget(e.target.value)}}/>
            
        </>
    )
}