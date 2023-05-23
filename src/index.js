import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let value = new Date();
value = value.getHours();
let greet="";
const cssStyle={ };


if(value>=1 && value<12){
greet="Good Morning";
cssStyle.color="skyblue";
}else if(value>=12 && value<17){
    greet="Good Afternoon";
    cssStyle.color="red";
}else if(value>=17 && value<19){
    greet="Good Evening";
    cssStyle.color="green";
}else{
    greet="Good Night";
    cssStyle.color="blue";
}

ReactDOM.render(
<>
 <div>
    <h1>
        Hello Sir, <span style={cssStyle}>{greet}</span>
    </h1>
 </div>  
</>
,document.getElementById("root")
);