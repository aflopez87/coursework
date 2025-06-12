export default function ColorJsx(props){
    return(
        <>
        <div className={`swatch ${props.color}`} onClick={props.setSelectedColor(props.color)}></div>
        </>
    )
}