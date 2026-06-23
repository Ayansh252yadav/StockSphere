import React, { useState } from "react";
import CurrencyTab from "./CurrencyTab";
import CommodityTab from "./CommodityTab";
import EquityTab from "./EquityTab";

const ChargesTabs = () => {
    const [ activeTab, setActiveTab ] = useState("equity");

    return (
        <div className="max-w-5xl mx-auto mt-16">
            {/* Tabs */}
            <div className="flex gap-10 border-b border-gray-300">
                <button
                    onClick={() => setActiveTab("equity")}
                    className={`pb-4 text-2xl font-thin-[700] transition-all ${activeTab === "equity"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-500"
                        }`}
                >
                    Equity
                </button>

                <button
                    onClick={() => setActiveTab("currency")}
                    className={`pb-4  text-2xl font-thin-[700] transition-all ${activeTab === "currency"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-500"
                        }`}
                >
                    Currency
                </button>

                <button
                    onClick={() => setActiveTab("commodity")}
                    className={`pb-4 text-2xl font-thin-[700] transition-all ${activeTab === "commodity"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-500"
                        }`}
                >
                    Commodity
                </button>
            </div>

            {/* Content */}
            <div className="mt-8">
                {activeTab === "equity" && (
                    <div>
                        <EquityTab />
                    </div>
                )}

                {activeTab === "currency" && (
                    <div>
                        <CurrencyTab />
                    </div>
                )}

                {activeTab === "commodity" && (
                    <div>
                        <CommodityTab />
                    </div>
                )}
            </div>
            <div className="flex items-center justify-center mt-10">
                <p className="max-w-full leading-7 text-gray-600  font-thin-[500] text-xl"> Calculate your costs upfront using our brokerage calculator</p>
            </div>
        </div>
    );
};

export default ChargesTabs;