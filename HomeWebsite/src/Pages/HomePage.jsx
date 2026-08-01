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
                            <img src="https://wallpaperaccess.com/full/9321890.jpg" alt="" width="400" height="210" fetchPriority="high" />
                            <img src="https://wallpaperaccess.com/full/9321890.jpg" alt="" width="400" height="210" fetchPriority="high" />
                        </div>
                        <p className="_category | -trim-both">Trading Platform</p>
                        <p className="_description | -line-clamp">An all-in-one trading platform that combines real-time market charts, financial analysis, company fundamentals, news, portfolio tracking, and AI-driven insights.</p>
                        <ul className="_tag-list | cluster" style={{'--cluster--gap': '0.5rem'}}>
                            <li className="_tag | -trim-both">Portfolio tracker</li>
                            <li className="_tag | -trim-both">News</li>
                            <li className="_tag | -trim-both">AI analysis</li>
                            <li className="_tag | -trim-both">TradingView-like charts</li>
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
                            <img src="https://imgs.search.brave.com/NJ67DzEm4ByCbDORlF03fT-6wDxrPKIk5fUKf-lpR4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1Lzc4LzgzLzEx/LzM2MF9GXzE1Nzg4/MzExMjRfQTN1T0hm/d0dLSVRtbVpLN2c1/OWl0R0sxUkhmV2k1/WmcuanBn" alt="" width="400" height="210" fetchPriority="high" />
                            <img src="https://imgs.search.brave.com/NJ67DzEm4ByCbDORlF03fT-6wDxrPKIk5fUKf-lpR4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1Lzc4LzgzLzEx/LzM2MF9GXzE1Nzg4/MzExMjRfQTN1T0hm/d0dLSVRtbVpLN2c1/OWl0R0sxUkhmV2k1/WmcuanBn" alt="" width="400" height="210" fetchPriority="high" />
                        </div>
                        <p className="_category | -trim-both">Healthcare Bot</p>
                        <p className="_description | -line-clamp">An AI-powered healthcare assistant that continuously monitors vital health metrics such as heart rate, blood oxygen (SpO₂), respiratory rate, sleep quality and stress.</p>
                        <ul className="_tag-list | cluster" style={{'--cluster--gap': '0.5rem'}}>
                            <li className="_tag | -trim-both">Heart rate</li>
                            <li className="_tag | -trim-both">SpO₂</li>
                            <li className="_tag | -trim-both">Sleep score</li>
                            <li className="_tag | -trim-both">Respiratory rate</li>
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
                            <img src="https://imgs.search.brave.com/HaEEgPp0rmyqSl5xg3XRAR7HBoypK1jLEGGo0VXb7Zc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/OTIwNDUwNy92ZWN0/b3IvZ2VuZXRpYy1t/dXRhdGlvbi1jb25j/ZXB0dWFsLWlsbHVz/dHJhdGlvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9eGhw/N3c5U1puZG14c3BQ/V0ZKNk4zTFBnZlkx/Ym0ydTI0ZWtOOUZK/Z2l0OD0" alt="" width="400" height="210" fetchPriority="high" />
                            <img src="https://imgs.search.brave.com/HaEEgPp0rmyqSl5xg3XRAR7HBoypK1jLEGGo0VXb7Zc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/OTIwNDUwNy92ZWN0/b3IvZ2VuZXRpYy1t/dXRhdGlvbi1jb25j/ZXB0dWFsLWlsbHVz/dHJhdGlvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9eGhw/N3c5U1puZG14c3BQ/V0ZKNk4zTFBnZlkx/Ym0ydTI0ZWtOOUZK/Z2l0OD0" alt="" width="400" height="210" fetchPriority="high" />
                        </div>
                        <p className="_category | -trim-both">Genetic Compatibilty</p>
                        <p className="_description | -line-clamp">A genetic compatibility platform that analyzes the genomic information of two individuals to estimate the probability of inherited genetic disorders in their future children.</p>
                        <ul className="_tag-list | cluster" style={{ '--cluster--gap': '0.5rem' }}>
                            <li className="_tag | -trim-both">Carrier status</li>
                            <li className="_tag | -trim-both">Recessive disease risks</li>
                            <li className="_tag | -trim-both">Inheritance probabilities</li>
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
                            <img src="https://imgs.search.brave.com/HHh3KTa2KekV0UGQqxtW8JF0cSbEWdmn_Wjf303Yv6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC80LzEv/MC8yMTQ1OTc4LTM4/NDB4MjE2MC1kZXNr/dG9wLTRrLWhlYXJ0/LXNoYXBlLWJhY2tn/cm91bmQtcGhvdG8u/anBn" alt="" width="400" height="210" fetchPriority="high" />
                            <img src="https://imgs.search.brave.com/HHh3KTa2KekV0UGQqxtW8JF0cSbEWdmn_Wjf303Yv6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC80LzEv/MC8yMTQ1OTc4LTM4/NDB4MjE2MC1kZXNr/dG9wLTRrLWhlYXJ0/LXNoYXBlLWJhY2tn/cm91bmQtcGhvdG8u/anBn" alt="" width="400" height="210" fetchPriority="high" />
                        </div>
                        <p className="_category | -trim-both">Dating App</p>
                        <p className="_description | -line-clamp">A next-generation dating platform that matches users based on a combination of personality traits, lifestyle preferences, ambitions, physical attributes,facial similarity analysis.</p>
                        <ul className="_tag-list | cluster" style={{ '--cluster--gap': '0.5rem' }}>
                            <li className="_tag | -trim-both">Personality</li>
                            <li className="_tag | -trim-both">Lifestyle</li>
                            <li className="_tag | -trim-both">Hobbies</li>
                            <li className="_tag | -trim-both">Interests</li>
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