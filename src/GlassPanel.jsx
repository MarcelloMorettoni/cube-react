// GlassPanel.jsx
import './GlassPanel.css';

export default function GlassPanel({ faceIndex, texts }) {
  if (faceIndex === null) return null;

  return (
    <div className="glass-panel">
      <h3>Face {faceIndex + 1}</h3>
      <p>{texts[faceIndex]}</p>
    </div>
  );
}
