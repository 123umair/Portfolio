import { useCallback, useRef, useState } from 'react';

/**
 * CONTROLLER: writes text to the clipboard and exposes brief "copied" feedback.
 */
export const useClipboardFeedback = (feedbackMs = 1600) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        if (timer.current) window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), feedbackMs);
      } catch {
        /* clipboard unavailable (permissions) — silently ignore */
      }
    },
    [feedbackMs],
  );

  return { copied, copy };
};
