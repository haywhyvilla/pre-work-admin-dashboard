"use client"

import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChart = () => {
    const options = {
        chart: {
            id: 'pie-chart'
        },
        labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ],
        dataLabels: {
            enabled: false // Hide data labels on the slices
        },
        legend: {
            show: false // Hide the legend (labels)
        },
        plotOptions: {
            pie: {
                expandOnClick: true, // Enable slice expansion on click
                donut: {
                    size: '50%',
                    labels: {
                        show: true,
                        total: {
                            show: true
                        }
                    }
                }
            }
        },
        colors: ['#E6A960', '#305C45', '#EDF7D2', '#47A8BD',] // Set custom colors for the slices
    };

    const series = [38.4, 38.4, 38.4, 38.4]; // Data values for the slices

    return (
        <div>
            <ReactApexChart options={options} series={series} type="donut" height={250} />
        </div>
    );
};

export default PieChart;