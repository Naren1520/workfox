import { Link, useLocation } from 'react-router-dom';
import { useWallet } from '../WalletProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function Header() {
  const { activeAddress, isConnected, connect, disconnect } = useWallet();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleConnect = async () => {
    try {
      await connect();
      toast.success('Wallet connected successfully');
    } catch (error) {
      toast.error('Failed to connect wallet');
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      toast.success('Wallet disconnected');
    } catch (error) {
      toast.error('Failed to disconnect wallet');
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isLandingPage = location.pathname === '/';

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              WorkFox
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/') 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/tasks"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/tasks') 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Browse Tasks
            </Link>
            <Link
              to="/create"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/create') 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Create Task
            </Link>
            <Link
              to="/dashboard"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/dashboard') 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/developers"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/developers') 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Developers
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/about') 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Wallet Connection & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {isConnected && activeAddress ? (
              <div className="hidden md:flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {formatAddress(activeAddress)}
                  </span>
                </div>
                <button
                  onClick={handleDisconnect}
                  className="btn-secondary text-sm"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={handleConnect}
                className="hidden md:block btn-primary text-sm"
              >
                Connect Wallet
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium ${
                isActive('/') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/tasks"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium ${
                isActive('/tasks') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600'
              }`}
            >
              Browse Tasks
            </Link>
            <Link
              to="/create"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium ${
                isActive('/create') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600'
              }`}
            >
              Create Task
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium ${
                isActive('/dashboard') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/developers"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium ${
                isActive('/developers') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600'
              }`}
            >
              Developers
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium ${
                isActive('/about') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600'
              }`}
            >
              About
            </Link>
            <div className="pt-4 border-t border-gray-200">
              {isConnected && activeAddress ? (
                <>
                  <div className="px-4 py-2 bg-green-50 rounded-lg mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {formatAddress(activeAddress)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleDisconnect();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full btn-secondary"
                  >
                    Disconnect
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleConnect();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full btn-primary"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
