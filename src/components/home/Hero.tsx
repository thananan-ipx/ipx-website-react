import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

const Hero = () => {
  const { language } = useLocalization();
  const translations = {
    en: {
      hero: {
        title: "WELCOME TO",
        subtitle: "Where innovation meets excellence. Let us bring your ideas to life with cutting-edge technology and expert solutions tailored just for you.",
        cta: "Our Services",
        learnMore: "Contact Us",
        speedTitle: "Simplify and Enhance Your Investment Workflow",
        speedDescription: "Transition from complex paperwork to an intuitive digital system, reducing redundant errors and boosting work efficiency with speed.",
        testimonial: "This system has made managing investment data significantly easier and faster. Our team collaborates seamlessly and operates more efficiently.",
        users: "Suitable for all business sizes - from investment beginners to large asset management firms.",
        trafficIncrease: "Reduce workload and increase overall team productivity.",
        replyBoost: "Minimize data entry errors and enhance accuracy.",
        faster: "Process data and generate reports significantly faster than traditional methods."
      },
    },
    th: {
      hero: {
        title: "ยินดีต้อนรับสู่",
        subtitle: "ที่ซึ่งนวัตกรรมพบกับความเป็นเลิศ ให้เรานำไอเดียของคุณมาสู่ชีวิตด้วยเทคโนโลยีล้ำสมัยและโซลูชันที่เชี่ยวชาญซึ่งออกแบบมาเพื่อคุณโดยเฉพาะ",
        cta: "บริการของเรา",
        learnMore: "ติดต่อเรา",
        speedTitle: "ยกระดับงานลงทุนให้ง่ายและแม่นยำ",
        speedDescription: "เปลี่ยนจากงานเอกสารที่ซับซ้อนสู่ระบบดิจิทัลที่ใช้งานง่าย ลดข้อผิดพลาดซ้ำซ้อน และเพิ่มประสิทธิภาพในการทำงานอย่างรวดเร็ว",
        testimonial: "ระบบนี้ช่วยให้การจัดการข้อมูลการลงทุนเป็นเรื่องง่ายและรวดเร็วขึ้นมาก ทีมงานทำงานร่วมกันได้อย่างราบรื่นและมีประสิทธิภาพ",
        users: "เหมาะสำหรับทุกขนาดธุรกิจ - ตั้งแต่ผู้เริ่มต้นลงทุนไปจนถึงบริษัทจัดการกองทุนขนาดใหญ่",
        trafficIncrease: "ลดระยะเวลาการทำงานและเพิ่มผลผลิตโดยรวมของทีม",
        replyBoost: "ลดความผิดพลาดในการบันทึกข้อมูลและเพิ่มความถูกต้องแม่นยำ",
        faster: "ประมวลผลข้อมูลและสร้างรายงานได้รวดเร็วกว่าวิธีการแบบเดิมอย่างเห็นได้ชัด",
      },
    },
  };

  const t = translations[language]?.hero || translations.en.hero;

  return (
    <section className="relative min-h-screen flex items-center bg-secondary/50 dark:bg-secondary-dark/80 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/082c578e-4bd9-4b45-8824-dd0a71a51e5d.png')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>

      <div className="container relative z-10 pt-20 pb-16 md:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 dark:text-white">
              {t.title} <br className="hidden lg:block" />
              <span className="gradient-text">I PROGRESS X</span>
            </h1>
            <p className="mt-6 text-lg text-gray-800 dark:text-gray-200 max-w-xl preline">
              {t.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services">
                <Button className="blue-gradient text-white px-6 py-4 text-lg">
                  {t.cta}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="px-6 py-4 text-lg inline-flex items-center border-white/20 hover:bg-white/5">
                  {t.learnMore}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Image (Hidden on smaller screens) */}
          <div className="hidden lg:block">
            <img
              src="/lovable-uploads/home1.png"
              alt="I Progress X Logo"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;