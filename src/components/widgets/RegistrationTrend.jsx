import { useState } from "react";
import ReactECharts from "echarts-for-react";
import { registrationTrend } from "../../data/mockData";

function RegistrationTrend() {
    const [period, setPeriod] = useState("month");

    const xAxisLabels = {
        day: [
            "12 AM", "1", "2", "3", "4", "5",
            "6", "7", "8", "9", "10", "11",
            "12 PM", "1", "2", "3", "4", "5",
            "6", "7", "8", "9", "10", "11"
        ],
        week: [
            "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
        ],
        month: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        year: [
            "2022", "2023", "2024", "2025", "2026"
        ]
    };

    const option = {
        tooltip: {
            trigger: "axis",
        },

        grid: {
            left: "4%",
            right: "3%",
            top: "10%",
            bottom: "8%",
            containLabel: true,
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: xAxisLabels[period],
            axisLine: {
                lineStyle: {
                    color: "#dee2e6",
                },
            },
            axisTick: {
                show: false,
            },
        },

        yAxis: {
            type: "value",
            splitLine: {
                lineStyle: {
                    color: "#f1f3f5",
                },
            },
        },

        series: [
            {
                data: registrationTrend[period],
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 7,

                lineStyle: {
                    width: 3,
                    color: "#0d6efd",
                },

                itemStyle: {
                    color: "#0d6efd",
                },

                areaStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(13,110,253,0.35)",
                            },
                            {
                                offset: 1,
                                color: "rgba(13,110,253,0.03)",
                            },
                        ],
                    },
                },
            },
        ],
    };

    return (
        <div className="card shadow border-0">
            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>
                        <h5 className="mb-1">Registration Trend</h5>
                        <small className="text-muted">
                            Registration growth over time
                        </small>
                    </div>

                    <select
                        className="form-select form-select-sm"
                        style={{ width: "140px" }}
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                    >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                        <option value="year">Year</option>
                    </select>

                </div>

                <ReactECharts
                    option={option}
                    style={{
                        height: "400px",
                        width: "100%",
                    }}
                />

            </div>
        </div>
    );
}

export default RegistrationTrend;