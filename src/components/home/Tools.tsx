import { useLocalization } from "@/contexts/LocalizationContext";

const ToolIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-16 h-16 bg-gray-100 dark:bg-white rounded-full flex items-center justify-center p-2 transition-transform hover:scale-110">
    <img src={src} alt={alt} className="w-12 h-12 object-contain" />
  </div>
);

const ToolsSection = () => {
  const { language } = useLocalization();
  const translations = {
    en: {
      title: "OUR TOOLS",
      description: "In developing our software, we utilize a combination of cutting-edge tools and programming languages to ensure optimal performance, scalability, and maintainability.",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      qualityAssurance: "Quality Assurance",
      css: "CSS",
      other: "Other"
    },
    th: {
      title: "เครื่องมือของเรา",
      description: "ในการพัฒนาซอฟต์แวร์ของเรา เราใช้เครื่องมือและภาษาโปรแกรมที่ทันสมัยหลากหลายเพื่อตอบสนองประสิทธิภาพ ความสามารถในการขยาย และการบำรุงรักษาที่ดีที่สุด",
      frontend: "Frontend",
      backend: "Backend",
      database: "ฐานข้อมูล",
      qualityAssurance: "การรับประกันคุณภาพ",
      css: "CSS",
      other: "อื่นๆ"
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">{t.frontend}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">{t.backend}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="Go" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" />
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">{t.database}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="Oracle" />
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">{t.qualityAssurance}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Jest" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" alt="Cypress" />
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">{t.css}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">{t.other}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" alt="Notion" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" />
              <ToolIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
