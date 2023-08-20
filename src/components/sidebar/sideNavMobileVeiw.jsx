"use client"
import { useState } from "react";
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



const SideNavMobileVeiw = () => {

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

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div class="md:hidden sticky top-0 z-40 py-1 px-3">
            <div class="w-full h-16 bg-white py-4 px-1 flex justify-between">
                <h2 class="text-[#313638] font-medium text-lg">Dashboard</h2>
                <div class="flex items-center gap-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M21.725 20.4417L17.05 15.7667C18.425 14.1167 19.25 11.9167 19.25 9.625C19.25 4.30833 14.9417 0 9.625 0C4.30833 0 0 4.30833 0 9.625C0 14.9417 4.30833 19.25 9.625 19.25C11.9167 19.25 14.1167 18.425 15.7667 17.05L20.4417 21.725C20.625 21.9083 20.9 22 21.0833 22C21.2667 22 21.5417 21.9083 21.725 21.725C22.0917 21.3583 22.0917 20.8083 21.725 20.4417ZM9.625 17.4167C5.31667 17.4167 1.83333 13.9333 1.83333 9.625C1.83333 5.31667 5.31667 1.83333 9.625 1.83333C13.9333 1.83333 17.4167 5.31667 17.4167 9.625C17.4167 13.9333 13.9333 17.4167 9.625 17.4167Z" fill="#313638" />
                        <path d="M10.0831 3.29871C6.3248 3.29871 3.2998 6.32371 3.2998 10.082C3.2998 10.632 3.66647 10.9987 4.21647 10.9987C4.76647 10.9987 5.13314 10.632 5.13314 10.082C5.13314 7.33204 7.33314 5.13204 10.0831 5.13204C10.6331 5.13204 10.9998 4.76537 10.9998 4.21537C10.9998 3.66537 10.5415 3.29871 10.0831 3.29871Z" fill="#313638" />
                    </svg>
                    {open ? (
                        <div class="cursor-pointer" onClick={handleClick} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none">
                                <path d="M12 4L4 12" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 4L12 12" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    ) : (
                        <div class="cursor-pointer" onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                                <path d="M26 19.5334L0 19.5334L3.03061e-07 16.0668L26 16.0668L26 19.5334Z" fill="#313638" />
                                <path d="M26 11.7333L11.5556 11.7333L11.5556 8.26666L26 8.26666L26 11.7333Z" fill="#313638" />
                                <path d="M26 3.93335L4.33333 3.93335L4.33333 0.466732L26 0.466734L26 3.93335Z" fill="#313638" />
                            </svg>
                        </div>
                    )}


                </div>
            </div>

            {
                open ? (
                    <div class="w-[250px] absolute bg-white">
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
                    </div>
                ) : (null)
            }

        </div>
    )
}

export default SideNavMobileVeiw