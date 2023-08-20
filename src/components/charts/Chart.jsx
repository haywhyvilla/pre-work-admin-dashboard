"use client"
import Image from "next/image"
import decrease from "../../assets/decrease.svg"
import increase from "../../assets/increase.svg"
import React from 'react';
import PieChart from "./pieChart";
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });





const Charts = () => {

    const cards = [
        {
            id: 1, title: "Total sales", amount: "185,700", status: true, rate: "4.8%", image: increase, svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.37653 5.61575L11.7749 5.61575L11.7749 10.0141" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.61577 11.7749L11.7134 5.67725" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            id: 2, title: "Total orders", amount: "985", status: false, rate: "1.2%", image: decrease, svg: <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path d="M12.5058 7.37659L12.5058 11.775L8.10744 11.775" stroke="#E6A960" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.34673 5.61577L12.4443 11.7134" stroke="#E6A960" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            id: 3, title: "Total products", amount: "185.7k", status: true, rate: "4.8%", image: increase, svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.37653 5.61575L11.7749 5.61575L11.7749 10.0141" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.61577 11.7749L11.7134 5.67725" stroke="#305C45" stroke-width="1.02476" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
    ]

    const piechart = [
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="6" fill="#E6A960" />
            </svg>, device: "Desktop"
        }, {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="6" fill="#305C45" />
            </svg>, device: "Tablet"
        }, {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="6" fill="#EDF7D2" />
            </svg>, device: "Mobile"
        }, {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="6" fill="#47A8BD" />
            </svg>, device: "Unknown"
        }
    ]


    const options = {
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false // Hide the toolbar, including the hamburger menu
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        plotOptions: {
            bar: {
                columnWidth: '10%', // Adjust the width of the bars (10% makes them thinner)
                borderRadius: 4, // Add a slight border radius to the bars
            }
        },
        colors: ['#E6A960', '#E6A960', '#E6A960', '#E6A960', '#E6A960', '#E6A960', '#E6A960', '#E6A960', '#E6A960', '#E6A960', '#E6A960', '#E6A960'], // Set colors for the bars
        grid: {
            show: false // Hide the chart's grid lines and baseline
        },
        dataLabels: {
            enabled: false // Hide data labels on top of the bars
        }

    };

    const series = [{
        name: 'Amount',
        data: [275, 470, 350, 375, 275, 350, 225, 325, 275, 200, 500, 300]
    }];




    return (
        <section class="sm:px-7 px-2 py-7">
            <div class="grid md:grid-cols-3 grid-rows-1 gap-10 mb-6">
                {
                    cards.map((cardy, index) => (
                        <div key={index} class="bg-white p-6 rounded-lg">
                            <p class="text-[#939393] sm:text-lg text-sm font-normal">{cardy.title}</p>
                            <div class="flex justify-start items-center">
                                {
                                    cardy.id == 1 ? (<svg class="mt-[-4px]" xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                        <path d="M20 11.1043H17.2222V8.88342H20C20.2947 8.88342 20.5773 8.76643 20.7857 8.55818C20.9941 8.34994 21.1111 8.0675 21.1111 7.77299C21.1111 7.47849 20.9941 7.19605 20.7857 6.9878C20.5773 6.77956 20.2947 6.66256 20 6.66256H17.2222V1.11043C17.2222 0.815924 17.1052 0.533482 16.8968 0.325237C16.6884 0.116991 16.4058 0 16.1111 0C15.8164 0 15.5338 0.116991 15.3254 0.325237C15.1171 0.533482 15 0.815924 15 1.11043V6.66256H10.3667L8.14445 1.36583C7.94031 0.902631 7.58398 0.523017 7.13447 0.289854C6.68497 0.0566906 6.16926 -0.0160341 5.67275 0.083725C5.17624 0.183484 4.72872 0.449742 4.4043 0.838401C4.07989 1.22706 3.89805 1.7148 3.88889 2.22085V6.66256H1.11111C0.816426 6.66256 0.533811 6.77956 0.325437 6.9878C0.117063 7.19605 0 7.47849 0 7.77299C0 8.0675 0.117063 8.34994 0.325437 8.55818C0.533811 8.76643 0.816426 8.88342 1.11111 8.88342H3.88889V11.1043H1.11111C0.816426 11.1043 0.533811 11.2213 0.325437 11.4295C0.117063 11.6378 0 11.9202 0 12.2147C0 12.5092 0.117063 12.7916 0.325437 12.9999C0.533811 13.2081 0.816426 13.3251 1.11111 13.3251H3.88889V18.8773C3.88889 19.1718 4.00595 19.4542 4.21433 19.6625C4.4227 19.8707 4.70532 19.9877 5 19.9877C5.29469 19.9877 5.5773 19.8707 5.78567 19.6625C5.99405 19.4542 6.11111 19.1718 6.11111 18.8773V13.3251H10.7444L12.9667 18.6219C13.1344 19.0236 13.4165 19.3673 13.778 19.6101C14.1395 19.8529 14.5644 19.9842 15 19.9877C15.1477 20.0041 15.2968 20.0041 15.4444 19.9877C15.9539 19.8839 16.4109 19.6048 16.7357 19.199C17.0605 18.7932 17.2327 18.2864 17.2222 17.7668V13.3251H20C20.2947 13.3251 20.5773 13.2081 20.7857 12.9999C20.9941 12.7916 21.1111 12.5092 21.1111 12.2147C21.1111 11.9202 20.9941 11.6378 20.7857 11.4295C20.5773 11.2213 20.2947 11.1043 20 11.1043ZM15 8.88342V11.1043H12.2222L11.3 8.88342H15ZM6.11111 2.22085L7.96667 6.66256H6.11111V2.22085ZM6.11111 11.1043V8.88342H8.88889L9.81111 11.1043H6.11111ZM15 17.7668L13.1444 13.3251H15V17.7668Z" fill="#313638" />
                                    </svg>) : (null)
                                }

                                <h2 class="text-[#313638] sm:text-3xl text-lg font-medium">{cardy.amount}</h2>

                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex justify-center items-center">
                                    <button class={`${cardy.status ? "bg-[rgba(48,92,69,0.10)] text-[#305C45]" : "bg-[rgba(230,169,96,0.10)] text-[#E6A960]"} rounded-3xl py-1 sm:px-3 px-1 flex`}>{cardy.svg}<span>{cardy.rate}</span></button>
                                    <p class="text-[#313638] text-xs sm:text-sm font-normal ml-1 sm:ml-2">from yesterday</p>
                                </div>
                                <Image src={cardy.image} alt="rate" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div class="grid md:grid-cols-3 grid-rows-1 gap-6">
                <div class="md:col-span-2 bg-white sm:p-6 p-1 rounded-lg">
                    <div class="flex justify-between items-center">
                        <h2 class="text-[#1C2A53] md:text-3xl text-base font-medium">Sales analytics</h2>
                        <button class="flex justify-center items-center gap-2 text-[#939393] border-[#939393] border-[0.6px] rounded-lg py-1 px-4"><span>Yearly</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                                <path d="M15 0.863492L9.23737 6.62612C8.55682 7.30667 7.44318 7.30667 6.76263 6.62612L1 0.863493" stroke="#939393" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button>
                    </div>
                    <div>
                        <ReactApexChart options={options} series={series} type="bar" height={250} />
                    </div>
                </div>
                <div class="col-span-1 bg-white rounded-lg p-6">
                    <h2 class="text-[#313638] text-3xl font-medium">Total visitors</h2>
                    <PieChart />
                    <div class="grid grid-cols-2 gap-6">
                        {
                            piechart.map((item, index) => (
                                <div key={index} class="flex items-center gap-4">
                                    <span>{item.svg}</span>
                                    <p class="text-[#939393] text-sm font-normal">{item.device}</p>
                                    <h4 class="text-[#313638] text-sm font-medium">38.4K</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Charts