import React from 'react'

export default ({ children, style, className }) => (
    <div className={className} style={{ margin: '0 auto', padding: '0 20px', maxWidth: 1360, ...style }}>
        { children }
    </div>
)