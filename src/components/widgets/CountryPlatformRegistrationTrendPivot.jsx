import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { countryPlatformTrend } from "../../data/mockData";

const months = [
    { key: 1, label: "Jan" },
    { key: 2, label: "Feb" },
    { key: 3, label: "Mar" },
    { key: 4, label: "Apr" },
    { key: 5, label: "May" },
    { key: 6, label: "Jun" },
    { key: 7, label: "Jul" },
    { key: 8, label: "Aug" },
    { key: 9, label: "Sep" },
    { key: 10, label: "Oct" },
    { key: 11, label: "Nov" },
    { key: 12, label: "Dec" }
];

function CountryPlatformRegistrationTrendPivot() {

    const [selectedYear, setSelectedYear] = useState("All");
    const [selectedCountry, setSelectedCountry] = useState("All");
    const [selectedPlatform, setSelectedPlatform] = useState("All");
    const [search, setSearch] = useState("");

    const years = useMemo(() => {

        return [...new Set(countryPlatformTrend.map(item => item.year))]
            .sort((a, b) => b - a);

    }, []);

    const countries = useMemo(() => {

        return [...new Set(countryPlatformTrend.map(item => item.country))]
            .sort();

    }, []);

    const platforms = useMemo(() => {

        return [...new Set(countryPlatformTrend.map(item => item.platform))]
            .sort();

    }, []);

    const rowData = useMemo(() => {

        let data = [...countryPlatformTrend];

        if (selectedYear !== "All") {
            data = data.filter(item => item.year === Number(selectedYear));
        }

        if (selectedCountry !== "All") {
            data = data.filter(item => item.country === selectedCountry);
        }

        if (selectedPlatform !== "All") {
            data = data.filter(item => item.platform === selectedPlatform);
        }

        if (search.trim()) {

            const keyword = search.toLowerCase();

            data = data.filter(item =>
                item.country.toLowerCase().includes(keyword) ||
                item.platform.toLowerCase().includes(keyword)
            );

        }

        const grouped = {};

        data.forEach(item => {

            const key = `${item.country}_${item.platform}`;

            if (!grouped[key]) {

                grouped[key] = {

                    country: item.country,

                    platform: item.platform,

                    total: 0

                };

                months.forEach(month => {

                    grouped[key][month.label] = 0;

                });

            }

            const monthName = months.find(
                month => month.key === item.month
            ).label;

            grouped[key][monthName] = item.registrations;

            grouped[key].total += item.registrations;

        });

        return Object.values(grouped);

    }, [
        selectedYear,
        selectedCountry,
        selectedPlatform,
        search
    ]);

    const columnDefs = useMemo(() => {

        const columns = [

            {
                headerName: "Country",
                field: "country",
                pinned: "left",
                width: 180
            },

            {
                headerName: "Platform",
                field: "platform",
                pinned: "left",
                width: 130
            }

        ];

        months.forEach(month => {

            columns.push({

                headerName: month.label,

                field: month.label,

                width: 110,

                sortable: true,

                filter: true,

                valueFormatter: params =>
                    params.value
                        ? params.value.toLocaleString()
                        : "-"

            });

        });

        columns.push({

            headerName: "Total",

            field: "total",

            pinned: "right",

            width: 130,

            sortable: true,

            filter: true,

            valueFormatter: params =>
                params.value.toLocaleString()

        });

        return columns;

    }, []);

    return (

        <div className="card shadow-sm border-0">

            <div className="card-body">

                <h5>
                    Country × Platform × Registration Trend
                </h5>

                <p className="text-muted mb-4">
                    Monthly registration trend by country and platform.
                </p>

                <div className="row g-3 mb-3">

                    <div className="col-md-2">

                        <select
                            className="form-select"
                            value={selectedYear}
                            onChange={(e) =>
                                setSelectedYear(e.target.value)
                            }
                        >

                            <option value="All">
                                All Years
                            </option>

                            {
                                years.map(year => (

                                    <option
                                        key={year}
                                        value={year}
                                    >
                                        {year}
                                    </option>

                                ))
                            }

                        </select>

                    </div>

                    <div className="col-md-3">

                        <select
                            className="form-select"
                            value={selectedCountry}
                            onChange={(e) =>
                                setSelectedCountry(e.target.value)
                            }
                        >

                            <option value="All">
                                All Countries
                            </option>

                            {
                                countries.map(country => (

                                    <option
                                        key={country}
                                        value={country}
                                    >
                                        {country}
                                    </option>

                                ))
                            }

                        </select>

                    </div>

                    <div className="col-md-3">

                        <select
                            className="form-select"
                            value={selectedPlatform}
                            onChange={(e) =>
                                setSelectedPlatform(e.target.value)
                            }
                        >

                            <option value="All">
                                All Platforms
                            </option>

                            {
                                platforms.map(platform => (

                                    <option
                                        key={platform}
                                        value={platform}
                                    >
                                        {platform}
                                    </option>

                                ))
                            }

                        </select>

                    </div>

                    <div className="col-md-4">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />

                    </div>

                </div>

                <div
                    className="ag-theme-alpine"
                    style={{
                        height: 550,
                        width: "100%"
                    }}
                >

                    <AgGridReact

                        rowData={rowData}

                        columnDefs={columnDefs}

                        pagination={true}

                        paginationPageSize={10}

                        defaultColDef={{

                            sortable: true,

                            filter: true,

                            floatingFilter: true,

                            resizable: true

                        }}

                        animateRows={true}

                    />

                </div>

            </div>

        </div>

    );

}

export default CountryPlatformRegistrationTrendPivot;