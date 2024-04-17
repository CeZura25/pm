import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from 'react-icons/fa';
import { useDashboardContext } from "../pages/DashboardPage";
import Logo from "../components/Logo";

import LogoutContainer from "./LogoutContainer";


const Navbar = () => {
    const {toggleSidebar} = useDashboardContext();
    return (
    <Wrapper>
        <div className="nav-center">
            <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                <FaAlignLeft />
            </button>
            <div>
                
                <h4 className="logo-text">dashboard</h4>
            </div>
            <div className="btn-container">
                <LogoutContainer />
            </div>
        </div>
    </Wrapper>
    );
};

export default Navbar;