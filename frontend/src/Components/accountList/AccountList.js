import React, { useEffect, useState } from 'react';

import { getCookie } from '../../utils/cookieUtils';

import './AccountList.scss';

const API = process.env.REACT_APP_API_URL;

const AccountList = () => {

    const [accounts, setAccounts] = useState([]);

    
    // reach out
    useEffect(() => {
        const accessToken = getCookie('accessToken');
        
        // get the access token
        const requestOptions = {
            headers: {'Authorization': `Bearer ${accessToken}`}
        }

        fetch(`${API}/accounts`, requestOptions)
        .then(response => response.json())
        .then(data => {
            
            if (data.error){
                console.log(data.error);
            } else {
                console.log("accounts fetch data:", data)
                setAccounts(data);
            }
        })
    }, []);


  return (
    <div>
        <div>Accounts</div>
        <div>
            {accounts.map((account) => {
                return (
                    <div>{account.number}, {account.balance}</div>
                )
            })}
        </div>
    </div>
  )
}

export default AccountList;