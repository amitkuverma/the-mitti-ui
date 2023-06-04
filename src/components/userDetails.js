import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

export const UserDetails = () => {
    const [userDetails, setUserDetails] = useState([])

    useEffect(() => {
        axios.get('https://the-mitti-api.onrender.com/users').then((res) => {
            console.log(res)
            setUserDetails(res.data)
        }).catch(
            console.log("No data found")
        )
    },[])
    console.log(userDetails)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {userDetails.map((item, index) => (<tr>
                    <td>{index + 1}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>))}
            </tbody>
        </Table>
    );
}
