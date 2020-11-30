import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            Portal demo
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo