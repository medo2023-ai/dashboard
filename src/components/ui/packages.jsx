import { Dialogindustry } from "./dialogIndustry";
import { Dialogpackage } from "./dialogPackage";
import { DialogFeature } from "./dialogFeature";
import { Con } from "@/js/context";
import { useContext, useState, useEffect } from "react";
import { Button } from "./button";
import { Card } from "./card";
import { PlusCircle, Trash2 } from "lucide-react";
import { DialogReset } from "./dialogReset";
import toast from "react-hot-toast";

export default function Packages() {
  const { industry, packages, features, setFeature, setInvoiceItems } =
    useContext(Con);

  const [filter, setFilter] = useState([]);
  const [clickedIndustry, setClickedIndustry] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [featureFilter, setFeatureFilter] = useState([]);

  // ✅ Pick defaults
  useEffect(() => {
    if (industry?.length > 0 && packages?.length > 0) {
      setClickedIndustry(industry[0]);
      setSelectedPackage(packages[0]);
    }
  }, [industry, packages]);

  // ✅ Update package + feature filter
  useEffect(() => {
    if (clickedIndustry && selectedPackage) {
      const filtered = packages.filter(
        (p) => p.industry.toLowerCase() === clickedIndustry.name.toLowerCase()
      );
      setFilter(filtered);

      const filteredFeatures = features.filter(
        (f) =>
          f.industry.toLowerCase() === clickedIndustry.name.toLowerCase() &&
          f.package.toLowerCase() === selectedPackage.name.toLowerCase()
      );
      setFeatureFilter(filteredFeatures);
    } else {
      setFilter([]);
      setFeatureFilter([]);
    }
  }, [clickedIndustry, selectedPackage, packages, features]);

  // ✅ Delete feature
  const handleDelete = (id) => {
    const updatedFeatures = features.filter((f) => f.id !== id);
    setFeature(updatedFeatures);
    toast.success("Feature deleted successfully!");
  };

  return (
    <div className="p-4 md:p-6 shadow-md bg-white dark:bg-gray-900 rounded-lg transition-colors">
      {/* Title */}
      <h2 className="capitalize font-semibold text-lg md:text-xl text-left mb-4 text-gray-800 dark:text-gray-100">
        Customize Pricing Packages
      </h2>
      <p className="text-left font-medium mb-6 text-gray-600 dark:text-gray-300">
        Select an industry and package type to view available features:
      </p>

      {/* Dialogs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Dialogindustry />
        <Dialogpackage />
        <DialogFeature />
      </div>

      {/* Industries */}
      <div className="p-4">
        <h2 className="capitalize font-semibold text-left mb-3 text-gray-800 dark:text-gray-100">
          Industries:
        </h2>
        <div className="flex flex-wrap gap-3">
          {!industry || industry.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              Loading industries...
            </p>
          ) : (
            industry.map((e) => (
              <Button
                key={e.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-md shadow-sm transition hover:scale-105 ${
                  clickedIndustry?.id === e.id
                    ? "bg-green-600 text-white dark:bg-green-500"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setClickedIndustry(e)}
              >
                <e.icon className="w-5 h-5" />
                <span>{e.name}</span>
              </Button>
            ))
          )}
        </div>
      </div>

      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      {/* Packages */}
      <div className="p-4">
        <h2 className="capitalize font-semibold text-left mb-3 text-gray-800 dark:text-gray-100">
          Packages:
        </h2>
        <div className="flex flex-wrap gap-3">
          {!filter || filter.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No packages available...
            </p>
          ) : (
            filter.map((e) => (
              <Button
                key={e.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-md shadow-sm transition hover:scale-105 ${
                  selectedPackage?.id === e.id
                    ? "bg-green-600 text-white dark:bg-green-500"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setSelectedPackage(e)}
              >
                <e.icon className="w-5 h-5" />
                <span>{e.name}</span>
              </Button>
            ))
          )}
        </div>
      </div>

      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      {/* Features */}
      <div className="p-4">
        <h2 className="capitalize font-semibold text-left mb-3 text-gray-800 dark:text-gray-100">
          Features:
        </h2>
        {featureFilter.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No features available...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureFilter.map((f) => (
              <Card
                key={f.id}
                className="p-6 shadow-lg rounded-xl transition hover:scale-105 bg-white dark:bg-gray-800"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-xl capitalize text-gray-800 dark:text-gray-100">
                    {f.title}
                  </h3>
                  <span className="text-blue-500 font-semibold">
                    ${f.cost}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 dark:text-gray-300">
                  {f.desc}
                </p>
                <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
                  Estimated time: {f.time} weeks
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                    onClick={() => setInvoiceItems((prev) => [...prev, f])}
                  >
                    <PlusCircle size={16} /> Add to Invoice
                  </Button>
                  <DialogReset info={f} />
                  <Button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(f.id)}
                  >
                    <Trash2 size={16} /> Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
