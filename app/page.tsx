export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For CS Educators &amp; Students
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Turn Complex Algorithms into{' '}
          <span className="text-[#58a6ff]">Interactive 3D Visualizations</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Watch sorting, graph traversal, trees, and dynamic programming come alive in real-time 3D. Built for teaching, designed for understanding.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Visualizing — $39/mo
          </a>
          <a
            href="#demo"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            View Free Demo
          </a>
        </div>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Free tier includes 5 algorithms.</p>
      </section>

      {/* Feature highlights */}
      <section id="demo" className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: '🧊', title: 'Real-Time 3D Rendering', desc: 'Three.js-powered visualizations with smooth animations and interactive camera controls.' },
          { icon: '📚', title: '50+ Algorithm Library', desc: 'Sorting, searching, graph traversal, trees, dynamic programming, and more — all in 3D.' },
          { icon: '🎓', title: 'Classroom Ready', desc: 'Step-through mode, speed controls, and exportable slides for lectures and assignments.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-bold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$39</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'All 50+ algorithm visualizations',
              'Interactive 3D controls & step-through',
              'Speed & complexity controls',
              'Exportable lecture slides',
              'New algorithms added monthly',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-4 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Do I need a powerful computer to run the 3D visualizations?',
              a: 'No. The visualizations run in your browser using WebGL via Three.js. Any modern laptop or desktop with a recent browser works great.',
            },
            {
              q: 'Can I use this in my university classroom?',
              a: 'Absolutely. The Pro plan includes exportable slides and step-through mode designed specifically for lectures and live teaching sessions.',
            },
            {
              q: 'What happens if I cancel my subscription?',
              a: 'You keep access until the end of your billing period. After that, you revert to the free tier with 5 algorithm visualizations.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Algorithm 3D Visualizer. All rights reserved.
      </footer>
    </main>
  )
}
