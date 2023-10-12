
import { createContext, useState } from "react";


const DisplayContext = createContext({
    display: 3,
    hideCompleted: true,
    sort: 'difficulty'
  }
)


export default DisplayContext