import React, { Children, FC, PropsWithChildren } from 'react'

export const UiTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
        <nav></nav>
        <main>
            { children }
        </main>
        <footer></footer>
    </>
  )
}
