import React from "react";
import StockSphereLogo from "../assets/StockSphereLogo.svg";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-17 py-12">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Logo & Copyright */}
          <div>
            <img
              src={StockSphereLogo}
              alt="StockSphere"
              className="h-12 mb-4"
            />

            <p className="text-sm text-gray-500">
              © 2026 StockSphere Pvt. Ltd.
            </p>

            <p className="text-sm text-gray-500">
              All rights reserved.
            </p>
            <div className="flex gap-5 text-gray-500 text-xl">
              <div className="flex flex-col gap-3 mt-4 text-gray-500 text-xl">

                {/* First Row */}
                <div className="flex gap-5">
                  <a href="#" className="hover:text-blue-500">
                    <FaXTwitter />
                  </a>

                  <a href="#" className="hover:text-pink-500">
                    <FaInstagram />
                  </a>

                  <a href="#" className="hover:text-blue-700">
                    <FaLinkedin />
                  </a>
                </div>

                {/* Second Row */}
                <div className="flex gap-5">
                  <a href="#" className="hover:text-red-600">
                    <FaYoutube />
                  </a>

                  <a href="#" className="hover:text-green-500">
                    <FaWhatsapp />
                  </a>

                  <a href="#" className="hover:text-sky-500">
                    <FaTelegram />
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Account
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li><a href="#">Open Account</a></li>
              <li><a href="#">Demat Account</a></li>
              <li><a href="#">Minor Account</a></li>
              <li><a href="#">NRI Account</a></li>
              <li><a href="#">Fund Transfer</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Reports</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Support
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Support Portal</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Bulletins</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Company
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li><a href="#">About</a></li>
              <li><a href="#">Philosophy</a></li>
              <li><a href="#">Press & Media</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Open Source</a></li>
              <li><a href="#">CSR Initiatives</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li><a href="#">Upcoming IPOs</a></li>
              <li><a href="#">Brokerage Charges</a></li>
              <li><a href="#">Market Holidays</a></li>
              <li><a href="#">Economic Calendar</a></li>
              <li><a href="#">Calculators</a></li>
              <li><a href="#">Markets</a></li>
              <li><a href="#">Sectors</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-gray-200 mt-12 pt-6">
        <p className="text-xs text-gray-500 leading-6">
  Zerodha Broking Ltd.: Member of NSE, BSE, MCX &amp; MSEI – SEBI Registration no.: INZ000031633.
  <br />
  CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019.
  <br />
  Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
  J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
  <br />
  For any complaints pertaining to securities broking please write to complaints@zerodha.com,
  for DP related to dp@zerodha.com.
  <br />
  Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
</p>

<p className="text-xs text-gray-500 leading-6 mt-4">
  Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
  <br />
  Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
  <br />
  Benefits: Effective Communication, Speedy redressal of grievances.
</p>

<p className="text-xs text-gray-500 leading-6 mt-4">
  Smart Online Dispute Resolution | Grievances Redressal Mechanism
</p>

<p className="text-xs text-gray-500 leading-6 mt-4">
  Investments in securities market are subject to market risks; read all the related documents carefully before investing.
</p>

<p className="text-xs text-gray-500 leading-6 mt-4">
  Attention investors:
  <br />
  1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020.
  <br />
  2) Update your e-mail and phone number with your stock broker/depository participant and receive OTP directly from the depository on your e-mail and/or mobile number to create pledge.
  <br />
  3) Check your securities/MF/bonds in the consolidated account statement issued by NSDL/CDSL every month.
</p>

<p className="text-xs text-gray-500 leading-6 mt-4">
  India's largest broker based on net worth as per NSE. NSE broker factsheet.
</p>

<p className="text-xs text-gray-500 leading-6 mt-4">
  &quot;Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants.
  Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day.
  Issued in the interest of investors.
  <br />
  KYC is a one-time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary
  (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.&quot;
  <br /><br />
  Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque.
  Please write the bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment.
  In case of non-allotment, the funds will remain in your bank account.
  <br />
  As a business we don't give stock tips and have not authorized anyone to trade on behalf of others.
  If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
</p>

<p className="text-xs text-gray-500 leading-6 mt-4">
  *Customers availing insurance advisory services offered by Ditto
  (Tactical Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No. CA0738)
  will not have access to the exchange investor grievance redressal forum,
  SEBI SCORES/ODR, or arbitration mechanism for such products.
</p>

<p className="text-xs text-gray-500 leading-6 mt-4">
  Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products.
  These are offered through Blostem Fintech Private Limited.
  <br />
  Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products.
  Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR,
  Exchange Investor Grievance Redressal Forum, or Arbitration mechanism.
  <br />
  Fixed deposits are regulated by the Reserve Bank of India (RBI).
</p>
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-blue-500">
              Terms & Conditions
            </span>

            <span className="cursor-pointer hover:text-blue-500">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-blue-500">
              Investor Charter
            </span>

            <span className="cursor-pointer hover:text-blue-500">
              Disclosure
            </span>

            <span className="cursor-pointer hover:text-blue-500">
              Sitemap
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;