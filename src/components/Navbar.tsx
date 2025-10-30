import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.jpg';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="Automotriz San Felipe Logo" 
              className="h-16 w-16 object-contain group-hover:scale-110 transition-transform"
            />
            <div>
              <h1 className="text-xl font-bold">Automotriz San Felipe</h1>
              <p className="text-xs text-primary-foreground/80">Vehículos Seminuevos de Calidad</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-1">
            <Link
              to="/"
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                isActive('/') 
                  ? 'bg-accent text-accent-foreground' 
                  : 'hover:bg-primary-foreground/10'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/catalogo"
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                isActive('/catalogo') 
                  ? 'bg-accent text-accent-foreground' 
                  : 'hover:bg-primary-foreground/10'
              }`}
            >
              Catálogo
            </Link>
            <Link
              to="/sobre-nosotros"
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                isActive('/sobre-nosotros') 
                  ? 'bg-accent text-accent-foreground' 
                  : 'hover:bg-primary-foreground/10'
              }`}
            >
              Sobre Nosotros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
