import { useState } from "react"
import React from 'react'
import "../style/editor.scss"
import { CompactPicker } from 'react-color'
import DrawingPanel from "./DrawingPanel"

export default function Editor() {
    const [panelWidth, setpanelWidth] = useState(16)
    const [panelHeight, setpanelHeight] = useState(16)
    const [hideoption, sethideoption] = useState(false)
    const [hideDrawingPanel, setDrawingpanel] = useState(true)
    const [buttontext, setbuttontext] = useState("start drawing")
    const [selectedColor, setColor] = useState("#f44336")

    function startdrawing() {
        sethideoption(!hideoption);
        setDrawingpanel(!hideDrawingPanel);

        buttontext === "start drawing"
            ? setbuttontext("reset")
            : setbuttontext("start drawing");
    }

    function changecolor(color) {
        setColor(color.hex);
    }

    return (
        <div id="editor">
            <h1>pixel art maker</h1>
            {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
            {hideDrawingPanel && <div id="options">
                <div className="option">
                    <input type="number"
                        className="panelInput"
                        defaultValue={panelWidth}
                        onChange={(e) => {
                            setpanelWidth(e.target.value);
                        }}
                    />
                    <span>Width</span>
                </div>
                <div className="option">
                    <input type="number"
                        className="panelInput"
                        defaultValue={panelHeight}
                        onChange={(e) => {
                            setpanelHeight(e.target.value);
                        }}
                    />
                    <span>Height</span>
                </div>
            </div>}
            <button className="button"
                onClick={startdrawing}
            >{buttontext}</button>

            {hideoption && (<CompactPicker color={selectedColor} onChange={changecolor} />)}

            {hideoption && (<DrawingPanel
                width={panelWidth}
                height={panelHeight}
                selectedColor={selectedColor} />)}

        </div>
    );
}
