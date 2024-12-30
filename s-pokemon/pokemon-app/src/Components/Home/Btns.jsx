import React from 'react'

const Btns = ({offset,setOffset}) => {
    const next = () => {
        setOffset((offset) => offset + 20)
    }
    const prev = () => {
        setOffset((offset) => offset - 20)
    }
    return (
        <div className="offset_btns" style={{ display: "flex", padding: '30px', gap: "10px", alignItems: 'start', width: "70%" }}>
            <div onClick={prev} className="offset-btn">Prev</div>
            <div onClick={next} className="offset-btn">Next</div>
        </div>
    )
}

export default Btns