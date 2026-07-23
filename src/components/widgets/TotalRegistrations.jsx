import { totalRegistrations } from "../../data/mockData";
import { Users } from "lucide-react";

function TotalRegistrations() {
    return (
        <div className="card shadow border-0 h-100">
            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <small className="text-secondary text-uppercase">
                            Total Registrations
                        </small>

                        <h2 className="fw-bold mt-2 mb-0">
                            {totalRegistrations.toLocaleString()}
                        </h2>

                    </div>

                    <div
                        className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
                        style={{
                            width: 56,
                            height: 56
                        }}
                    >
                        <Users
                            size={28}
                            className="text-primary"
                        />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default TotalRegistrations;