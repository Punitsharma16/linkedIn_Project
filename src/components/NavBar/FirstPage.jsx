// import { Route, Routes } from "react-router-dom"
// import { AppNavbar } from "./navbar"
// import { SentModal } from "./home/sentButtonModel"
// import { createContext, useEffect, useState } from "react";
// import { Home } from "./home/home";

// export const showModalContext = createContext();
// export const FirstPage = ()=>{
//   const [showModal,setShowModal] = useState(false);
//   useEffect(() => {
    
//     if(showModal){
//       document.body.style.overflow = 'hidden'
//     }else{
//       document.body.style.overflow = 'unset'
//     }
//   }, [showModal]);

//     return(
//         <main>
//            <AppNavbar/>
//             <Routes>
//             <Route path='/home' element={
//           <showModalContext.Provider value={{setShowModal}}>
//           { showModal && <div className='modal-wrapper'><SentModal/></div>}
          
//           <Home/>
//         </showModalContext.Provider>
//         }/>
//         </Routes>
//         </main>
//     )
// }