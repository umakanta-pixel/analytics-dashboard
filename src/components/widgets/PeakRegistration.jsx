import { useState } from "react";
import { Clock3 } from "lucide-react";
import { peakRegistration } from "../../data/mockData";

function PeakRegistration() {

    const [period, setPeriod] = useState("hour");

    const data = peakRegistration[period];

    return (
        <div className="card shadow border-0 h-100">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <h5 className="mb-1">
                            Peak Registration
                        </h5>

                        <small className="text-muted">
                            Best performing period
                        </small>

                    </div>

                    <select
                        className="form-select form-select-sm"
                        style={{ width: 140 }}
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                    >
                        <option value="hour">Hour</option>
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>

                </div>

                <div className="text-center mt-4">

                    <div
                        className="rounded-circle bg-warning bg-opacity-10 d-inline-flex align-items-center justify-content-center"
                        style={{
                            width: 70,
                            height: 70
                        }}
                    >
                        <Clock3
                            size={34}
                            className="text-warning"
                        />
                    </div>

                    <h2 className="fw-bold mt-4">
                        {data.label}
                    </h2>

                    <div className="text-primary fw-semibold">
                        {data.registrations.toLocaleString()} Registrations
                    </div>

                    <small className="text-muted d-block mt-2">
                        {data.description}
                    </small>

                </div>

            </div>

        </div>
    );
}

export default PeakRegistration;