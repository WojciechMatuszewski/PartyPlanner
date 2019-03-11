import React from 'react';

function useMedia(mediaQuery: string): boolean {
  const _initialSet = React.useRef<boolean>(false);
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const onChangeHandler = (event: MediaQueryListEvent) =>
      setMatches(event.matches);
    const matcher = window.matchMedia(mediaQuery);
    matcher.addListener(onChangeHandler);
    return () => matcher.addListener(onChangeHandler);
  }, [mediaQuery]);

  React.useEffect(() => {
    if (window && !_initialSet.current) {
      setMatches(window.matchMedia(mediaQuery).matches);
      _initialSet.current = true;
    }
  }, []);

  return matches;
}

export default useMedia;
