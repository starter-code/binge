import React, { useRef, useState } from 'react';
import classNames from 'classnames';

export const Hero = () => {
  const heroRef = useRef(null);
  const [animationIndex, setAnimationIndex] = useState(0);
  const onAnimationEnd = () => {
    setAnimationIndex(animationIndex + 1);
  };

  /**
   * Calculates and returns the correct classNames for the animating elements.
   * If the animatingIndex is the same as elementIndex, it is currently animating.
   * If the animatingIndex passed the elementIndex, the element has finished
   * animating and is now fully visible.
   * @param {Number} elementIndex
   * @param {Number} animatingIndex
   * @returns {String} classNames
   */
  const heroTextClassNames = (elementIndex, animatingIndex) => {
    if (elementIndex === animatingIndex) {
      return classNames('hero-text', 'fading-in');
    } else if (elementIndex <= animatingIndex) {
      return classNames('hero-text', 'visible');
    } else {
      return classNames('hero-text', 'hidden');
    }
  };

  return (
    <div id="hero" className="hero" ref={heroRef}>
      <h1
        className={heroTextClassNames(0, animationIndex)}
        onAnimationEnd={onAnimationEnd}
      >
        Welcome to Binge
      </h1>
      <h1
        className={heroTextClassNames(1, animationIndex)}
        onAnimationEnd={onAnimationEnd}
      >
        Find your favorite TV shows
      </h1>
      <h1
        className={heroTextClassNames(2, animationIndex)}
        onAnimationEnd={onAnimationEnd}
      >
        View historical ratings in a chart
      </h1>
      <h1
        className={heroTextClassNames(3, animationIndex)}
        onAnimationEnd={onAnimationEnd}
      >
        Compare TV show ratings
      </h1>
    </div>
  );
};
