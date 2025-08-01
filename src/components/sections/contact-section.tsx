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
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
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
        >
          <Card className="bg-gradient-to-br from-gray-950 to-blue-950 border-blue-900 shadow-2xl py-0">
            <CardContent className="p-8">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-gradient-to-r from-gray-950 to-blue-950 border-blue-900 text-white placeholder-blue-300 focus:border-blue-500"
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
                    className="bg-gradient-to-r from-gray-950 to-blue-950 border-blue-900 text-white placeholder-blue-300 focus:border-blue-500"
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
                    className="bg-gradient-to-r from-gray-950 to-blue-950 border-blue-900 text-white placeholder-blue-300 min-h-32 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-gray-950 to-blue-950 hover:from-gray-900 hover:to-blue-900 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
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
