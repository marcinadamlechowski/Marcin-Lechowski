import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
