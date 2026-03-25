import React from 'react'
import './GlobalWebsiteApp.css';
import apps from './ConfigFile';

const GlobalWebsiteApp = () => {
    return (
        <div className="page-wrap">
            <div className="container">
                <header className="site-header">
                    <p className="eyebrow">Workspace</p>
                    <h1>Application Directory</h1>
                    <p className="lead">A responsive grid of your tools—open any card to jump in. Built for clarity on every
                        screen size.</p>
                </header>
                <div className="row g-4">
                    {(apps || []).map((app) => (
                        <div
                            className="col-12 col-sm-6 col-lg-4 col-xl-3"
                            key={app.href || app.title}
                        >
                            <article className="app-card" style={{ cursor: 'pointer' }}>
                                <div className="app-card-media">
                                    <img
                                        src={app.imageSrc}
                                        alt={app.imageAlt || ''}
                                        width="640"
                                        height="400"
                                        loading="lazy"
                                    />
                                    <span className="app-card-badge">{app.badge}</span>
                                </div>
                                <div className="app-card-body" style={{ cursor: 'pointer' }}>
                                    <h2 className="app-card-title">{app.title}</h2>
                                    <p className="app-card-desc">{app.desc}</p>
                                    <a className="app-card-link" href={app.href} target="_blank" rel="noopener noreferrer">
                                        Open app
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
                <footer className="gallery-foot">
                    Images via <a href="https://www.altruistindia.com/" className="text-decoration-none"
                        style={{ color: 'var(--accent)' }}>Altruist India</a> — replace URLs with your own screenshots or icons anytime.
                </footer>
            </div>
        </div>
    );
};

export default GlobalWebsiteApp;