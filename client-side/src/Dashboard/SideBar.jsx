/* eslint-disable no-unused-vars */
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import userImg from "../assets/profile.jpg";
import { AuthContext } from '../contects/AuthProvider';
import{useContext}from 'react'

export const SideBar = () => {
////////////   Vrdio 6:36:00  ////////////////
// gives error when open the side bar
  // const {user}=useContext(AuthContext);
  // console.log(user)
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/"
        // img={user?.photoURL}
        img={userImg}
        imgAlt="Flowbite logo" className='w-16 h-16'>
        Flowbite
        {/* {
     user?.displayName || " Demo User "
        } */}
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/uploadbook" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign in
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar