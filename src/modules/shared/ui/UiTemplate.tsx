import React, { Children, FC, PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export const UiTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
        <Navbar></Navbar>
        <main>
            { children }
        </main>
        <Footer></Footer>
    </>
  )
}
