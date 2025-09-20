import { useContext } from "react";
import { Con } from "@/js/context";
import { Button } from "./button";

export default function Invoice() {
  const { invoiceItems, setInvoiceItems, discount, setDiscount } =
    useContext(Con);

  // ✅ Calculate totals safely
  const subtotal = invoiceItems.reduce(
    (acc, item) => acc + (parseFloat(item.cost) || 0),
    0
  );
  const discountAmount = (subtotal * (parseFloat(discount) || 0)) / 100;
  const finalPrice = subtotal - discountAmount;

  // ✅ Apply discount
  const handleApplyDiscount = (e) => {
    e.preventDefault();
    const value = parseFloat(e.target.discount.value) || 0;
    setDiscount(value);
  };

  // ✅ Start a new invoice
  const handleNewInvoice = () => {
    setInvoiceItems([]);
    setDiscount(0);
  };

  // ✅ Export to PDF placeholder
  const handleExportPDF = () => {
    alert("Export to PDF functionality coming soon 🚀");
  };

  return (
    <div className="w-full min-h-screen p-8 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Invoice
          </h1>
          <div className="flex gap-3">
            <Button
              onClick={handleNewInvoice}
              className="bg-gray-500 text-white hover:bg-gray-600 hover:scale-105 transition-transform duration-300 px-5 py-2 rounded-lg shadow"
            >
              New Invoice
            </Button>
            <Button
              onClick={handleExportPDF}
              className="bg-red-500 text-white hover:bg-red-600 hover:scale-105 transition-transform duration-300 px-5 py-2 rounded-lg shadow"
            >
              Export PDF
            </Button>
          </div>
        </div>

        {/* Items Table */}
        {invoiceItems.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center italic py-6">
            No items added yet
          </p>
        ) : (
          <div className="overflow-x-auto mb-6 rounded-lg border dark:border-gray-700">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
                  <th className="p-4 text-left font-semibold">Title</th>
                  <th className="p-4 text-right font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {invoiceItems.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    <td className="p-4">{item.title}</td>
                    <td className="p-4 text-right font-medium text-green-600 dark:text-green-400">
                      ${(parseFloat(item.cost) || 0).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Discount Form */}
        <form
          onSubmit={handleApplyDiscount}
          className="flex flex-wrap gap-3 items-center bg-gray-100 dark:bg-gray-700 p-4 mb-8 rounded-lg"
        >
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Apply Discount
          </span>
          <input
            type="number"
            step="0.01"
            name="discount"
            defaultValue={discount}
            className="border rounded px-3 py-2 w-28 dark:bg-gray-600 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <span className="text-gray-700 dark:text-gray-300">%</span>
          <Button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-transform duration-300 px-5 py-2 rounded-lg shadow"
          >
            Apply
          </Button>
        </form>

        {/* Totals */}
        <div className="space-y-3 text-gray-900 dark:text-gray-200 text-lg border-t pt-6">
          <p>
            Subtotal:{" "}
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </p>
          <p>
            Discount ({discount}%):{" "}
            <span className="font-semibold text-red-500">
              -${discountAmount.toFixed(2)}
            </span>
          </p>
          <p className="font-bold text-xl text-green-600 dark:text-green-400">
            Final Price: ${finalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

