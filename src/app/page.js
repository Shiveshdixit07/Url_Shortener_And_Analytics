"use client";

import { useState } from "react";

export default function Home() {
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const facts = [
    {
      number: new Date().getFullYear() - 1994,
      label: "Years Since First URL Shortener",
      description: "URL shortening has been around since 1994, evolving constantly"
    },
    {
      number: "71%",
      label: "Higher Click-Through Rate",
      description: "Branded short links get 71% more clicks than generic short links"
    },
    {
      number: "850M+",
      label: "URLs Created Daily",
      description: "New URLs are created every day across the internet"
    },
    {
      number: "2048",
      label: "Characters Reduced",
      description: "Maximum URL length we can shorten, making sharing easier"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-8 relative overflow-hidden font-sans">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="chain-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M10,25 L20,25 M30,25 L40,25" stroke="currentColor" strokeWidth="4"/>
              <circle cx="25" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#chain-pattern)"/>
          </svg>
        </div>
        
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 L20,60 L40,70 L60,30 L80,50 L100,20" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M0,90 L30,70 L50,80 L70,40 L90,60 L100,30" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="node-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor"/>
              <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#node-pattern)"/>
          </svg>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="relative w-full h-full">
            <div className="absolute top-1/4 left-1/4 animate-pulse">
              <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
            </div>
            <div className="absolute top-3/4 right-1/4 animate-pulse delay-100">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 right-1/3 animate-pulse delay-200">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto">
        <div className="relative">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center pt-8 font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight leading-tight">
            URL Shortener & Analytics
          </h1>
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
          <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Transform your long URLs into memorable, trackable links. Get powerful analytics and insights into your link performance.
          </p>
        </div>

        {!selectedOption && (
          <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6 tracking-tight">
              What would you like to do?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <button
                onClick={() => setSelectedOption('shorten')}
                className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-12 w-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-indigo-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Shorten URL</h3>
                <p className="text-gray-400 text-center">Create a short, memorable link for your long URL</p>
              </button>

              <button
                onClick={() => setSelectedOption('analytics')}
                className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-12 w-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-indigo-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">View Analytics</h3>
                <p className="text-gray-400 text-center">Track clicks and performance of your shortened URLs</p>
              </button>
            </div>
          </div>
        )}

        {/* URL Shortener Section */}
        {selectedOption === 'shorten' && (
          <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Shorten Your Long URL
              </h2>
              <button
                onClick={() => setSelectedOption(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl text-base md:text-lg font-light leading-relaxed">
              Enter your long URL below and get a shortened version instantly. Perfect for social media, emails, and messaging.
            </p>
            
            {error && (
              <div className="mb-6 bg-red-500/10 backdrop-blur-lg border border-red-500/20 text-red-200 px-6 py-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              </div>
            )}
            
            <form
              method="GET"
              action="/url/shorten"
              className="space-y-4 md:space-y-0 md:flex md:items-center md:gap-4 max-w-3xl mx-auto"
            >
              <input
                placeholder="Enter your long URL here..."
                className="w-full h-12 px-4 rounded-lg text-gray-800 bg-white/90 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 text-base"
                name="url"
                type="url"
                required
              />
              <button 
                type="submit"
                className="w-full md:w-auto px-6 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-base flex items-center justify-center gap-2"
              >
                Generate
              </button>
            </form>
          </div>
        )}

        {/* Analytics Section */}
        {selectedOption === 'analytics' && (
          <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Track Your Links
              </h2>
              <button
                onClick={() => setSelectedOption(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl text-base md:text-lg font-light leading-relaxed">
              Get detailed insights about your shortened URLs. 
            </p>
            
            <form
              method="GET"
              action="/url/analytics"
              className="space-y-4 md:space-y-0 md:flex md:items-center md:gap-4 max-w-3xl mx-auto"
            >
              <input
                placeholder="Enter URL to view analytics..."
                className="w-full h-12 px-4 rounded-lg text-gray-800 bg-white/90 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                name="url"
                type="url"
                required
              />
              <button className="w-full md:w-auto px-8 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Analytics
              </button>
            </form>
          </div>
        )}

        {/* Features Grid */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 tracking-tight">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition duration-300">
              <div className="h-12 w-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media Friendly</h3>
              <p className="text-gray-400">Perfect for Twitter's character limit and other social platforms. Share your content efficiently.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition duration-300">
              <div className="h-12 w-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
              <p className="text-gray-400">Provides analytics features to track URL visit counts, last visit date, and complete URL visit history.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition duration-300">
              <div className="h-12 w-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
              <p className="text-gray-400">Intuitive interface with easy-to-use features, making URL shortening and analytics accessible to everyone.</p>
            </div>
          </div>
        </div>

        {/* Facts Section */}
        <div className="mt-16 relative z-10">
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 tracking-tight">
            Interesting Facts About URL Shortening
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-3">{fact.number}</div>
                <div className="text-lg font-semibold text-gray-200 mb-2">{fact.label}</div>
                <div className="text-sm md:text-base text-gray-400 font-light leading-relaxed">{fact.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-400 text-sm">
        <p className="flex items-center justify-center gap-2">
          Made with <span className="text-red-500">❤️</span>
        </p>
      </div>
    </main>
  );
}
