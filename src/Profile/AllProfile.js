import DashboardNav from "../Shared/DashboardNav";
import Menu from "../Shared/Menu";
import ArticalProfile from "./ArticalProfil";
import MainProfile from "./MainProfile";
import ProfileProjects from "./ProfileProjects";
import AllMenuControl from "../MenuControl/AllMenuControl";
import AllFooter from "../Footer/AllFooter";

function AllProfile() {
    return (
        <div>
            <Menu />
            <div className="all-pages">
                <DashboardNav />
                <MainProfile/>
                <ArticalProfile/>
                <ProfileProjects/>
                <AllMenuControl/>
                <AllFooter/>
            </div>
        </div>

    )
}
export default AllProfile;