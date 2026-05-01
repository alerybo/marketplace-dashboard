import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { calculateTrendPercentage, cn } from "~/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";

const StatsCard = ({
  title,
  total,
  lastMonthCount,
  currentMonthCount,
}: {
  title: string;
  total: number;
  lastMonthCount: number;
  currentMonthCount: number;
}) => {
  const { trend, percentage } = calculateTrendPercentage(
    currentMonthCount,
    lastMonthCount,
  );
  const isDecrement = trend === "decrement";
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row md:flex-col-reverse xl:flex-row xl:items-center gap-3 justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">{total}</h2>
          <div className="flex items-center gap-2">
            <figure className="flex items-center gap-1">
              {isDecrement ? (
                <ArrowDown className="text-red-500 size-5" />
              ) : (
                <ArrowUp className="text-green-500 size-5" />
              )}
              <figcaption
                className={cn(
                  "text-sm font-medium",
                  isDecrement ? "text-red-500" : "text-green-500",
                )}
              >
                {Math.round(percentage)}%
              </figcaption>
            </figure>
            <p className="text-sm text-gray-500 truncate">vs last month</p>
          </div>
        </div>
        <img
          src={`${isDecrement ? "decrement.svg" : "increment.svg"}`}
          className="xl:w-32 w-full h-full md:h-32 xl:h-full"
          alt="trend graph"
        />
      </CardContent>
    </Card>
  );
};

export default StatsCard;
