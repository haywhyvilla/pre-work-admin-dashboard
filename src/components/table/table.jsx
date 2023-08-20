"use client"
import TableData from "./tabledata"
import { useState } from "react";


const Table = () => {


    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPageMobile = 5;
    const [currentPageMobile, setCurrentPageMobile] = useState(1);

    // Calculate the index of the first and last item to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;


    // Calculate the index of the first and last item to display
    const indexOfLastItemMobile = currentPageMobile * itemsPerPageMobile;
    const indexOfFirstItemMobile = indexOfLastItemMobile - itemsPerPageMobile;

    // Slice the data array to display only the items for the current page
    const currentItems = TableData.tableBody.slice(
        indexOfFirstItem,
        indexOfLastItem
    );


    // Slice the data array to display only the items for the current page Mobile
    const currentItemsMobile = TableData.tableBody.slice(
        indexOfFirstItemMobile,
        indexOfLastItemMobile
    );

    // Calculate the total number of pages
    const totalPages = Math.ceil(TableData.tableBody.length / itemsPerPage);

    // Calculate the total number of pages
    const totalPagesMobile = Math.ceil(TableData.tableBody.length / itemsPerPageMobile);

    // Generate an array of page numbers (1, 2, 3, ..., totalPages)
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    // Generate an array of page numbers (1, 2, 3, ..., totalPages)
    const pageNumbersMobile = Array.from({ length: totalPagesMobile }, (_, i) => i + 1);

    const filterlinks = [{ id: 1, stage: "All" }, { id: 2, stage: "Confirmed" }, { id: 3, stage: "Processing" }, { id: 4, stage: "Picked" }, { id: 5, stage: "Shipping" }, { id: 6, stage: "Shipped" }, { id: 7, stage: "Cancelled" },]
    return (
        <section class="md:p-7 p-3">
            <div class="md:flex block justify-between items-center mb-7">
                <h2 class="text-[#313638] font-medium md:text-2xl text-base md:mb-0 mb-5">Orders</h2>
                <div class="flex items-center md:justify-center justify-between md:gap-12">
                    <button class="flex justify-center items-center gap-2 text-[#939393] border-[#939393] border-[0.6px] rounded-lg py-1 px-4"><span>Last 7 days</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                            <path d="M15 0.863492L9.23737 6.62612C8.55682 7.30667 7.44318 7.30667 6.76263 6.62612L1 0.863493" stroke="#939393" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>

                    <button class="flex justify-center items-center gap-2 text-[#939393] border-[#939393] border-[0.6px] rounded-lg py-1 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                            <path d="M12.0896 5.00592C11.7641 5.33136 11.2365 5.33136 10.9111 5.00592L9.83366 3.92851V11.9167C9.83366 12.3769 9.46056 12.75 9.00033 12.75C8.54009 12.75 8.16699 12.3769 8.16699 11.9167V3.92851L7.08958 5.00592C6.76414 5.33136 6.23651 5.33136 5.91107 5.00592C5.58563 4.68048 5.58563 4.15285 5.91107 3.82741L8.7057 1.03278C8.86842 0.870064 9.13223 0.870064 9.29495 1.03278L12.0896 3.82741C12.415 4.15285 12.415 4.68048 12.0896 5.00592Z" fill="#939393" />
                            <path d="M14.0003 6.08333C15.8413 6.08333 17.3337 7.57572 17.3337 9.41667V13.5833C17.3337 15.4243 15.8413 16.9167 14.0003 16.9167H4.00033C2.15938 16.9167 0.666992 15.4243 0.666992 13.5833V9.41667C0.666992 7.57572 2.15938 6.08333 4.00033 6.08333H5.66699C6.12723 6.08333 6.50033 6.45643 6.50033 6.91667C6.50033 7.3769 6.12723 7.75 5.66699 7.75H4.00033C3.07985 7.75 2.33366 8.49619 2.33366 9.41667V13.5833C2.33366 14.5038 3.07985 15.25 4.00033 15.25H14.0003C14.9208 15.25 15.667 14.5038 15.667 13.5833V9.41667C15.667 8.49619 14.9208 7.75 14.0003 7.75H12.3337C11.8734 7.75 11.5003 7.3769 11.5003 6.91667C11.5003 6.45643 11.8734 6.08333 12.3337 6.08333H14.0003Z" fill="#939393" />
                        </svg>
                        <span>Yearly</span>
                    </button>
                </div>
            </div>
            <div class="w-full bg-white py-7 md:block hidden">
                <ul class="px-6 flex gap-7">
                    {
                        filterlinks.map((item) => (
                            <li class={`rounded-lg hover:border-b-8 border-[#305C45] pb-2 ${item.id === 1 ? "border-b-8 border-[#305C45] rounded-lg" : ""} text-[#939393] font-normal text-lg cursor-pointers`}>{item.stage}</li>
                        ))
                    }
                </ul>
                <div class="bg-[#939393] h-[0.6px] w-full mb-8"></div>
                <table class="w-full">
                    <thead class="pb-12">
                        <tr>
                            {


                                TableData.tableHead.map((item) => (

                                    <th class="text-[#939393] font-medium text-lg pb-6">{item.value}</th>

                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>{

                        currentItems.map((item) => (
                            <tr key={item.id}>
                                <td class="pl-8 text-[#313638] text-lg font-normal pb-6">{item.order}</td>
                                <td class="pl-10 text-[#313638] text-lg font-normal pb-6">{item.product}</td>
                                <td class="pl-10 text-[#939393] text-lg font-normal pb-6">{item.date}</td>
                                <td class="pl-10 text-[#939393] text-lg font-normal pb-6">{item.customer}</td>
                                <td class="pl-10 text-[#313638] text-lg font-normal pb-6">{item.revenue}</td>
                                <td class="pl-10 text-[#313638] text-lg font-normal pb-6">{item.netprofit}</td>
                                <td class="pl-10 pb-6">{item.status === 1 ? (<p class="text-[#53A178] text-lg font-normal">Completed</p>) : item.status === 2 ? (<p class="text-[#E6A960] text-lg font-normal">Refund</p>) : item.status === 3 ? (<p class="text-[#313638] text-lg font-normal">Shipped</p>) : item.status === 4 ? (<p class="text-[#E44339] text-lg font-normal">Pending</p>) : (null)}</td>
                                <td class="flex items-center gap-1 text-[#939393] text-lg font-normal pb-6"><p>{item.action}</p> <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M1.00006 1L5.93945 5.93939C6.52279 6.52273 6.52279 7.47727 5.93945 8.06061L1.00006 13" stroke="#939393" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></td>


                            </tr>
                        ))
                    }</tbody>
                </table>
                <div class="bg-[#939393] h-[0.6px] w-full mb-8"></div>
                <div class="flex justify-between items-center px-6">
                    <p class="text-[#939393] font-normal text-sm">Showing 1-10 of 40</p>
                    <div className="flex justify-center mt-4">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <rect width="34" height="34" rx="4" fill="#F1F1F1" />
                                <path d="M21 12.5566L16.0291 17.5275L21 22.4725L19.4725 24L13 17.5275L19.4725 11.055L21 12.5566Z" fill="#939393" />
                            </svg>
                        </button>
                        {pageNumbers.map((pageNumber) => (
                            <button
                                key={pageNumber}
                                className={`px-3 py-1 mx-1 ${pageNumber === currentPage
                                    ? 'bg-[#305C45] text-white'
                                    : 'bg-[#F1F1F1] text-[#305C45]'
                                    } rounded-lg`}
                                onClick={() => setCurrentPage(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        ))}
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <rect width="34" height="34" rx="4" fill="#F1F1F1" />
                                <path d="M12 20.4434L16.9709 15.4725L12 10.5275L13.5275 9L20 15.4725L13.5275 21.945L12 20.4434Z" fill="#305C45" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full bg-white py-2 md:hidden block">
                <button class="flex justify-center items-center gap-2 text-[#939393] border-[#939393] border-[0.6px] rounded-lg py-1 px-4 mb-5">
                    <span>All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M6.25 8L0.837342 0.499999L11.6627 0.5L6.25 8Z" fill="#939393" />
                    </svg>
                </button>

                {
                    currentItemsMobile.map((item) => (
                        <div class="border-[#939393] rounded-md border-[0.4px] py-6 mb-3">
                            <div class="flex justify-between items-center mx-3 mb-6">
                                <h4 class="text-[#313638] text-base font-normal">{item.order}</h4>
                                <div class="flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M14 3.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.66699 3.31331L5.81366 2.43998C5.92033 1.80665 6.00033 1.33331 7.12699 1.33331H8.87366C10.0003 1.33331 10.087 1.83331 10.187 2.44665L10.3337 3.31331" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.5669 6.09332L12.1336 12.8067C12.0603 13.8533 12.0003 14.6667 10.1403 14.6667H5.86026C4.00026 14.6667 3.94026 13.8533 3.86693 12.8067L3.43359 6.09332" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.88672 11H9.10672" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.33301 8.33331H9.66634" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8.83958 2.4L3.36624 8.19334C3.15958 8.41334 2.95958 8.84667 2.91958 9.14667L2.67291 11.3067C2.58624 12.0867 3.14624 12.62 3.91958 12.4867L6.06624 12.12C6.36624 12.0667 6.78624 11.8467 6.99291 11.62L12.4662 5.82667C13.4129 4.82667 13.8396 3.68667 12.3662 2.29334C10.8996 0.913335 9.78624 1.4 8.83958 2.4Z" stroke="#939393" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.92676 3.36664C8.21342 5.20664 9.70676 6.6133 11.5601 6.79997" stroke="#939393" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2 14.6667H14" stroke="#939393" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div class="bg-[#939393] h-[0.6px] w-full mb-8">

                            </div>
                            <div class="px-3">
                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-[#939393] font-normal text-sm">Product</p>
                                    <h4 class="text-[#313638] text-xs font-normal">{item.product}</h4>
                                </div>

                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-[#939393] font-normal text-sm">Date</p>
                                    <h4 class="text-[#313638] text-sm font-normal">{item.date}</h4>
                                </div>

                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-[#939393] font-normal text-sm">Customer name</p>
                                    <h4 class="text-[#313638] text-xs font-normal">{item.customer}</h4>
                                </div>

                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-[#939393] font-normal text-sm">Revenue(#)</p>
                                    <h4 class="text-#313638] text-sm font-normal">{item.revenue}</h4>
                                </div>

                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-[#939393] font-normal text-sm">Profit</p>
                                    <h4 class="text-[#313638] text-sm font-normal">{item.netprofit}</h4>
                                </div>

                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-[#939393] font-normal text-sm">Status</p>
                                    <h4 class="text-[#313638] text-xs font-normal">{item.status === 1 ? (<p class="text-[#53A178] text-sm font-normal">Completed</p>) : item.status === 2 ? (<p class="text-[#E6A960] text-lg font-normal">Refund</p>) : item.status === 3 ? (<p class="text-[#313638] text-lg font-normal">Shipped</p>) : item.status === 4 ? (<p class="text-[#E44339] text-lg font-normal">Pending</p>) : (null)}</h4>
                                </div>

                                <div class="flex justify-between items-center mb-4">
                                    <p class="text-[#939393] font-normal text-sm">Category</p>
                                    <h4 class="text-[#313638] text-xs font-normal">Fashion</h4>
                                </div>
                            </div>


                        </div>
                    ))
                }

                <button class="flex justify-center items-center gap-2 text-[#939393] border-[#939393] border-[0.6px] rounded-lg py-1 px-4 mb-5">
                    <span>5 per page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M6.25 8L0.837342 0.499999L11.6627 0.5L6.25 8Z" fill="#939393" />
                    </svg>
                </button>

                <div className="flex justify-center mt-4">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <rect width="34" height="34" rx="4" fill="#F1F1F1" />
                            <path d="M21 12.5566L16.0291 17.5275L21 22.4725L19.4725 24L13 17.5275L19.4725 11.055L21 12.5566Z" fill="#939393" />
                        </svg>
                    </button>
                    {pageNumbersMobile.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`px-3 py-1 mx-1 ${pageNumber === currentPage
                                ? 'bg-[#305C45] text-white'
                                : 'bg-[#F1F1F1] text-[#305C45]'
                                } rounded-lg`}
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <rect width="34" height="34" rx="4" fill="#F1F1F1" />
                            <path d="M12 20.4434L16.9709 15.4725L12 10.5275L13.5275 9L20 15.4725L13.5275 21.945L12 20.4434Z" fill="#305C45" />
                        </svg>
                    </button>
                </div>
            </div>


        </section>
    )
}

export default Table