import React, { useState } from 'react';
import './App.css';
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  Mic,
  Zap,
  Target,
  Loader2
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';

// Hero Section
const HeroSection = () => {
  return (
    <section 
      data-testid="hero-section" 
      className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden noise-overlay"
    >
      {/* Glow effect */}
      <div className="hero-glow" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 
          data-testid="hero-headline"
          className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-light leading-tight tracking-tight mb-6 animate-fade-up"
        >
          Your customers won't know it's AI.
          <br />
          <span className="gradient-text">Your revenue will.</span>
        </h1>
        
        <p 
          data-testid="hero-subheadline"
          className="font-body text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-100"
        >
          Voxy builds AI voice agents that handle inbound calls, qualify leads, and book meetings automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-200">
          <a 
            href="#lead-form"
            data-testid="hero-cta-button"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-heading font-semibold px-8 py-4 rounded-full btn-glow transition-all hover:scale-105"
          >
            Get a Demo Call
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <p 
          data-testid="hero-secondary-text"
          className="font-body text-sm text-slate-500 mt-4 animate-fade-up animate-delay-300"
        >
          No human agents required.
        </p>
        
        {/* Sound wave visualization */}
        <div className="flex items-center justify-center gap-1 mt-12 animate-fade-up animate-delay-400">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="sound-bar w-1 h-8 bg-accent/60 rounded-full"
              style={{ height: `${20 + Math.random() * 20}px` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Zap className="w-7 h-7" />,
      step: "01",
      title: "Lead Comes In",
      description: "Customers submit a form or call your business."
    },
    {
      icon: <Mic className="w-7 h-7" />,
      step: "02",
      title: "AI Speaks Naturally",
      description: "Voxy's AI voice agent talks like a human and understands context."
    },
    {
      icon: <Target className="w-7 h-7" />,
      step: "03",
      title: "Converts or Qualifies",
      description: "Meetings are booked or leads are filtered automatically."
    }
  ];

  return (
    <section 
      data-testid="how-it-works-section" 
      className="py-24 lg:py-32 bg-light"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-heading font-medium text-sm uppercase tracking-widest text-primary mb-3">
            How It Works
          </p>
          <h2 
            data-testid="how-it-works-title"
            className="font-heading font-bold text-3xl md:text-4xl text-slate-900"
          >
            Three steps to automated sales
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              data-testid={`step-card-${index + 1}`}
              className="bg-white border border-light-border rounded-xl p-8 card-lift shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {step.icon}
                </div>
                <span className="font-heading font-bold text-4xl text-slate-200">
                  {step.step}
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="font-body text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Differentiator Section
const DifferentiatorSection = () => {
  return (
    <section 
      data-testid="differentiator-section" 
      className="relative py-24 lg:py-32 bg-dark overflow-hidden noise-overlay"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-heading font-medium text-sm uppercase tracking-widest text-accent mb-4">
          The Reveal
        </p>
        <h2 
          data-testid="differentiator-title"
          className="font-heading font-black text-3xl md:text-5xl text-light mb-8"
        >
          Wait… was that a human?
        </h2>
        <p 
          data-testid="differentiator-text"
          className="font-body text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Voxy's AI voice agents sound natural, handle objections, and adapt in real time. 
          At the end of the call, the AI transparently reveals itself — 
          <span className="text-accent font-medium"> ethical, compliant, and powerful.</span>
        </p>
        
        {/* Mock audio visualization */}
        <div className="mt-12 glass-card rounded-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <button 
              data-testid="audio-play-button"
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-hover transition-colors"
            >
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <div className="flex-1">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-accent rounded-full" />
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-500 font-body">
                <span>0:00</span>
                <span>0:32</span>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-4 font-body">Sample AI call demo</p>
        </div>
      </div>
    </section>
  );
};

// Use Cases Section
const UseCasesSection = () => {
  const useCases = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Inbound Sales Calls",
      description: "Handle incoming sales inquiries 24/7 without missing a lead."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Qualification",
      description: "Automatically qualify and score leads before they reach your team."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment Booking",
      description: "Book meetings directly into your calendar during the call."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Customer Support",
      description: "Resolve common inquiries and route complex issues intelligently."
    }
  ];

  return (
    <section 
      data-testid="use-cases-section" 
      className="py-24 lg:py-32 bg-light"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-heading font-medium text-sm uppercase tracking-widest text-primary mb-3">
            Use Cases
          </p>
          <h2 
            data-testid="use-cases-title"
            className="font-heading font-bold text-3xl md:text-4xl text-slate-900"
          >
            Built for every business need
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              data-testid={`use-case-card-${index + 1}`}
              className="group bg-white border border-light-border rounded-xl p-6 card-lift shadow-sm hover:shadow-lg hover:border-primary/30"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                {useCase.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                {useCase.title}
              </h3>
              <p className="font-body text-sm text-slate-600 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Lead Capture Form Section
const LeadCaptureSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    business_domain: '',
    phone: '',
    use_case: ''
  });

  const businessDomainOptions = [
    'SaaS / Software',
    'E-commerce',
    'Real Estate',
    'Healthcare',
    'Financial Services',
    'Education',
    'Marketing / Agencies',
    'Other'
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.detail || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Unable to submit. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section 
        id="lead-form"
        data-testid="lead-capture-section" 
        className="py-24 lg:py-32 bg-slate-50"
      >
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-light-border">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 
              data-testid="success-message"
              className="font-heading font-bold text-2xl text-slate-900 mb-3"
            >
              Thanks! Our AI will call you shortly.
            </h3>
            <p className="font-body text-slate-600">
              Get ready to experience Voxy in action.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="lead-form"
      data-testid="lead-capture-section" 
      className="py-24 lg:py-32 bg-slate-50"
    >
      <div className="max-w-lg mx-auto px-6">
        <div className="text-center mb-10">
          <p className="font-heading font-medium text-sm uppercase tracking-widest text-primary mb-3">
            Get Started
          </p>
          <h2 
            data-testid="lead-form-title"
            className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4"
          >
            See Voxy in Action
          </h2>
          <p className="font-body text-slate-600">
            Submit your details and our team will call you.
          </p>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          data-testid="lead-capture-form"
          className="bg-white rounded-2xl p-8 shadow-lg border border-light-border"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-body text-sm font-medium text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                data-testid="input-name"
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg font-body text-slate-900 input-focus focus:outline-none"
                placeholder="John Smith"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-body text-sm font-medium text-slate-700 mb-2">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                data-testid="input-email"
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg font-body text-slate-900 input-focus focus:outline-none"
                placeholder="john@company.com"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block font-body text-sm font-medium text-slate-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                data-testid="input-company"
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg font-body text-slate-900 input-focus focus:outline-none"
                placeholder="Acme Inc."
              />
            </div>
            
            <div>
              <label htmlFor="business_domain" className="block font-body text-sm font-medium text-slate-700 mb-2">
                Business Domain
              </label>
              <select
                id="business_domain"
                name="business_domain"
                value={formData.business_domain}
                onChange={handleChange}
                required
                data-testid="input-business-domain"
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg font-body text-slate-900 input-focus focus:outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled>Select your business domain</option>
                {businessDomainOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="phone" className="block font-body text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                data-testid="input-phone"
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg font-body text-slate-900 input-focus focus:outline-none"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div>
              <label htmlFor="use_case" className="block font-body text-sm font-medium text-slate-700 mb-2">
                Use Case
              </label>
              <textarea
                id="use_case"
                name="use_case"
                value={formData.use_case}
                onChange={handleChange}
                rows={3}
                data-testid="input-use-case"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg font-body text-slate-900 input-focus focus:outline-none resize-none"
                placeholder="Tell us about your use case..."
              />
            </div>
          </div>
          
          {error && (
            <p data-testid="form-error" className="mt-4 text-red-600 text-sm font-body">
              {error}
            </p>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            data-testid="submit-button"
            className="w-full mt-6 h-14 bg-primary hover:bg-primary-hover text-white font-heading font-semibold rounded-full btn-glow transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Get My AI Demo Call'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer 
      data-testid="footer-section" 
      className="py-8 bg-dark border-t border-dark-border"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-body text-slate-500 text-sm">
          © Voxy — AI Voice Agents
        </p>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <div className="App">
      <HeroSection />
      <HowItWorksSection />
      <DifferentiatorSection />
      <UseCasesSection />
      <LeadCaptureSection />
      <Footer />
    </div>
  );
}

export default App;
