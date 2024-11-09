import React, { CSSProperties } from 'react';

interface CustomizableCardProps {
    header?: string;
    content?: string;
    bgColor?: string;
    textColor?: string;
}

const CustomizableCard: React.FC<CustomizableCardProps> = ({ header, content, bgColor, textColor }) => {
    const cardStyle: CSSProperties = {
        backgroundColor: bgColor || "#ffffff",
        color: textColor || "#000000",
        padding: "20px",
        textAlign: "left",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    };

    return (
        <div style={cardStyle}>
            <h2>{header || "Card Header"}</h2>
            <p>{content || "Card content goes here."}</p>
        </div>
    );
};

export default CustomizableCard;