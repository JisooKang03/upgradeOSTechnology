import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";

/* ---------- Layout ---------- */
function Nav() {
  const link = ({ isActive }) => ({
    fontSize: 14,
    color: isActive ? "var(--fg)" : "var(--muted)",
    fontWeight: isActive ? 600 : 400,
  });
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        <Link to="/" style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
          UpgradeOS
        </Link>
        <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <NavLink to="/about" style={link}>About</NavLink>
          <NavLink to="/products" style={link}>Products</NavLink>
          <NavLink to="/founder" style={link}>Founder</NavLink>
          <NavLink to="/blog" style={link}>Blog</NavLink>
          <NavLink to="/roadmap" style={link}>Roadmap</NavLink>
          <NavLink to="/investors" style={link}>Investors</NavLink>
          <NavLink to="/careers" style={link}>Careers</NavLink>
          <Link to="/contact" className="btn">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const col = (title, links) => (
    <div>
      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
        {links.map(([label, to]) => (
          <li key={to}><Link to={to} className="muted" style={{ fontSize: 14 }}>{label}</Link></li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: 80, padding: "48px 0" }}>
      <div className="container grid grid-4">
        {col("Products", [
          ["Ledger", "/products/ledger"], ["Accounting", "/products/accounting"],
          ["AI", "/products/ai"], ["Games", "/products/games"], ["Future", "/products/future"],
        ])}
        {col("Company", [["About", "/about"], ["Founder", "/founder"], ["Careers", "/careers"], ["Contact", "/contact"]])}
        {col("Resources", [["Blog", "/blog"], ["Roadmap", "/roadmap"], ["Investors", "/investors"], ["Press Kit", "/press"]])}
        {col("Legal", [["Security", "/security"], ["Privacy", "/privacy"], ["Terms", "/terms"]])}
      </div>
      <div className="container muted" style={{ fontSize: 13, marginTop: 40 }}>
        © {new Date().getFullYear()} UpgradeOS Technology Inc.
      </div>
    </footer>
  );
}

function Layout() {
  return (
    <>
      <Nav />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}

/* ---------- Reusable ---------- */
function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section style={{ padding: "96px 0 48px" }}>
      <div className="container" style={{ maxWidth: 800 }}>
        {eyebrow && <div className="muted" style={{ fontSize: 14, marginBottom: 16 }}>{eyebrow}</div>}
        <h1>{title}</h1>
        {subtitle && <p className="muted" style={{ fontSize: 20 }}>{subtitle}</p>}
      </div>
    </section>
  );
}

function ProductCard({ name, tag, desc, to }) {
  return (
    <Link to={to} className="card" style={{ display: "block" }}>
      <div style={{ fontSize: 12, color: "var(--brand)", marginBottom: 12 }}>{tag}</div>
      <h3>{name}</h3>
      <p className="muted" style={{ margin: 0 }}>{desc}</p>
    </Link>
  );
}

/* ---------- Pages ---------- */
function Home() {
  return (
    <>
      <section style={{ padding: "120px 0 80px" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h1>Software that <span className="gradient-text">upgrades</span> your life.</h1>
          <p className="muted" style={{ fontSize: 22, maxWidth: 640 }}>
            UpgradeOS builds tools across finance, AI, and play — designed to make
            people and businesses measurably better.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <Link to="/products" className="btn">Explore products</Link>
            <Link to="/about" className="btn btn-ghost">About us</Link>
          </div>
        </div>
      </section>
      <section className="container grid grid-3" style={{ paddingTop: 40 }}>
        <ProductCard name="Ledger" tag="Live Beta" desc="Personal finance, rebuilt." to="/products/ledger" />
        <ProductCard name="Accounting" tag="Coming Soon" desc="Books that run themselves." to="/products/accounting" />
        <ProductCard name="AI" tag="Coming Soon" desc="Agents for everyday work." to="/products/ai" />
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="Building the operating system for a better life."
        subtitle="UpgradeOS is an umbrella technology company shipping software across finance, intelligence, and play." />
    </>
  );
}

function Founder() {
  return <PageHeader eyebrow="Founder" title="A note from the founder." subtitle="The why behind UpgradeOS." />;
}

function ProductsLayout() {
  return (
    <>
      <PageHeader eyebrow="Products" title="One company. Many upgrades."
        subtitle="Each product is built to be the best in its category — and to compound with the others." />
      <div className="container"><Outlet /></div>
    </>
  );
}

function ProductsIndex() {
  return (
    <div className="grid grid-3">
      <ProductCard name="Ledger" tag="Live Beta" desc="Personal finance, rebuilt." to="/products/ledger" />
      <ProductCard name="Accounting" tag="Coming Soon" desc="Books that run themselves." to="/products/accounting" />
      <ProductCard name="AI" tag="Coming Soon" desc="Agents for everyday work." to="/products/ai" />
      <ProductCard name="Games" tag="Coming Soon" desc="Play that teaches." to="/products/games" />
      <ProductCard name="Future" tag="Roadmap" desc="What we're exploring next." to="/products/future" />
    </div>
  );
}

const ProductPage = ({ name, status, desc }) => (
  <div style={{ padding: "32px 0 64px", maxWidth: 720 }}>
    <div style={{ fontSize: 12, color: "var(--brand)", marginBottom: 12 }}>{status}</div>
    <h2>{name}</h2>
    <p className="muted" style={{ fontSize: 18 }}>{desc}</p>
  </div>
);

function Blog()      { return <PageHeader eyebrow="Blog" title="Notes from the team." />; }
function Roadmap()   { return <PageHeader eyebrow="Roadmap" title="What we're shipping next." />; }
function Investors() { return <PageHeader eyebrow="Investors" title="Backing a long-term company." />; }
function Careers()   { return <PageHeader eyebrow="Careers" title="Build the upgrade with us." />; }
function Contact()   { return <PageHeader eyebrow="Contact" title="Get in touch." subtitle="hello@upgradeos.ca" />; }
function Press()     { return <PageHeader eyebrow="Press" title="Press kit & assets." />; }
function Security()  { return <PageHeader eyebrow="Security" title="How we protect your data." />; }
function Privacy()   { return <PageHeader eyebrow="Legal" title="Privacy Policy." />; }
function Terms()     { return <PageHeader eyebrow="Legal" title="Terms of Service." />; }
function NotFound()  { return <PageHeader title="404" subtitle="That page doesn't exist." />; }

/* ---------- App ---------- */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="founder" element={<Founder />} />
        <Route path="products" element={<ProductsLayout />}>
          <Route index element={<ProductsIndex />} />
          <Route path="ledger"     element={<ProductPage name="Ledger"     status="Live Beta"    desc="Personal finance, rebuilt from first principles." />} />
          <Route path="accounting" element={<ProductPage name="Accounting" status="Coming Soon"  desc="Automated books for modern businesses." />} />
          <Route path="ai"         element={<ProductPage name="AI"         status="Coming Soon"  desc="Agents that handle real work." />} />
          <Route path="games"      element={<ProductPage name="Games"      status="Coming Soon"  desc="Games that make you sharper." />} />
          <Route path="future"     element={<ProductPage name="Future Products" status="Roadmap" desc="What we're exploring next." />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="investors" element={<Investors />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="press" element={<Press />} />
        <Route path="security" element={<Security />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
