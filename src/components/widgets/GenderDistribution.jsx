import ReactECharts from "echarts-for-react";
import { genderDistribution } from "../../data/mockData";

function GenderDistribution() {

    const option = {

        tooltip: {
            trigger: "item",
            formatter: "{b}<br/>Registrations: {c}<br/>Percentage: {d}%"
        },

        legend: {
            bottom: 0,
            left: "center"
        },

        series: [
            {
                name: "Gender",
                type: "pie",
                radius: ["50%", "70%"],

                avoidLabelOverlap: false,

                label: {
                    show: true,
                    formatter: "{d}%"
                },

                labelLine: {
                    show: true
                },

                data: genderDistribution,

                color: [
                    "#5B9BD5",
                    "#ED7D31",
                    "#A5A5A5"
                ]
            }
        ]
    };

    return (
        <div className="card shadow border-0 h-100">

            <div className="card-body">

                <h5 className="mb-1">
                    Gender Distribution
                </h5>

                <p className="text-muted mb-3">
                    Distribution of registered users by gender
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

export default GenderDistribution;