
import {Link} from "react-router-dom"
import { FaSearch,FaShoppingCart,FaSignInAlt, FaUser,FaSignOutAlt } from "react-icons/fa"
import { useState } from "react";
const user = {_id :"sdfsd",role:""};
const Header = () => {
    const [isOpen,SetisOpen]=useState<boolean>(false)
    const logoutHandler = ()=>{
        SetisOpen(false);
    }
  return (
   <nav className="header">
    <Link onClick={()=>SetisOpen(false)} to ={"/"}>Home</Link>
    <Link onClick={()=>SetisOpen(false)} to ={"/search"}>search<FaSearch/></Link>
    <Link onClick={()=>SetisOpen(false)} to ={"/cart"}><FaShoppingCart/></Link>
    {
        user?._id?(
            <>
            <button onClick={()=>SetisOpen((prev)=>!prev)}>
            <FaUser/>    
            </button>
            <dialog open={isOpen}>
                <div>
                    {
                        user.role==="admin" && (
                            <Link to = "/admin/dashboard">Admin</Link>
                        )
                    }
                    <Link onClick={()=>SetisOpen(false)} to = "/orders">Orders</Link>
                    <button onClick={logoutHandler}>
                        <FaSignOutAlt/>
                    </button>
                </div>
            </dialog>
            </>
            
        ) : <Link onClick={()=>SetisOpen(false)} to ={"/login"}><FaSignInAlt/></Link>
    }
   </nav>
  )
}

export default Header
