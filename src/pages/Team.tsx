import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocalization } from "@/contexts/LocalizationContext";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Varakorn Thapthimthong",
    position: "Founder & CTO",
    bio: "Leading our technology strategy and development processes. Expert in software architecture and cutting-edge technologies.",
    image: "/lovable-uploads/team3.png",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Sirawit Boongthong",
    position: "Founder & CEO",
    bio: "Driving the company's vision and business strategy. Experienced in project management and client relations.",
    image: "/lovable-uploads/team2.png",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Thananan Thermsirisuksin",
    position: "Founder",
    bio: "Key contributor to the company's founding and strategic direction. Specializes in business development and marketing.",
    image: "/lovable-uploads/team1.png",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const Team = () => {
  const { language } = useLocalization();
  const translations = {
    en: {
      teamPage: {
        title: "MEET OUR TEAM",
        description:
          "We are a team of creative visionaries and industry experts committed to delivering exceptional software solutions. With a passion for innovation and a focus on excellence, we combine experience with fresh perspectives to elevate your business and unlock its full potential.",
        joinOurTeam: "JOIN OUR TEAM",
        joinOurTeamDescription:
          "We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you.",
        whyWorkWithUs: "Why Work With Us?",
        innovationCulture: "Innovation Culture",
        innovationCultureDescription: "We foster a culture that encourages innovation and creativity",
        professionalGrowth: "Professional Growth",
        professionalGrowthDescription: "Opportunities for learning and career advancement",
        collaborativeEnvironment: "Collaborative Environment",
        collaborativeEnvironmentDescription: "Work with a diverse team of talented professionals",
        excitingProjects: "Exciting Projects",
        excitingProjectsDescription: "Work on challenging and meaningful projects",
        sendResume: "Interested in joining our team? Send your resume to:",
        documentTitle: "Our Team | I Progress X Co., Ltd.",
      },
    },
    th: {
      teamPage: {
        title: "พบกับทีมงานของเรา",
        description:
          "เราคือทีมงานของผู้มีวิสัยทัศน์เชิงสร้างสรรค์และผู้เชี่ยวชาญในอุตสาหกรรมที่มุ่งมั่นที่จะส่งมอบโซลูชันซอฟต์แวร์ที่ยอดเยี่ยม ด้วยความหลงใหลในนวัตกรรมและความมุ่งเน้นที่ความเป็นเลิศ เราจึงผสมผสานประสบการณ์เข้ากับมุมมองใหม่ๆ เพื่อยกระดับธุรกิจของคุณและปลดล็อกศักยภาพสูงสุด",
        joinOurTeam: "ร่วมงานกับเรา",
        joinOurTeamDescription:
          "เรามองหาบุคคลที่มีความสามารถอยู่เสมอเพื่อเข้าร่วมทีมของเรา หากคุณหลงใหลในเทคโนโลยีและนวัตกรรม เรายินดีที่จะรับฟังจากคุณ",
        whyWorkWithUs: "ทำไมถึงร่วมงานกับเรา",
        innovationCulture: "วัฒนธรรมแห่งนวัตกรรม",
        innovationCultureDescription: "เราส่งเสริมวัฒนธรรมที่สนับสนุนนวัตกรรมและความคิดสร้างสรรค์",
        professionalGrowth: "การเติบโตทางวิชาชีพ",
        professionalGrowthDescription: "โอกาสในการเรียนรู้และความก้าวหน้าในอาชีพ",
        collaborativeEnvironment: "สภาพแวดล้อมที่ส่งเสริมการทำงานร่วมกัน",
        collaborativeEnvironmentDescription: "ทำงานร่วมกับทีมงานมืออาชีพที่มีความสามารถหลากหลาย",
        excitingProjects: "โครงการที่น่าตื่นเต้น",
        excitingProjectsDescription: "ทำงานในโครงการที่ท้าทายและมีความหมาย",
        sendResume: "สนใจร่วมงานกับเราหรือไม่ ส่งประวัติย่อของคุณไปที่:",
        documentTitle: "ทีมงานของเรา | บริษัท ไอ โปรเกรส เอ็กซ์ จำกัด",
      },
    },
  };

  const t = translations[language]?.teamPage || translations.en.teamPage;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t.documentTitle;
  }, [t.documentTitle]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">{t.title}</h1>
              <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
              <p className="mt-6 text-gray-400 max-w-2xl mx-auto preline">
                {t.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  <div className="bg-secondary/70 rounded-xl overflow-hidden shadow-lg">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-primary mb-3">{member.position}</p>
                      <p className="text-gray-400 mb-6 preline">{member.bio}</p>

                      <div className="flex space-x-4">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          </a>
                        )}
                        {member.social.github && (
                          <a href={member.social.github} className="text-gray-400 hover:text-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t.joinOurTeam}</h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
              <p className="mt-6 text-gray-400 max-w-2xl mx-auto preline">
                {t.joinOurTeamDescription}
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">{t.whyWorkWithUs}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t.innovationCulture}</h4>
                    <p className="text-gray-400 preline">{t.innovationCultureDescription}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t.professionalGrowth}</h4>
                    <p className="text-gray-400 preline">{t.professionalGrowthDescription}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t.collaborativeEnvironment}</h4>
                    <p className="text-gray-400 preline">{t.collaborativeEnvironmentDescription}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t.excitingProjects}</h4>
                    <p className="text-gray-400 preline">{t.excitingProjectsDescription}</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="mb-4">{t.sendResume}</p>
                <a href="mailto:thananan.th@iprogressx.co.th" className="text-primary hover:underline font-semibold">
                  thananan.th@iprogressx.co.th
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;