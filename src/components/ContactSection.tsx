import { useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Twitter,
  Youtube,
} from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Course Admissions');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (message.trim().length < 10) {
      nextErrors.message = 'Please include a short message (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Information & Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-700 mb-3">Contact Us</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance mb-5">
                Speak with an admissions mentor.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-10">
                Have questions about course prerequisites, scholarship support, or corporate team
                training? Reach out and our academic advising team will respond within one business
                day.
              </p>

              <dl className="space-y-6 border-t border-slate-200 pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-700 shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">Email</dt>
                    <dd className="text-sm sm:text-base font-medium text-slate-900">
                      <a
                        href="mailto:admissions@skillup.edu"
                        className="hover:text-blue-700 transition-colors"
                      >
                        admissions@skillup.edu
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-700 shrink-0">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">Admissions Helpline</dt>
                    <dd className="font-mono text-sm sm:text-base font-medium text-slate-900 tabular-nums">
                      +1 (415) 890-4320
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-700 shrink-0">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">Learning Hubs</dt>
                    <dd className="text-sm sm:text-base font-medium text-slate-900">
                      548 Market St, San Francisco · Indiranagar, Bengaluru
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Social Media Links */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-500 mb-3">Connect with SkillUp</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SkillUp on LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SkillUp on GitHub"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-300 transition-colors"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SkillUp on X"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-300 transition-colors"
                >
                  <Twitter className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SkillUp on YouTube"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-300 transition-colors"
                >
                  <Youtube className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Message Received
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{name}</span>. An
                    advisor from our {topic} team will reply to{' '}
                    <span className="font-semibold text-slate-900">{email}</span> shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                      Send us a message
                    </h3>
                    <p className="text-sm text-slate-500">
                      All fields marked below help us route your question to the right mentor.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-slate-800 mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder="Maya Lin"
                        aria-invalid={Boolean(errors.name)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                          errors.name ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-slate-800 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="maya@example.com"
                        aria-invalid={Boolean(errors.email)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                          errors.email ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
                    >
                      <option value="Course Admissions">Course Admissions</option>
                      <option value="Python or Java Track">Python or Java Track</option>
                      <option value="Full Stack Web Development">Full Stack Web Development</option>
                      <option value="Data Science Program">Data Science Program</option>
                      <option value="Career & Interview Coaching">Career & Interview Coaching</option>
                      <option value="Scholarship Inquiry">Scholarship Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Tell us about your learning goals or questions..."
                      aria-invalid={Boolean(errors.message)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 resize-y ${
                        errors.message ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:scale-[0.99] rounded-xl transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
