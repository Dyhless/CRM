'use client'

import React from "react";

export type GlobalErrorProps = object

export default function GlobalError({ }: GlobalErrorProps) {
   return (
      <html>
         <body>
            <div>
               <p>Something globally went wrong</p>
            </div>
         </body>
      </html>
   ); 
}