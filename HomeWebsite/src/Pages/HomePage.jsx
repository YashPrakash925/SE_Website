import './HomePage.css';

export function HomePage() {
    return (
        <>
            <div className="scope product-cards | -fluid-text">
                <div className="_card-list | grid" style={{
                    '--grid--fill-mode': 'var(--product-cards--fill-mode, auto-fill)',
                    '--grid--row-gap': 'var(--product-cards--gap, 1.5rem)',
                    '--grid--column-gap': 'var(--product-cards--gap, 1.5rem)',
                    '--grid--column-max-count': 'var(--product-cards--column-max-count, 4)',
                    '--grid--column-min-width': 'var(--product-cards--column-min-width, 20rem)',
                }}>

                    <section className="_card">
                        <h2 className="_heading | -fluid-text -trim-both" style={{
                            '--fluid-text--min-font-size': 16,
                            '--fluid-text--max-font-size': 24,
                        }}>Product 01</h2>
                        <div className="_thumbnail-stack">
                            <img src="https://picsum.photos/id/100/1200/630" alt="" width="400" height="210" fetchPriority="high" />
                            <img src="https://picsum.photos/id/100/1200/630" alt="" width="400" height="210" fetchPriority="high" />
                        </div>
                        <p className="_category | -trim-both">Project 1</p>
                        <p className="_description | -line-clamp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <ul className="_tag-list | cluster" style={{'--cluster--gap': '0.5rem'}}>
                            <li className="_tag | -trim-both">JavaScript</li>
                            <li className="_tag | -trim-both">Python</li>
                        </ul>
                        <div className="_button" style={{'--purchase-button--background': 'var(--_accent)', '--purchase-button--foreground': 'var(--_accent-contrast)'}}>
                            <a href="#" className="scope purchase-button">Visit</a>
                        </div>
                    </section>

                    <section className="_card" style={{ '--product-card--accent': '#4e8397' }}>
                        <h2 className="_heading | -fluid-text -trim-both" style={{
  '--fluid-text--min-font-size': 16,
  '--fluid-text--max-font-size': 24,
}}>Product 02</h2>
                        <div className="_thumbnail-stack">
                            <img src="https://picsum.photos/id/101/1200/630" alt="" width="400" height="210" fetchPriority="high" />
                            <img src="https://picsum.photos/id/101/1200/630" alt="" width="400" height="210" fetchPriority="high" />
                        </div>
                        <p className="_category | -trim-both">Project 2</p>
                        <p className="_description | -line-clamp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <ul className="_tag-list | cluster" style={{'--cluster--gap': '0.5rem'}}>
                            <li className="_tag | -trim-both">Reactjs</li>
                            <li className="_tag | -trim-both">JavaScript</li>
                        </ul>
                        <div className="_button" style={{
  '--purchase-button--background': 'var(--_accent)',
  '--purchase-button--foreground': 'var(--_accent-contrast)',
}}>
                            <a href="#" className="scope purchase-button">Visit</a>
                        </div>
                    </section>

                    <section className="_card" style={{ '--product-card--accent': '#ff8066' }}>
                        <h2 className="_heading | -fluid-text -trim-both" style={{
  '--fluid-text--min-font-size': 16,
  '--fluid-text--max-font-size': 24,
}}>Product 03</h2>
                        <div className="_thumbnail-stack">
                            <img src="https://picsum.photos/id/102/1200/630" alt="" width="400" height="210" fetchPriority="high" />
                            <img src="https://picsum.photos/id/102/1200/630" alt="" width="400" height="210" fetchPriority="high" />
                        </div>
                        <p className="_category | -trim-both">Project 3</p>
                        <p className="_description | -line-clamp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <ul className="_tag-list | cluster" style={{ '--cluster--gap': '0.5rem' }}>
                            <li className="_tag | -trim-both">JavaScript</li>
                            <li className="_tag | -trim-both">Nodejs</li>
                            <li className="_tag | -trim-both">Python</li>
                        </ul>
                        <div className="_button" style={{
  '--purchase-button--background': 'var(--_accent)',
  '--purchase-button--foreground': 'var(--_accent-contrast)',
}}>
                            <a href="#" className="scope purchase-button">Visit</a>
                        </div>
                    </section>

                    <section className="_card" style={{ '--product-card--accent': '#008bc9' }}>
                        <h2 className="_heading | -fluid-text -trim-both" style={{
  '--fluid-text--min-font-size': 16,
  '--fluid-text--max-font-size': 24,
}}>Product 04</h2>
                        <div className="_thumbnail-stack">
                            <img src="https://picsum.photos/id/103/1200/630" alt="" width="400" height="210" fetchPriority="high" />
                            <img src="https://picsum.photos/id/103/1200/630" alt="" width="400" height="210" fetchPriority="high" />
                        </div>
                        <p className="_category | -trim-both">Project 4</p>
                        <p className="_description | -line-clamp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <ul className="_tag-list | cluster" style={{ '--cluster--gap': '0.5rem' }}>
                            <li className="_tag | -trim-both">JavaScript</li>
                            <li className="_tag | -trim-both">Reactjs</li>
                            <li className="_tag | -trim-both">Nodejs</li>
                            <li className="_tag | -trim-both">Python</li>
                        </ul>
                        <div className="_button" style={{
  '--purchase-button--background': 'var(--_accent)',
  '--purchase-button--foreground': 'var(--_accent-contrast)',
}}>
                            <a href="#" className="scope purchase-button">Visit</a>
                        </div>
                    </section>

                </div>


                <svg width="0" height="0" style={{ visibility: 'hidden', position: 'fixed' }}>
                    <filter id="svg-inset-shadow">
                        <feOffset in="SourceAlpha" dx="6" dy="8" />
                        <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                        <feComposite in="SourceAlpha" operator="out" />
                        <feBlend in2="SourceGraphic" mode="multiply" />
                    </filter>
                </svg>
            </div>
        </>
    );
}