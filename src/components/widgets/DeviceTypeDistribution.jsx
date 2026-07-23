import ReactECharts from "echarts-for-react";
import { deviceTypeDistribution } from "../../data/mockData";

function DeviceTypeDistribution() {

    const total = deviceTypeDistribution.reduce(
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

                const item = deviceTypeDistribution[params[0].dataIndex];
                const percentage = (
                    item.registrations / total * 100
                ).toFixed(1);

                return `
                    <strong>${item.type}</strong><br/>
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
            data: deviceTypeDistribution.map(item => item.type),
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
                barWidth: 22,
                data: deviceTypeDistribution.map(item => item.registrations),

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
                    Device Type Distribution
                </h5>

                <p className="text-muted mb-3">
                    Registrations by device type
                </p>

                <ReactECharts
                    option={option}
                    style={{
                        height: "400px",
                        width: "100%"
                    }}
                />

            </div>

        </div>
    );
}

export default DeviceTypeDistribution;