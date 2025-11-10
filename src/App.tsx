import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        {/* <section id="how" style={{ padding: '2rem 1rem', maxWidth: 1280, margin: '0 auto' }}>
          <h2>How It Works</h2>
          <ol style={{ lineHeight: 1.6 }}>
            <li>Browse verified listings.</li>
            <li>Open a dedicated chat with the landlord or tenant.</li>
            <li>Schedule a viewing with one click.</li>
          </ol>
        </section>
        <section id="contact" style={{ padding: '2rem 1rem', maxWidth: 1280, margin: '0 auto' }}>
          <h2>Contact</h2>
          <p style={{ maxWidth: 520 }}>
            Have questions? Reach us at <a href="mailto:contact@tenansee.example">contact@tenansee.example</a>
            {' '}or follow us on social for product updates.
          </p>
        </section> */}
      </main>
    </>
  )
}

export default App
