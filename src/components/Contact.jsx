import { Mail, Github } from "lucide-react";
import { BsBehance } from "react-icons/bs";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 bg-base-100">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#3246ea]">Contact Me</h2>
        <p className="mb-8 text-base">
          I’d love to hear from you! Whether it’s a question, collaboration, or just a hello — feel free to reach out.
        </p>

        <div className="flex flex-col gap-4 items-center justify-center">
          <a
            href="mailto:lianngonzales7@gmail.com"
            className="btn btn-outline flex items-center gap-2 hover:bg-[#3246ea] hover:text-white"
          >
            <Mail className="w-5 h-5" /> Email
          </a>
          <a
            href="https://github.com/liaskyyy"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline flex items-center gap-2 hover:bg-[#3246ea] hover:text-white"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a
            href="https://www.behance.net/lianngonza304c"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline flex items-center gap-2 hover:bg-[#3246ea] hover:text-white"
          >
            <BsBehance className="w-5 h-5" /> Behance
          </a>
        </div>
      </div>
    </section>
  );
}

