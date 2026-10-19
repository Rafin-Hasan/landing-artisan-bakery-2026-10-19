export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Wheatfield Bakehouse</span>
        <a href="#cta" className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition">
          Order Now
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-rose-600 font-semibold mb-4">Fresh Daily</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Handcrafted bread, baked before sunrise</h1>
        <p className="text-lg text-slate-600 mb-10">Small-batch sourdough and pastries made with organic flour and old-world technique.</p>
        <a href="#cta" className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-rose-700 transition">
          See This Week’s Menu
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Organic Ingredients</h3>
          <p className="text-slate-600">Locally milled flour, no additives, ever.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Small Batches</h3>
          <p className="text-slate-600">Baked fresh every morning in limited quantities.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Custom Orders</h3>
          <p className="text-slate-600">Cakes and pastries for any occasion.</p>
        </div>
      </section>

      <section id="cta" className="bg-rose-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Taste the difference of real bread</h2>
        <p className="mb-8 text-rose-100">Order ahead for pickup or same-day local delivery.</p>
        <a href="#" className="inline-block bg-white text-rose-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          See This Week’s Menu
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Wheatfield Bakehouse. All rights reserved.
      </footer>
    </div>
  )
}
