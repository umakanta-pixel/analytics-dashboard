import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { growthRate } from "../../data/mockData";

function GrowthRate() {

    const [period, setPeriod] = useState("month");

    const data = growthRate[period];

    const isPositive = data.value >= 0;

    return (
        <div className="card shadow border-0 h-100">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center">

                    <div>
                        <h5 className="mb-1">
                            Growth Rate
                        </h5>

                        <small className="text-muted">
                            Registration growth
                        </small>
                    </div>

                    <select
                        className="form-select form-select-sm"
                        style={{ width: 140 }}
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                    >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                        <option value="quarter">Quarter</option>
                        <option value="year">Year</option>
                    </select>

                </div>

                <div className="text-center mt-5">

                    <div
                        className={`display-5 fw-bold ${
                            isPositive
                                ? "text-success"
                                : "text-danger"
                        }`}
                    >
                        {isPositive ? "+" : ""}
                        {data.value}%
                    </div>

                    <div className="mt-3">

                        {isPositive ? (
                            <TrendingUp
                                size={28}
                                className="text-success"
                            />
                        ) : (
                            <TrendingDown
                                size={28}
                                className="text-danger"
                            />
                        )}

                    </div>

                    <div
                        className={`mt-2 fw-semibold ${
                            isPositive
                                ? "text-success"
                                : "text-danger"
                        }`}
                    >
                        {isPositive
                            ? "Growing steadily"
                            : "Declining"}
                    </div>

                    <small className="text-muted d-block mt-2">
                        {data.compare}
                    </small>

                </div>

            </div>

        </div>
    );
}

export default GrowthRate;