import React from 'react'

export default function HeadingTitle({title}) {

    const wrapperStyles = {
        marginRight: "20px",
        marginTop: "40px"
    }

    const titleStyles = {
        color: "var(--primary-color)",
    }

    return (
        <div style={wrapperStyles}>
            <h2 style={titleStyles}>{title}</h2>
        </div>
    )
}
