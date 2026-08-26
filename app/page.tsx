import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Projects from '@/components/Projects';
import BlogPreview from '@/components/BlogPreview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
