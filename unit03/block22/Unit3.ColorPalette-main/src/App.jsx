import ColorJsx from "./ColorJsx";
import {useState}from "react";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "black",
  "white",
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState();
  return <main>
    <div className="highlighter">
     <div className="handle"></div>
      {selectedColor ?
      <p>The selected color is </p>  
    :
    <p>Please Click a color!</p>
    }
     <div className={`tip ${selectedColor}`}></div>
   </div>
    <div className="palette">
    {COLORS.map(clr=><ColorJsx key = {clr} color = {clr} setSelectedColor = {setSelectedColor}/>)}
    </div>
  </main>;
}
