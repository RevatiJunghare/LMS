import { Route, Routes } from "react-router-dom"
import Signup from "../pages/Signup"
import Signin from "../pages/Signin"

const Allroutes = ()=>{
    return <div>
        <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Signin/>}/>
        </Routes>
    </div>
}

export default Allroutes