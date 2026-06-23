import React from "react";

const ChargesExplained = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-x-24 gap-y-16 px-20">
        {/* LEFT COLUMN */}
        <div className="space-y-10 text-xm text-gray-600 leading-7">
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              STT/CTT
            </h3>
            <p className="">
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Transaction/Turnover Charges
            </h3>

            <p>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>

            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                BSE revised transaction charges in XC, XD, XT, Z and ZP groups
                to ₹10,000 per crore.
              </li>
              <li>
                BSE revised transaction charges in SS and ST groups to ₹1,00,000
                per crore of gross turnover.
              </li>
              <li>
                BSE revised transaction charges for group A, B and other
                non-exclusive scrips to ₹375 per crore of turnover.
              </li>
              <li>
                BSE revised transaction charges in M, MT, TS and MS groups to
                ₹275 per crore of gross turnover.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Call & Trade
            </h3>
            <p>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha, including auto square-off orders.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Stamp Charges
            </h3>
            <p>
              Stamp charges by the Government of India as per the Indian Stamp
              Act, 1899 for transacting in instruments on stock exchanges and
              depositories.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              NRI Brokerage Charges
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Non-PIS account: 0.5% or ₹50 per executed order for equity and
                F&O (whichever is lower).
              </li>
              <li>
                PIS account: 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Account with Debit Balance
            </h3>
            <p>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              IPFT Charges by NSE
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>Equity & Futures: ₹0.01 per crore + GST.</li>
              <li>Options: ₹0.01 per crore + GST on premium value.</li>
              <li>
                Currency: ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Margin Trading Facility (MTF)
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              </li>
              <li>
                MTF Brokerage: 0.3% or ₹20/executed order, whichever is lower.
              </li>
              <li>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-10 text-sm text-gray-600 leading-7">
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">GST</h3>
            <p>
              Tax levied by the government on the services rendered. 18% of
              (brokerage + SEBI charges + transaction charges).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              SEBI Charges
            </h3>
            <p>
              Charged at ₹10 per crore + GST by the Securities and Exchange
              Board of India for regulating the markets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              DP (Depository Participant) Charges
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST)
                charged when stocks are sold, irrespective of quantity.
              </li>
              <li>
                Female demat account holders (as first holder) receive a
                discount of ₹0.25 per transaction on the CDSL fee.
              </li>
              <li>
                Debit transactions of mutual funds & bonds receive an additional
                discount of ₹0.25 on the CDSL fee.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Pledging Charges
            </h3>
            <p>₹30 + GST per pledge request per ISIN.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              AMC (Account Maintenance Charges)
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Free for the first year on all new resident individual accounts.
              </li>
              <li>
                BSDA demat account: Zero charges if holding value is less than
                ₹4,00,000.
              </li>
              <li>
                Non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
                (every 90 days).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Corporate Action Order Charges
            </h3>
            <p>
              ₹20 + GST charged for OFS, buyback, takeover and delisting orders
              placed through Console.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Off-market Transfer Charges
            </h3>
            <p>₹25 per transaction.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Physical CMR Request
            </h3>
            <p>
              First CMR request is free. Subsequent requests are charged ₹20 +
              ₹100 courier charges + 18% GST.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Payment Gateway Charges
            </h3>
            <p>₹9 + GST (not applicable for transfers made via UPI).</p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Delayed Payment Charges
            </h3>
            <p>
              Interest is levied at 18% per year or 0.05% per day on the debit
              balance in your trading account.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              Trading Using 3-in-1 Account with Block Functionality
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Delivery & MTF Brokerage: 0.5% per executed order.
              </li>
              <li>
                Intraday Brokerage: 0.05% per executed order.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargesExplained;