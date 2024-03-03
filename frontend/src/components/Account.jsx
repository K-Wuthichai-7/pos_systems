import "../css/account.css"

import { useMsal } from "@azure/msal-react";
import { useState,useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { SignOutButton } from "./SignOutButton";



export const Account = () => {

    const {instance} = useMsal()
    const [username,setUserName] = useState('')
    // const [user,setUser] = useState('')

    useEffect(()=>{
        
        const currentAccount = instance.getActiveAccount();
        if(currentAccount){
            setUserName(currentAccount.name);

            // const user = currentAccount.name
            // setUser(user);
        }
        
    },[instance]);

    return (
        <Dropdown >
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary">
          {username}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2"><i class="bi bi-person"></i> ข้อมูล</Dropdown.Item>
          <Dropdown.Item href="#/action-3"><i class="bi bi-gear"></i> ตั้งค่า</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4"><i class="bi bi-box-arrow-in-right"></i><SignOutButton/></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      );
}
