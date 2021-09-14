import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './component/utils/AppRoute';
import ScrollReveal from './component/utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './component/layouts/LayoutDefault';

// Views 
import Home from './component/views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);
const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};


const AboutPage = () => {
  return (
    <h2>About Page </h2>
  )
}
   
const App = () => {
  const childRef = useRef();
  let location = useLocation();

  

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal ref={childRef} children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute path="/about" component={AboutPage} layout={LayoutDefault} />
        </Switch>
      )} 
    />
  );
}

export default App;
