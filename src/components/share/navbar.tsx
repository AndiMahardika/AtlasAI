import React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import useUserStore from '@/store/useUserProfile';

const Navbar: React.FC = () => {
  const { userData } = useUserStore()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link to="#" className="flex items-center gap-2">
          <span className="font-semibold text-blue-500">AtlasAI</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link to="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <Link to="/chatbot" className="text-gray-500 hover:text-gray-900">
            Chat-AI
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img 
                  src= {userData?.avatar_url || 'https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg'} 
                  className="h-8 w-8 rounded-full" 
                  alt='profile' 
                  onError={(e) => (e.currentTarget.src = 'https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg')} />
                <span className="sr-only">Profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[100px] p-2">
              <div className="relative flex-col flex items-center space-y-2">
                <Link to="/profile" className="text-gray-500 hover:text-gray-900">
                  Profile
                </Link>
                <Logout />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full md:hidden">
                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                  Home
                </Link>
                <Link to="/chatbot" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                  Chat-AI
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function Logout(){
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout(){
    await logout()
    navigate("/login")
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <p className='text-gray-500 hover:text-gray-900 cursor-pointer'>Logout</p>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will end your current session and log you out of your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Navbar;

