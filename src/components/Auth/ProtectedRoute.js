import { Navigate } from 'react-router-dom';
import { useSupabase } from '../../context/SupabaseContext';

const ProtectedRoute = ({ children }) => {
  const supabase = useSupabase();
  const user = supabase.auth.user();

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
