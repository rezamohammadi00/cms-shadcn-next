import CountCard from "@/components/CountCard";
import React from "react";

import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import PostsTable from "@/components/PostsTable";
import AnalyticsChart from "@/components/AnalyticsChart";

const HOMEPAGE_STATS = [
  {
    title: "پست‌ها",
    count: 100,
    icon: <Newspaper className="text-slate-500" size={72} />,
  },
  {
    title: "دسته‌بندی‌ها",
    count: 12,
    icon: <Folder className="text-slate-500" size={72} />,
  },
  {
    title: "کاربرها",
    count: 750,
    icon: <User className="text-slate-500" size={72} />,
  },
  {
    title: "کامنت‌ها",
    count: 1200,
    icon: <MessageCircle className="text-slate-500" size={72} />,
  },
];

const getAnalytics = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/analytics"
  );
  return res.json();
};

const Homeage = async () => {
  const analytics = await getAnalytics();

  return (
    <main className="p-5 w-full">
      {/* solution1: */}
      {/* <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        {HOMEPAGE_STATS.map((stat) => (
          <CountCard {...stat} key={stat.title} />
        ))}
      </div> */}
      {/* solution2: */}
      <div
        className="flex flex-nowrap gap-5 mb-5 overflow-x-auto md:overflow-visible 
        w-full pb-3 scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-300
        md:flex-wrap md:justify-between"
      >
        {HOMEPAGE_STATS.map((stat) => (
          <div
            key={stat.title}
            className="flex-shrink-0 min-w-[calc(100%-20px)] 
              md:min-w-[280px] lg:min-w-[210px] md:flex-1"
          >
            <CountCard {...stat} />
          </div>
        ))}
      </div>
      {/* -------------------solution2(end)--------------------------- */}
      <AnalyticsChart data={analytics} />
      <PostsTable title="اخرین پست‌ها" limit={5} />
    </main>
  );
};

export default Homeage;
