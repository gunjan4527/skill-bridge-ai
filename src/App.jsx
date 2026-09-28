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
  FileText
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing'); // landing, student, institution, industry, government

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
            <button className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 transition-colors">
              Login
            </button>
            <button 
              onClick={() => setActiveTab('student')}
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
      <div>
        <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Institution Portal</span>
        <h1 className="text-3xl font-bold text-white">Curriculum & Placement Alignment</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
          <div className="text-slate-400 text-sm">Enrolled Cohort</div>
          <div className="text-3xl font-bold text-white mt-2">840 Students</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
          <div className="text-slate-400 text-sm">Avg Placement Readiness</div>
          <div className="text-3xl font-bold text-emerald-400 mt-2">72.4%</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
          <div className="text-slate-400 text-sm">Top Missing Skill</div>
          <div className="text-3xl font-bold text-amber-400 mt-2">Cloud DevOps</div>
        </div>
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
      <div>
        <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Government Portal</span>
        <h1 className="text-3xl font-bold text-white">Regional Skill & Workforce Intelligence</h1>
      </div>

      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
        <h3 className="text-lg font-bold text-white mb-4">State Workforce Skill Gap Map</h3>
        <p className="text-slate-400 text-sm">Monitor supply and demand trends across regions to allocate skill development funding and initiatives.</p>
      </div>
    </div>
  );
}
