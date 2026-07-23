import ReactECharts from "echarts-for-react";
import { platformDistribution } from "../../data/mockData";

function PlatformDistribution() {

    const option = {

        tooltip: {
            trigger: "item",
            formatter: "{b}<br/>Registrations: {c}<br/>Share: {d}%"
        },

        legend: {
            bottom: 0,
            left: "center"
        },

        series: [
            {
                name: "Platform",
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

                data: platformDistribution,

                color: [
                    "#5470C6",
                    "#91CC75",
                    "#FAC858",
                    "#EE6666"
                ]
            }
        ]
    };

    return (
        <div className="card shadow border-0 h-100">

            <div className="card-body">

                <h5 className="mb-1">
                    Platform Distribution
                </h5>

                <p className="text-muted mb-3">
                    Registrations by platform
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

export default PlatformDistribution;