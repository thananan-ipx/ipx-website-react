import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Globe, Users } from "lucide-react";
import { useLocalization } from "@/contexts/LocalizationContext";

import projectsData from "@/data/projects.json";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  client: string;
  technologies: string[];
  image: string;
  duration?: string;
  teamSize?: number;
  website?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  gallery?: string[];
}

const PortfolioDetail = () => {
  const { language } = useLocalization();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      const projectId = parseInt(id);
      const foundProject = projectsData.find(p => p.id === projectId);
      if (foundProject) {
        setProject(foundProject);
        document.title = `${foundProject.title} | I Progress X Co., Ltd.`;
      } else {
        navigate("/portfolio");
      }
    }
    
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!project) {
    return null;
  }

  const translations = {
    en: {
      backToPortfolio: "Back to Portfolio",
      projectDetails: "Project Details",
      client: "Client",
      category: "Category",
      duration: "Duration",
      teamSize: "Team Size",
      technologies: "Technologies",
      website: "Website",
      challenge: "The Challenge",
      solution: "Our Solution",
      results: "The Results",
      gallery: "Project Gallery",
      people: "people",
      visit: "Visit",
      otherProjects: "Other Projects",
      viewProject: "View Project"
    },
    th: {
      backToPortfolio: "กลับไปยังผลงาน",
      projectDetails: "รายละเอียดโครงการ",
      client: "ลูกค้า",
      category: "ประเภท",
      duration: "ระยะเวลาดำเนินการ",
      teamSize: "ขนาดทีม",
      technologies: "เทคโนโลยี",
      website: "เว็บไซต์",
      challenge: "ความท้าทาย",
      solution: "วิธีการแก้ปัญหา",
      results: "ผลลัพธ์",
      gallery: "แกลเลอรี่โครงการ",
      people: "คน",
      visit: "เยี่ยมชม",
      otherProjects: "โครงการอื่นๆ",
      viewProject: "ดูโครงการ"
    }
  };

  // Get related projects (all except current)
  const relatedProjects = projectsData.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-96 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40 z-10"></div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container relative -mt-24 z-20">
            <Button 
              variant="outline" 
              onClick={() => navigate("/portfolio")}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {translations[language].backToPortfolio}
            </Button>
            
            <div className="bg-card shadow-lg rounded-lg p-8 border border-border">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-gray-800 dark:text-gray-400 text-lg mb-8">{project.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm text-gray-800 dark:text-gray-400">{translations[language].client}</h3>
                  <p className="font-medium">{project.client}</p>
                </div>
                
                {project.duration && (
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-sm text-gray-800 dark:text-gray-400">{translations[language].duration}</h3>
                    <p className="font-medium flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {project.duration}
                    </p>
                  </div>
                )}
                
                {project.teamSize && (
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-sm text-gray-800 dark:text-gray-400">{translations[language].teamSize}</h3>
                    <p className="font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      {project.teamSize} {translations[language].people}
                    </p>
                  </div>
                )}
                
                {project.website && (
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-sm text-gray-800 dark:text-gray-400">{translations[language].website}</h3>
                    <p className="font-medium flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-primary" />
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {translations[language].visit}
                      </a>
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm text-gray-800 dark:text-gray-400 mb-2">{translations[language].technologies}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Details */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {project.challenge && (
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">1</span>
                      {translations[language].challenge}
                    </h2>
                    <p className="text-gray-800 dark:text-gray-400">{project.challenge}</p>
                  </div>
                )}
                
                {project.solution && (
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">2</span>
                      {translations[language].solution}
                    </h2>
                    <p className="text-gray-800 dark:text-gray-400">{project.solution}</p>
                  </div>
                )}
                
                {project.results && (
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">3</span>
                      {translations[language].results}
                    </h2>
                    <p className="text-gray-800 dark:text-gray-400">{project.results}</p>
                  </div>
                )}
              </div>
              
              <div>
                <div className="sticky top-24 bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-4">{translations[language].projectDetails}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <span className="text-gray-800 dark:text-gray-400">{translations[language].client}</span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                    
                    {project.duration && (
                      <div className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-gray-800 dark:text-gray-400">{translations[language].duration}</span>
                        <span className="font-medium">{project.duration}</span>
                      </div>
                    )}
                    
                    {project.teamSize && (
                      <div className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-gray-800 dark:text-gray-400">{translations[language].teamSize}</span>
                        <span className="font-medium">{project.teamSize} {translations[language].people}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <span className="text-gray-800 dark:text-gray-400">{translations[language].category}</span>
                      <span className="font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="py-12 bg-secondary/50">
            <div className="container">
              <h2 className="text-2xl font-bold mb-8">{translations[language].gallery}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg border border-border">
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform hover:scale-105 cursor-zoom-in"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Related Projects */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">{translations[language].otherProjects}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <div 
                  key={relatedProject.id} 
                  className="group overflow-hidden rounded-lg bg-secondary border border-border/50 h-full flex flex-col"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {relatedProject.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3">{relatedProject.title}</h3>
                    <p className="text-sm text-gray-800 dark:text-gray-400 flex-grow">{relatedProject.description}</p>
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/portfolio/${relatedProject.id}`)}
                      className="mt-4 text-primary"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      {translations[language].viewProject}
                    </Button>
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

export default PortfolioDetail;
