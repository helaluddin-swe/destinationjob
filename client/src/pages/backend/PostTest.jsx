import React, { useState } from 'react';
import axios from 'axios';

const PostTest = () => {
  // 1. Create an object state to hold all form fields
  const [formData, setFormData] = useState({
    question: '',
    options: '',
    answer: '',
    prevExams: '',
    explanation: '',
    topic:''
    
  });

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh

    // Convert the comma-separated options string into an array
    const formattedData = {
      ...formData,
      options: formData.options.split(',').map(opt => opt.trim())
    };

    axios.post('/api/jobs', formattedData)
      .then((res) => {
        alert("Data sent successfully!");
        console.log(res.data);
      })
      .catch(err => console.error("Error sending data", err));
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-4 sm:p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Add New Question</h2>
        <p className="text-gray-500 text-sm">Fill in the details below to update the question bank.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Question Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Question Text</label>
          <input
            type="text"
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="e.g. What is the capital of France?"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* Options Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Options (Comma Separated)</label>
          <input
            type="text"
            name="options"
            value={formData.options}
            onChange={handleChange}
            placeholder="Paris, London, Berlin, Madrid"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
          <p className="text-xs text-gray-400 mt-1 italic">Separate each option with a comma.</p>
        </div>

        {/* Grid for Answer and Exam Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Correct Answer</label>
            <input
              type="text"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Previous Exams</label>
            <input
              type="text"
              name="prevExams"
              value={formData.prevExams}
              onChange={handleChange}
              placeholder="e.g. BCS, Medical 2023"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Explanation Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Explanation</label>
          <textarea
            name="explanation"
            rows="3"
            value={formData.explanation}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          ></textarea>
        </div>
      
         <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Topics name</label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g. International affair,Bangla"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

      

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform active:scale-[0.98]"
        >
          Upload to Database
        </button>
      </form>
    </div>
  );
};

export default PostTest;