import React from 'react'
import whatsap from './images/th.jpg'
import {Button} from '@material-ui/core'
import './Initial.css'

function Initial() {
    return (
        <div className='start' >
            <div className='startapp'>
                    <img src={whatsap} alt="whatsap image" />
                    <Button>login with google</Button>
                
            </div>

        </div>
    )
}

export default Initial
