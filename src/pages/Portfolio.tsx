import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLocalization } from "@/contexts/LocalizationContext";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  client: string;
  technologies: string[];
  image: string;
}

const Portfolio = () => {
  const { language } = useLocalization();
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Web Development", "Data Visualization", "Project Management", "Software Development"];
  const navigate = useNavigate();
  
  useEffect(() => {
    // ดึงข้อมูลจาก projects.json
    const fetchProjects = async () => {
      const response = await fetch("/src/data/projects.json");
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const translations = {
    en: {
      title: "LATEST PORTFOLIO",
      description: "Check out our recent projects where we've helped clients solve complex problems with innovative solutions. Our portfolio showcases our expertise across various domains and technologies.",
      approach: "OUR APPROACH",
      approachDescription: "We follow a structured approach to ensure the success of every project. Our methodology combines industry best practices with our unique insights.",
      viewDetails: "View Details",
      client: "Client",
      discovery: "Discovery & Planning",
      discoveryDesc: "We begin by understanding your business needs, objectives, and technical requirements to develop a comprehensive project plan.",
      design: "Design & Prototyping",
      designDesc: "Our design team creates wireframes and prototypes that visualize the end product, allowing for early feedback and adjustments.",
      development: "Development",
      developmentDesc: "Using agile methodologies, we develop your solution in iterations, ensuring regular updates and the flexibility to adapt to changing requirements.",
      testing: "Testing & Deployment",
      testingDesc: "Rigorous testing ensures your application is robust, secure, and user-friendly before we deploy it to your production environment.",
      support: "Support & Maintenance",
      supportDesc: "Our relationship doesn't end at deployment. We provide ongoing support and maintenance to ensure your application continues to perform optimally."
    },
    th: {
      title: "ผลงานล่าสุด",
      description: "ตรวจสอบโครงการล่าสุดของเราที่เราได้ช่วยลูกค้าแก้ไขปัญหาที่ซับซ้อนด้วยโซลูชันนวัตกรรม พอร์ตโฟลิโอของเราแสดงความเชี่ยวชาญในหลากหลายโดเมนและเทคโนโลยี",
      approach: "วิธีการของเรา",
      approachDescription: "เราใช้วิธีการที่มีโครงสร้างเพื่อให้มั่นใจในความสำเร็จของทุกโครงการ วิธีการของเรารวมแนวปฏิบัติที่ดีที่สุดในอุตสาหกรรมกับความเข้าใจที่เป็นเอกลักษณ์ของเรา",
      viewDetails: "ดูรายละเอียด",
      client: "ลูกค้า",
      discovery: "การค้นพบและวางแผน",
      discoveryDesc: "เราเริ่มต้นด้วยการทำความเข้าใจความต้องการทางธุรกิจ วัตถุประสงค์ และข้อกำหนดทางเทคนิคเพื่อพัฒนาแผนโครงการที่ครอบคลุม",
      design: "การออกแบบและต้นแบบ",
      designDesc: "ทีมออกแบบของเราสร้างไวร์เฟรมและต้นแบบที่แสดงภาพผลิตภัณฑ์สุดท้าย ช่วยให้ได้รับข้อเสนอแนะและการปรับเปลี่ยนได้ตั้งแต่เนิ่นๆ",
      development: "การพัฒนา",
      developmentDesc: "โดยใช้วิธีการอไจล์ เราพัฒนาโซลูชันของคุณในการทำซ้ำ รับประกันการอัปเดตอย่างสม่ำเสมอและความยืดหยุ่นในการปรับตัวกับความต้องการที่เปลี่ยนแปลง",
      testing: "การทดสอบและการปรับใช้",
      testingDesc: "การทดสอบอย่างเข้มงวดช่วยให้มั่นใจว่าแอปพลิเคชันของคุณมีความแข็งแกร่ง ปลอดภัย และใช้งานง่ายก่อนที่เราจะนำไปใช้งานจริง",
      support: "การสนับสนุนและบำรุงรักษา",
      supportDesc: "ความสัมพันธ์ของเราไม่ได้สิ้นสุดที่การนำไปใช้งาน เราให้การสนับสนุนและการบำรุงรักษาอย่างต่อเนื่องเพื่อให้แน่ใจว่าแอปพลิเคชันของคุณยังคงทำงานได้อย่างเต็มประสิทธิภาพ"
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Portfolio | I Progress X Co., Ltd.";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">{translations[language].title}</h1>
              <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
              <p className="mt-6 text-gray-800 dark:text-gray-400 max-w-2xl mx-auto">
                {translations[language].description}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-muted text-gray-800 dark:text-gray-400 hover:bg-primary/20"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="group overflow-hidden rounded-lg bg-secondary border border-border/50 h-full flex flex-col cursor-pointer"
                  onClick={() => navigate(`/portfolio/${project.id}`)}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="blue-gradient">
                        {translations[language].viewDetails}
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-500 flex-1">{project.description}</p>
                    <div className="mt-4 flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold">{translations[language].client}:</span>
                      <span className="text-sm">{project.client}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
