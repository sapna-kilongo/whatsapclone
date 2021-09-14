import React from 'react'
import sample from '../images/sample.jpg'
import { MoreVert, SearchOutlined, Attachment } from '@material-ui/icons'
import { SentimentDissatisfied } from '@material-ui/icons'
import { SettingsVoice } from '@material-ui/icons'
import './ChatArea.css'
import { IconButton } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
export default function ChatArea() {
    return (
        <div className="ChatArea">
            <div className='Header'>
                <div className='leftChat'>
                    {/* <img src={sample} alt="sample" /> */}
                    <IconButton>
                    <Avatar  style={{ width:'40',height:'40' }}/>
                   </IconButton>
                </div>
                <div className="middle">
                    <input type="search" name="search"/>
                </div>
                <div className='rightChat'>
                    <IconButton>
                        <SearchOutlined />

                    </IconButton>
                    <IconButton>

                        <MoreVert />
                    </IconButton>
                </div>


            </div>

            <div className='messages'>

            </div>

            <div className='Message_sending'>
                    <IconButton>
                        <SentimentDissatisfied />
                    </IconButton>

                    <IconButton>
                        <Attachment />
                    </IconButton>
                <input type="text" placeholder="Type a message" />
                <div className="voice">
                    <IconButton>
                        <SettingsVoice />
                    </IconButton>
                </div>
                
            </div>

        </div>
    )
}


