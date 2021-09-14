import SideBar from './components/SideBar'
import  ChatArea from './components/ChatArea'
import  './App.css'
function App() {
  return (
    <div className="App">
      <div className="ChatAPP">
         <div className="side">
           <SideBar/>
         </div>
         <div className='Chatareas'> 
           <ChatArea/>
         </div>
      </div>
       
    </div>
  );
}

export default App;
