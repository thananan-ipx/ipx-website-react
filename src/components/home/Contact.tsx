import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocalization } from "@/contexts/LocalizationContext";

const Contact = () => {
  const { language } = useLocalization();
  const translations = {
    en: {
      contact: {
        title: "CONTACT INFORMATION",
        subtitle: "Get in touch with us to discuss your project requirements or any questions you might have about our services.",
        phoneLabel: "Phone Number",
        phone: "+66-83-449-0802",
        emailLabel: "Email",
        email: "sale@iprogressx.co.th",
        websiteLabel: "Website",
        website: "www.iprogressx.co.th",
        addressLabel: "Address",
        address: "58/158 Moo. 5, Soi Huai kapi 17, Huai kapi, Chonburi 20000",
        formTitle: "Get In Touch",
        nameLabel: "Your Name",
        namePlaceholder: "John Doe",
        emailPlaceholder: "john@example.com",
        phonePlaceholder: "+66 123 456 789",
        messageLabel: "Your Message",
        messagePlaceholder: "Tell us about your project or inquiry...",
        submitButton: "Send Message",
        successMessage: "Thank you for your message! We'll get back to you soon."
      },
    },
    th: {
      contact: {
        title: "ข้อมูลการติดต่อ",
        subtitle: "ติดต่อเราหากคุณต้องการพูดคุยเกี่ยวกับข้อกำหนดโปรเจกต์ของคุณ หรือคำถามที่คุณมีเกี่ยวกับบริการของเรา",
        phoneLabel: "หมายเลขโทรศัพท์",
        phone: "+66-83-449-0802",
        emailLabel: "อีเมล",
        email: "sale@iprogressx.co.th",
        websiteLabel: "เว็บไซต์",
        website: "www.iprogressx.co.th",
        addressLabel: "ที่อยู่",
        address: "58/158 หมู่ 5 ซอยห้วยกะปิ 17 ห้วยกะปิ ชลบุรี 20000",
        formTitle: "ติดต่อเรา",
        nameLabel: "ชื่อของคุณ",
        namePlaceholder: "จอห์น โด",
        emailPlaceholder: "john@example.com",
        phonePlaceholder: "+66 123 456 789",
        messageLabel: "ข้อความของคุณ",
        messagePlaceholder: "บอกเราเกี่ยวกับโปรเจกต์หรือคำถามของคุณ...",
        submitButton: "ส่งข้อความ",
        successMessage: "ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับในเร็วๆ นี้"
      },
    },
  };

  const t = translations[language]?.contact || translations.en.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      message: ""
    });
  };

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{t.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto preline">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="glass-card rounded-lg p-8">
              <div className="flex items-start space-x-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{t.phoneLabel}</h3>
                  <p className="text-gray-400">{t.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{t.emailLabel}</h3>
                  <p className="text-gray-400">{t.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{t.websiteLabel}</h3>
                  <p className="text-gray-400">{t.website}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{t.addressLabel}</h3>
                  <p className="text-gray-400">{t.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.4869816356213!2d100.95263679537594!3d13.297390120617255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b5371d880a15%3A0xe47e07d975ef5559!2zNTgg4Lir4LmJ4Lin4Lii4LiB4Liw4Lib4Li0IDE3IOC4leC4s-C4muC4pSDguKvguYnguKfguKLguIHguLDguJvguLQg4Lit4Liz4LmA4Lig4Lit4LmA4Lih4Li34Lit4LiH4LiK4Lil4Lia4Li44Lij4Li1IOC4iuC4peC4muC4uOC4o-C4tSAyMDAwMA!5e0!3m2!1sth!2sth!4v1744122323224!5m2!1sth!2sth"
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="glass-card rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">{t.formTitle}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">{t.nameLabel}</label>
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

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">{t.emailLabel}</label>
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

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">{t.phoneLabel}</label>
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

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t.messagePlaceholder}
                />
              </div>

              <Button disabled type="submit" className="w-full">{t.submitButton}</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
