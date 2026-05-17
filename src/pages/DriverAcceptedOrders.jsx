import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BsTruck,
  BsCheckCircleFill,
  BsXCircleFill,
  BsArrowLeftCircle,
} from "react-icons/bs";

function DriverAcceptedOrders() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name === "failed") {
      alert("The order has Failed Plaese Contact the Customer!");
    } else {
      alert("The Order Has been Delivered Successfully! Good Job.");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 py-10 px-4 sm:px-6">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mt-10 font-extrabold bg-amber-500 text-white py-4 shadow-lg flex justify-center gap-3 items-center">
          <BsTruck className="text-2xl sm:text-3xl md:text-4xl" />
          Delivery Status Dashboard
        </h1>

        {/* Table Container */}
        <div className="overflow-x-auto mt-8 md:mt-16 px-2 sm:px-6">
          <table className="w-full text-center border border-gray-300 shadow-xl bg-white rounded-xl overflow-hidden">
            <thead className="bg-gray-200 text-sm sm:text-base md:text-lg font-semibold">
              <tr>
                <th className="p-3 border">Order No</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border">Destination</th>
                <th className="p-3 border">Distance</th>
                <th className="p-3 border">Customer Number</th>
                <th className="p-3 border">Package Weight</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  no: 1,
                  loc: "Giza",
                  des: "Helwan",
                  dist: "25 KM",
                  phone: "01200063681",
                  weight: "900 gm",
                },
                {
                  no: 2,
                  loc: "Qena",
                  des: "Sharm EL-Sheikh",
                  dist: "725 KM",
                  phone: "0111003248",
                  weight: "10 KG",
                },
                {
                  no: 3,
                  loc: "Alexandria",
                  des: "Cairo",
                  dist: "430 KM",
                  phone: "0114928889",
                  weight: "2 KG",
                },
              ].map((row) => (
                <tr key={row.no} className="border text-sm sm:text-base md:text-lg">
                  <td className="p-4 border">{row.no}</td>
                  <td className="p-4 border">{row.loc}</td>
                  <td className="p-4 border">{row.des}</td>
                  <td className="p-4 border">{row.dist}</td>
                  <td className="p-4 border">{row.phone}</td>
                  <td className="p-4 border">{row.weight}</td>

                  <td className="p-4 border">
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                      {/* Failed Button */}
                      <button
                        className="flex items-center gap-2 p-2 bg-red-600 text-white rounded-xl hover:bg-red-400 hover:scale-105 transition cursor-pointer"
                        name="failed"
                        onClick={handleSubmit}
                      >
                        <BsXCircleFill className="text-xl" />
                        Failed
                      </button>

                      {/* Delivered Button */}
                      <button
                        className="flex items-center gap-2 p-2 bg-green-600 text-white rounded-xl hover:bg-green-400 hover:scale-105 transition cursor-pointer"
                        name="delivered"
                        onClick={handleSubmit}
                      >
                        <BsCheckCircleFill className="text-xl" />
                        Delivered
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/driver"
            className="flex items-center gap-2 py-3 px-6 bg-black text-white text-base sm:text-lg rounded-2xl shadow-lg hover:bg-gray-700 hover:scale-105 transition"
          >
            <BsArrowLeftCircle className="text-xl sm:text-2xl" />
            Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default DriverAcceptedOrders;



