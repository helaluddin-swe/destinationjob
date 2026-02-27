import React, { useState, useEffect } from 'react';
import axios from "axios";

const GetTest = () => {
  const [data, setData] = useState([]); // Initialize as empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/jobs')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError("Failed to load questions.");
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (data.length === 0) return <div> no questions found...</div>;

  return (
 <div className="min-h-screen bg-gray-100 py-4 px-2 sm:px-6 lg:px-8">
  <div className="max-w-3xl mx-auto">
    {/* Header */}
    <header className="mb-8 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
        Exam Preparation
      </h2>
      <p className="text-gray-500 mt-2 text-sm sm:text-base">Review your questions and explanations</p>
    </header>

    <div className="space-y-6">
      {data.map((item,index) => (
        <div 
          key={item._id} 
          className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200"
        >
          {/* Top colored bar for visual flair */}
          <div className="h-2 bg-blue-500 w-full"></div>

          <div className="p-4 sm:p-6">
            {/* Header: Question + Badge */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-5">
              <h1 className="text-lg sm:text-xl font-bold text-gray-800 flex gap-2">
                <span className="text-blue-500 shrink-0">{index+1}</span>
                {item.question}
              </h1>
              {item.prevExams && (
                <span className="whitespace-nowrap inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                  {item.prevExams}
                </span>
              )}
            </div>

            {/* Options: 1 column on mobile, 2 columns on tablets/PC */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {item.options.map((option, index) => (
                <li 
                  key={index} 
                  className="flex items-center p-3 sm:p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer group"
                >
                  <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 font-bold text-sm group-hover:bg-blue-500 group-hover:text-white transition-colors mr-3">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {option}
                  </span>
                </li>
              ))}
            </ul>

            {/* Answer Box: Responsive Padding */}
            <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Correct Answer</span>
              </div>
              <p className="text-gray-900 font-bold text-base sm:text-lg mb-2">
                {item.answer}
              </p>
              {item.topic && (
                <span className="whitespace-nowrap inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-red-50 text-cyan-700 border border-red-100">
                  {item.topic}
                </span>
              )}
            </div>
              <div className="pt-3 border-t border-slate-200">
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-700">Explanation:</span> {item.explanation}
                </p>
              </div>
            </div>
          </div>
        
      ))}
    </div>
  </div>
</div>
  )
}

export default GetTest;