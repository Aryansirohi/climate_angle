import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="dashboard-title">
          <h1>Dashboard 5</h1>
        </div>
        <div className="climate-angels-logo">
          <img src="/logo.svg" alt="Climate Angels Logo" />
        </div>
        <div className="user-profile">
          <img src="/profile-pic.jpg" alt="Profile Picture" />
          <span>Shailesh Vickram</span>
          <span>Investor</span>
        </div>
      </header>
      <main className="app-main">
        <nav className="app-sidebar">
          <ul>
            <li>
              <img src="/portfolio-icon.svg" alt="Portfolio Icon" />
              Portfolio
            </li>
            <li>
              <img src="/invest-icon.svg" alt="Invest Icon" />
              Invest
            </li>
            <li>
              <img src="/syndicates-icon.svg" alt="Syndicates Icon" />
              As Syndicates
            </li>
            <li>
              <img src="/ledger-icon.svg" alt="Ledger Icon" />
              Ledger
            </li>
            <li>
              <img src="/messages-icon.svg" alt="Messages Icon" />
              Messages
            </li>
            <li>
              <img src="/events-icon.svg" alt="Events Icon" />
              Events
            </li>
            <li>
              <img src="/news-icon.svg" alt="News Icon" />
              News & Blogs
            </li>
            <li>
              <img src="/help-icon.svg" alt="Help Icon" />
              Help & Support
            </li>
          </ul>
        </nav>
        <section className="app-content">
          <div className="portfolio-section">
            <h2>My portfolio</h2>
            <div className="portfolio-tabs">
              <button>Dashboard</button>
              <button>MIS & Updates</button>
              <button>Insights</button>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search by company name..." />
            </div>
            <button className="filter-button">Filter</button>
          </div>
          <div className="activity-feed-section">
            <h2>Activity feed</h2>
            <div className="activity-item">
              <div className="investor-update-label">Investor update</div>
              <div className="activity-item-content">
                <img src="/ace-green-recycling-logo.svg" alt="Ace Green Recycling Logo" />
                <div className="activity-item-details">
                  <h3>Ace Green Recycling</h3>
                  <span>Battery Recycling | Bengaluru</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nulla uma quis ipsum lectus adipiscing. Egestas et mi tortor
                  pretium convallis vel eu tincidunt commodo quisque nunc sit ac vulputate orci. Tincidunt vel vel
                  ultricies enim integer ac blandit. Vestibulum inaecenas cursus
