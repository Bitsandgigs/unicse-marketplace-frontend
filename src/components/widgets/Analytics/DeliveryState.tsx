import * as React from "react";
import DateRangePicker from "../../ui/DateRangePicker";

function DateFilter() {
  return <DateRangePicker onChange={(range) => console.log(range)} />;
}

const data = [
  { status: "Paid", rto: "#1532", orderShare: "Dec 30, 10:06 AM", delivered: "$329.40" },
  { status: "Paid", rto: "#1532", orderShare: "Dec 30, 10:06 AM", delivered: "$329.40" },
  { status: "Paid", rto: "#1532", orderShare: "Dec 30, 10:06 AM", delivered: "$329.40" },
  { status: "Paid", rto: "#1532", orderShare: "Dec 30, 10:06 AM", delivered: "$329.40" },
  { status: "Paid", rto: "#1532", orderShare: "Dec 30, 10:06 AM", delivered: "$329.40" },
  { status: "Paid", rto: "#1532", orderShare: "Dec 30, 10:06 AM", delivered: "$329.40" },
];

function DeliveryState() {
  return (
    <div className="w-full md:w-[500px] bg-white border border-[#E0E0E0] shadow-sm rounded-[24px] p-6 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Delivery by State</h2>
        <DateFilter />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 px-3 font-medium">Status</th>
              <th className="py-2 px-3 font-medium">RTO %</th>
              <th className="py-2 px-3 font-medium">Order Share %</th>
              <th className="py-2 px-3 font-medium">Delivered %</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="py-3 px-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-3">{item.rto}</td>
                <td className="py-3 px-3">{item.orderShare}</td>
                <td className="py-3 px-3 font-medium text-gray-900">{item.delivered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeliveryState;
