"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { name: "r/m", value: 50, fill: "#6FCF97" },
  { name: "success/m", value: 750, fill: "#56CCF2" },
  { name: "inter/m", value: 75, fill: "#F2C94C" },
  { name: "decline/m", value: 100, fill: "#BB6BD9" },
];

const chartConfig = {
  value: {
    label: "Amount",
  },
} satisfies ChartConfig;

export function DonutChart() {
  const total = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <Card className="w-[420px]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>CV Tracker Statistics</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex items-center gap-6">
        <div className="w-[220px] h-[220px] flex-shrink-0">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <PieChart width={220} height={220}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={90}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="text-3xl font-bold fill-foreground"
                          >
                            ${total}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 20}
                            className="text-xs fill-muted-foreground"
                          >
                            of $975 limit
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>

        <div className="flex flex-col gap-4">
          {chartData.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div
                className="w-[3px] h-8 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <div className="flex flex-col">
                <span className="text-sm">{item.name}</span>
                <span className="text-sm font-semibold">
                  ${item.value.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}