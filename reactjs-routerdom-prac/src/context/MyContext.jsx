// import { createContext } from "react"

// export let MyContext = createContext()

// function MyProvider({ children }) {
//     const sentence = "This is my global sentence from Context API."

//     return (
//         <MyContext.Provider value={sentence}>
//             {children}
//         </MyContext.Provider>
//     )
// }

// export default MyProvider

import { createContext } from "react"

export let GlobalContext = createContext()

function GlobalProvider({ children }) {
    const sentence = "This is my global sentence from Context API."

    return (
        <GlobalContext.Provider value={sentence}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider