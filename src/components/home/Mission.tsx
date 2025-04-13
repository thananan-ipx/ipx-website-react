import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

const Mission = () => {
  const { language } = useLocalization();
  const translations = {
    en: {
      mission: {
        title: "OUR MISSION",
        subtitle: "In the growing IT market and software-driven era, our mission is to expand our team into a larger organization with the following key goals:",
        goals: [
          {
            title: "Innovation",
            description: "Drive global business through innovation."
          },
          {
            title: "Quality",
            description: "Deliver quality beyond just functional software."
          }
        ],
        learnMore: "Learn More"
      }
    },
    th: {
      mission: {
        title: "ภารกิจของเรา",
        subtitle: "ในยุคที่ตลาดไอทีและซอฟต์แวร์กำลังเติบโต ภารกิจของเราคือการขยายทีมงานให้เป็นองค์กรขนาดใหญ่ด้วยเป้าหมายหลักดังนี้:",
        goals: [
          {
            title: "นวัตกรรม",
            description: "ขับเคลื่อนธุรกิจระดับโลกผ่านนวัตกรรม"
          },
          {
            title: "คุณภาพ",
            description: "ส่งมอบคุณภาพที่มากกว่าซอฟต์แวร์ที่ใช้งานได้"
          }
        ],
        learnMore: "เรียนรู้เพิ่มเติม"
      }
    }
  };

  const t = translations[language]?.mission || translations.en.mission;

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/mission1.jpg" 
              alt={t.title} 
              className="rounded-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary/20 w-full h-full rounded-2xl -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.title}</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            
            <div className="glass-card p-6 rounded-lg mb-8">
              <p className="text-gray-800 dark:text-white">
                {t.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {t.goals.map((goal, index) => (
                <div key={index} className="card-gradient p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{goal.title}</h3>
                  <p className="text-gray-800 dark:text-gray-400">{goal.description}</p>
                </div>
              ))}
            </div>
            
            <Link to="/about">
              <Button className="blue-gradient">{t.learnMore}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
