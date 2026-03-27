import RoseGoldText from "@/components/ui/RoseGoldText";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-32 pb-24 bg-cream/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="subheader block mb-6">Get in Touch</span>
          <RoseGoldText as="h2" className="font-playfair text-4xl md:text-5xl lg:text-6xl block">
            Contact Us
          </RoseGoldText>
          <p className="mt-8 text-warm-gray font-montserrat font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions? Reach out to us or follow our journey on social media.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-playfair text-2xl text-charcoal mb-8">Contact Information</h3>
            <div className="space-y-6 font-montserrat font-light text-warm-gray">
              <div>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-rose-gold mb-1">Studio</span>
                <p>123 Premium Ave, Studio 4B<br/>Ottawa, ON K1A 0B1</p>
              </div>
              <div>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-rose-gold mb-1">Phone</span>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-rose-gold mb-1">Email</span>
                <p>hello@theesperience.com</p>
              </div>
            </div>
            
            <h3 className="font-playfair text-2xl text-charcoal mt-12 mb-6">Socials</h3>
            <div className="flex gap-4">
               <a href="#" className="w-12 h-12 border border-cream-dark flex items-center justify-center text-charcoal hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300 glimmer-hover text-sm tracking-widest">IG</a>
               <a href="#" className="w-12 h-12 border border-cream-dark flex items-center justify-center text-charcoal hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 glimmer-hover text-sm tracking-widest">FB</a>
               <a href="#" className="w-12 h-12 border border-cream-dark flex items-center justify-center text-charcoal hover:text-white hover:bg-black hover:border-black transition-all duration-300 glimmer-hover text-sm tracking-widest">TT</a>
            </div>
          </div>

          <div>
            <div className="p-12 border border-cream-dark bg-white/50 backdrop-blur-sm flex flex-col justify-center items-center text-center h-full glimmer-hover transition-colors duration-500 hover:border-rose-gold/30">
              <p className="subheader mb-4">Appointments</p>
              <h3 className="font-playfair text-3xl text-rose-gold-gradient mb-4">Book Your Visit</h3>
              <p className="font-montserrat font-light text-warm-gray mb-8">
                Skip the wait and secure your appointment directly through our scheduling portal.
              </p>
              <Button href="#booking" size="lg">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
