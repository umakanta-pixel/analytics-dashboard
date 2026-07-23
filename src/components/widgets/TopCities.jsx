import ReactECharts from "echarts-for-react";
import { topCities } from "../../data/mockData";

function TopCities() {
    const totalRegistrations = topCities.reduce(
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
                const item = topCities[params[0].dataIndex];
                const percentage = (
                    (item.registrations / totalRegistrations) *
                    100
                ).toFixed(1);

                return `
                    <strong>${item.city}</strong><br/>
                    Registrations: ${item.registrations.toLocaleString()}<br/>
                    Share: ${percentage}%
                `;
            }
        },

        grid: {
            left: "22%",
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
            data: topCities.map(item => item.city),
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },

        series: [
            {
                type: "bar",
                data: topCities.map(item => item.registrations),
                barWidth: 18,

                itemStyle: {
                    color: "#5B9BD5"
                },

                label: {
                    show: true,
                    position: "right",
                    formatter: ({ value, dataIndex }) => {
                        const percentage = (
                            (value / totalRegistrations) *
                            100
                        ).toFixed(1);

                        return `${value.toLocaleString()} (${percentage}%)`;
                    },
                    color: "#495057",
                    fontSize: 12
                }
            }
        ]
    };

    return (
        <div className="card shadow border-0 h-100">
            <div className="card-body">

                <h5 className="mb-1">
                    Top Cities
                </h5>

                <p className="text-muted mb-3">
                    Cities with the highest registrations
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

export default TopCities;