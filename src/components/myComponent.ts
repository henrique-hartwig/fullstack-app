import React from 'react'


interface myComponentProps {
    name: string
}

export const myComponent: React.FC = ({ children: myComponentProps }) => {
    const alog = "algo"

    return (
        <>
            {children.name}
        </>
    )
}