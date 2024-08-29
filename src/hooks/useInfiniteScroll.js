import { useEffect, useRef } from "react";

export function useInfiniteScroll(loadMore, loading) {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      {
        rootMargin: "100px",
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current); 
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading, loadMore]);

  return {
    observerRef, 
  };
}
