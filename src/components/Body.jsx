import BlueRevenueCard from "../components/BlueRevenueCard.jsx";
import RevenueCard from "../components/RevenueCard.jsx";
const Body = () => {
  return (
    <main className="p-3 sm:p-8 w-full gap-8 flex flex-col">
      {/*Body Section */}
      <section className="flex flex-col gap-6">
        <div className="flex  justify-between items-center">
          <h5 className="font-medium text-xl">Overview</h5>
          <button className="flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]">
            This Month
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
                fill="#4D4D4D"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-wrap gap-5">
          <BlueRevenueCard />
          <RevenueCard
            title={"Amount Pending"}
            orderCount={"13"}
            amount={"92,312.20"}
          />
          <RevenueCard
            title={"Amount Processed"}
            orderCount={"13"}
            amount={"23,91,221.20"}
          />
        </div>
      </section>

      {/* Table Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h5 className="font-medium text-[#1A181E] text-xl">
            Transactions | This Month
          </h5>
          <div className="flex gap-3">
            <button className="px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full">
              Payouts (22)
            </button>
            <button className="px-4 py-[6px] bg-[#146EB4] text-[#FFFFFF] rounded-full">
              Refunds (6)
            </button>
          </div>
        </div>
        {/* Table Data */}
        <div className="flex flex-col px-3 pt-3 pb-2 gap-3 rounded-[8px] bg-white">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
              </svg>
              <input
                type="text"
                placeholder="Order ID or transactions ID"
                className="bg-transparent outline-none w-full"
              ></input>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]">
                Sort
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.62301 9.93375C1.83129 9.72547 2.16897 9.72547 2.37725 9.93375L4.641 12.1975L6.90474 9.93375C7.11302 9.72547 7.45071 9.72547 7.65899 9.93375C7.86727 10.142 7.86727 10.4797 7.65899 10.688L5.01812 13.3289C4.80984 13.5371 4.47215 13.5371 4.26387 13.3289L1.62301 10.688C1.41473 10.4797 1.41473 10.142 1.62301 9.93375Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.64095 2.51515C4.9355 2.51515 5.17428 2.75393 5.17428 3.04849L5.17428 12.9517C5.17428 13.2463 4.9355 13.4851 4.64095 13.4851C4.3464 13.4851 4.10762 13.2463 4.10762 12.9517L4.10762 3.04849C4.10762 2.75393 4.3464 2.51515 4.64095 2.51515Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3772 6.06646C14.169 6.27474 13.8313 6.27474 13.623 6.06646L11.3592 3.80272L9.0955 6.06646C8.88722 6.27474 8.54953 6.27474 8.34126 6.06646C8.13298 5.85818 8.13298 5.52049 8.34126 5.31221L10.9821 2.67135C11.1904 2.46307 11.5281 2.46307 11.7364 2.67135L14.3772 5.31221C14.5855 5.52049 14.5855 5.85818 14.3772 6.06646Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3593 13.4851C11.0647 13.4851 10.826 13.2463 10.826 12.9517L10.826 3.04847C10.826 2.75392 11.0647 2.51514 11.3593 2.51514C11.6538 2.51514 11.8926 2.75392 11.8926 3.04847L11.8926 12.9517C11.8926 13.2463 11.6538 13.4851 11.3593 13.4851Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </button>
              <button className="flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Table Rows */}
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <colgroup>
                <col className="w-1/5"></col>
                <col className="w-1/5"></col>
                <col className="w-1/5"></col>
                <col className="w-1/5"></col>
                <col className="w-1/5"></col>
              </colgroup>
              <thead className="text-[#4D4D4D]">
                <tr className="bg-[#F2F2F2]">
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l">
                    Order ID
                  </th>
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Status
                  </th>
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Transaction ID
                  </th>
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Refund Date
                  </th>
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-r">
                    Order Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-[#E6E6E6]">
                <tr className="text-sm relative">
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                    #281218
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    TRX123756
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    Today, 8:45 PM
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                    ₹825.00
                  </td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>

                <tr className="text-sm relative">
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                    #281210
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-gray-500 w-[10px] h-[10px] rounded-full"></span>
                    Processing
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    TRX789012
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    Tomorrow, 10:00 AM
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                    ₹950.50
                  </td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>

                <tr className="text-sm relative">
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                    #281211
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    TRX345678
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    Yesterday, 3:30 PM
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                    ₹750.00
                  </td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>

                <tr className="text-sm relative">
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                    #281212
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-gray-500 w-[10px] h-[10px] rounded-full"></span>
                    Processing
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    TRX567890
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    Tomorrow, 9:00 AM
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                    ₹1800.00
                  </td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>

                <tr className="text-sm relative">
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                    #281213
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    TRX098765
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    Yesterday, 2:00 PM
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                    ₹500.00
                  </td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>

                <tr className="text-sm relative">
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                    #281214
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    TRX223456
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    Today, 10:45 AM
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                    ₹725.00
                  </td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>

                <tr className="text-sm relative">
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                    #281215
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-gray-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    TRX423456
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    Yesterday, 8:45 PM
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                    ₹1525.00
                  </td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>

                <tr className="text-sm relative">
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                    #281216
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    TRX321456
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    Tomorrow, 7:45 PM
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                    ₹925.00
                  </td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>

                <tr className="text-sm relative">
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                    #281217
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
                    Successful
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    TRX621456
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                    Today, 8:45 PM
                  </td>
                  <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                    ₹1025.00
                  </td>
                  <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className="text-center text-gray-500">
        Made with ❤️ by
        {/*  */}
        <a
          className="underline font-bold mx-2"
          href="https://twitter.com/Harnoor29581982"
        >
          Harnoor Singh
        </a>
      </div>
    </main>
  );
};

export default Body;
