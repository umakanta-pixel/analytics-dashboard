import ReactECharts from "echarts-for-react";
import { ageDistribution } from "../../data/mockData";

function AgeDistribution() {

    const total = ageDistribution.reduce(
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

                const item = ageDistribution[params[0].dataIndex];
                const percentage = (
                    (item.registrations / total) * 100
                ).toFixed(1);

                return `
                    <strong>${item.ageGroup}</strong><br/>
                    Registrations: ${item.registrations.toLocaleString()}<br/>
                    Percentage: ${percentage}%
                `;
            }
        },

        grid: {
            left: "18%",
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
            data: ageDistribution.map(item => item.ageGroup),
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
                data: ageDistribution.map(item => item.registrations),
                barWidth: 18,

                itemStyle: {
                    color: "#5B9BD5"
                },

                label: {
                    show: true,
                    position: "right",
                    formatter: ({ value }) => {
                        const percentage = (
                            (value / total) * 100
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
                    Age Distribution
                </h5>

                <p className="text-muted mb-3">
                    Registrations by age group
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

export default AgeDistribution;