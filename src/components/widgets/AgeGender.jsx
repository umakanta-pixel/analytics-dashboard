import ReactECharts from "echarts-for-react";
import { ageGender } from "../../data/mockData";

function AgeGender() {

    const option = {

        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },

        legend: {
            bottom: 0
        },

        grid: {
            left: "15%",
            right: "5%",
            top: "5%",
            bottom: "12%",
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
            data: ageGender.map(item => item.ageGroup),
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },

        series: [
            {
                name: "Male",
                type: "bar",
                stack: "total",
                data: ageGender.map(item => item.male),
                itemStyle: {
                    color: "#5B9BD5"
                }
            },
            {
                name: "Female",
                type: "bar",
                stack: "total",
                data: ageGender.map(item => item.female),
                itemStyle: {
                    color: "#ED7D31"
                }
            },
            {
                name: "Other",
                type: "bar",
                stack: "total",
                data: ageGender.map(item => item.other),
                itemStyle: {
                    color: "#A5A5A5"
                }
            }
        ]
    };

    return (
        <div className="card shadow border-0 h-100">

            <div className="card-body">

                <h5 className="mb-1">
                    Age Group × Gender
                </h5>

                <p className="text-muted mb-3">
                    Gender distribution across age groups
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

export default AgeGender;