import React from "react";
import "./PreviewCard.css";

function PreviewCard(props) {
    return (
        <div
            className="PreviewCard"
            style={{
                backgroundColor: props.color,
                boxShadow: `1px 5px 8px ${props.color}`,
            }}
        >
            <div
                className="image-background-color"
                style={{ backgroundColor: props.color }}
            >
                <img
                    className="preview-image"
                    src={props.img}
                    alt="Company Logo"
                ></img>
            </div>
            <div className="card-body">
                <div className="preview-text" style={{ color: props.color }}>
                    {props.description}
                </div>
            </div>
        </div>
    );
}

export default PreviewCard;
