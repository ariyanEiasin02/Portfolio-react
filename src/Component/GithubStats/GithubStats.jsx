import { useState } from "react";

export const GithubStats = () => {
  const [statsLoaded, setStatsLoaded] = useState(true);
  const [streakLoaded, setStreakLoaded] = useState(true);
  const [calendarLoaded, setCalendarLoaded] = useState(true);
return (
    <section className="py-8">
        <div className="max-w-container mx-auto">
        <div className="py-4">
        <div className="text-center mb-7">
            <span className="font-semibold font-barlow text-xl text-[#FC7868]">My GitHub</span>
            <h3 className="font-semibold mt-2 font-barlow md:text-4xl text-2xl text-[#000000]">GitHub Activity Overview</h3>
        </div>
            <div
                style={{
                    display: streakLoaded || statsLoaded ? "block" : "none",
                }}
                className="space-y-8"
            >
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="py-5 px-3 rounded-xl shadow-md hover:shadow-lg bg-[#f4f4f9] transition-all h-full">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="text-primary">📊</span> Overall Statistics
                        </h3>
                        <div className="flex items-center justify-center h-[calc(100%-40px)]">
                            <img
                                className="w-full rounded-lg h-full"
                                src={`https://github-readme-stats.vercel.app/api?username=ariyanEiasin02&show_icons=true&title_color=${encodeURIComponent(
                                    "var(--primary-color)"
                                )}&icon_color=${encodeURIComponent(
                                    "var(--primary-color)"
                                )}&text_color=gray&bg_color=00000000&border_color=${encodeURIComponent(
                                    "var(--primary-color)"
                                )}`}
                                alt="GitHub Stats"
                                onError={() => setStatsLoaded(false)}
                            />
                        </div>
                    </div>
                    <div className="py-5 px-3 rounded-xl shadow-md hover:shadow-lg bg-[#f4f4f9] transition-all h-full">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <span className="text-primary">🔥</span> Contribution Streak
                        </h3>
                        <div className="flex items-center justify-center h-[calc(100%-40px)]">
                            <img
                                className="w-full h-full rounded-lg"
                                src={`https://github-readme-streak-stats.herokuapp.com/?user=ariyanEiasin02&theme=transparent&ring=${encodeURIComponent(
                                    "var(--primary-color)"
                                )}&fire=${encodeURIComponent(
                                    "var(--primary-color)"
                                )}&currStreakLabel=${encodeURIComponent(
                                    "var(--primary-color)"
                                )}&sideLabels=${encodeURIComponent(
                                    "var(--primary-color)"
                                )}&dates=${encodeURIComponent(
                                    "var(--primary-color)"
                                )}&currStreakNum=${encodeURIComponent(
                                    "var(--primary-color)"
                                )}&sideNums=${encodeURIComponent(
                                    "var(--primary-color)"
                                )}&border=${encodeURIComponent("var(--primary-color)")}`}
                                alt="GitHub Streak"
                                onError={() => setStreakLoaded(false)}
                            />
                        </div>
                    </div>
                </div>

                {/* GitHub Activity Calendar */}
                <div
                    style={{
                        display: calendarLoaded ? "block" : "none",
                    }}
                    className="py-5 px-3 rounded-2xl shadow-xl hover:shadow-2xl bg-[#f4f4f9] transition-all duration-300"
                >
                    <h3 className="font-barlow font-semibold text-2xl flex items-center">
                       <span className="text-primary">📅</span>
                        GitHub Contribution Graph
                    </h3>

                    <div className="relative bg-gray-900 px-3 py-5 mt-4 rounded-xl shadow-xl">
                        <div className="overflow-x-auto">
                            <div className="min-w-[800px]">
                                <img
                                    className="w-full rounded-lg"
                                    style={{
                                        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                                        display: calendarLoaded ? "block" : "none",
                                    }}
                                    src={`https://ghchart.rshah.org/${encodeURIComponent(
                                        "027579"
                                    )}/ariyanEiasin02`}
                                    alt="GitHub Activity Calendar"
                                    onError={() => setCalendarLoaded(false)}
                                />
                            </div>
                        </div>

                        {calendarLoaded && (
                            <div className="mt-2 flex items-center justify-between flex-wrap gap-4">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 bg-[#ebedf0] dark:bg-gray-700 rounded"></span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            None
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 bg-[var(--primary-color)] opacity-30 rounded"></span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Low
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 bg-[var(--primary-color)] opacity-60 rounded"></span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Medium
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 bg-[var(--primary-color)] rounded"></span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            High
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href="https://github.com/ariyanEiasin02"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 text-sm font-medium text-gray-500 hover:text-[var(--primary-hover)]"
                                >
                                    View on GitHub
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
);
};
