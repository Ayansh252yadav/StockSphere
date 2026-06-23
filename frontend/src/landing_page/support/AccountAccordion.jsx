import React from "react";
import {
    CirclePlus,
    User,
    ShieldCheck,
    BarChart3,
    CreditCard,
    FileText,
    Wallet,
} from "lucide-react";

const SupportCategories = () => {
    const categories = [
        {
            icon: <CirclePlus size={22} />,
            title: "Account Opening",
            links: [
                "Resident individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary",
            ],
        },
        {
            icon: <User size={22} />,
            title: "Your StockSphere Account",
            links: [
                "Your Profile",
                "Account Modification",
                "Client Master Report (CMR)",
                "Nomination",
                "Transfer and Conversion of Securities",
            ],
        },
        {
            icon: <BarChart3 size={22} />,
            title: "Kite",
            links: [
                "IPO",
                "Trading FAQs",
                "Margin Trading Facility (MTF)",
                "Charts and Orders",
                "Funds Statement",
            ],
        },
        {
            icon: <Wallet size={22} />,
            title: "Funds",
            links: [
                "Add Money",
                "Withdraw Money",
                "Bank Account",
                "UPI",
                "Payment Gateway",
            ],
        },
        {
            icon: <ShieldCheck size={22} />,
            title: "Console",
            links: [
                "Portfolio",
                "Tax P&L",
                "Reports",
                "Corporate Actions",
                "Pledge",
            ],
        },
        {
            icon: <CreditCard size={22} />,
            title: "Coin",
            links: [
                "Mutual Funds",
                "SIPs",
                "Redemption",
                "Demat Holdings",
                "Coin App",
            ],
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-8 py-20">
            <h2 className="text-4xl font-semibold text-gray-700 mb-14 text-center">
                Browse Support Topics
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="text-blue-600">
                                {category.icon}
                            </div>

                            <h3 className="text-xl font-medium text-gray-700">
                                {category.title}
                            </h3>
                        </div>

                        <ul className="space-y-3">
                            {category.links.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 hover:underline transition"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupportCategories;