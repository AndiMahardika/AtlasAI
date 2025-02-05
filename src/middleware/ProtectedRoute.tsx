import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import { Loader } from 'lucide-react';

export default function ProtectedRoute() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <Loader className="animate-spin" size={42} />
        <p className="text-lg font-semibold text-slate-400">Loading ...</p>
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}