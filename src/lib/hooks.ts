import { useEffect, useRef, useState } from "react";

export interface ElementSize {
  width: number;
  height: number;
}

/**
 * Hook that returns the width and height of a ref element.
 * Automatically updates when the element's dimensions change using ResizeObserver.
 *
 * @param watch - Whether to watch for dimension changes using ResizeObserver (default: true)
 * @returns An object containing:
 *   - ref: React ref to attach to the element you want to measure
 *   - width: Current width of the element (0 if not mounted)
 *   - height: Current height of the element (0 if not mounted)
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { ref, width, height } = useElementSize({ watch: true });
 *
 *   return (
 *     <div ref={ref}>
 *       <p>Width: {width}px, Height: {height}px</p>
 *     </div>
 *   );
 * }
 * ```
 */
export function useElementSize<T extends HTMLElement = HTMLDivElement>(
  options: { watch?: boolean } = {}
) {
  const { watch = true } = options;
  const ref = useRef<T>(null);
  const [size, setSize] = useState<ElementSize>({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Initialize with current size
    const updateSize = () => {
      const rect = element.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    };

    // Set initial size
    updateSize();

    // Only attach ResizeObserver if watch is true
    if (!watch) return;

    // Create ResizeObserver to watch for changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    // Start observing
    resizeObserver.observe(element);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, [watch]);

  return {
    ref,
    width: size.width,
    height: size.height,
    size,
  };
}
