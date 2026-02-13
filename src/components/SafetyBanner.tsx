import { useState } from "react";
import { X } from "lucide-react";

const SafetyBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="safety-banner px-4 py-3 text-sm">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <p className="font-body leading-relaxed opacity-90">
          <strong className="font-semibold">Safety Alert:</strong> If you are in danger, call{" "}
          <a href="tel:18009349840" className="underline font-semibold hover:opacity-80 transition-opacity">
            1-800-934-9840
          </a>
          . Computer use can be monitored.{" "}
          <span className="hidden sm:inline">
            If you are afraid your internet use is being monitored, please use a safer device.
          </span>
        </p>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss safety alert"
          className="shrink-0 p-1 rounded hover:bg-primary-foreground/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SafetyBanner;
