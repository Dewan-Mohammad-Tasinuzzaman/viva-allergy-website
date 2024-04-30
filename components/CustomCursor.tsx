'use client';

import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const initCursor = () => {
      const cursorIcon = document.querySelector<HTMLElement>("[data-cursor-icon]");
      const cursorOutline = document.querySelector<HTMLElement>("[data-cursor-outline]");
      const skinTestsVideoContainer = document.querySelector<HTMLElement>(".skin-tests-vidcontainer__wrapper-source");

      const moveCursor = (e: MouseEvent) => {
        if (cursorIcon && cursorOutline) {
          const posX = e.clientX;
          const posY = e.clientY;

          cursorIcon.style.left = `${posX}px`;
          cursorIcon.style.top = `${posY}px`;

          cursorOutline.style.left = `${posX}px`;
          cursorOutline.style.top = `${posY}px`;

          cursorOutline.animate(
            {
              left: `${posX}px`,
              top: `${posY}px`
            },
            {
              duration: 700,
              fill: 'forwards'
            }
          );
        }
      };

      const handleLinkHover = () => {
        if (cursorIcon && cursorOutline) {
          cursorIcon.classList.add("cursor-icon-link-hover");
          cursorOutline.classList.add("cursor-outline-link-hover");
        }
      };

      const handleLinkLeave = () => {
        if (cursorIcon && cursorOutline) {
          cursorIcon.classList.remove("cursor-icon-link-hover");
          cursorOutline.classList.remove("cursor-outline-link-hover");
        }
      };

      const handleSkinTestsHover = () => {
        if (cursorIcon && cursorOutline) {
          cursorIcon.classList.add("cursor-disappear");
          cursorOutline.classList.add("cursor-disappear");
        }
      };

      const handleSkinTestsLeave = () => {
        if (cursorIcon && cursorOutline) {
          cursorIcon.classList.remove("cursor-disappear");
          cursorOutline.classList.remove("cursor-disappear");
        }
      };

      window.addEventListener("mousemove", moveCursor);

      const linkElements = document.querySelectorAll("a, button, li, input, select, textarea, .allergyExtract, .sideModal__collapseContainer_button, .skintests__comforten_banner-selector--option, .skintests__instructions_video-card, .representative__container_details-button");
      linkElements.forEach((link) => {
        link.addEventListener("mouseenter", handleLinkHover);
        link.addEventListener("mouseleave", handleLinkLeave);
      });

      skinTestsVideoContainer?.addEventListener("mouseenter", handleSkinTestsHover);
      skinTestsVideoContainer?.addEventListener("mouseleave", handleSkinTestsLeave);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        linkElements.forEach((link) => {
          link.removeEventListener("mouseenter", handleLinkHover);
          link.removeEventListener("mouseleave", handleLinkLeave);
        });
        skinTestsVideoContainer?.removeEventListener("mouseenter", handleSkinTestsHover);
        skinTestsVideoContainer?.removeEventListener("mouseleave", handleSkinTestsLeave);
      };
    };

    // Run initCursor after the DOMContentLoaded event
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCursor);
    } else {
      initCursor();
    }
  }, []);

  return (
    <>
      <div className="cursor-icon" data-cursor-icon></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </>
  );
};

export default CustomCursor;
