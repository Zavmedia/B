import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TradingCandlesticks } from "@/components/TradingCandlesticks";
import { Floating3DElements } from "@/components/Floating3DElements";
import { AnimatedSphere } from "@/components/AnimatedSphere";
import { MarketTicker } from "@/components/MarketTicker";
import { Award, Users, BookOpen, TrendingUp, Shield, Target, Zap, MessageSquare, Calendar, Star, BadgeCheck, GraduationCap, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logoIcon from "@/assets/logo-icon.ico";
import bluemantleLogo from "@/assets/bluemantle-logo.png";
import GradientButton from "@/components/GradientButton";
import ApplyButton from "@/components/ApplyButton";
import { ArrowRight } from "lucide-react";
const Home = () => {
  const {
    toast
  } = useToast();

  // Check for submission success notification
  useEffect(() => {
    const submissionSuccess = sessionStorage.getItem('submission_success');
    if (submissionSuccess === 'true') {
      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "We'll contact you soon to discuss your trading journey.",
        duration: 10000
      });
      sessionStorage.removeItem('submission_success');
    }
  }, [toast]);
  const stats = [{
    value: "24,400+",
    label: "Students Enrolled"
  }, {
    value: "NISM",
    label: "Certified Mentors"
  }, {
    value: "38+",
    label: "Weekly Live Classes"
  }, {
    value: "4.8★",
    label: "Average Rating"
  }];
  const features = [{
    icon: Target,
    title: "Quality Learning",
    desc: "Structured curriculum for all levels"
  }, {
    icon: Users,
    title: "Expert Guidance",
    desc: "NISM certified mentors"
  }, {
    icon: Calendar,
    title: "Flexible Batches",
    desc: "Learn at your own pace"
  }, {
    icon: Zap,
    title: "Live Training",
    desc: "Real-time market sessions"
  }, {
    icon: BookOpen,
    title: "No Prerequisites",
    desc: "Start from scratch"
  }, {
    icon: Shield,
    title: "Lifetime Support",
    desc: "Ongoing guidance & assistance"
  }, {
    icon: BadgeCheck,
    title: "Central Govt. Approved",
    desc: "Skill India Registered Program"
  }, {
    icon: GraduationCap,
    title: "Certification Support",
    desc: "Industry-Relevant Certificates"
  }, {
    icon: FileText,
    title: "Premium Study Materials",
    desc: "Exclusive notes & learning resources"
  }];
  const specialFeatures = ["WhatsApp Premium Community Support", "News Updates & Trading Plan Guidance", "Funded Accounts Assistance & Guidance", "Trading Psychology Sessions", "Revision Classes & Study Materials", "Dedicated Trading Floor Access"];
  return <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy gradient-animated opacity-50" />

      {/* Animated candlesticks */}
      <TradingCandlesticks />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
            <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
              <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Central Govt Approved & Skill India Aligned
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 leading-[1.15] break-words tracking-tight">
              Master <span className="text-gradient-cyan">Forex & Stock Market.</span>
              <br />
              Build Wealth.{" "}
              <span className="text-gradient-gold">Transform Your Future.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Empowering you with <strong>advanced strategies</strong> and <strong>state-of-the-art tech</strong> in the local markets of <strong>Kerala</strong>.
              Join the most innovative hub for <strong>Forex & Stock Market mastery</strong>.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
              <GradientButton
                text="Explore Courses"
                to="/courses"
              />
              <GradientButton
                text="Join Free Webinar"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, i) => <motion.div key={i} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.2 + i * 0.1
              }} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-cyan mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{
        animationDelay: "1s"
      }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" style={{
        animationDelay: "2s"
      }} />
    </section>

    {/* Market Ticker */}
    <MarketTicker />

    {/* Core Features */}
    <section className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
          <h4 className="text-cyan-400 font-bold tracking-widest text-sm mb-4 uppercase">Why Choose Us</h4>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Best Forex & <span className="text-gradient-cyan">Stock Market Training in Kerala</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training designed for your success in financial markets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => <motion.div key={i} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.1
          }}>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group h-full">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </Card>
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* Special Features Grid */}
    <motion.div initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} className="py-20 relative">
      <div className="text-center mb-12">
        <h4 className="text-accent font-bold tracking-[0.2em] text-sm mb-4 uppercase">Exclusive Access</h4>
        <h3 className="text-4xl lg:text-5xl font-bold mb-8">
          Beginner-Friendly <span className="text-accent">Trading Courses in Palakkad</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {specialFeatures.map((feature, i) => <motion.div key={i} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.1
        }}>
          <div className="group flex items-center gap-4 bg-muted/30 border border-white/5 rounded-2xl p-4 hover:bg-muted/50 hover:border-accent/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
              <Star size={18} className="text-accent fill-accent/20" />
            </div>
            <p className="text-gray-200 font-medium text-sm lg:text-base leading-snug">{feature}</p>
          </div>
        </motion.div>)}
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-accent/5 blur-[100px] -z-10 rounded-full" />
    </motion.div>

    {/* Certifications */}
    <section className="py-20 bg-gradient-to-b from-transparent to-card/50 relative overflow-hidden">
      <Floating3DElements />

      {/* Animated spheres */}
      <div className="absolute left-10 top-20 opacity-50">
        <AnimatedSphere size={150} color="purple" delay={0.2} />
      </div>
      <div className="absolute right-10 bottom-20 opacity-50">
        <AnimatedSphere size={120} color="cyan" delay={0.5} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 md:gap-24 mb-10">
            <div className="relative group">
              <div className="absolute inset-x-0 -inset-y-4 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="/skill india logo.png"
                alt="Skill India Mission"
                className="h-24 sm:h-32 md:h-40 w-auto relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gold/40 shadow-[0_0_30px_rgba(234,179,8,0.3)] relative group">
              <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full" />
              <video
                src="/0216.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover relative z-10 scale-110"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-x-0 -inset-y-4 bg-gradient-to-r from-purple-500/30 to-gold/30 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="/WhatsApp Image 2026-02-13 at 12.22.49.jpeg"
                alt="Certification Logo"
                className="h-24 sm:h-32 md:h-40 w-auto relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            NISM Certification <span className="text-gradient-gold">Guidance in Kerala</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get Bluemantle Institute Certification along with NISM Certification Guidance & Exam Assistance.
            Build a strong foundation for your financial market career.
          </p>
          <GradientButton
            text="Get Certified"
            to="/apply"
          />
        </motion.div>
      </div>
    </section>

    {/* Authority Content Section */}
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-1/4 translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative p-8 md:p-12 lg:p-16 rounded-[2.5rem] bg-[#0A0A15]/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-6">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 font-black tracking-[0.25em] text-xs sm:text-sm uppercase py-2">
                    Skill India Aligned Institute
                  </h4>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-1" />
                </motion.div>

                <p className="text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed max-w-4xl mx-auto italic tracking-tight">
                  <span className="text-cyan-400 opacity-50 text-4xl leading-none">"</span>
                  Bluemantle LLP is a government-approved trading institute in Kerala dedicated to delivering practical stock market and forex education. Operating from Palakkad, Bluemantle is aligned with national skill development initiatives and connected to the <span className="text-gradient-cyan font-bold">Skill India ecosystem</span>, helping students gain real-world financial market skills.
                  <span className="text-cyan-400 opacity-50 text-4xl leading-none">"</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 text-base lg:text-lg text-muted-foreground/80 leading-relaxed font-light">
                <div className="space-y-4">
                  <p>
                    As a growing <span className="text-white font-medium">forex and stock market institute in Kerala</span>, Bluemantle focuses on beginner-friendly training, live market learning, and structured trading programs.
                  </p>
                  <p>
                    Our courses are designed for students, professionals, and aspiring traders who want <span className="text-cyan-400 font-medium">practical exposure</span> rather than just theory.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    We also provide <span className="text-gradient-gold font-bold uppercase tracking-wider">NISM certification guidance</span>, helping learners build recognized credentials in the financial market domain.
                  </p>
                  <p>
                    With a focus on discipline, risk management, and real trading knowledge, Bluemantle aims to develop <span className="text-white font-medium">confident and responsible traders</span> in India.
                  </p>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap justify-center gap-6">
                {[
                  "Government-recognized training",
                  "Skill India ecosystem",
                  "Practical NISM guidance"
                ].map((tag, i) => (
                  <motion.span
                    key={tag}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-cyan-400/80 backdrop-blur-md shadow-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Premium Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/20 rounded-tl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/20 rounded-br-[2.5rem]" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 relative overflow-hidden text-gray-50 bg-neutral-950">
      <Floating3DElements />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="bg-gradient-to-br from-[#050510] via-[#0a0a20] to-[#050510] border-2 border-cyan-500/50 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all duration-500">
          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '24px 24px' }} />

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Start Your <span className="text-gradient-cyan">Trading Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders who transformed their lives with Bluemantle
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
              <GradientButton
                text="Apply Now"
                to="/apply"
              />
              <GradientButton
                text="Download Brochure"
                href="/Bluemantle%20Brochure.pdf"
                download="Bluemantle-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{
            animationDelay: "1s"
          }} />
        </motion.div>
      </div>
    </section>
  </div>;
};
export default Home;
