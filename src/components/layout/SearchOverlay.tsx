import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useRef, useEffect } from "react";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
  value: string;
  onChange: (val: string) => void;
}

const SearchOverlay = ({ open, onClose, value, onChange }: SearchOverlayProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background shadow-lg p-6"
        >
          <div className="container mx-auto flex items-center gap-4">
            <Search size={24} className="text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Search soaps..."
              className="flex-1 text-2xl font-display bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
            />
            <button onClick={() => { onChange(""); onClose(); }} className="p-2 hover:bg-secondary rounded-full transition-colors">
              <X size={24} className="text-foreground" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
