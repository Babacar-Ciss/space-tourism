"use client"

import './globals.css'
import styled from 'styled-components'


const P = styled.p`
  color: aquamarine;
`

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <P>Babacar Ciss
          
        </P>
        {children}
        
        
        
        
        </body>
    </html>
  )
}
