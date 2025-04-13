import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocalization } from "@/contexts/LocalizationContext";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const { language } = useLocalization();
  const translations = {
    en: {
      serviceCard: {
        title: title, // You might want to remove this and pass title directly
        description: description, // Same as above for description
      },
    },
    th: {
      serviceCard: {
        title: title, // And here
        description: description,
      },
    },
  };

  const t = translations[language]?.serviceCard || translations.en.serviceCard;

  return (
    <div className="card-gradient rounded-lg p-8 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{t.title}</h3>
      <p className="text-gray-800 dark:text-gray-400 preline">{t.description}</p>
    </div>
  );
};

const Services = () => {
  const { language } = useLocalization();
  const translations = {
    en: {
      servicesPage: {
        title: "OUR BEST SERVICE",
        description:
          "I Progress X specializes in web development using Agile methodology. Our team includes a Project Manager, System Analyst, Software Engineer, Quality Assurance, Network Engineer, and UX/UI Designer. We gather requirements, design UX/UI and systems, and develop, test, and deploy with CI/CD framework.",
        comprehensiveServices: "Comprehensive Services",
        comprehensiveServicesParagraph1:
          "We offer comprehensive, high-quality services including Business Design, Website Design, Development, Testing, and Delivery. Our approach ensures that every project we undertake is delivered to the highest standards, meeting all client requirements and expectations.",
        comprehensiveServicesParagraph2:
          "With our team of experts, we provide end-to-end solutions that help businesses thrive in the digital age. From initial concept to final deployment, we're with you every step of the way.",
        businessDesign: "Business Design",
        businessDesignDescription:
          "Extracting requirements and designing business solutions tailored to maximize client satisfaction. We work closely with stakeholders to understand their needs and develop strategies that align with business goals.",
        softwareDesign: "Software Design",
        softwareDesignDescription:
          "Designing software using UML, including Use Case Diagrams, Use Case Descriptions, Activity Diagrams, Sequence Diagrams, ER Diagrams, Data Dictionaries, API Specifications, and more.",
        uiUxDesign: "UI/UX Design",
        uiUxDesignDescription:
          "Crafting modern UI/UX designs that meet contemporary standards and address client needs. Our designs focus on creating intuitive and engaging user experiences that drive conversion and satisfaction.",
        development: "Development",
        developmentDescription:
          "Developing web and mobile applications that precisely align with business requirements using suitable programming languages. We employ cutting-edge technologies and best practices to deliver robust solutions.",
        infrastructure: "Infrastructure",
        infrastructureDescription:
          "Installing and configuring server infrastructure for clients requiring setup and configuration for operational use. We ensure your systems are secure, scalable, and optimized for performance.",
        qualityAssurance: "Quality Assurance",
        qualityAssuranceDescription:
          "Ensuring software quality through comprehensive testing that meets client specifications. Our QA processes identify and resolve issues before deployment, ensuring a smooth user experience.",
        ourProcess: "OUR PROCESS",
        ourProcessDescription:
          "We follow a structured and proven process to ensure the success of every project we undertake.",
        discovery: "Discovery",
        discoveryDescription: "Understanding client requirements and project scope",
        planning: "Planning",
        planningDescription: "Developing project plan, timelines, and resource allocation",
        design: "Design",
        designDescription: "Creating UI/UX designs and software architecture",
        developmentProcess: "Development",
        developmentProcessDescription: "Coding and implementing the solution",
        delivery: "Delivery",
        deliveryDescription: "Testing, deployment, and post-launch support",
        whyChooseUs: "WHY CHOOSE US",
        expertise: "Expertise",
        expertiseDescription: "Team of skilled professionals with extensive industry experience",
        innovation: "Innovation",
        innovationDescription: "Staying ahead with the latest technologies and methodologies",
        quality: "Quality",
        qualityDescription: "Rigorous testing and quality assurance processes",
        customerFocus: "Customer Focus",
        customerFocusDescription: "Dedicated to exceeding client expectations at every step",
        documentTitle: "Our Services | I Progress X Co., Ltd.",
      },
    },
    th: {
      servicesPage: {
        title: "บริการที่ดีที่สุดของเรา",
        description:
          "ไอ โปรเกรส เอ็กซ์ เชี่ยวชาญในการพัฒนาเว็บโดยใช้วิธีการแบบ Agile ทีมงานของเราประกอบด้วย Project Manager, System Analyst, Software Engineer, Quality Assurance, Network Engineer และ UX/UI Designer เราทำการรวบรวมข้อกำหนด ออกแบบ UX/UI และระบบ และพัฒนา ทดสอบ และปรับใช้ด้วยกรอบ CI/CD",
        comprehensiveServices: "บริการที่ครอบคลุม",
        comprehensiveServicesParagraph1:
          "เรานำเสนอบริการคุณภาพสูงที่ครอบคลุม รวมถึงการออกแบบธุรกิจ การออกแบบเว็บไซต์ การพัฒนา การทดสอบ และการส่งมอบ แนวทางของเราทำให้มั่นใจได้ว่าทุกโครงการที่เราดำเนินการจะส่งมอบด้วยมาตรฐานสูงสุด ตรงตามข้อกำหนดและความคาดหวังของลูกค้าทั้งหมด",
        comprehensiveServicesParagraph2:
          "ด้วยทีมผู้เชี่ยวชาญของเรา เราให้บริการโซลูชันแบบครบวงจรที่ช่วยให้ธุรกิจเติบโตในยุคดิจิทัล ตั้งแต่แนวคิดเริ่มต้นจนถึงการปรับใช้ขั้นสุดท้าย เราอยู่กับคุณในทุกขั้นตอน",
        businessDesign: "การออกแบบธุรกิจ",
        businessDesignDescription:
          "การดึงข้อกำหนดและการออกแบบโซลูชันทางธุรกิจที่ปรับให้เหมาะสมเพื่อเพิ่มความพึงพอใจของลูกค้าสูงสุด เราทำงานอย่างใกล้ชิดกับผู้มีส่วนได้ส่วนเสียเพื่อทำความเข้าใจความต้องการของพวกเขาและพัฒนากลยุทธ์ที่สอดคล้องกับเป้าหมายทางธุรกิจ",
        softwareDesign: "การออกแบบซอฟต์แวร์",
        softwareDesignDescription:
          "การออกแบบซอฟต์แวร์โดยใช้ UML รวมถึง Use Case Diagrams, Use Case Descriptions, Activity Diagrams, Sequence Diagrams, ER Diagrams, Data Dictionaries, API Specifications และอื่นๆ",
        uiUxDesign: "การออกแบบ UI/UX",
        uiUxDesignDescription:
          "การสร้างสรรค์การออกแบบ UI/UX ที่ทันสมัยซึ่งตรงตามมาตรฐานร่วมสมัยและตอบสนองความต้องการของลูกค้า การออกแบบของเรามุ่งเน้นไปที่การสร้างประสบการณ์ผู้ใช้ที่ใช้งานง่ายและมีส่วนร่วม ซึ่งขับเคลื่อนการแปลงและการสร้างความพึงพอใจ",
        development: "การพัฒนา",
        developmentDescription:
          "การพัฒนาเว็บและแอปพลิเคชันมือถือที่สอดคล้องกับความต้องการทางธุรกิจอย่างแม่นยำโดยใช้ภาษาโปรแกรมที่เหมาะสม เราใช้เทคโนโลยีล้ำสมัยและแนวปฏิบัติที่ดีที่สุดเพื่อส่งมอบโซลูชันที่แข็งแกร่ง",
        infrastructure: "โครงสร้างพื้นฐาน",
        infrastructureDescription:
          "การติดตั้งและกำหนดค่าโครงสร้างพื้นฐานของเซิร์ฟเวอร์สำหรับลูกค้าที่ต้องการการตั้งค่าและการกำหนดค่าสำหรับการใช้งาน เรามั่นใจว่าระบบของคุณมีความปลอดภัย ปรับขนาดได้ และปรับให้เหมาะสมสำหรับประสิทธิภาพ",
        qualityAssurance: "การประกันคุณภาพ",
        qualityAssuranceDescription:
          "การรับประกันคุณภาพซอฟต์แวร์ผ่านการทดสอบที่ครอบคลุมซึ่งตรงตามข้อกำหนดของลูกค้า กระบวนการ QA ของเราระบุและแก้ไขปัญหาต่างๆ ก่อนการปรับใช้ เพื่อให้มั่นใจถึงประสบการณ์การใช้งานของผู้ใช้ที่ราบรื่น",
        ourProcess: "กระบวนการของเรา",
        ourProcessDescription:
          "เราปฏิบัติตามกระบวนการที่มีโครงสร้างและได้รับการพิสูจน์แล้วเพื่อให้แน่ใจว่าทุกโครงการที่เราดำเนินการประสบความสำเร็จ",
        discovery: "การค้นพบ",
        discoveryDescription: "ทำความเข้าใจความต้องการของลูกค้าและขอบเขตของโครงการ",
        planning: "การวางแผน",
        planningDescription: "การพัฒนากำหนดการของโครงการ ระยะเวลา และการจัดสรรทรัพยากร",
        design: "การออกแบบ",
        designDescription: "การสร้างการออกแบบ UI/UX และสถาปัตยกรรมซอฟต์แวร์",
        developmentProcess: "การพัฒนา",
        developmentProcessDescription: "การเขียนโค้ดและการนำโซลูชันไปใช้",
        delivery: "การส่งมอบ",
        deliveryDescription: "การทดสอบ การปรับใช้ และการสนับสนุนหลังการเปิดตัว",
        whyChooseUs: "ทำไมถึงเลือกเรา",
        expertise: "ความเชี่ยวชาญ",
        expertiseDescription: "ทีมงานมืออาชีพที่มีทักษะและมีประสบการณ์ในอุตสาหกรรมที่กว้างขวาง",
        innovation: "นวัตกรรม",
        innovationDescription: "ก้าวนำด้วยเทคโนโลยีและวิธีการล่าสุด",
        quality: "คุณภาพ",
        qualityDescription: "กระบวนการทดสอบและการประกันคุณภาพที่เข้มงวด",
        customerFocus: "การมุ่งเน้นลูกค้า",
        customerFocusDescription: "ทุ่มเทเพื่อเกินความคาดหมายของลูกค้าในทุกขั้นตอน",
        documentTitle: "บริการของเรา | บริษัท ไอ โปรเกรส เอ็กซ์ จำกัด",
      },
    },
  };

  const t = translations[language]?.servicesPage || translations.en.servicesPage;

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
              <p className="mt-6 text-gray-800 dark:text-gray-400 max-w-2xl mx-auto preline">
                {t.description}
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img
                    src="/lovable-uploads/service1.jpg"
                    alt={t.comprehensiveServices}
                    className="rounded-lg w-full object-cover shadow-xl"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h2 className="text-3xl font-bold">{t.comprehensiveServices}</h2>
                  <p className="text-gray-800 dark:text-gray-300 preline">
                    {t.comprehensiveServicesParagraph1}
                  </p>
                  <p className="text-gray-800 dark:text-gray-300 preline">
                    {t.comprehensiveServicesParagraph2}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title={t.businessDesign}
                description={t.businessDesignDescription}
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" /><rect x="3" y="14" width="7" height="7" rx="1" /><circle cx="17.5" cy="17.5" r="3.5" /></svg>}
              />
              <ServiceCard
                title={t.softwareDesign}
                description={t.softwareDesignDescription}
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 17L10 11 4 5" /><path d="M12 19L20 19" /></svg>}
              />
              <ServiceCard
                title={t.uiUxDesign}
                description={t.uiUxDesignDescription}
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>}
              />
              <ServiceCard
                title={t.development}
                description={t.developmentDescription}
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 15v-1h6v1" /><path d="M11 11v6" /><path d="M9 18h4" /></svg>}
              />
              <ServiceCard
                title={t.infrastructure}
                description={t.infrastructureDescription}
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" /></svg>}
              />
              <ServiceCard
                title={t.qualityAssurance}
                description={t.qualityAssuranceDescription}
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M9 12l2 2 4-4" /><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7z" /><path d="M22 19H2" /></svg>}
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t.ourProcess}</h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
              <p className="mt-6 text-gray-800 dark:text-gray-400 max-w-2xl mx-auto preline">
                {t.ourProcessDescription}
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/30 -translate-y-1/2"></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-secondary border-2 border-primary rounded-full flex items-center justify-center z-10 relative">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{t.discovery}</h3>
                  <p className="text-gray-800 dark:text-gray-400 preline">{t.discoveryDescription}</p>
                </div>

                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-secondary border-2 border-primary rounded-full flex items-center justify-center z-10 relative">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{t.planning}</h3>
                  <p className="text-gray-800 dark:text-gray-400 preline">{t.planningDescription}</p>
                </div>

                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-secondary border-2 border-primary rounded-full flex items-center justify-center z-10 relative">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{t.design}</h3>
                  <p className="text-gray-800 dark:text-gray-400 preline">{t.designDescription}</p>
                </div>

                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-secondary border-2 border-primary rounded-full flex items-center justify-center z-10 relative">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{t.developmentProcess}</h3>
                  <p className="text-gray-800 dark:text-gray-400 preline">{t.developmentProcessDescription}</p>
                </div>

                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-secondary border-2 border-primary rounded-full flex items-center justify-center z-10 relative">
                    <span className="text-2xl font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{t.delivery}</h3>
                  <p className="text-gray-800 dark:text-gray-400 preline">{t.deliveryDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t.whyChooseUs}</h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/20 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22a9.7 9.7 0 0 1-5-1.4 10 10 0 0 1-3.6-3.6A9.9 9.9 0 0 1 2 12V5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5V12a10 10 0 0 1-1.4 5 10 10 0 0 1-3.6 3.6A9.7 9.7 0 0 1 12 22Z" /><path d="M13.5 7h-3L9 11h6l-1.5 4h3L18 11h-6l1.5-4Z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{t.expertise}</h3>
                <p className="text-gray-800 dark:text-gray-400 preline">
                  {t.expertiseDescription}
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/20 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{t.innovation}</h3>
                <p className="text-gray-800 dark:text-gray-400 preline">
                  {t.innovationDescription}
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/20 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2s.35 5.5 9 5.5V14c0 4.5-7 8-9 8s-9-3.5-9-8V7.5c8.65 0 9-5.5 9-5.5z" /><path d="M12 7v6" /><path d="M15 10H9" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{t.quality}</h3>
                <p className="text-gray-800 dark:text-gray-400 preline">
                  {t.qualityDescription}
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/20 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M13.6 2.9a1 1 0 0 0-1.2 0L2.9 10a1 1 0 0 0-.3 1.1l3.9 9a1 1 0 0 0 .9.6h9.2a1 1 0 0 0 .9-.6l3.9-9a1 1 0 0-.3-1.1z" /><path d="m12 8 4 6H8z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{t.customerFocus}</h3>
                <p className="text-gray-800 dark:text-gray-400 preline">
                  {t.customerFocusDescription}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;