import React from 'react'
import './ChatsUser.css'
import sample from  '../images/sample.jpg'
import { Avatar } from '@material-ui/core'

function ChatsUser() {
    return (
        <div className="ChatsUser">
           <Avatar/>
           <div className="text" >
               <h5>michaelkilngo@gmail.com</h5>
           </div>
       
        </div>
    )
}

export default ChatsUser
