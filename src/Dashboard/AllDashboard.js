import DashboardNav from "../Shared/DashboardNav";
import MainDashboard from "./MainDashboard";
import Projects from "./Projects"
import Artical from "./Artical";
import Chart from "./Chart";
import Menu from "../Shared/Menu";
import AllMenuControl from "../MenuControl/AllMenuControl";
import AllFooter from "../Footer/AllFooter";


function AllDashboard() {
    return (
        <div >
            <Menu />
            <div className="all-pages">
                <DashboardNav />
                <MainDashboard />
                <Projects />
                <Artical />
                <Chart />
                <AllMenuControl/>
                <AllFooter/>
            </div>
        </div>

    )
}
export default AllDashboard;