import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { countryPlatformBrand } from "../../data/mockData";

function CountryPlatformBrandPivot() {

    const [selectedCountry, setSelectedCountry] = useState("All");
    const [selectedPlatform, setSelectedPlatform] = useState("All");
    const [search, setSearch] = useState("");

    const brands = useMemo(() => {

        return [...new Set(countryPlatformBrand.map(item => item.brand))]
            .sort();

    }, []);

    const countries = useMemo(() => {

        return [...new Set(countryPlatformBrand.map(item => item.country))]
            .sort();

    }, []);

    const platforms = useMemo(() => {

        return [...new Set(countryPlatformBrand.map(item => item.platform))]
            .sort();

    }, []);

    const rowData = useMemo(() => {

        let data = [...countryPlatformBrand];

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
                item.platform.toLowerCase().includes(keyword) ||
                item.brand.toLowerCase().includes(keyword)
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

                brands.forEach(brand => {
                    grouped[key][brand] = 0;
                });

            }

            grouped[key][item.brand] = item.registrations;

            grouped[key].total += item.registrations;

        });

        return Object.values(grouped);

    }, [
        selectedCountry,
        selectedPlatform,
        search,
        brands
    ]);

        const columnDefs = useMemo(() => {

        const cols = [

            {
                headerName: "Country",
                field: "country",
                pinned: "left",
                filter: true,
                sortable: true,
                width: 170
            },

            {
                headerName: "Platform",
                field: "platform",
                pinned: "left",
                filter: true,
                sortable: true,
                width: 130
            }

        ];

        brands.forEach(brand => {

            cols.push({

                headerName: brand,

                field: brand,

                width: 120,

                sortable: true,

                filter: true,

                valueFormatter: params => {

                    if (!params.value) return "-";

                    return params.value.toLocaleString();

                }

            });

        });

        cols.push({

            headerName: "Total",

            field: "total",

            width: 130,

            pinned: "right",

            sortable: true,

            filter: true,

            valueFormatter: params =>
                params.value.toLocaleString()

        });

        return cols;

    }, [brands]);

        return (

        <div className="card shadow-sm border-0">

            <div className="card-body">

                <h5>
                    Country × Platform × Device Brand
                </h5>

                <p className="text-muted mb-4">
                    Device brand registrations by country and platform
                </p>

                <div className="row mb-3">

                    <div className="col-md-3">

                        <select
                            className="form-select"
                            value={selectedCountry}
                            onChange={e =>
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
                            onChange={e =>
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

                            onChange={e =>
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

                            resizable: true,

                            sortable: true,

                            filter: true,

                            floatingFilter: true

                        }}

                    />

                </div>

            </div>

        </div>

    );

}

export default CountryPlatformBrandPivot;