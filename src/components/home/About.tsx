import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

const About = () => {
  const { language } = useLocalization();
  const translations = {
    en: {
      about: {
        title: "ABOUT US",
        description: "Our story began as three freelancers working tirelessly to meet client needs. Today, we are a thriving team committed to providing innovative and reliable web applications.",
        mission: "We aim to be your trusted partner in achieving success through technology. With years of experience and a focus on adaptability, we're here to bring your vision to life.",
        story: "I Progress X was founded by a team of passionate software engineers who share a vision of delivering high-quality, custom web applications. From our humble beginnings as freelancers to establishing a dedicated company, we've always prioritized understanding our clients' needs and delivering solutions that exceed expectations.",
        learnMore: "Learn More",
        alt: {
          teamCollaboration: "Team collaboration",
          businessPlanning: "Business planning",
          teamMeeting: "Team meeting",
          officeWork: "Office work",
        },
      },
    },
    th: {
      about: {
        title: "เกี่ยวกับเรา",
        description: "เรื่องราวของเราเริ่มต้นจากการเป็นฟรีแลนซ์สามคนที่ทำงานอย่างหนักเพื่อให้บริการลูกค้า ปัจจุบันเราเป็นทีมที่กำลังเติบโตและมุ่งมั่นที่จะให้บริการแอปพลิเคชันเว็บที่นวัตกรรมและน่าเชื่อถือ",
        mission: "เรามุ่งหวังที่จะเป็นพันธมิตรที่เชื่อถือได้ในการช่วยให้คุณประสบความสำเร็จผ่านเทคโนโลยี ด้วยประสบการณ์หลายปีและการเน้นการปรับตัว เราพร้อมที่จะนำวิสัยทัศน์ของคุณมาสู่ชีวิต",
        story: "I Progress X ก่อตั้งโดยทีมวิศวกรซอฟต์แวร์ที่มีความหลงใหลในด้านนี้และมีวิสัยทัศน์ในการส่งมอบแอปพลิเคชันเว็บที่มีคุณภาพสูงและเหมาะสมกับความต้องการของลูกค้า จากการเริ่มต้นในฐานะฟรีแลนซ์จนถึงการก่อตั้งบริษัทที่มีความมุ่งมั่น เราให้ความสำคัญกับการเข้าใจความต้องการของลูกค้าและการส่งมอบโซลูชันที่เกินความคาดหวัง",
        learnMore: "เรียนรู้เพิ่มเติม",
        alt: {
          teamCollaboration: "ความร่วมมือของทีม",
          businessPlanning: "การวางแผนธุรกิจ",
          teamMeeting: "การประชุมทีม",
          officeWork: "การทำงานในสำนักงาน",
        },
      },
    },
  };

  const t = translations[language]?.about || translations.en.about;

  return (
    <section className="py-20 bg-secondary/50 dark:bg-secondary-dark/80">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">{t.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-800 dark:text-gray-200 whitespace-preline">{t.description}</p>
            <div className="glass-card p-6 rounded-lg">
              <p className="text-gray-800 dark:text-gray-300 whitespace-preline">{t.mission}</p>
            </div>
            <p className="text-gray-800 dark:text-gray-200 whitespace-preline">{t.story}</p>
            <Link to="/about">
              <Button className="blue-gradient mt-4">{t.learnMore}</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/about1.jpg"
                alt={t.alt.teamCollaboration}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg mt-8">
              <img
                src="/lovable-uploads/about2.jpg"
                alt={t.alt.businessPlanning}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/about3.jpg"
                alt={t.alt.teamMeeting}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg mt-8">
              <img
                src="/lovable-uploads/about4.jpg"
                alt={t.alt.officeWork}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
