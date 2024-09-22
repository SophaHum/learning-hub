import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ProfileIcon } from '@/components/profile-icon'

const Header = () => (
    <header className="shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-4 w-4" />
        </Button>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Input type="search" placeholder="Search..." className="max-w-xs" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <img
                className="rounded-full"
                src="/placeholder.svg?height=32&width=32"
                alt="User avatar"
              />
                <ProfileIcon />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </header>
  );

export default Header
