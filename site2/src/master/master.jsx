import Navbar from "../components/navbar/navbar"
import MainContainer from "../components/maincontainer/maincontainer"
import './master.css'
export default function Master() {
    return (
        <div className="master" id="master">
            <Navbar />,
            <MainContainer />
        </div>
        
    )
}