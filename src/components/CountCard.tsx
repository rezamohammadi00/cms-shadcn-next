import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type CountCardProps = {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
};
function CountCard({ title, count, icon }: CountCardProps) {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
      <CardContent>
        <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex gap-5 justify-center items-center">
          <div>{icon}</div>
          <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}

export default CountCard;

// import { LucideIcon } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// import React from "react";

// type CountCardProps = {
//   title: string;
//   count: number;
//   icon: React.ReactElement<LucideIcon>;
// };

// function CountCard({ title, count, icon }: CountCardProps) {
//   return (
//     <Card className="bg-slate-100 dark:bg-slate-800 md:w-[300px] md:h-[200px] p-6">
//       <CardContent className="h-full flex flex-col justify-between px-6 pt-0">
//         <h3 className="text-xl text-center font-semibold text-slate-500 dark:text-slate-200 line-clamp-2 mb-2">
//           {title}
//         </h3>

//         <div className="flex items-center">
//           <div className="size-12 flex items-center justify-center">
//            {icon}
//           </div>

//           <h3 className="text-5xl font-bold text-slate-500 dark:text-slate-200 min-w-[120px] text-end">
//             {count}
//           </h3>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default CountCard;
