import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Building2, 
  LineChart, 
  BookOpen, 
  Target, 
  Globe,
  CheckCircle2,
  Search,
  Award,
  TrendingUp,
  BarChart3,
  Layers,
  ChevronRight,
  ShieldCheck,
  FileText,
  X,
  MapPin,
  CalendarDays,
  ClipboardList,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [entryMode, setEntryMode] = useState(null);
  const [selectedPortal, setSelectedPortal] = useState('student');

  const enterPortal = () => {
    setActiveTab(selectedPortal);
    setEntryMode(null);
  };

  if (entryMode) {
    return (
      <AuthScreen
        mode={entryMode}
        selectedPortal={selectedPortal}
        setSelectedPortal={setSelectedPortal}
        onClose={() => setEntryMode(null)}
        onSwitchMode={(nextMode) => setEntryMode(nextMode)}
        onContinue={enterPortal}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100">
      <nav className="border-b border-slate-800/80 bg-[#0b0f19]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setActiveTab('landing')}
          >
            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              SkillBridge <span className="text-blue-500">AI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-2 text-sm font-medium bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            <button 
              onClick={() => setActiveTab('landing')}
              className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'landing' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('student')}
              className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'student' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Student
            </button>
            <button 
              onClick={() => setActiveTab('institution')}
              className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'institution' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Institutions
            </button>
            <button 
              onClick={() => setActiveTab('industry')}
              className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'industry' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Industry
            </button>
            <button 
              onClick={() => setActiveTab('government')}
              className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'government' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Government
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button onClick={() => setEntryMode('login')} className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 transition-colors">
              Login
            </button>
            <button 
              onClick={() => setEntryMode('signup')}
              className="text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/25"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {activeTab === 'landing' && <LandingView setActiveTab={setActiveTab} />}
        {activeTab === 'student' && <StudentDashboard />}
        {activeTab === 'institution' && <InstitutionDashboard />}
        {activeTab === 'industry' && <IndustryDashboard />}
        {activeTab === 'government' && <GovernmentDashboard />}
      </main>

      <footer className="border-t border-slate-800/80 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-white">SkillBridge AI</span>
          </div>
          <p className="text-xs text-slate-500">
            An intelligent skill-development and workforce intelligence platform. Prototype for Smart India Hackathon 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}

function AuthScreen({ mode, selectedPortal, setSelectedPortal, onClose, onSwitchMode, onContinue }) {
  const isLogin = mode === 'login';
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const portals = [
    { id: 'student', label: 'Student', icon: GraduationCap },
    { id: 'institution', label: 'Institution', icon: Building2 },
    { id: 'industry', label: 'Industry', icon: Briefcase },
    { id: 'government', label: 'Government', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full overflow-hidden rounded-[28px] border border-slate-800 bg-slate-950/80 shadow-2xl shadow-blue-950/20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 md:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),transparent_35%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/10 p-2 backdrop-blur-sm">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white">SkillBridge AI</span>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 transition hover:bg-white/20"
                  >
                    Back to home
                  </button>
                </div>

                <div className="mt-12">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-100">
                    Workforce intelligence
                  </span>
                  <h1 className="mt-6 max-w-md text-4xl font-extrabold leading-tight text-white md:text-5xl">
                    Build skills that match real opportunity.
                  </h1>
                  <p className="mt-5 max-w-md text-base leading-7 text-blue-100/85">
                    Track readiness, unlock personalized pathways, and connect learning outcomes with the jobs employers actually need.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">68%</div>
                    <div className="mt-1 text-xs text-blue-100/80">Avg. readiness</div>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">62</div>
                    <div className="mt-1 text-xs text-blue-100/80">Role profiles</div>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">1.4k</div>
                    <div className="mt-1 text-xs text-blue-100/80">Learners tracked</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-8 md:p-12">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  {isLogin ? 'Welcome back' : 'Create account'}
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white">
                  {isLogin ? 'Sign in to your portal' : 'Start with your portal'}
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  {isLogin
                    ? 'Access your personalized learning and workforce dashboard.'
                    : 'Create a profile to explore skill mapping, outcomes, and training pathways.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {portals.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelectedPortal(id)}
                    aria-pressed={selectedPortal === id}
                    className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${selectedPortal === id ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-600'}`}
                  >
                    <Icon className={`h-5 w-5 ${selectedPortal === id ? 'text-blue-400' : 'text-slate-500'}`} />
                    <span className="text-sm font-semibold">{label}</span>
                  </button>
                ))}
              </div>

              <form className="mt-6 space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-slate-200">Full name</label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Aarav Sharma"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="authEmail" className="text-sm font-medium text-slate-200">Email address</label>
                  <input
                    id="authEmail"
                    type="email"
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="authPassword" className="text-sm font-medium text-slate-200">Password</label>
                  <div className="relative">
                    <input
                      id="authPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-11 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute inset-y-0 right-3 flex items-center text-xs font-medium text-slate-400 hover:text-white"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-200">Confirm password</label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-11 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((value) => !value)}
                        className="absolute inset-y-0 right-3 flex items-center text-xs font-medium text-slate-400 hover:text-white"
                      >
                        {showConfirmPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <label className="flex items-center gap-2 text-slate-300">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-blue-600 focus:ring-blue-500" />
                      Remember me
                    </label>
                    <button type="button" className="font-medium text-blue-400 hover:text-blue-300">
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  onClick={onContinue}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-500"
                >
                  {isLogin ? `Sign in to ${portals.find((portal) => portal.id === selectedPortal)?.label}` : `Create ${portals.find((portal) => portal.id === selectedPortal)?.label} account`}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] text-slate-500">
                  <span className="bg-slate-950 px-3">or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800">
                  <span className="text-base">G</span>
                  Google
                </button>
                <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800">
                  <span className="text-base">in</span>
                  LinkedIn
                </button>
              </div>

              <p className="mt-6 text-center text-sm text-slate-400">
                {isLogin ? 'Need an account?' : 'Already have an account?'}{' '}
                <button type="button" onClick={() => onSwitchMode(isLogin ? 'signup' : 'login')} className="font-semibold text-blue-400 hover:text-blue-300">
                  {isLogin ? 'Create one' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingView({ setActiveTab }) {
  return (
    <div>
      <section className="pt-16 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
              <span>Smart India Hackathon 2026 · Prototype</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Bridge the Gap Between <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Education and Industry.</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              SkillBridge AI assesses student skills, compares them with real role requirements, and turns the difference into a learning pathway — while institutions, employers and policymakers see the same workforce picture.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => setActiveTab('student')}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-600/30"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setActiveTab('institution')}
                className="border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200 px-6 py-3.5 rounded-xl font-medium transition-all"
              >
                Explore Platform
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
              <div>
                <div className="text-3xl font-bold text-white">1,418</div>
                <div className="text-xs text-slate-400 mt-1">Learners mapped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">62</div>
                <div className="text-xs text-slate-400 mt-1">Role skill profiles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">36%</div>
                <div className="text-xs text-slate-400 mt-1">Avg. gap closed</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">Figures are simulated prototype data.</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-slate-900/80 border border-slate-800 rounded-3xl p-6 overflow-hidden backdrop-blur-xl shadow-2xl">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-950/50 to-slate-900 border border-slate-800 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-2xl text-blue-400">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 relative">
                    <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-indigo-400 animate-ping"></div>
                  </div>
                  <div className="p-4 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl text-indigo-400">
                    <Briefcase className="w-8 h-8" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">AI-Powered Skill Graph</h3>
                <p className="text-sm text-slate-400 max-w-xs">
                  Real-time mapping between academic learning and active market job requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">PLATFORM</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              One skill graph, four stakeholders, zero guesswork.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'AI Skill Assessment',
                desc: 'Evaluate current proficiency against role-specific skill profiles and get a readiness score.'
              },
              {
                icon: BookOpen,
                title: 'Personalized Learning',
                desc: 'Sequenced pathways and courses that target the exact gaps blocking a career goal.'
              },
              {
                icon: LineChart,
                title: 'Industry Skill Insights',
                desc: 'See which skills employers are hiring for, and where supply falls short of demand.'
              },
              {
                icon: Users,
                title: 'Smart Talent Matching',
                desc: 'Match candidates to jobs and internships by skill fit instead of keywords alone.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all">
                <div className="p-3 bg-blue-600/10 border border-blue-500/20 rounded-xl text-blue-400 w-fit mb-5">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">BUILT FOR EVERYONE</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Select a portal to explore interactive prototype views.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 'student', role: 'Students', icon: GraduationCap, desc: 'Know your gaps, close them, and reach industry readiness.' },
            { id: 'institution', role: 'Institutions', icon: Building2, desc: 'Align curriculum with live industry demand signals.' },
            { id: 'industry', role: 'Industry', icon: Briefcase, desc: 'Post roles and discover skill-matched candidates.' },
            { id: 'government', role: 'Government', icon: Globe, desc: 'Monitor workforce supply, demand and regional gaps.' }
          ].map((stk, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveTab(stk.id)}
              className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/40 cursor-pointer transition-all group"
            >
              <div>
                <div className="p-3 bg-slate-800/80 rounded-xl text-blue-400 w-fit mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <stk.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{stk.role}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{stk.desc}</p>
              </div>
              <div className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300">
                <span>Open dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function StudentDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Student Portal</span>
          <h1 className="text-3xl font-bold text-white">Skill Readiness & Pathways</h1>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-slate-400">Target Role:</span>
          <select className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
            <option>Full-Stack Web Developer</option>
            <option>Data Engineer</option>
            <option>AI/ML Associate</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-6">
          <h3 className="text-lg font-bold text-white">Overall Readiness Score</h3>
          <div className="flex items-center justify-center py-6">
            <div className="relative flex items-center justify-center">
              <div className="w-36 h-36 rounded-full border-8 border-slate-800 border-t-blue-500 border-r-blue-500 flex items-center justify-center">
                <span className="text-4xl font-extrabold text-white">68%</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-400 text-center">
            You are <strong className="text-blue-400">32% away</strong> from full readiness for Full-Stack Web Developer positions.
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-medium transition-all">
            Take New AI Skill Assessment
          </button>
        </div>

        <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-6">
          <h3 className="text-lg font-bold text-white">Target Skill Breakdown</h3>
          <div className="space-y-4">
            {[
              { skill: 'React / Frontend', current: 85, required: 80, status: 'Ready' },
              { skill: 'Node.js & Express', current: 70, required: 75, status: 'Minor Gap' },
              { skill: 'PostgreSQL & Database Design', current: 40, required: 70, status: 'Critical Gap' },
              { skill: 'Docker & Containerization', current: 30, required: 65, status: 'Critical Gap' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-200">{item.skill}</span>
                  <span className="text-slate-400">{item.current}% / {item.required}% target</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${item.current >= item.required ? 'bg-emerald-500' : 'bg-blue-500'}`}
                    style={{ width: `${item.current}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InstitutionDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Institution Portal · Academic year 2026</span>
          <h1 className="text-3xl font-bold text-white">Curriculum & Placement Alignment</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">Connect course outcomes to employer demand, spot cohort-wide skill gaps, and focus placement support where it can make the biggest difference.</p>
        </div>
        <button type="button" onClick={() => window.print()} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white">
          <FileText className="h-4 w-4" /> Export report
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Enrolled cohort" value="840" detail="Across 12 programs" icon={Users} />
        <MetricCard label="Placement readiness" value="72.4%" detail="↑ 5.8 pts this term" icon={Target} accent="text-emerald-400" />
        <MetricCard label="Employer-aligned skills" value="68 / 82" detail="14 skills need coverage" icon={CheckCircle2} />
        <MetricCard label="Open interventions" value="6" detail="3 need attention this month" icon={ClipboardList} accent="text-amber-400" />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 lg:col-span-3">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div><h2 className="text-lg font-bold text-white">Curriculum-to-market coverage</h2><p className="mt-1 text-sm text-slate-400">Skill coverage compared with current role demand</p></div>
            <span className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300">All programs</span>
          </div>
          <div className="space-y-5">
            {[
              { skill: 'Web & application development', coverage: 86, demand: 91 },
              { skill: 'Data engineering', coverage: 72, demand: 84 },
              { skill: 'Cloud & DevOps', coverage: 48, demand: 79 },
              { skill: 'AI engineering', coverage: 61, demand: 76 },
              { skill: 'Cybersecurity', coverage: 54, demand: 68 }
            ].map((item) => (
              <div key={item.skill}>
                <div className="mb-2 flex flex-wrap justify-between gap-2 text-sm"><span className="font-medium text-slate-200">{item.skill}</span><span className="text-slate-400">Curriculum {item.coverage}% <span className="mx-1 text-slate-600">·</span> Demand {item.demand}%</span></div>
                <div className="relative h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-blue-500" style={{ width: `${item.coverage}%` }} /><div className="absolute top-0 h-full w-0.5 bg-amber-300" style={{ left: `${item.demand}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-5 text-xs text-slate-500"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" />Course coverage</span><span className="flex items-center gap-2"><span className="h-2 w-0.5 bg-amber-300" />Employer demand</span></div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 lg:col-span-2">
          <h2 className="text-lg font-bold text-white">Priority skill gaps</h2>
          <p className="mb-5 mt-1 text-sm text-slate-400">Largest readiness gaps across graduating cohorts</p>
          <div className="divide-y divide-slate-800">
            {[
              { skill: 'Cloud deployment', gap: '31 pts', students: '184 learners', color: 'bg-amber-400' },
              { skill: 'Applied data modeling', gap: '24 pts', students: '142 learners', color: 'bg-rose-400' },
              { skill: 'Secure coding practices', gap: '19 pts', students: '96 learners', color: 'bg-blue-400' },
              { skill: 'Technical communication', gap: '14 pts', students: '88 learners', color: 'bg-emerald-400' }
            ].map((item) => (
              <div key={item.skill} className="flex items-center justify-between gap-3 py-4">
                <div className="flex items-center gap-3"><span className={`h-2.5 w-2.5 rounded-full ${item.color}`} /><div><p className="text-sm font-semibold text-slate-200">{item.skill}</p><p className="mt-1 text-xs text-slate-500">{item.students}</p></div></div>
                <span className="text-sm font-bold text-amber-300">-{item.gap}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
        <div className="flex flex-col gap-2 border-b border-slate-800 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-lg font-bold text-white">Program performance</h2><p className="mt-1 text-sm text-slate-400">Readiness and placement outcomes by department</p></div><button type="button" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300">View all programs <ArrowUpRight className="h-4 w-4" /></button></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[640px] text-left text-sm"><thead className="bg-slate-950/50 text-xs uppercase text-slate-500"><tr><th className="px-6 py-3 font-medium">Program</th><th className="px-6 py-3 font-medium">Students</th><th className="px-6 py-3 font-medium">Readiness</th><th className="px-6 py-3 font-medium">Placed</th><th className="px-6 py-3 font-medium">Trend</th></tr></thead><tbody className="divide-y divide-slate-800 text-slate-300">{[
          ['Computer Science', '286', '81%', '74%', '+8.2%'], ['Information Technology', '214', '73%', '66%', '+4.1%'], ['Electronics & Data Systems', '192', '68%', '59%', '+6.7%'], ['Applied Mathematics', '148', '64%', '52%', '+2.9%']
        ].map(([program, students, readiness, placed, trend]) => <tr key={program}><td className="px-6 py-4 font-medium text-white">{program}</td><td className="px-6 py-4">{students}</td><td className="px-6 py-4">{readiness}</td><td className="px-6 py-4">{placed}</td><td className="px-6 py-4 text-emerald-400">{trend}</td></tr>)}</tbody></table></div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><div className="flex items-center gap-3"><div className="rounded-lg bg-blue-500/10 p-2 text-blue-400"><CalendarDays className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Upcoming actions</h2><p className="text-xs text-slate-500">Next 30 days</p></div></div><div className="mt-5 space-y-4">{[['Oct 04', 'Cloud lab curriculum review', 'Computer Science · 4 faculty'], ['Oct 11', 'Employer skills roundtable', 'Industry partnerships · 6 employers'], ['Oct 18', 'Placement readiness checkpoint', 'Final-year cohort · 312 learners']].map(([date, title, detail]) => <div key={title} className="flex gap-4 border-l border-slate-700 pl-4"><span className="w-12 shrink-0 text-xs font-semibold text-blue-400">{date}</span><div><p className="text-sm font-medium text-slate-200">{title}</p><p className="mt-1 text-xs text-slate-500">{detail}</p></div></div>)}</div></section>
        <section className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6"><div className="flex items-center gap-3"><div className="rounded-lg bg-blue-500/10 p-2 text-blue-400"><TrendingUp className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Recommended focus</h2><p className="text-xs text-slate-500">Based on demand and cohort proficiency</p></div></div><p className="mt-5 text-sm leading-6 text-slate-300">Add a hands-on cloud deployment module to the second-year project sequence. Current employer demand is high, while fewer than half of learners meet the target proficiency.</p><div className="mt-4 flex flex-wrap gap-2"><span className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-400">Cloud & DevOps</span><span className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-400">High impact</span></div></section>
      </div>
    </div>
  );
}

function IndustryDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <div>
        <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Industry Portal</span>
        <h1 className="text-3xl font-bold text-white">Talent Sourcing & Job Mapping</h1>
      </div>

      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
        <h3 className="text-lg font-bold text-white mb-4">Active Role Requirements</h3>
        <p className="text-slate-400 text-sm">Post job requirement skill models to search and match qualified students based on verified proficiency scores.</p>
      </div>
    </div>
  );
}

function GovernmentDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Government Portal · Workforce intelligence</span><h1 className="text-3xl font-bold text-white">Regional Skills & Employment Outlook</h1><p className="mt-2 max-w-2xl text-sm text-slate-400">Track workforce readiness, compare regional demand with learner supply, and monitor the reach of public skill-development programs.</p></div><button type="button" onClick={() => window.print()} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"><FileText className="h-4 w-4" /> Export briefing</button></div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><MetricCard label="Learners assessed" value="48,260" detail="Across 18 districts" icon={Users} /><MetricCard label="In-demand roles" value="126" detail="Across 9 sectors" icon={Briefcase} /><MetricCard label="Skills supply gap" value="22.8%" detail="↓ 3.4 pts this quarter" icon={BarChart3} accent="text-amber-400" /><MetricCard label="Program completion" value="76.2%" detail="31,904 completions" icon={CheckCircle2} accent="text-emerald-400" /></div>

      <div className="grid gap-6 lg:grid-cols-5">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 lg:col-span-3"><div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><h2 className="text-lg font-bold text-white">Regional workforce snapshot</h2><p className="mt-1 text-sm text-slate-400">Readiness index and priority skill gaps by region</p></div><span className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300"><MapPin className="h-3.5 w-3.5 text-blue-400" />All regions</span></div><div className="space-y-5">{[
          { region: 'North District', learners: '8,420', readiness: 78, gap: 'Cloud skills' }, { region: 'Central District', learners: '11,280', readiness: 72, gap: 'Data analytics' }, { region: 'Coastal District', learners: '9,640', readiness: 69, gap: 'Cybersecurity' }, { region: 'Western District', learners: '10,150', readiness: 64, gap: 'Advanced manufacturing' }, { region: 'Eastern District', learners: '8,770', readiness: 58, gap: 'Cloud skills' }
        ].map((region) => <div key={region.region} className="grid gap-2 sm:grid-cols-[1.2fr_2fr_1fr] sm:items-center"><div><p className="text-sm font-semibold text-slate-200">{region.region}</p><p className="text-xs text-slate-500">{region.learners} learners</p></div><div className="flex items-center gap-3"><div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800"><div className={`h-full rounded-full ${region.readiness >= 70 ? 'bg-emerald-500' : 'bg-amber-400'}`} style={{ width: `${region.readiness}%` }} /></div><span className="w-10 text-right text-sm text-slate-300">{region.readiness}%</span></div><span className="text-xs text-slate-500">Gap: <span className="text-slate-300">{region.gap}</span></span></div>)}</div><p className="mt-5 border-t border-slate-800 pt-4 text-xs text-slate-500">Regional figures are aggregated prototype data for planning demonstration.</p></section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 lg:col-span-2"><h2 className="text-lg font-bold text-white">Demand by sector</h2><p className="mb-5 mt-1 text-sm text-slate-400">Open role demand, next 12 months</p><div className="space-y-4">{[
          { sector: 'Technology services', value: '18.4k', percent: 88, color: 'bg-blue-400' }, { sector: 'Advanced manufacturing', value: '12.1k', percent: 67, color: 'bg-cyan-400' }, { sector: 'Healthcare technology', value: '9.6k', percent: 53, color: 'bg-emerald-400' }, { sector: 'Financial services', value: '7.8k', percent: 44, color: 'bg-amber-400' }, { sector: 'Clean energy', value: '5.2k', percent: 31, color: 'bg-rose-400' }
        ].map((sector) => <div key={sector.sector}><div className="mb-1.5 flex justify-between gap-3 text-sm"><span className="text-slate-300">{sector.sector}</span><span className="font-semibold text-white">{sector.value}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-slate-800"><div className={`h-full rounded-full ${sector.color}`} style={{ width: `${sector.percent}%` }} /></div></div>)}</div></section>
      </div>

      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"><div className="flex flex-col gap-2 border-b border-slate-800 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-lg font-bold text-white">Skills programs & outcomes</h2><p className="mt-1 text-sm text-slate-400">Reach, completion and placement across active initiatives</p></div><span className="text-xs text-slate-500">Updated September 2026</span></div><div className="overflow-x-auto"><table className="w-full min-w-[700px] text-left text-sm"><thead className="bg-slate-950/50 text-xs uppercase text-slate-500"><tr><th className="px-6 py-3 font-medium">Initiative</th><th className="px-6 py-3 font-medium">Region</th><th className="px-6 py-3 font-medium">Enrolled</th><th className="px-6 py-3 font-medium">Completed</th><th className="px-6 py-3 font-medium">Placed / advanced</th><th className="px-6 py-3 font-medium">Status</th></tr></thead><tbody className="divide-y divide-slate-800 text-slate-300">{[
          ['Digital Skills Mission', 'Statewide', '12,400', '9,180', '6,240', 'On track'], ['Women in Tech Pathways', 'Central + East', '4,820', '3,760', '2,980', 'On track'], ['Rural Cloud Careers', 'North + West', '3,600', '2,340', '1,420', 'Needs focus'], ['Advanced Manufacturing 4.0', 'Western', '5,140', '3,920', '2,610', 'On track']
        ].map(([initiative, region, enrolled, completed, placed, status]) => <tr key={initiative}><td className="px-6 py-4 font-medium text-white">{initiative}</td><td className="px-6 py-4">{region}</td><td className="px-6 py-4">{enrolled}</td><td className="px-6 py-4">{completed}</td><td className="px-6 py-4">{placed}</td><td className="px-6 py-4"><span className={`rounded-md px-2 py-1 text-xs ${status === 'On track' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-300'}`}>{status}</span></td></tr>)}</tbody></table></div></section>

      <div className="grid gap-6 md:grid-cols-2"><section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><div className="flex items-center gap-3"><div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400"><MapPin className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Regional priorities</h2><p className="text-xs text-slate-500">Signals for targeted investment</p></div></div><ul className="mt-5 space-y-3 text-sm text-slate-300"><li className="flex gap-3"><span className="font-semibold text-cyan-400">01</span><span>Expand cloud infrastructure training in eastern and northern districts.</span></li><li className="flex gap-3"><span className="font-semibold text-cyan-400">02</span><span>Increase employer-led projects in advanced manufacturing programs.</span></li><li className="flex gap-3"><span className="font-semibold text-cyan-400">03</span><span>Prioritize placement support for cohorts with completion above 70%.</span></li></ul></section><section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"><div className="flex items-center gap-3"><div className="rounded-lg bg-amber-500/10 p-2 text-amber-300"><CalendarDays className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Policy review calendar</h2><p className="text-xs text-slate-500">Upcoming milestones</p></div></div><div className="mt-5 space-y-4">{[['Oct 08', 'Quarterly skills demand review', 'Labor market intelligence'], ['Oct 16', 'District program progress review', 'Regional development teams'], ['Oct 29', 'Employer council briefing', 'Priority sectors and role outlook']].map(([date, title, detail]) => <div key={title} className="flex gap-4 border-l border-slate-700 pl-4"><span className="w-12 shrink-0 text-xs font-semibold text-amber-300">{date}</span><div><p className="text-sm font-medium text-slate-200">{title}</p><p className="mt-1 text-xs text-slate-500">{detail}</p></div></div>)}</div></section></div>
    </div>
  );
}

function MetricCard({ label, value, detail, icon: Icon, accent = 'text-white' }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex items-start justify-between gap-3"><div><p className="text-sm text-slate-400">{label}</p><p className={`mt-2 text-2xl font-bold ${accent}`}>{value}</p></div><span className="rounded-lg bg-slate-800 p-2 text-blue-400"><Icon className="h-4 w-4" /></span></div>
      <p className="mt-2 text-xs text-slate-500">{detail}</p>
    </section>
  );
}
