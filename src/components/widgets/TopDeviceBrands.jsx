import ReactECharts from "echarts-for-react";
import { topDeviceBrands } from "../../data/mockData";

function TopDeviceBrands() {

    const total = topDeviceBrands.reduce(
        (sum, item) => sum + item.registrations,
        0
    );

    const option = {

        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            formatter: (params) => {

                const item = topDeviceBrands[params[0].dataIndex];
                const percentage = (
                    item.registrations / total * 100
                ).toFixed(1);

                return `
                    <strong>${item.brand}</strong><br/>
                    Registrations: ${item.registrations.toLocaleString()}<br/>
                    Share: ${percentage}%
                `;
            }
        },

        grid: {
            left: "20%",
            right: "15%",
            top: "5%",
            bottom: "5%",
            containLabel: true
        },

        xAxis: {
            type: "value",
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: "#ececec"
                }
            }
        },

        yAxis: {
            type: "category",
            inverse: true,
            data: topDeviceBrands.map(item => item.brand),
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },

        series: [
            {
                type: "bar",
                barWidth: 18,

                data: topDeviceBrands.map(item => item.registrations),

                itemStyle: {
                    color: "#5B9BD5"
                },

                label: {
                    show: true,
                    position: "right",
                    formatter: ({ value }) => {

                        const percentage = (
                            value / total * 100
                        ).toFixed(1);

                        return `${value.toLocaleString()} (${percentage}%)`;
                    },
                    color: "#495057"
                }
            }
        ]
    };

    return (
        <div className="card shadow border-0 h-100">

            <div className="card-body">

                <h5 className="mb-1">
                    Top Device Brands
                </h5>

                <p className="text-muted mb-3">
                    Most used device brands
                </p>

                <ReactECharts
                    option={option}
                    style={{
                        height: "420px",
                        width: "100%"
                    }}
                />

            </div>

        </div>
    );
}

export default TopDeviceBrands;