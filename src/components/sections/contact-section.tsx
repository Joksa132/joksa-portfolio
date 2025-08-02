import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { Textarea } from "../ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId: string = "service_o7mhz4c";
    const templateId: string = "template_kf6q4kh";
    const publicKey: string = "Mqvw0vTR8ralr2od4";

    emailjs
      .sendForm(serviceId, templateId, formRef.current || "", publicKey)
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-300 via-white to-blue-400 bg-clip-text text-transparent relative inline-block"
            style={{
              textShadow: "0 0 10px rgba(191, 219, 254, 0.3)",
              filter: "drop-shadow(0 0 5px rgba(191, 219, 254, 0.2))",
            }}
          >
            Contact Me
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden rounded-xl border border-blue-800 shadow-xl shadow-blue-900/50 bg-gray-900"
        >
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-950 opacity-40 rounded-xl"></div>

          <Card className="bg-transparent border-none shadow-none py-0 relative z-10">
            <CardContent className="p-8">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 min-h-32 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-gray-800 to-blue-950 hover:from-gray-800 hover:to-blue-900 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
