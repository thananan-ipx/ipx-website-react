import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLocalization } from "@/contexts/LocalizationContext";

const Contact = () => {
  const { language } = useLocalization();
  const translations = {
    en: {
      contactPage: {
        title: "CONTACT INFORMATION",
        subtitle: "Get in touch with us to discuss your project requirements or any questions you might have about our services. We're here to help you turn your ideas into reality.",
        formTitle: "Get In Touch",
        nameLabel: "Your Name",
        namePlaceholder: "",
        emailLabel: "Email Address",
        emailPlaceholder: "",
        phoneLabel: "Phone Number",
        phonePlaceholder: "",
        subjectLabel: "Subject",
        subjectPlaceholder: "Select a subject",
        subjectGeneral: "General Inquiry",
        subjectProject: "Project Consultation",
        subjectSupport: "Technical Support",
        subjectCareer: "Career Opportunities",
        subjectOther: "Other",
        messageLabel: "Your Message",
        messagePlaceholder: "",
        sendMessageButton: "Send Message",
        contactInfoTitle: "Contact Information",
        phoneNumberLabel: "Phone Number",
        emailLabelInfo: "Email",
        websiteLabel: "Website",
        addressLabel: "Address",
        successMessage: "Thank you for your message! We'll get back to you soon.",
        documentTitle: "Contact Us | I Progress X Co., Ltd.",
        nameRequired: "*",
        emailRequired: "*",
        subjectRequired: "*",
        messageRequired: "*",
        selectSubject: "Select a subject",
        faqTitle: "FREQUENTLY ASKED QUESTIONS",
        faqQ1: "What services do you offer?",
        faqA1: "We offer a comprehensive range of services including web and mobile application development, UI/UX design, software design, business analysis, infrastructure setup, and quality assurance.",
        faqQ2: "How long does it take to complete a project?",
        faqA2: "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex application could take several months. We'll provide a detailed timeline during our initial consultation.",
        faqQ3: "Do you provide support after the project is complete?",
        faqA3: "Yes, we offer ongoing support and maintenance packages to ensure your application continues to run smoothly. We can provide regular updates, bug fixes, and feature enhancements as needed.",
        faqQ4: "What technologies do you work with?",
        faqA4: "We work with a wide range of technologies including but not limited to React, Vue.js, Node.js, .NET, Go, MySQL, PostgreSQL, SQL Server, and more. We select the best technology stack for each project based on your specific requirements.",
        faqQ5: "How do you ensure the quality of your work?",
        faqA5: "We have a dedicated Quality Assurance team that conducts thorough testing throughout the development process. We perform unit testing, integration testing, and user acceptance testing to ensure your application is robust and bug-free.",
      },
    },
    th: {
      contactPage: {
        title: "ข้อมูลการติดต่อ",
        subtitle: "ติดต่อเราเพื่อพูดคุยเกี่ยวกับข้อกำหนดโครงการของคุณ หรือหากคุณมีคำถามใดๆ เกี่ยวกับบริการของเรา เราพร้อมช่วยเหลือคุณในการเปลี่ยนแนวคิดของคุณให้เป็นจริง",
        formTitle: "ติดต่อเรา",
        nameLabel: "ชื่อของคุณ",
        namePlaceholder: "",
        emailLabel: "ที่อยู่อีเมล",
        emailPlaceholder: "",
        phoneLabel: "หมายเลขโทรศัพท์",
        phonePlaceholder: "",
        subjectLabel: "หัวข้อ",
        subjectPlaceholder: "เลือกหัวข้อ",
        subjectGeneral: "สอบถามทั่วไป",
        subjectProject: "ปรึกษาโครงการ",
        subjectSupport: "การสนับสนุนทางเทคนิค",
        subjectCareer: "โอกาสทางอาชีพ",
        subjectOther: "อื่นๆ",
        messageLabel: "ข้อความของคุณ",
        messagePlaceholder: "",
        sendMessageButton: "ส่งข้อความ",
        contactInfoTitle: "ข้อมูลการติดต่อ",
        phoneNumberLabel: "หมายเลขโทรศัพท์",
        emailLabelInfo: "อีเมล",
        websiteLabel: "เว็บไซต์",
        addressLabel: "ที่อยู่",
        successMessage: "ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด",
        documentTitle: "ติดต่อเรา | บริษัท ไอ โปรเกรส เอ็กซ์ จำกัด",
        nameRequired: "*",
        emailRequired: "*",
        subjectRequired: "*",
        messageRequired: "*",
        selectSubject: "เลือกหัวข้อ",
        faqTitle: "คำถามที่พบบ่อย",
        faqQ1: "คุณให้บริการอะไรบ้าง",
        faqA1: "เราให้บริการที่ครอบคลุมหลากหลายด้าน รวมถึงการพัฒนาเว็บและแอปพลิเคชันมือถือ การออกแบบ UI/UX การออกแบบซอฟต์แวร์ การวิเคราะห์ธุรกิจ การตั้งค่าโครงสร้างพื้นฐาน และการประกันคุณภาพ",
        faqQ2: "ใช้เวลานานเท่าใดในการดำเนินโครงการให้เสร็จสมบูรณ์",
        faqA2: "ระยะเวลาของโครงการจะแตกต่างกันไปขึ้นอยู่กับขอบเขตและความซับซ้อน เว็บไซต์อย่างง่ายอาจใช้เวลา 2-4 สัปดาห์ ในขณะที่แอปพลิเคชันที่ซับซ้อนอาจใช้เวลาหลายเดือน เราจะให้รายละเอียดระยะเวลาในการให้คำปรึกษาเบื้องต้น",
        faqQ3: "คุณให้การสนับสนุนหลังจากโครงการเสร็จสิ้นหรือไม่",
        faqA3: "ใช่ เรามีแพ็คเกจการสนับสนุนและการบำรุงรักษาอย่างต่อเนื่องเพื่อให้แน่ใจว่าแอปพลิเคชันของคุณทำงานได้อย่างราบรื่น เราสามารถให้การอัปเดตปกติ การแก้ไขข้อบกพร่อง และการปรับปรุงคุณสมบัติได้ตามต้องการ",
        faqQ4: "คุณทำงานกับเทคโนโลยีอะไรบ้าง",
        faqA4: "เราทำงานกับเทคโนโลยีที่หลากหลาย รวมถึงแต่ไม่จำกัดเฉพาะ React, Vue.js, Node.js, .NET, Go, MySQL, PostgreSQL, SQL Server และอื่นๆ เราเลือกกลุ่มเทคโนโลยีที่ดีที่สุดสำหรับแต่ละโครงการตามความต้องการเฉพาะของคุณ",
        faqQ5: "คุณมั่นใจในคุณภาพของงานของคุณได้อย่างไร",
        faqA5: "เรามีทีมประกันคุณภาพโดยเฉพาะที่ทำการทดสอบอย่างละเอียดตลอดกระบวนการพัฒนา เราทำการทดสอบหน่วย การทดสอบบูรณาการ และการทดสอบการยอมรับของผู้ใช้เพื่อให้แน่ใจว่าแอปพลิเคชันของคุณมีความแข็งแกร่งและปราศจากข้อบกพร่อง",
      },
    },
  };

  const t = translations[language]?.contactPage || translations.en.contactPage;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real app, you would send this data to your backend
    alert(t.successMessage);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

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
              <p className="mt-6 text-gray-400 max-w-2xl mx-auto preline">
                {t.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="glass-card rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">{t.formTitle}</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          {t.nameLabel} <span className="text-primary">{t.nameRequired}</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder={t.namePlaceholder}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          {t.emailLabel} <span className="text-primary">{t.emailRequired}</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder={t.emailPlaceholder}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          {t.phoneLabel}
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder={t.phonePlaceholder}
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          {t.subjectLabel} <span className="text-primary">{t.subjectRequired}</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">{t.selectSubject}</option>
                          <option value="general">{t.subjectGeneral}</option>
                          <option value="project">{t.subjectProject}</option>
                          <option value="support">{t.subjectSupport}</option>
                          <option value="career">{t.subjectCareer}</option>
                          <option value="other">{t.subjectOther}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t.messageLabel} <span className="text-primary">{t.messageRequired}</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full p-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={t.messagePlaceholder}
                      ></textarea>
                    </div>

                    <Button disabled type="submit" className="w-full blue-gradient py-6">
                      {t.sendMessageButton}
                    </Button>
                  </form>
                </div>
              </div>

              <div>
                <div className="glass-card rounded-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6">{t.contactInfoTitle}</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{t.phoneNumberLabel}</h4>
                        <p className="text-gray-400">+66-83-449-0802</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{t.emailLabelInfo}</h4>
                        <p className="text-gray-400">sale@iprogressx.co.th</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{t.websiteLabel}</h4>
                        <p className="text-gray-400">www.iprogressx.co.th</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{t.addressLabel}</h4>
                        <p className="text-gray-400">58/158 Moo. 5, Soi Huai kapi 17, Huai kapi, Chonburi 20000</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.4869816356213!2d100.95263679537594!3d13.297390120617255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b5371d880a15%3A0xe47e07d975ef5559!2zNTgg4Lir4LmJ4Lin4Lii4LiB4Liw4Lib4Li0IDE3IOC4leC4s-C4muC4pSDguKvguYnguKfguKLguIHguLDguJvguLQg4Lit4Liz4LmA4Lig4Lit4LmA4Lih4Li34Lit4LiH4LiK4Lil4Lia4Li44Lij4Li1IOC4iuC4peC4muC4uOC4o-C4tSAyMDAwMA!5e0!3m2!1sth!2sth!4v1744122323224!5m2!1sth!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t.faqTitle}</h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{t.faqQ1}</h3>
                <p className="text-gray-400 preline">
                  {t.faqA1}
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{t.faqQ2}</h3>
                <p className="text-gray-400 preline">
                  {t.faqA2}
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{t.faqQ3}</h3>
                <p className="text-gray-400 preline">
                  {t.faqA3}
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{t.faqQ4}</h3>
                <p className="text-gray-400 preline">
                  {t.faqA4}
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{t.faqQ5}</h3>
                <p className="text-gray-400 preline">
                  {t.faqA5}
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

export default Contact;