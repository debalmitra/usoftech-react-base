import { useEffect, useRef, useState } from "react";

import { Fab, Icon } from "framework7-react";

import "./BackToTop.css";

export default function BackToTop() {
  const fabRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fabElement = fabRef.current;

    if (!fabElement) {
      return;
    }

    const page = fabElement.closest(".page");

    const pageContent = page?.querySelector(".page-content");

    if (!pageContent) {
      return;
    }

    const handleScroll = () => {
      setVisible(pageContent.scrollTop > 250);
    };

    pageContent.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      pageContent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const fabElement = fabRef.current;

    if (!fabElement) {
      return;
    }

    const page = fabElement.closest(".page");

    const pageContent = page?.querySelector(".page-content");

    if (!pageContent) {
      return;
    }

    pageContent.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={fabRef}
      className={`back-to-top ${visible ? "back-to-top-visible" : ""}`}
    >
      <Fab position="right-bottom" onClick={scrollToTop}>
        <Icon f7="arrow_up" />
      </Fab>
    </div>
  );
}
