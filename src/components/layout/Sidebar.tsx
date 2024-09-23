import { BarChart, BookOpen, Users, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

export default function Sidebar() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="relative flex flex-col md:flex-row">
        <div className="md:hidden absolute top-4 right-4">
          <ModeToggle />
        </div>
        <div className="flex flex-col w-full md:w-64 p-4 border border-gray-200 rounded-lg shadow-lg bg-background text-foreground">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Learning Hub</h2>
            <div className="hidden md:block">
              <ModeToggle />
            </div>
          </div>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-accent hover:text-accent-foreground"
                >
                  <BarChart className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-accent hover:text-accent-foreground"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Courses</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/students"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-accent hover:text-accent-foreground"
                >
                  <Users className="h-5 w-5" />
                  <span>Students</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/analytics"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-accent hover:text-accent-foreground"
                >
                  <Activity className="h-5 w-5" />
                  <span>Analytics</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </ThemeProvider>
  );
}
