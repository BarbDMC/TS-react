import React, { Children, FC, PropsWithChildren } from 'react'

export const UiTemplate: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main>
            <div style={ { background: '#000', padding: '16px', display: 'flex' } }>
                <p>login</p>
            </div>
            { children }
        </main>
    )
}
