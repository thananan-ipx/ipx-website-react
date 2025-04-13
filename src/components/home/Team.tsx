import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLocalization } from "@/contexts/LocalizationContext";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Varakorn Thapthimthong",
    position: "Founder & CTO",
    image: "/lovable-uploads/team3.png"
  },
  {
    id: 2,
    name: "Sirawit Boongthong",
    position: "Founder & CEO",
    image: "/lovable-uploads/team2.png"
  },
  {
    id: 3,
    name: "Thananan Thermsirisuksin",
    position: "Founder",
    image: "/lovable-uploads/team1.png"
  }
];

const Team = () => {
  const { language } = useLocalization();
  const translations = {
    en: {
      title: "MEET OUR TEAM",
      description: "We are a team of creative visionaries and industry experts committed to delivering exceptional software solutions. With a passion for innovation and a focus on excellence, we combine experience with fresh perspectives to elevate your business and unlock its full potential.",
      viewAllButton: "View All Team Members"
    },
    th: {
      title: "พบกับทีมงานของเรา",
      description: "เราคือทีมงานที่ประกอบไปด้วยวิสัยทัศน์สร้างสรรค์และผู้เชี่ยวชาญในอุตสาหกรรมที่มุ่งมั่นในการให้บริการซอฟต์แวร์ที่ยอดเยี่ยม ด้วยความหลงใหลในการสร้างนวัตกรรมและมุ่งมั่นสู่ความเป็นเลิศ เรานำประสบการณ์มาผสมผสานกับมุมมองใหม่เพื่อยกระดับธุรกิจของคุณและปลดล็อกศักยภาพสูงสุด",
      viewAllButton: "ดูสมาชิกทีมทั้งหมด"
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-primary">{member.position}</p>
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <a href="#" className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/team">
            <Button className="blue-gradient">{t.viewAllButton}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
