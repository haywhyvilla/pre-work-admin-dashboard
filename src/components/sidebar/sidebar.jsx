import Image from "next/image"
import dashboard from "../../assets/dashboard.svg"
import analytics from "../../assets/analytics.svg"
import orders from "../../assets/orders.svg"
import products from "../../assets/products.svg"
import customers from "../../assets/customers.svg"
import vendors from "../../assets/vendors.svg"
import integrations from "../../assets/integrations.svg"
import mystore from "../../assets/mystore.svg"
import settings from "../../assets/settings.svg"
import SidebarList from "./sidebarList"


const Sidebar = () => {

    const sidebarMenus = [
        {
            id: 1,
            name: "Dashboard",
            image: dashboard
        }, {
            id: 2,
            name: "Analytics",
            image: analytics,
        }, {
            id: 3,
            name: "Orders",
            image: orders
        }, {
            id: 4,
            name: "Products",
            image: products
        }, {
            id: 5,
            name: "Customers",
            image: customers
        }, {
            id: 6,
            name: "Vendors",
            image: vendors
        },
    ]

    const sidebarMenu2 = [
        {
            name: "Integrations",
            image: integrations
        }, {
            name: "My store",
            image: mystore
        },
    ]

    const sidebarMenu3 = [
        {
            name: "Settings",
            image: settings
        }
    ]



    return (
        <section class="py-9 px-7">
            <h1 class="ml-11 font-medium text-[52px] text-black mb-8 cursor-pointer">LOGO</h1>
            <nav>
                <ul>
                    {
                        sidebarMenus.map((item, index) => (
                            <li key={index} class={`px-8 py-4 cursor-pointer text-[#939393] ${item.id === 1 ? "text-[#313638] bg-[#F1F1F1] border-l-8 border-[#305C45]" : ""} hover:text-[#313638] hover:bg-[#F1F1F1] rounded-lg hover:border-l-8 border-[#305C45]`}>
                                <SidebarList {...item} />
                            </li>
                        ))
                    }
                </ul>
                <h4 class="text-[#939393] text-base font-normal">SALES CHANNEL</h4>
                <ul>
                    {
                        sidebarMenu2.map((item, index) => (
                            <li key={index} class="px-8 py-4 cursor-pointer text-[#939393] hover:text-[#313638] hover:bg-[#F1F1F1] rounded-lg hover:border-l-8 border-[#305C45]">
                                <SidebarList {...item} />
                            </li>
                        ))
                    }
                </ul>
                <h4 class="text-[#939393] text-base font-normal">OTHERS</h4>
                <ul>
                    {
                        sidebarMenu3.map((item, index) => (
                            <li key={index} class="px-8 py-4 cursor-pointer text-[#939393] hover:text-[#313638] hover:bg-[#F1F1F1] rounded-lg hover:border-l-8 border-[#305C45]">
                                <SidebarList {...item} />
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </section>
    )
}


export default Sidebar