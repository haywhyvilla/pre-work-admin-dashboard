import Sidebar from "../components/sidebar/sidebar";
import SideNavMobileVeiw from "../components/sidebar/sideNavMobileVeiw";
import Header from "../components/header/header";
import Charts from "../components/charts/Chart";
import Table from "../components/table/table";


const Dashboard = () => {
    return (
        <div class="relative">
            <SideNavMobileVeiw />
            <div class="h-screen w-screen block md:grid grid-cols-4 lg:grid-cols-5 overflow-x-hidden">
                <div class="hidden md:block h-[100vh] col-span-1">
                    <Sidebar />
                </div>
                <main class="overflow-y-scroll bg-gray-50 col-span-3 lg:col-span-4">
                    <Header />
                    <Charts />
                    <Table />
                </main>
            </div>
        </div>
    )
}

export default Dashboard;