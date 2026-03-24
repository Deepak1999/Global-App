import React from 'react'
import './GlobalWebsiteApp.css';

const GlobalWebsiteApp = () => {
    return (
        <div className="page-wrap">
            <div className="container">
                <header className="site-header">
                    <p className="eyebrow">Workspace</p>
                    <h1>Application Gallery</h1>
                    <p className="lead">A responsive grid of your tools—open any card to jump in. Built for clarity on every
                        screen size.</p>
                </header>
                <div className="row g-4">
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <article className="app-card">
                            <div className="app-card-media">
                                <img src="https://picsum.photos/seed/truckload/640/400" alt="" width="640" height="400"
                                    loading="lazy" />
                                <span className="app-card-badge">Testing</span>
                            </div>
                            <div className="app-card-body">
                                <h2 className="app-card-title">TruckLoad</h2>
                                <p className="app-card-desc">Load planning, routes, and fleet visibility in one place.</p>
                                <a className="app-card-link" href="TruckLoad.html">Open app
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <article className="app-card">
                            <div className="app-card-media">
                                <img src="https://picsum.photos/seed/adminportal/640/400" alt="" width="640" height="400"
                                    loading="lazy" />
                                <span className="app-card-badge">Admin</span>
                            </div>
                            <div className="app-card-body">
                                <h2 className="app-card-title">TruckLoad Admin</h2>
                                <p className="app-card-desc">Portal for operators to manage loads and settings.</p>
                                <a className="app-card-link" href="TruckLoadAdminPortal.html">Open app
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <article className="app-card">
                            <div className="app-card-media">
                                <img src="https://picsum.photos/seed/inventory/640/400" alt="" width="640" height="400"
                                    loading="lazy" />
                                <span className="app-card-badge">Inventory App</span>
                            </div>
                            <div className="app-card-body">
                                <h2 className="app-card-title">Inventory</h2>
                                <p className="app-card-desc">Stock levels, SKUs, and warehouse snapshots.</p>
                                <a className="app-card-link" href="invt.html">Open app
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <article className="app-card">
                            <div className="app-card-media">
                                <img src="https://picsum.photos/seed/abuzz/640/400" alt="" width="640" height="400"
                                    loading="lazy" />
                                <span className="app-card-badge">Flipkart Hub</span>
                            </div>
                            <div className="app-card-body">
                                <h2 className="app-card-title">Abuzz</h2>
                                <p className="app-card-desc">Your main experience—messaging and activity in focus.</p>
                                <a className="app-card-link" href="Abuzz.html">Open app
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <article className="app-card">
                            <div className="app-card-media">
                                <img src="https://picsum.photos/seed/homeindex/640/400" alt="" width="640" height="400"
                                    loading="lazy" />
                                <span className="app-card-badge">Amazon Home</span>
                            </div>
                            <div className="app-card-body">
                                <h2 className="app-card-title">Site index</h2>
                                <p className="app-card-desc">Landing and navigation across your static apps.</p>
                                <a className="app-card-link" href="index.html">Open app
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
                <footer className="gallery-foot">
                    Images via <a href="https://picsum.photos" className="text-decoration-none"
                        style={{ color: 'var(--accent)' }}>Picsum</a> — replace URLs with your own screenshots or icons anytime.
                </footer>
            </div>
        </div>
    );
};

export default GlobalWebsiteApp;