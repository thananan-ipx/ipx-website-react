import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext"; // นำเข้า useLocalization

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="card-gradient rounded-lg p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-800 dark:text-gray-400">{description}</p>
    </div>
  );
};

const Services = () => {
  const { language } = useLocalization();

  const translations = {
    en: {
      services: {
        title: "OUR BEST SERVICE",
        description: "I Progress X specializes in web development using Agile methodology. Our team includes a Project Manager, System Analyst, Software Engineer, Quality Assurance, Network Engineer, and UX/UI Designer.",
        businessDesign: {
          title: "Business Design",
          description: "Extracting requirements and designing business solutions tailored to maximize client satisfaction."
        },
        softwareDesign: {
          title: "Software Design",
          description: "Designing software using UML, including Use Case Diagrams, Use Case Descriptions, Activity Diagrams, and more."
        },
        uiuxDesign: {
          title: "UI/UX Design",
          description: "Crafting modern UI/UX designs that meet contemporary standards and address client needs."
        },
        development: {
          title: "Development",
          description: "Developing web and mobile applications that precisely align with business requirements using suitable programming languages."
        },
        infrastructure: {
          title: "Infrastructure",
          description: "Installing and configuring server infrastructure for clients requiring setup and configuration for operational use."
        },
        qualityAssurance: {
          title: "Quality Assurance",
          description: "Ensuring software quality through comprehensive testing that meets client specifications."
        },
        viewAll: "View All Services",
      },
    },
    th: {
      services: {
        title: "บริการที่ดีที่สุดของเรา",
        description: "I Progress X เชี่ยวชาญในการพัฒนาเว็บโดยใช้กระบวนการ Agile ทีมของเราประกอบด้วยผู้จัดการโปรเจ็กต์, นักวิเคราะห์ระบบ, วิศวกรซอฟต์แวร์, ผู้รับรองคุณภาพ, วิศวกรเครือข่าย, และนักออกแบบ UI/UX",
        businessDesign: {
          title: "การออกแบบธุรกิจ",
          description: "การสกัดความต้องการและการออกแบบโซลูชันธุรกิจที่เหมาะสมเพื่อเพิ่มความพึงพอใจสูงสุดแก่ลูกค้า"
        },
        softwareDesign: {
          title: "การออกแบบซอฟต์แวร์",
          description: "การออกแบบซอฟต์แวร์โดยใช้ UML รวมถึงแผนผัง Use Case, รายละเอียด Use Case, แผนผัง Activity และอื่นๆ"
        },
        uiuxDesign: {
          title: "การออกแบบ UI/UX",
          description: "การสร้างการออกแบบ UI/UX ที่ทันสมัยและตอบโจทย์ความต้องการของลูกค้า"
        },
        development: {
          title: "การพัฒนา",
          description: "การพัฒนาแอปพลิเคชันเว็บและมือถือที่ตรงกับความต้องการทางธุรกิจโดยใช้ภาษาการเขียนโปรแกรมที่เหมาะสม"
        },
        infrastructure: {
          title: "โครงสร้างพื้นฐาน",
          description: "การติดตั้งและการตั้งค่าโครงสร้างพื้นฐานของเซิร์ฟเวอร์สำหรับลูกค้าที่ต้องการการติดตั้งและการกำหนดค่าเพื่อการใช้งาน"
        },
        qualityAssurance: {
          title: "การรับประกันคุณภาพ",
          description: "การรับประกันคุณภาพซอฟต์แวร์ผ่านการทดสอบที่ครอบคลุมตามข้อกำหนดของลูกค้า"
        },
        viewAll: "ดูบริการทั้งหมด",
      },
    },
  };

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{translations[language].services.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-6 text-gray-800 dark:text-gray-400 max-w-2xl mx-auto">
            {translations[language].services.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-on-scroll">
            <ServiceCard 
              title={translations[language].services.businessDesign.title} 
              description={translations[language].services.businessDesign.description} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/></svg>}
            />
          </div>
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <ServiceCard 
              title={translations[language].services.softwareDesign.title} 
              description={translations[language].services.softwareDesign.description} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 17L10 11 4 5"/><path d="M12 19L20 19"/></svg>}
            />
          </div>
          <div className="animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <ServiceCard 
              title={translations[language].services.uiuxDesign.title} 
              description={translations[language].services.uiuxDesign.description} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>}
            />
          </div>
          <div className="animate-on-scroll" style={{ animationDelay: "0.6s" }}>
            <ServiceCard 
              title={translations[language].services.development.title} 
              description={translations[language].services.development.description} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15v-1h6v1"/><path d="M11 11v6"/><path d="M9 18h4"/></svg>}
            />
          </div>
          <div className="animate-on-scroll" style={{ animationDelay: "0.8s" }}>
            <ServiceCard 
              title={translations[language].services.infrastructure.title} 
              description={translations[language].services.infrastructure.description} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><path d="M6 8V6h12v2"/></svg>}
            />
          </div>
          <div className="animate-on-scroll" style={{ animationDelay: "1s" }}>
            <ServiceCard 
              title={translations[language].services.qualityAssurance.title} 
              description={translations[language].services.qualityAssurance.description} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M14 10l-2-2-2 2"/><path d="M12 14v6"/></svg>}
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="blue-gradient">{translations[language].services.viewAll}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
