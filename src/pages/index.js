import React from 'react';

// components
import Partnering from '../components/Partnering';

// assets
import IconApple from '../static/images/apple.svg';
import IconGooglePlay from '../static/images/google_play.svg';
import IconQuadpay from '../static/images/quadpay.svg';

// styles
import './styles.scss';

const App = () => {
  const partnerings = [
    {
      icon: 'smart_phone',
      title: 'Make payment seamless',
      description: 'Online or in-store, Quadpay means more flexibility at checkout.'
    },
    {
      icon: 'security',
      title: 'Take on zero risk',
      description: 'You get paid today. Your customers pay over time.'
    },
    {
      icon: 'finance',
      title: 'Put your customers first',
      description: 'Interest-free installment plans with no hard credit check or impact on credit.'
    },
    {
      icon: 'account',
      title: 'Accept all major cards',
      description: 'QuadPay is the only Buy Now, Pay Later solution that accepts Amex and Discover along with Visa.'
    },
    {
      icon: 'fireworks',
      title: 'Tap into our community',
      description: 'Introduce your brand to millions of existing QuadPay customers in our marketplace.'
    },
    {
      icon: 'chart',
      title: 'Track progress',
      description: 'Easily manage customer data, order management, and reconciliation in the merchant portal.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="left-panel">
          <h1 className="title">
            Quadpay <br />
            anywhere
          </h1>
          <p className="description">
            Shop your favorite brands with the Quadpay <br />
            app—online or in-store.
          </p>
          <div className="social-links">
            <a className="btn-apple" href="#" target="_blank">
              <img src={IconApple} alt="apple" />
              <span>Get on the App Store</span>
            </a>
            <a className="btn-google-play" href="#" target="_blank">
              <img src={IconGooglePlay} alt="google-play" />
              <span>Get on Google Play</span>
            </a>
          </div>
        </div>
        <div className="right-panel">
          <img src={IconQuadpay} alt="quadpay" />
        </div>
      </section>

      {/* Partnerings */}
      <section className="content">
        <h2 className="title">Partnering with Quadpay</h2>
        <div className="partnerings">
          {partnerings.map(({ icon, title, description }, index) => (
            <Partnering
              key={index}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
