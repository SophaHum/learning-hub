import { BarChart, Users, BookOpen, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contents from "@/components/layout/Content";
import StatCard from "@/components/layout/StatCard";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-900 dark:text-gray-100 text-3xl font-medium mb-6">
              Welcome back, Sopha!
            </h3>
            <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              <StatCard title="Total Students" value={6389} icon={Users} />
              <StatCard title="Active Courses" value={15} icon={BookOpen} />
              <StatCard title="Completion Rate" value={73.5} icon={Activity} />
              <StatCard title="Total Revenue" value={12389} icon={BarChart} />
            </div>
            <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
              <Contents />
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Student Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center text-gray-500">
                    Chart placeholder
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
