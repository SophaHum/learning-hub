import { BarChart, BookOpen, Users, Activity } from "lucide-react"
import { Link } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
const Sidebar = () => (
    <ThemeProvider>
      <div className="absolute top-0 right-60 m-4 items-center">
        <ModeToggle />
      </div>
      <div className="flex flex-col w-64 text-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
          Learning Hub
        </h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
              >
                <BarChart size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
              >
                <BookOpen size={20} />
                <span>Courses</span>
              </Link>
            </li>
            <li>
              <Link
                to="/students"
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
              >
                <Users size={20} />
                <span>Students</span>
              </Link>
            </li>
            <li>
              <Link
                to="/analytics"
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
              >
                <Activity size={20} />
                <span>Analytics</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </ThemeProvider>
  );

export default Sidebar;