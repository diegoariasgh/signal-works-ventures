import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-24 md:py-32"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--electric-blue)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--electric-blue)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] signal-glow rounded-full opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow-light mb-6">Get in touch —</p>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="display-lg text-white">
                We partner with mission-aligned teams to turn{" "}
                <span className="editorial-underline">intent</span> into{" "}
                <span className="text-electric">execution</span>.
              </h2>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <p className="text-lg text-slate-light/80 leading-relaxed">
                Share a few lines on your goal, and we&apos;ll take it from
                there.
              </p>

              <div className="flex flex-col gap-3">
                <Button
                  variant="signal"
                  size="lg"
                  className="group bg-electric hover:bg-electric-light text-white justify-start"
                  asChild
                >
                  <a
                    href="https://zcal.co/diegoarias/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book an Intro Call
                    <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 signal-transition" />
                  </a>
                </Button>

                <Button
                  variant="outline-light"
                  size="lg"
                  className="group justify-start"
                  onClick={() =>
                    window.open("https://wa.me/+971547109660", "_blank")
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with us
                  <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 signal-transition" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
