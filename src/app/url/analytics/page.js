"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AnalyticsPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [analytics, setAnalytics] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const url = searchParams.get('url');
        if (!url) {
          setError("No URL provided");
          setLoading(false);
          return;
        }

        const formData = new FormData();
        formData.append("url", url);

        const response = await fetch("/api/analytics", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          setAnalytics(data);
        }
      } catch (err) {
        setError("Failed to fetch analytics. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center text-white">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-8 w-8 bg-blue-500 rounded-full mb-4"></div>
              <div className="h-4 w-32 bg-blue-500/50 rounded mb-2"></div>
              <div className="h-4 w-48 bg-blue-500/50 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        {error && (
          <div className="bg-red-500/10 backdrop-blur-lg border border-red-500/20 text-red-200 px-6 py-4 rounded-xl mb-6">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}

        {analytics && (
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h1 className="text-2xl font-bold text-white mb-2">URL Analytics</h1>
              <p className="text-gray-300">Detailed insights for your shortened URL</p>
            </div>

            {/* URL Display */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Analyzed URL</div>
                  <div className="text-white text-lg font-medium break-all">{searchParams.get('url')}</div>
                </div>
              </div>
            </div>

            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <div className="text-gray-400 text-sm mb-1">Generated On</div>
                <div className="text-white text-xl font-semibold">{analytics.Generated_On}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <div className="text-gray-400 text-sm mb-1">Last Visited On</div>
                <div className="text-white text-xl font-semibold">{analytics.Last_Visited_On}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <div className="text-gray-400 text-sm mb-1">Total Visits</div>
                <div className="text-white text-3xl font-bold">{analytics.Number_Of_Visits}</div>
              </div>
            </div>

            {/* Visit History */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Visit History</h2>
              <div className="bg-black/20 rounded-lg p-4 max-h-96 overflow-y-auto">
                {analytics.History_Of_Visits.length > 0 ? (
                  <div className="space-y-3">
                    {analytics.History_Of_Visits.map((visit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{visit}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-400 py-8">
                    No visit history available
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Home Button */}
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 