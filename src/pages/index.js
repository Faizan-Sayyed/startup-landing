import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Connect from 'sections/connect';
import PremiumFeature from 'sections/premium-feature';
import Product from 'sections/product';
import Dashboard from 'sections/dashboard';
import Team from 'sections/our-team';
import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Skilzen"
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
        />
        <Banner />
        <Connect />
        <PremiumFeature />
        <Product />
        <Dashboard />
        <Team/>
        <Testimonials />
        <Subscribe />
      </Layout>
    </ThemeProvider>
    
  );
}
