"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/section";
import { FadeIn } from "../ui/fade-in";

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  payload: any;
  created_at: string;
}

const GITHUB_USERNAME = "Zahh-id";

function buildHeatmap(events: GitHubEvent[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const event of events) {
    const day = event.created_at.slice(0, 10);
    map.set(day, (map.get(day) || 0) + 1);
  }
  return map;
}

const WEEKS_COUNT = 52;

function getLastWeeks(): string[][] {
  const weeks: string[][] = [];
  const today = new Date();
  const dayOfWeek = today.getDay();

  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + (6 - dayOfWeek));

  for (let w = WEEKS_COUNT - 1; w >= 0; w--) {
    const week: string[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(endOfWeek);
      date.setDate(endOfWeek.getDate() - w * 7 + d - 6);
      if (date <= today) {
        week.push(date.toISOString().slice(0, 10));
      } else {
        week.push("");
      }
    }
    weeks.push(week);
  }
  return weeks;
}

function getMonthLabels(weeks: string[][]): { label: string; col: number }[] {
  const months: { label: string; col: number }[] = [];
  let lastMonth = -1;

  for (let wi = 0; wi < weeks.length; wi++) {
    const firstDay = weeks[wi].find((d) => d !== "");
    if (!firstDay) continue;
    const month = new Date(firstDay).getMonth();
    if (month !== lastMonth) {
      lastMonth = month;
      months.push({
        label: new Date(firstDay).toLocaleDateString("en-US", { month: "short" }),
        col: wi,
      });
    }
  }
  return months;
}

function getIntensity(count: number): string {
  if (count === 0) return "bg-ink/5";
  if (count <= 2) return "bg-pink/30";
  if (count <= 5) return "bg-pink/60";
  return "bg-pink";
}

export const GitHubActivity = () => {
  const [heatmap, setHeatmap] = useState<Map<string, number>>(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = sessionStorage.getItem("gh-activity");
    if (cached) {
      const data = JSON.parse(cached);
      processEvents(data);
      return;
    }

    async function fetchAllPages() {
      try {
        const allEvents: GitHubEvent[] = [];
        for (let page = 1; page <= 10; page++) {
          const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100&page=${page}`
          );
          const data = await res.json();
          if (!Array.isArray(data) || data.length === 0) break;
          allEvents.push(...data);
        }
        sessionStorage.setItem("gh-activity", JSON.stringify(allEvents));
        processEvents(allEvents);
      } catch {
        setLoading(false);
      }
    }
    fetchAllPages();
  }, []);

  function processEvents(events: GitHubEvent[]) {
    setHeatmap(buildHeatmap(events));
    setLoading(false);
  }

  const weeks = getLastWeeks();
  const monthLabels = getMonthLabels(weeks);

  return (
    <Section className="py-24 border-t border-border">
      <FadeIn>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tighter">
            Activity
          </h2>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink font-medium text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            @{GITHUB_USERNAME}
          </a>
        </div>
      </FadeIn>

      {/* Heatmap */}
      <FadeIn>
        <div className="mb-16 overflow-x-auto">
          <div className="inline-flex flex-col gap-0">
            {/* Month labels */}
            <div className="flex ml-10 mb-2">
              {monthLabels.map((m, i) => {
                const nextCol = i < monthLabels.length - 1 ? monthLabels[i + 1].col : WEEKS_COUNT;
                const span = nextCol - m.col;
                return (
                  <span
                    key={i}
                    className="text-[10px] sm:text-xs text-muted-ink shrink-0"
                    style={{ width: `${span * 15}px` }}
                  >
                    {m.label}
                  </span>
                );
              })}
            </div>

            <div className="flex gap-0">
              {/* Day labels */}
              <div className="flex flex-col gap-[3px] mr-2 justify-center">
                {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                  <span key={i} className="text-[10px] text-muted-ink h-3 sm:h-4 flex items-center leading-none">
                    {d}
                  </span>
                ))}
              </div>

              {/* Grid */}
              <div className="inline-flex gap-[3px]">
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((day, di) => {
                      const count = day ? heatmap.get(day) || 0 : 0;
                      return (
                        <motion.div
                          key={di}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: wi * 0.015 + di * 0.005, duration: 0.3 }}
                          title={day ? `${day}: ${count} event${count !== 1 ? "s" : ""}` : ""}
                          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-[3px] ${day ? getIntensity(count) : "bg-transparent"}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 text-xs text-muted-ink">
            <span>Less</span>
            <div className="w-3 h-3 rounded-[3px] bg-ink/5" />
            <div className="w-3 h-3 rounded-[3px] bg-pink/30" />
            <div className="w-3 h-3 rounded-[3px] bg-pink/60" />
            <div className="w-3 h-3 rounded-[3px] bg-pink" />
            <span>More</span>
          </div>
        </div>
      </FadeIn>

      {loading && (
        <div className="flex items-center gap-3 text-muted-ink">
          <div className="w-2 h-2 rounded-full bg-pink animate-pulse" />
          Loading activity...
        </div>
      )}
    </Section>
  );
};
