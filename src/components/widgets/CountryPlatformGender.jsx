import ReactECharts from "echarts-for-react";
import { countryPlatformGender } from "../../data/mockData";
import { useState } from "react";

function CountryPlatformGender() {

    const [platform, setPlatform] = useState("All");

    const data = countryPlatformGender[platform];

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
            left: "18%",
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
            data: data.map(item => item.country),
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },

        series: [
            {
                name: "Male",
                type: "bar",
                stack: "gender",
                data: data.map(item => item.male),
                itemStyle: {
                    color: "#5B9BD5"
                }
            },
            {
                name: "Female",
                type: "bar",
                stack: "gender",
                data: data.map(item => item.female),
                itemStyle: {
                    color: "#ED7D31"
                }
            },
            {
                name: "Other",
                type: "bar",
                stack: "gender",
                data: data.map(item => item.other),
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
                    Country × Gender
                </h5>

                <p className="text-muted mb-3">
                    Gender distribution across countries

                    <select
                        className="form-select w-auto mb-3"
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                    >
                        <option>All</option>
                        <option>Android</option>
                        <option>iOS</option>
                        <option>Web</option>
                        <option>Desktop</option>
                    </select>
                </p>

                <ReactECharts
                    option={option}
                    style={{
                        height: "450px",
                        width: "100%"
                    }}
                />

            </div>

        </div>
    );
}

export default CountryPlatformGender;