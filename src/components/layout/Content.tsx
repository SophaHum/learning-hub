import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Activity } from "lucide-react";

const Contents = () => (
  <Card className="col-span-3">
    <CardHeader>
      <CardTitle>Recent Activity</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        <li className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <BookOpen className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="font-medium">
              New course added: "Advanced React Patterns"
            </p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <Users className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="font-medium">5 new students enrolled</p>
            <p className="text-sm text-gray-500">5 hours ago</p>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
            <Activity className="h-5 w-5 text-yellow-600" />
          </div>
          <div>
            <p className="font-medium">
              Course completion rate increased by 12%
            </p>
            <p className="text-sm text-gray-500">1 day ago</p>
          </div>
        </li>
      </ul>
    </CardContent>
  </Card>
);

export default Contents;
