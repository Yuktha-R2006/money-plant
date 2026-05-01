import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  branch: string;
  year: string;
  whyJoin: string;
  experience: string;
  interests: string[];
}

export default function Recruitment() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    branch: '',
    year: '',
    whyJoin: '',
    experience: '',
    interests: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const branches = [
    'Computer Science & Engineering',
    'Information Science & Engineering',
    'Electronics & Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Other'
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  
  const interestOptions = [
    'Trading & Investment',
    'Entrepreneurship',
    'Financial Planning',
    'Market Analysis',
    'Cryptocurrency',
    'Personal Finance',
    'Startup Ideas',
    'Risk Management'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.branch) newErrors.branch = 'Branch is required';
    if (!formData.year) newErrors.year = 'Year is required';
    if (!formData.whyJoin.trim()) newErrors.whyJoin = 'Please tell us why you want to join';
    if (formData.interests.length === 0) newErrors.interests = ['Please select at least one interest'];

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        branch: '',
        year: '',
        whyJoin: '',
        experience: '',
        interests: []
      });

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent to-yellow-500/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Join Money Plant Club
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Become part of our financial literacy movement
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 p-6 bg-yellow-500/20 border border-yellow-500/30 rounded-xl backdrop-blur-sm animate-fadeIn">
            <div className="flex items-center">
              <div className="text-yellow-400 mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold">Application Submitted Successfully!</h3>
                <p className="text-gray-300">We'll review your application and get back to you soon.</p>
              </div>
            </div>
          </div>
        )}

        {/* Registration Form */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                    errors.name ? 'border-red-500' : 'border-yellow-500/30'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                    errors.email ? 'border-red-500' : 'border-yellow-500/30'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                    errors.phone ? 'border-red-500' : 'border-yellow-500/30'
                  }`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Branch *
                </label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                    errors.branch ? 'border-red-500' : 'border-yellow-500/30'
                  }`}
                >
                  <option value="">Select your branch</option>
                  {branches.map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
                {errors.branch && <p className="text-red-400 text-sm mt-1">{errors.branch}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Year of Study *
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                  errors.year ? 'border-red-500' : 'border-yellow-500/30'
                }`}
              >
                <option value="">Select your year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              {errors.year && <p className="text-red-400 text-sm mt-1">{errors.year}</p>}
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Areas of Interest *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {interestOptions.map(interest => (
                  <label
                    key={interest}
                    className="flex items-center p-3 bg-black/50 border border-yellow-500/30 rounded-lg cursor-pointer hover:bg-yellow-500/10 transition-all duration-300"
                  >
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestToggle(interest)}
                      className="mr-2 text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="text-sm text-gray-300">{interest}</span>
                  </label>
                ))}
              </div>
              {errors.interests && <p className="text-red-400 text-sm mt-1">Please select at least one interest</p>}
            </div>

            {/* Why Join */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Why do you want to join Money Plant Club? *
              </label>
              <textarea
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none ${
                  errors.whyJoin ? 'border-red-500' : 'border-yellow-500/30'
                }`}
                placeholder="Tell us about your motivation and what you hope to gain from joining..."
              />
              {errors.whyJoin && <p className="text-red-400 text-sm mt-1">{errors.whyJoin}</p>}
            </div>

            {/* Experience (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Previous Experience (Optional)
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Any previous experience in finance, trading, or entrepreneurship..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Join the Club'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-8 border border-yellow-500/20">
          <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-gray-300">sponsorship@moneyplantclub.com</p>
            </div>
            <div>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>
            <div>
              <p className="text-gray-300">Bangalore, India</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Why Join Money Plant Club?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-8 h-8 mr-3 mt-1 text-yellow-400">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Learn from Experts</h4>
                <p className="text-gray-300 text-sm">Get insights from industry professionals and experienced traders</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 mr-3 mt-1 text-yellow-400">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Network Building</h4>
                <p className="text-gray-300 text-sm">Connect with like-minded students and professionals</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 mr-3 mt-1 text-yellow-400">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Practical Skills</h4>
                <p className="text-gray-300 text-sm">Gain hands-on experience through workshops and events</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 mr-3 mt-1 text-yellow-400">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Career Opportunities</h4>
                <p className="text-gray-300 text-sm">Access internships and job opportunities in finance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
