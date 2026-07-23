import ReactECharts from "echarts-for-react";
import { countryAgePlatform } from "../../data/mockData";
import { useState } from "react";

function CountryAgePlatform() {

    const [platform, setPlatform] = useState("Android");

    const data = countryAgePlatform[platform];

    const ageGroups = [
        "18-24",
        "25-34",
        "35-44",
        "45-54",
        "55+"
    ];

    const countries = data.map(item => item.country);

    const heatmapData = [];

    data.forEach((country, rowIndex) => {

        country.values.forEach((value, colIndex) => {

            heatmapData.push([
                colIndex,
                rowIndex,
                value
            ]);

        });

    });

    const option = {

        tooltip: {
            formatter: ({ data }) => {

                return `
                    <strong>${countries[data[1]]}</strong><br/>
                    Age Group: ${ageGroups[data[0]]}<br/>
                    Registrations: ${data[2].toLocaleString()}
                `;
            }
        },

        grid: {
            top: 30,
            left: 130,
            right: 30,
            bottom: 60
        },

        xAxis: {
            type: "category",
            data: ageGroups,
            splitArea: {
                show: true
            }
        },

        yAxis: {
            type: "category",
            data: countries,
            splitArea: {
                show: true
            }
        },

        visualMap: {
            min: 0,
            max: 150000,
            calculable: true,
            orient: "horizontal",
            left: "center",
            bottom: -25
        },

        series: [
            {
                type: "heatmap",

                data: heatmapData,

                label: {
                    show: true,
                    formatter: ({ value }) =>
                        value[2].toLocaleString(),
                    fontSize: 11
                },

                emphasis: {
                    itemStyle: {
                        borderColor: "#333",
                        borderWidth: 1
                    }
                }
            }
        ]
    };

    return (

        <div className="card shadow border-0 h-100">

            <div className="card-body">

                <h5 className="mb-1">
                    Country × Age Group
                </h5>

                <p className="text-muted mb-3">
                    Registration distribution by country and age group

                    <select
                        className="form-select w-auto mb-3"
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                    >
                        <option>Android</option>
                        <option>iOS</option>
                        <option>Web</option>
                        <option>Desktop</option>
                    </select>
                </p>

                <ReactECharts
                    option={option}
                    style={{
                        height: "500px",
                        width: "100%"
                    }}
                />

            </div>

        </div>

    );

}

export default CountryAgePlatform;