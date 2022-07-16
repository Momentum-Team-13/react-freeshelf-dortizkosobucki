import { useState } from 'react'

function Book({ title }) {
    const [color, setColor] = useState("red")
    const bookStyle = {
        height: "100px",
        width: "100px",
        backgroundColor: color,
        margin: "10px",
        color: "white",
    }
    const toggleColor = () => {
        if (color === "red") {
            setColor("yellow")
        } else {
            setColor("red")
        }
    }
    return (
        <div className="Book" style={bookStyle} onClick={() => toggleColor()}>
            {title}
        </div>
    );
}

export default Book;