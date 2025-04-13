import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocalization } from "@/contexts/LocalizationContext";

import projectsData from "@/data/projects.json";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  client: string;
  image: string;
}

const Portfolio = () => {
  const { language } = useLocalization();
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Web Development", "Data Visualization", "Project Management", "Software Development"];
  const navigate = useNavigate();

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const translations = {
    en: {
      title: "LATEST PORTFOLIO",
      description: "Check out our recent projects where we've helped clients solve complex problems with innovative solutions.",
      viewDetails: "View Details",
      client: "Client",
      viewAll: "View All Projects"
    },
    th: {
      title: "ผลงานล่าสุด",
      description: "ตรวจสอบโครงการล่าสุดของเราที่เราได้ช่วยลูกค้าแก้ไขปัญหาที่ซับซ้อนด้วยโซลูชันนวัตกรรม",
      viewDetails: "ดูรายละเอียด",
      client: "ลูกค้า",
      viewAll: "ดูโครงการทั้งหมด"
    }
  };

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{translations[language].title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-6 text-gray-800 dark:text-gray-400 max-w-2xl mx-auto">
            {translations[language].description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group overflow-hidden rounded-lg bg-secondary border border-border/50 cursor-pointer"
              onClick={() => navigate(`/portfolio/${project.id}`)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="blue-gradient" size="sm">
                    {translations[language].viewDetails}
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{translations[language].client}: {project.client}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/portfolio">
            <Button className="blue-gradient">{translations[language].viewAll}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
