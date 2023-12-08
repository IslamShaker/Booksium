import React ,{useContext}from'react';
import { AuthContext } from '../contects/AuthProvider';
import { useLocation , useNavigate} from 'react-router-dom';

const Logout =()=>{

// ////////   vedio 6:27:00  ///////////////
//// it makes the logout route give error

    // const {logOut}=useContext(AuthContext)

// ////////////////////////////////////////////////
    const locations =useLocation();
    const navigate=useNavigate();

    const from=location.state?.from?.pathname||"/";
    
    const hadelLogout=()=>{
       logOut().then(()=>{
         alert("signOut successfully");
         navigate((from),{replace:true})
       }).catch((error)=>{

       });
    }


    return(
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={hadelLogout}>Logout</button>
        </div>
    )
}
export default Logout