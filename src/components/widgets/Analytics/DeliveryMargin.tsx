import * as React from "react";
import { ChevronDown } from "lucide-react"; // optional icon for dropdown
import DateRangePicker from "../../ui/DateRangePicker";
function DateFilter() {
  return <DateRangePicker onChange={(range) => console.log(range)} />;
}

const data = [
  { margin: "1% - 100%", yourAnalysis: "1% - 100%", platform: "$329.40" },
  { margin: "1% - 100%", yourAnalysis: "1% - 100%", platform: "$329.40" },
  { margin: "1% - 100%", yourAnalysis: "1% - 100%", platform: "$329.40" },
  { margin: "1% - 100%", yourAnalysis: "1% - 100%", platform: "$329.40" },
  { margin: "1% - 100%", yourAnalysis: "1% - 100%", platform: "$329.40" },
  { margin: "1% - 100%", yourAnalysis: "1% - 100%", platform: "$329.40" },
];

function DeliveryMargin() {
  return (
    <div className="w-full md:w-[504.6376953125px] bg-white border border-[#E0E0E0] shadow-sm rounded-[24px] p-6 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Delivery by Margin</h2>
        <DateFilter />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 px-3 font-medium">Margin %</th>
              <th className="py-2 px-3 font-medium">Your Analysis</th>
              <th className="py-2 px-3 font-medium">Platform Analysis</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="py-3 px-3">{item.margin}</td>
                <td className="py-3 px-3">{item.yourAnalysis}</td>
                <td className="py-3 px-3 font-medium text-gray-900">{item.platform}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeliveryMargin;
