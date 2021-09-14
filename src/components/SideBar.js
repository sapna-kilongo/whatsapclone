import React, {
    useState
} from 'react'
import { Message, MoreVert, Autorenew } from '@material-ui/icons'
import { SearchOutlined } from '@material-ui/icons'
import './Sidebar.css'
import sample from '../images/sample.jpg'
import ChatsUser from './ChatsUser'
import { Avatar, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}




const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display: 'flex',
        flexDirection: 'column',
    },
}));


function SideBar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [chatValue,setChatValue]=useState()
    const [modalStyle] = useState(getModalStyle);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

 const HAndleSubmit=(e)=>{
   // e.preventDefault();
    alert(chatValue)

 }

    return (
        <div className="Sidebar">
            <div className="positi0nSticky">
                <div className='top'>
                    <div className='left'>
                        <IconButton>
                            <Avatar />
                        </IconButton>
                    </div>
                    <div className='right'>
                        <Message />
                        <Autorenew />
                        <MoreVert />
                    </div>
                </div>
                <div className="nybton" >
                    <Button onClick={() => {
                        handleOpen()
                    }} style={{ width: '100%', paddingTop: '10px' }} > CREATE CHATS </Button>
                </div>

                <div className="search">
                    <SearchOutlined style={{paddingLeft: '20px'}}/>
                    <input type='text' placeholder="search the chat"  />
                </div>
            </div>


            <div className='chats' >
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
                <ChatsUser />
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <form onSubmit={HAndleSubmit}  >
                        <div className="uploading" >
                            <input type="text" value={chatValue} onChange={(e)=>{
                                setChatValue(e.target.value)

                            }} placeholder="enter the person to chat here" />
                            <Button style={{ width: '100%' }} type="submit">Create Chat</Button>
                        </div>
                    </form>

                </div>
            </Modal>


        </div>
    )
}

export default SideBar
