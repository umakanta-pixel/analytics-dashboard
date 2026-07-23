import ReactECharts from "echarts-for-react";
import { countryPlatform } from "../../data/mockData";

function CountryPlatform() {

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
            data: countryPlatform.map(item => item.country),
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },

        series: [
            {
                name: "Android",
                type: "bar",
                stack: "total",
                data: countryPlatform.map(item => item.android),
                itemStyle: {
                    color: "#5B9BD5"
                }
            },
            {
                name: "iOS",
                type: "bar",
                stack: "total",
                data: countryPlatform.map(item => item.ios),
                itemStyle: {
                    color: "#91CC75"
                }
            },
            {
                name: "Web",
                type: "bar",
                stack: "total",
                data: countryPlatform.map(item => item.web),
                itemStyle: {
                    color: "#FAC858"
                }
            },
            {
                name: "Desktop",
                type: "bar",
                stack: "total",
                data: countryPlatform.map(item => item.desktop),
                itemStyle: {
                    color: "#EE6666"
                }
            }
        ]
    };

    return (
        <div className="card shadow border-0 h-100">

            <div className="card-body">

                <h5 className="mb-1">
                    Country × Platform
                </h5>

                <p className="text-muted mb-3">
                    Platform distribution across countries
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

export default CountryPlatform;