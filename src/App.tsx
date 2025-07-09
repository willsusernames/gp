import './App.css';
import Store from './Store';
import MailingList from './MailingList';
import { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Updates() {
  return <div className="page-content">Updates Page</div>;
}

function Home({ scaleY, wordRefs }: { scaleY: number, wordRefs: any[] }) {
  const words = ["GIRL", "PERVERT", "MAG"];
  const links = [
    { label: "store", to: "/store" },
    { label: "updates", to: "/updates" },
    { label: "mailing list", to: "/mailing-list" }
  ];

  return (
    <div className="title-viewport">
      <div className="title-columns">
        {words.map((word, i) => (
          <div className="title-column" key={word}>
            <div
              className="girl-pervert-title girl-pervert-blur" // <-- Add blur class here
              ref={wordRefs[i]}
              style={{
                transform: `scaleY(${scaleY})`
              }}
            >
              {word}
            </div>
            <Link
              className="title-link"
              to={links[i].to}
            >
              {links[i].label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const wordRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  const [scaleY, setScaleY] = useState(1);

  useEffect(() => {
    function updateScale() {
      const heights = wordRefs.map(ref => ref.current?.offsetHeight || 0);
      const maxHeight = Math.max(...heights);
      const availableHeight = window.innerHeight * 0.8; // adjust as needed
      const factor = availableHeight / maxHeight;
      setScaleY(factor);
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="full-bg">
      <Router>
        <Routes>
          <Route path="/" element={<Home scaleY={scaleY} wordRefs={wordRefs} />} />
          <Route path="/store" element={<Store />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/mailing-list" element={<MailingList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;