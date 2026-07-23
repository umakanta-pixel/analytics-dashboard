import { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import world from "../../assets/maps/world.json";

import * as echarts from "echarts";

import { geographicHeatmap } from "../../data/mockData";

echarts.registerMap("world", world);

function GeographicHeatmap() {
    // useEffect(() => {
    //     echarts.registerMap("world", world);
    // }, []);

    const option = {
        tooltip: {
            trigger: "item",
            formatter: (params) => {
                return `
                    <strong>${params.name}</strong><br/>
                    Registrations: ${(params.value || 0).toLocaleString()}
                `;
            }
        },

        visualMap: {
            min: 0,
            max: 55000,
            left: "left",
            bottom: 20,
            text: ["High", "Low"],
            calculable: true,
            inRange: {
                color: [
                    "#e8f1fb",
                    "#b8d4f5",
                    "#7fb3ec",
                    "#4a90e2",
                    "#0d6efd"
                ]
            }
        },

        series: [
            {
                name: "Registrations",
                type: "map",
                map: "world",

                roam: false,

                zoom: 1.15,

                emphasis: {
                    label: {
                        show: false
                    },

                    itemStyle: {
                        areaColor: "#4a90e2"
                    }
                },

                itemStyle: {
                    borderColor: "#ffffff",
                    borderWidth: 0.6
                },

                data: geographicHeatmap
            }
        ]
    };

    return (
        <div className="card shadow-sm border-0 h-100">

            <div className="card-body">

                <h5 className="mb-1">
                    Geographic Distribution
                </h5>

                <p className="text-muted mb-3">
                    Registration distribution across countries
                </p>

                <ReactECharts
                    echarts={echarts}
                    option={option}
                    style={{
                        height: "520px",
                        width: "100%"
                    }}
                />

            </div>

        </div>
    );
}

export default GeographicHeatmap;