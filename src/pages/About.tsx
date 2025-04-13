import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocalization } from "@/contexts/LocalizationContext";

const About = () => {
  const { language } = useLocalization();
  const translations = {
    en: {
      about: {
        title: "ABOUT US",
        ourStory: "Our Story",
        storyParagraph1:
          "I Progress X was founded by a team of passionate software engineers who share a vision of delivering high-quality, custom web applications. From our humble beginnings as freelancers to establishing a dedicated company, we've always prioritized understanding our clients' needs and delivering solutions that exceed expectations.",
        storyParagraph2:
          "Our story began as three freelancers working tirelessly to meet client needs. Today, we are a thriving team committed to providing innovative and reliable web applications.",
        storyParagraph3:
          "We aim to be your trusted partner in achieving success through technology. With years of experience and a focus on adaptability, we're here to bring your vision to life.",
        ourHistory: "Our History",
        history2023Title: "2023 - The Beginning",
        history2023Text:
          "We are a group of friends who came together to form the I Progress X team, dedicated to developing web applications for various clients. We started our team in 2023 and have since grown to a team of 10 members.",
        history2024Title: "2024 - Growth Phase",
        history2024Text:
          "Expanding our team and portfolio, we started working with larger clients and more complex projects. We established our development process and refined our services.",
        history2025Title: "2025 - Present",
        history2025Text:
          "Established I Progress X company legally, built our brand, launched effectively, and adapted for growth. Today, we continue to deliver exceptional software solutions to clients across various industries.",
        ourVision: "OUR VISION",
        visionParagraph:
          "Our vision at I Progress X is to create innovative web and mobile applications tailored to the market.",
        costEfficiencyTitle: "Cost Efficiency",
        costEfficiencyText:
          "By reusing and refining developed software and source code, we reduce costs for companies, delivering quality software at a lower price.",
        qualityAssuranceTitle: "Quality Assurance",
        qualityAssuranceText:
          "We ensure high standards through rigorous testing and thorough reviews by our dedicated QA team, guaranteeing reliability and performance.",
        ourMission: "OUR MISSION",
        missionParagraph:
          "In the growing IT market and software-driven era, our mission is to expand our team into a larger organization with the following key goals:",
        globalReach: "Global Reach",
        globalReachText:
          "Expand our services to international markets and build a global client base.",
        innovation: "Innovation",
        innovationText:
          "Drive global business through innovation and cutting-edge technology solutions.",
        quality: "Quality",
        qualityText:
          "Deliver quality beyond just functional software, focusing on user experience and performance.",
        documentTitle: "About Us | I Progress X Co., Ltd.",
      },
    },
    th: {
      about: {
        title: "เกี่ยวกับเรา",
        ourStory: "เรื่องราวของเรา",
        storyParagraph1:
          "ไอ โปรเกรส เอ็กซ์ ก่อตั้งโดยทีมวิศวกรซอฟต์แวร์ผู้มีความมุ่งมั่น ซึ่งมีวิสัยทัศน์ร่วมกันในการส่งมอบแอปพลิเคชันเว็บแบบกำหนดเองคุณภาพสูง จากจุดเริ่มต้นที่เรียบง่ายในฐานะฟรีแลนซ์ สู่การก่อตั้งบริษัทอย่างเป็นทางการ เราให้ความสำคัญกับการทำความเข้าใจความต้องการของลูกค้าและการส่งมอบโซลูชันที่เกินความคาดหมายมาโดยตลอด",
        storyParagraph2:
          "เรื่องราวของเราเริ่มต้นจากฟรีแลนซ์สามคนที่ทำงานอย่างไม่รู้จักเหน็ดเหนื่อยเพื่อตอบสนองความต้องการของลูกค้า วันนี้ เราคือทีมที่เติบโตและมุ่งมั่นที่จะมอบแอปพลิเคชันเว็บที่สร้างสรรค์และเชื่อถือได้",
        storyParagraph3:
          "เรามุ่งมั่นที่จะเป็นพันธมิตรที่คุณไว้วางใจในการบรรลุความสำเร็จผ่านเทคโนโลยี ด้วยประสบการณ์หลายปีและความมุ่งเน้นที่ความสามารถในการปรับตัว เราพร้อมที่จะทำให้วิสัยทัศน์ของคุณเป็นจริง",
        ourHistory: "ประวัติของเรา",
        history2023Title: "2023 - จุดเริ่มต้น",
        history2023Text:
          "พวกเราคือกลุ่มเพื่อนที่รวมตัวกันก่อตั้งทีม ไอ โปรเกรส เอ็กซ์ โดยมุ่งมั่นที่จะพัฒนาแอปพลิเคชันเว็บสำหรับลูกค้าหลากหลายกลุ่ม เราเริ่มต้นทีมของเราในปี 2023 และเติบโตเป็นทีมงาน 10 คนนับตั้งแต่นั้นมา",
        history2024Title: "2024 - ช่วงเติบโต",
        history2024Text:
          "ด้วยการขยายทีมและผลงานของเรา เราเริ่มทำงานร่วมกับลูกค้ารายใหญ่ขึ้นและโครงการที่ซับซ้อนมากขึ้น เราได้สร้างกระบวนการพัฒนาและปรับปรุงบริการของเรา",
        history2025Title: "2025 - ปัจจุบัน",
        history2025Text:
          "ก่อตั้งบริษัท ไอ โปรเกรส เอ็กซ์ อย่างถูกกฎหมาย สร้างแบรนด์ของเรา เปิดตัวอย่างมีประสิทธิภาพ และปรับตัวเพื่อการเติบโต วันนี้ เรายังคงส่งมอบโซลูชันซอฟต์แวร์ที่ยอดเยี่ยมให้กับลูกค้าในหลากหลายอุตสาหกรรม",
        ourVision: "วิสัยทัศน์ของเรา",
        visionParagraph:
          "วิสัยทัศน์ของเราที่ ไอ โปรเกรส เอ็กซ์ คือการสร้างสรรค์เว็บแอปพลิเคชันและแอปพลิเคชันมือถือที่เป็นนวัตกรรมใหม่และปรับให้เข้ากับตลาด",
        costEfficiencyTitle: "ประสิทธิภาพด้านต้นทุน",
        costEfficiencyText:
          "ด้วยการนำซอฟต์แวร์และซอร์สโค้ดที่พัฒนาแล้วกลับมาใช้ใหม่และปรับปรุง เราจึงช่วยลดต้นทุนสำหรับบริษัทต่างๆ โดยส่งมอบซอฟต์แวร์ที่มีคุณภาพในราคาที่ต่ำกว่า",
        qualityAssuranceTitle: "การประกันคุณภาพ",
        qualityAssuranceText:
          "เรามั่นใจในมาตรฐานระดับสูงผ่านการทดสอบอย่างเข้มงวดและการตรวจสอบอย่างละเอียดโดยทีม QA ที่ทุ่มเทของเรา ซึ่งรับประกันความน่าเชื่อถือและประสิทธิภาพ",
        ourMission: "พันธกิจของเรา",
        missionParagraph:
          "ในตลาดไอทีที่เติบโตขึ้นและยุคที่ขับเคลื่อนด้วยซอฟต์แวร์ พันธกิจของเราคือการขยายทีมของเราให้เป็นองค์กรที่ใหญ่ขึ้น โดยมีเป้าหมายหลักดังต่อไปนี้:",
        globalReach: "การเข้าถึงระดับโลก",
        globalReachText:
          "ขยายบริการของเราไปยังตลาดต่างประเทศและสร้างฐานลูกค้าทั่วโลก",
        innovation: "นวัตกรรม",
        innovationText:
          "ขับเคลื่อนธุรกิจระดับโลกผ่านนวัตกรรมและโซลูชันเทคโนโลยีที่ทันสมัย",
        quality: "คุณภาพ",
        qualityText:
          "ส่งมอบคุณภาพที่เหนือกว่าซอฟต์แวร์ที่ใช้งานได้ โดยมุ่งเน้นที่ประสบการณ์ผู้ใช้และประสิทธิภาพ",
        documentTitle: "เกี่ยวกับเรา | บริษัท ไอ โปรเกรส เอ็กซ์ จำกัด",
      },
    },
  };

  const t = translations[language]?.about || translations.en.about;

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
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-96">
                <img
                  src="/lovable-uploads/about5.jpg"
                  alt={t.ourStory}
                  className="rounded-lg w-full h-full object-cover shadow-xl"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">{t.ourStory}</h2>
                <p className="text-gray-800 dark:text-gray-300 preline">
                  {t.storyParagraph1}
                </p>
                <p className="text-gray-800 dark:text-gray-300 preline">
                  {t.storyParagraph2}
                </p>
                <p className="text-gray-800 dark:text-gray-300 preline">
                  {t.storyParagraph3}
                </p>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-8 text-center">{t.ourHistory}</h2>
              <div className="relative border-l-2 border-primary ml-4">
                <div className="mb-12 relative pl-8">
                  <div className="absolute -left-4 w-6 h-6 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold">{t.history2023Title}</h3>
                  <p className="text-gray-800 dark:text-gray-400 mt-2 preline">
                    {t.history2023Text}
                  </p>
                </div>

                <div className="mb-12 relative pl-8">
                  <div className="absolute -left-4 w-6 h-6 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold">{t.history2024Title}</h3>
                  <p className="text-gray-800 dark:text-gray-400 mt-2 preline">
                    {t.history2024Text}
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-4 w-6 h-6 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold">{t.history2025Title}</h3>
                  <p className="text-gray-800 dark:text-gray-400 mt-2 preline">
                    {t.history2025Text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t.ourVision}</h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl mb-8 preline">
                  {t.visionParagraph}
                </p>

                <div className="glass-card p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-2">{t.costEfficiencyTitle}</h3>
                  <p className="preline">
                    {t.costEfficiencyText}
                  </p>
                </div>

                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{t.qualityAssuranceTitle}</h3>
                  <p className="preline">
                    {t.qualityAssuranceText}
                  </p>
                </div>
              </div>

              <div className="h-96">
                <img
                  src="/lovable-uploads/about2.jpg"
                  alt={t.ourVision}
                  className="rounded-lg w-full h-full object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t.ourMission}</h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="glass-card p-8 rounded-lg mb-12 max-w-3xl mx-auto">
              <p className="text-xl preline">
                {t.missionParagraph}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-gradient p-6 rounded-lg">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{t.globalReach}</h3>
                <p className="text-gray-800 dark:text-gray-400 preline">
                  {t.globalReachText}
                </p>
              </div>

              <div className="card-gradient p-6 rounded-lg">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{t.innovation}</h3>
                <p className="text-gray-800 dark:text-gray-400 preline">
                  {t.innovationText}
                </p>
              </div>

              <div className="card-gradient p-6 rounded-lg">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M9 12L11 14L15 10"/><path d="M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{t.quality}</h3>
                <p className="text-gray-800 dark:text-gray-400 preline">
                  {t.qualityText}
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

export default About;