import React from 'react'
import "./AdminLayout.css"

const AdminLayout = ({ children }) => {
    return (
        <div>
            header
            {children}

            footer
        </div>
    )
}

export default AdminLayout
