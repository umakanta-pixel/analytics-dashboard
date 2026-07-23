import AgeDistribution from "../components/widgets/AgeDistribution";
import AgeGender from "../components/widgets/AgeGender";
import CountryAgeGroup from "../components/widgets/CountryAgeGroup";
import CountryAgePlatform from "../components/widgets/CountryAgePlatform";
import CountryGender from "../components/widgets/CountryGender";
import CountryPlatform from "../components/widgets/CountryPlatform";
import CountryPlatformBrandPivot from "../components/widgets/CountryPlatformBrandPivot";
import CountryPlatformGender from "../components/widgets/CountryPlatformGender";
import CountryPlatformRegistrationTrendPivot from "../components/widgets/CountryPlatformRegistrationTrendPivot";
import DeviceTypeDistribution from "../components/widgets/DeviceTypeDistribution";
import GenderDistribution from "../components/widgets/GenderDistribution";
import GeographicHeatmap from "../components/widgets/GeographicHeatmap";
import GrowthRate from "../components/widgets/GrowthRate";
import PeakRegistration from "../components/widgets/PeakRegistration";
import PlatformDistribution from "../components/widgets/PlatformDistribution";
import RegistrationSummary from "../components/widgets/RegistrationSummary";
import RegistrationTrend from "../components/widgets/RegistrationTrend";
import TopCities from "../components/widgets/TopCities";
import TopCountries from "../components/widgets/TopCountries";
import TopDeviceBrands from "../components/widgets/TopDeviceBrands";
import TopRegions from "../components/widgets/TopRegions";
import TotalRegistrations from "../components/widgets/TotalRegistrations";

function Dashboard() {
    return (
        <div className="container py-4">

            <div className="row g-3">

                <div className="col-lg-3">
                    <TotalRegistrations />
                </div>

                <div className="col-lg-3">
                    <RegistrationSummary />
                </div>

                <div className="col-lg-3">
                    <GrowthRate />
                </div>

                <div className="col-lg-3">
                    <PeakRegistration />
                </div>

                <div className="col-lg-12">
                    <RegistrationTrend />
                </div>

                <div className="col-lg-6">
                    <TopCountries />
                </div>

                <div className="col-lg-6">
                    <TopRegions />
                </div>

                <div className="col-lg-6">
                    <TopCities />
                </div>

                <div className="col-lg-6">
                    <GeographicHeatmap />
                </div>

                <div className="col-lg-6">
                    <AgeDistribution />
                </div>

                <div className="col-lg-6">
                    <GenderDistribution />
                </div>

                <div className="col-lg-12">
                    <AgeGender />
                </div>

                <div className="col-lg-6">
                    <PlatformDistribution />
                </div>

                <div className="col-lg-6">
                    <DeviceTypeDistribution />
                </div>

                <div className="col-lg-12">
                    <TopDeviceBrands />
                </div>

                <div className="col-lg-12">
                    <CountryPlatform />
                </div>

                <div className="col-lg-12">
                    <CountryGender />
                </div>

                <div className="col-lg-12">
                    <CountryAgeGroup />
                </div>

                <div className="col-lg-12">
                    <CountryPlatformGender />
                </div>

                <div className="col-lg-12">
                    <CountryAgePlatform />
                </div>

                <div className="col-lg-12">
                    <CountryPlatformBrandPivot />
                </div>

                <div className="col-lg-12">
                    <CountryPlatformRegistrationTrendPivot />
                </div>

            </div>

        </div>
    );
}

export default Dashboard;