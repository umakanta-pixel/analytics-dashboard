import { useState } from "react";
import { registrationSummary } from "../../data/mockData";

function RegistrationSummary() {
    const [selected, setSelected] = useState("today");

    const data = registrationSummary[selected];

    return (
        <div className="card shadow border-0 h-100">
            <div className="card-body">

                <div className="d-flex justify-content-between align-items-start">

                    <div>
                        <small className="text-secondary text-uppercase">
                            Registration Summary
                        </small>
                    </div>

                    <select
                        className="form-select form-select-sm"
                        style={{ width: 160 }}
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                    >
                        <option value="today">Today</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="thisWeek">This Week</option>
                        <option value="lastWeek">Last Week</option>
                        <option value="thisMonth">This Month</option>
                        <option value="lastMonth">Last Month</option>
                        <option value="thisQuarter">This Quarter</option>
                        <option value="thisYear">This Year</option>
                    </select>

                </div>

                <div className="mt-4">

                    <div className="text-muted small">
                        {data.label}
                    </div>

                    <h2 className="fw-bold mt-1">
                        {data.value.toLocaleString()}
                    </h2>

                    <div
                        className={`fw-semibold ${
                            data.growth >= 0
                                ? "text-success"
                                : "text-danger"
                        }`}
                    >
                        {data.growth >= 0 ? "▲" : "▼"}{" "}
                        {Math.abs(data.growth)}%
                    </div>

                    <div className="text-muted small mt-1">
                        {data.compare}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default RegistrationSummary;