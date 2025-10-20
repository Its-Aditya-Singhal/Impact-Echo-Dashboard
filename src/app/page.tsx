"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(true);

  // Check if user is authenticated (you'll integrate with your auth system)
  useEffect(() => {
    // Check localStorage for auth status
    const authStatus = localStorage.getItem('impactEchoAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      setShowAuthModal(false);
    }
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
    localStorage.setItem('impactEchoAuth', 'true');
  };

  // Show auth modal if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>

        <div className="relative max-w-4xl w-full space-y-8">
          {/* Header */}
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-3 text-3xl font-bold mb-4">
              <span className="text-4xl">💝</span>
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                ImpactEcho
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              Make Your <span className="text-emerald-600">Impact</span> Echo
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of donors creating meaningful change. Track your impact, fund causes you care about, and see the ripple effect of your generosity.
            </p>
          </div>

          {/* Auth Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Login Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">🔑</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-600">Sign in to continue your impact journey</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-medium text-gray-800">Email & Password</div>
                    <div className="text-sm text-gray-600">Secure authentication</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <div className="font-medium text-gray-800">Secure & Private</div>
                    <div className="text-sm text-gray-600">Your data is protected</div>
                  </div>
                </div>
              </div>

              <Link
                href="/login"
                className="w-full mt-6 flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105"
              >
                <span className="mr-2">🚀</span>
                Sign In
              </Link>
            </div>

            {/* Signup Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">✨</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Movement</h2>
                <p className="text-gray-600">Create your account and start making an impact</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <div className="font-medium text-gray-800">Global Impact</div>
                    <div className="text-sm text-gray-600">Make a difference worldwide</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="font-medium text-gray-800">Track Your Impact</div>
                    <div className="text-sm text-gray-600">See the difference you make</div>
                  </div>
                </div>
              </div>

              <Link
                href="/signup"
                className="w-full mt-6 flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 transform hover:scale-105"
              >
                <span className="mr-2">🌟</span>
                Get Started
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Secure & Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Real-time Impact Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Verified Causes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Global Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show dashboard if authenticated
  return <DashboardContent />;
}

function DashboardContent() {
  type Cause = { 
    id: string; 
    title: string; 
    goalAmount: number; 
    raisedAmount: number; 
    category: string; 
    emoji: string;
    description: string;
    urgency: 'low' | 'medium' | 'high';
  };
  type Donation = { id: string; causeId: string; amount: number; date: string };

  const [name, setName] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);

  // Get user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('impactEchoUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserData(user);
      setName(user.name || "");
    }
  }, []);
  const [causes, setCauses] = useState<Cause[]>([
    { 
      id: "cause-edu-1", 
      title: "Education for All", 
      goalAmount: 10000, 
      raisedAmount: 2500, 
      category: "Education", 
      emoji: "📚",
      description: "Supporting underprivileged children with quality education and learning materials",
      urgency: 'high'
    },
    { 
      id: "cause-health-1", 
      title: "Health & Nutrition", 
      goalAmount: 15000, 
      raisedAmount: 6200, 
      category: "Health", 
      emoji: "🩺",
      description: "Providing essential healthcare and nutrition support to vulnerable communities",
      urgency: 'medium'
    },
    { 
      id: "cause-env-1", 
      title: "Clean Water Initiative", 
      goalAmount: 8000, 
      raisedAmount: 3100, 
      category: "Environment", 
      emoji: "💧",
      description: "Building sustainable water systems for communities in need",
      urgency: 'high'
    },
  ]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalDonated = useMemo(() => donations.reduce((s, d) => s + d.amount, 0), [donations]);
  const campaignsSupported = useMemo(() => new Set(donations.map((d) => d.causeId)).size, [donations]);

  const onFund = (causeId: string, amountStr: string, clear: () => void) => {
    const amount = Number(amountStr);
    if (!isFinite(amount) || amount <= 0) return;
    
    setCauses((prev) => prev.map((c) => (c.id === causeId ? { ...c, raisedAmount: c.raisedAmount + amount } : c)));
    setDonations((prev) => [
      { id: `don-${Date.now()}`, causeId, amount, date: new Date().toISOString() },
      ...prev,
    ]);
    
    // Show success animation
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    clear();
  };

  return (
    <div className="min-h-screen">
      {/* Success Animation Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-fade-in-up">
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Donation Successful!</h3>
              <p className="text-gray-600">Thank you for making a difference</p>
            </div>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xl font-bold">
            <span className="text-2xl">💝</span>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">ImpactEcho</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-gentle"></span>
              <span>Live Impact Tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  localStorage.removeItem('impactEchoAuth');
                  localStorage.removeItem('impactEchoUser');
                  window.location.reload();
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-6 pb-8 pt-12">
        <div className="rounded-3xl p-8 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white shadow-2xl animate-fade-in-up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                 <div className="flex-1">
                   <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                     Welcome back, <span className="text-yellow-300">{name || "Donor"}</span>!
                   </h1>
                   <p className="mt-4 text-white/90 max-w-2xl text-xl leading-relaxed">
                     Continue your impact journey. Track your donations, fund causes you care about, and see the ripple effect of your generosity.
                   </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <span className="text-2xl">🌍</span>
                  <span className="text-sm font-medium">Global Impact</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <span className="text-2xl">🔒</span>
                  <span className="text-sm font-medium">Secure & Transparent</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <span className="text-2xl">📊</span>
                  <span className="text-sm font-medium">Real-time Tracking</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-full lg:w-96 border border-white/20">
              <label className="text-sm text-white/80 font-medium">Welcome to ImpactEcho</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name to get started"
                className="mt-3 w-full px-4 py-3 rounded-xl bg-white/95 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-lg transition-all duration-200"
              />
              {name && (
                <div className="mt-3 text-sm text-white/80 animate-slide-in">
                  Welcome, <span className="font-semibold text-yellow-300">{name}</span>! Ready to make an impact?
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 pb-16 space-y-12">
        {/* Stats Dashboard */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard 
            label="Total Impact" 
            value={`$${totalDonated.toLocaleString()}`} 
            icon="💰"
            color="blue"
          />
          <StatCard 
            label="Causes Supported" 
            value={String(campaignsSupported)} 
            icon="🎯"
            color="emerald"
          />
          <StatCard 
            label="Donations Made" 
            value={String(donations.length)} 
            icon="❤️"
            color="rose"
          />
        </section>

        {/* Impact Dashboard */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl glass shadow-lg border border-white/60 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📈</span>
              <h3 className="text-xl font-bold text-gray-800">Recent Impact</h3>
            </div>
            <div className="space-y-4">
              {donations.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">🌱</div>
                  <p className="text-gray-500">Start your impact journey today</p>
                </div>
              ) : (
                donations.slice(0, 5).map((d, index) => (
                  <div key={d.id} className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-white/40 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">💝</span>
                      <div>
                        <div className="font-medium text-gray-800">${d.amount.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">{new Date(d.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                ))
              )}
            </div>
          </div>
          
          <div className="p-8 rounded-3xl glass shadow-lg border border-white/60 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🌍</span>
              <h3 className="text-xl font-bold text-gray-800">Your Impact</h3>
            </div>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-black text-emerald-600 mb-2">{Math.floor(totalDonated / 25)}</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Impact Progress</span>
                  <span className="font-semibold text-emerald-600">{Math.min(100, Math.round((totalDonated % 1000) / 10))}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(100, Math.round((totalDonated % 1000) / 10))}%` }}
                  />
                </div>
              </div>
              <div className="text-center text-sm text-gray-500">
                Every $25 helps one person in need
              </div>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Support Meaningful Causes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from verified causes and make a direct impact. Every donation creates a ripple effect of positive change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {causes.map((cause, index) => (
              <CauseCard 
                key={cause.id} 
                cause={cause} 
                onFund={onFund}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 text-center border-t border-gray-200/50">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">💝</span>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">ImpactEcho</span>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ImpactEcho · Amplifying generosity worldwide</p>
        </footer>
      </main>
    </div>
  );
}

function StatCard({ label, value, icon, color }: { 
  label: string; 
  value: string; 
  icon: string;
  color: 'blue' | 'emerald' | 'rose';
}) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    emerald: 'from-emerald-500 to-emerald-600', 
    rose: 'from-rose-500 to-rose-600'
  };
  
  return (
    <div className="p-8 rounded-3xl glass shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-2xl bg-gradient-to-r ${colorClasses[color]} text-white`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <div className="text-sm text-gray-600 font-medium">{label}</div>
          <div className="text-3xl font-black text-gray-800">{value}</div>
        </div>
      </div>
    </div>
  );
}

function CauseCard({ 
  cause, 
  onFund, 
  index 
}: { 
  cause: { 
    id: string; 
    title: string; 
    goalAmount: number; 
    raisedAmount: number; 
    category: string; 
    emoji: string;
    description: string;
    urgency: 'low' | 'medium' | 'high';
  }; 
  onFund: (id: string, amount: string, clear: () => void) => void;
  index: number;
}) {
  const [amount, setAmount] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const progress = Math.min(100, Math.round((cause.raisedAmount / cause.goalAmount) * 100));
  
  const urgencyColors = {
    high: 'border-red-200 bg-red-50',
    medium: 'border-yellow-200 bg-yellow-50', 
    low: 'border-green-200 bg-green-50'
  };
  
  const urgencyLabels = {
    high: 'Urgent',
    medium: 'Important',
    low: 'Ongoing'
  };
  
  return (
    <div 
      className={`p-8 rounded-3xl glass shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:scale-105 ${urgencyColors[cause.urgency]}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{cause.emoji}</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 leading-tight">{cause.title}</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm text-gray-500">{cause.category}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${urgencyColors[cause.urgency]}`}>
                {urgencyLabels[cause.urgency]}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">{cause.description}</p>
      
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-semibold text-emerald-600">{progress}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>${cause.raisedAmount.toLocaleString()} raised</span>
          <span>${cause.goalAmount.toLocaleString()} goal</span>
        </div>
      </div>
      
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter amount"
            type="number"
            min="0"
            className={`flex-1 px-4 py-3 border rounded-xl text-sm bg-white/90 transition-all duration-200 ${
              isFocused ? 'ring-2 ring-emerald-500 border-emerald-300' : 'border-gray-200'
            }`}
          />
          <button
            onClick={() => onFund(cause.id, amount, () => setAmount(""))}
            disabled={!amount || Number(amount) <= 0}
            className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
              !amount || Number(amount) <= 0 
                ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                : "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105"
            }`}
          >
            💝 Donate
          </button>
        </div>
        
        {amount && Number(amount) > 0 && (
          <div className="text-center text-sm text-gray-500 animate-slide-in">
            Your ${Number(amount).toLocaleString()} will help {Math.floor(Number(amount) / 25)} people
          </div>
        )}
      </div>
    </div>
  );
}
