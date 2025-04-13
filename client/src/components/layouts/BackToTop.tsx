import { useEffect, useState } from "react";
import { ChevronUp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Sujan_Basnet_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Back to Top Button */}
      <div className={`fixed bottom-6 left-6 z-40 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Button
          onClick={scrollToTop}
          className="bg-slate-900 hover:bg-slate-800 text-white h-12 w-12 rounded-full shadow-lg p-0"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      </div>

      {/* Floating Resume Download Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={handleResumeDownload}
          className="bg-primary hover:bg-blue-600 text-white h-12 w-12 rounded-full shadow-lg p-0"
          aria-label="Download Resume"
        >
          <Download className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
}
