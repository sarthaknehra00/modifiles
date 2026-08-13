/**
 * THE MODI FILES — Continuous Merged Dossier Controller
 * Renders all 11 Arcs and 12 Screens continuously down the page
 */

document.addEventListener('DOMContentLoaded', () => {
  const App = {
    init() {
      this.renderScreenPills();
      this.renderMergedDossier();
      this.bindEvents();
      this.setupScrollSpy();
      this.handleInitialHash();
    },

    /* ==========================================================================
       RENDERING: STITCH SCREEN JUMP PILLS
       ========================================================================== */
    renderScreenPills() {
      const container = document.getElementById('screenPillsContainer');
      if (!container) return;

      container.innerHTML = MODI_FILES_DATA.screens.map((screen) => {
        const targetAnchor = screen.type === 'overview' ? 'overview-section' : `arc-${screen.arcNumber}`;
        return `
          <a href="#${targetAnchor}" class="screen-pill" 
             data-target="${targetAnchor}" 
             data-screen-id="${screen.screenId}"
             title="${screen.title} (ID: ${screen.screenId})">
            <span>${screen.screenNumber}. ${screen.title.replace('The Modi Files - ', '')}</span>
            <span class="screen-pill-id">#${screen.screenId.substring(0, 6)}</span>
          </a>
        `;
      }).join('');
    },

    /* ==========================================================================
       RENDERING: MERGED CONTINUOUS DOSSIER
       ========================================================================== */
    renderMergedDossier() {
      const container = document.getElementById('mergedDossierContainer');
      if (!container) return;

      container.innerHTML = MODI_FILES_DATA.arcs.map((arc) => {
        const screen = MODI_FILES_DATA.screens.find(s => s.arcNumber === arc.id);
        const screenId = screen ? screen.screenId : '';

        return `
          <section class="arc-dossier-section" id="arc-${arc.id}" data-screen-id="${screenId}">
            <!-- Anchor for Screen ID deep linking -->
            <div id="screen-${screenId}" style="position:absolute; top:-120px; left:0;"></div>

            <!-- Header -->
            <header class="arc-dossier-header">
              <div>
                <div class="arc-meta-tagline">
                  <span class="arc-num-badge">ARC 0${arc.id}</span>
                  <span class="arc-period-badge">${arc.period}</span>
                  <span>• ${arc.location}</span>
                  <span class="arc-screen-id-badge">/ STITCH SCREEN ID: <code>${screenId}</code></span>
                </div>
                <h2 class="arc-main-title">${arc.title}</h2>
                <div class="arc-subtitle-text">${screen ? screen.subtitle : arc.location}</div>
              </div>

              <div>
                <span class="dossier-stamp">EVIDENTIARY DOSSIER</span>
              </div>
            </header>

            <div class="arc-dossier-body">
              <!-- Executive Summary Prose -->
              <div class="arc-overview-prose">
                <p>${arc.summary}</p>
              </div>

              <!-- Primary Speech Quotes (if available) -->
              ${arc.quotes && arc.quotes.length > 0 ? `
                ${arc.quotes.map(q => `
                  <div class="quote-callout-box">
                    <div class="quote-text">“${q.quote}”</div>
                    <div class="quote-speaker">— ${q.speaker} <span style="font-weight:400; color:var(--text-muted);">(${q.context})</span></div>
                  </div>
                `).join('')}
              ` : ''}

              <!-- Archival Photo Collage (Natural Aspect Ratio & Framing) -->
              ${arc.primaryImages && arc.primaryImages.length > 0 ? `
                <div class="arc-photos-collage">
                  ${arc.primaryImages.map(img => `
                    <div class="collage-item" onclick="App.openLightbox('${img.url}', '${encodeURIComponent(img.caption)}')">
                      <div class="collage-img-frame">
                        <img src="${img.url}" alt="${img.caption}" loading="lazy" />
                      </div>
                      <div class="collage-caption-box">
                        <span class="collage-tag">${img.tag}</span>
                        <div class="collage-caption-text">${img.caption}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <!-- Primary Video Evidence (if present) -->
              ${arc.primaryVideo ? `
                <div class="video-evidence-card">
                  <div class="video-evidence-header">
                    <div>
                      <span class="collage-tag" style="background:var(--claim-red);">${arc.primaryVideo.tag}</span>
                      <strong style="margin-left:0.5rem; font-size:0.92rem; color:var(--text-bright);">${arc.primaryVideo.caption}</strong>
                    </div>
                    <span class="dossier-stamp" style="font-size:0.65rem;">PRIMARY VIDEO ARCHIVE</span>
                  </div>
                  <div class="video-player-frame">
                    <video controls preload="metadata" poster="assets/images/arc12_cjp_genz_crowd_protest.jpeg">
                      <source src="${arc.primaryVideo.url}" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ` : ''}

              <!-- Interactive Infographic (Arc Specific) -->
              ${this.renderArcInfographic(arc.id)}

              <!-- Key Events Timeline Block -->
              <div class="events-timeline-block">
                <div class="events-block-title">Chronological Milestones (${arc.period})</div>
                <div class="events-list">
                  ${arc.keyEvents.map(evt => `
                    <div class="event-item">
                      <div class="event-date">${evt.date}</div>
                      <div class="event-headline">${evt.headline}</div>
                      <div class="event-text">${evt.text}</div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Tripartite Claims Section -->
              <div class="tripartite-section">
                ${arc.tripartiteAnalysis.map(analysis => `
                  <div class="tripartite-card">
                    <div class="tripartite-card-header">
                      <div class="tripartite-card-title">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-saffron)" stroke-width="2" style="display:inline-block; vertical-align:middle; margin-right:6px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        ${analysis.topic}
                      </div>
                      <span class="legend-badge evidence">AUDITED</span>
                    </div>

                    <div class="tripartite-grid">
                      <div class="tripartite-col claim">
                        <div class="legend-badge claim">1. Claim / Allegation</div>
                        <div class="col-subtitle">${analysis.claim.title}</div>
                        <div class="col-text">${analysis.claim.content}</div>
                      </div>

                      <div class="tripartite-col evidence">
                        <div class="legend-badge evidence">2. Verified Facts & Record</div>
                        <div class="col-subtitle">${analysis.evidence.title}</div>
                        <div class="col-text">${analysis.evidence.content}</div>
                      </div>

                      <div class="tripartite-col response">
                        <div class="legend-badge response">3. Official Rebuttal & Legal Status</div>
                        <div class="col-subtitle">${analysis.response.title}</div>
                        <div class="col-text">${analysis.response.content}</div>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Citations & Sources Footer -->
            <footer class="arc-footer-sources">
              <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Primary Sources & References:</span>
              <div class="sources-list">
                ${arc.sources.map(src => `
                  <span class="source-item-pill" title="${src.type}">
                    ${src.title}
                    ${src.url ? ` <a href="${src.url}" target="_blank" rel="noopener" style="color:var(--accent-saffron); font-weight:600;">↗</a>` : ''}
                  </span>
                `).join('')}
              </div>
            </footer>
          </section>
        `;
      }).join('');
    },

    /* ==========================================================================
       INTERACTIVE INFOGRAPHICS (ARC SPECIFIC)
       ========================================================================== */
    renderArcInfographic(arcId) {
      if (arcId === 4) {
        // Arc 4: 2002 Riots Legal Inquiries Timeline
        return `
          <div class="interactive-data-card">
            <div class="data-card-header">
              <h3 class="data-card-title">Judicial & Investigative Trajectory (2002–2022)</h3>
              <span class="data-card-source">Source: Supreme Court of India Registry</span>
            </div>
            <div class="chart-svg-wrapper">
              <svg viewBox="0 0 760 180" width="100%" height="180" style="background:var(--bg-subtle); border-radius:6px;">
                <line x1="60" y1="90" x2="700" y2="90" stroke="var(--border-strong)" stroke-width="3" stroke-dasharray="4 4" />
                
                <circle cx="90" cy="90" r="14" fill="var(--claim-red)" />
                <text x="90" y="55" fill="var(--claim-red)" font-size="12" font-weight="700" text-anchor="middle" font-family="var(--font-mono)">FEB 2002</text>
                <text x="90" y="125" fill="var(--text-bright)" font-weight="600" font-size="11" text-anchor="middle">Godhra & Riots</text>
                <text x="90" y="140" fill="var(--text-muted)" font-size="9" text-anchor="middle">1,044 Casualties</text>

                <circle cx="280" cy="90" r="14" fill="var(--evidence-blue)" />
                <text x="280" y="55" fill="var(--evidence-blue)" font-size="12" font-weight="700" text-anchor="middle" font-family="var(--font-mono)">2008–2010</text>
                <text x="280" y="125" fill="var(--text-bright)" font-weight="600" font-size="11" text-anchor="middle">SC Appoints SIT</text>
                <text x="280" y="140" fill="var(--text-muted)" font-size="9" text-anchor="middle">Modi Questioned 9+ hrs</text>

                <circle cx="480" cy="90" r="14" fill="var(--accent-gold)" />
                <text x="480" y="55" fill="var(--accent-gold)" font-size="12" font-weight="700" text-anchor="middle" font-family="var(--font-mono)">FEB 2012</text>
                <text x="480" y="125" fill="var(--text-bright)" font-weight="600" font-size="11" text-anchor="middle">SIT Closure Report</text>
                <text x="480" y="140" fill="var(--text-muted)" font-size="9" text-anchor="middle">No Prosecutable Evidence</text>

                <circle cx="670" cy="90" r="16" fill="var(--response-green)" stroke="#ffffff" stroke-width="2" />
                <text x="670" y="55" fill="var(--response-green)" font-size="12" font-weight="700" text-anchor="middle" font-family="var(--font-mono)">JUNE 2022</text>
                <text x="670" y="125" fill="var(--response-green)" font-weight="700" font-size="11" text-anchor="middle">Supreme Court Ruling</text>
                <text x="670" y="140" fill="var(--text-secondary)" font-size="9" text-anchor="middle">Zakia Jafri Petition Dismissed</text>
              </svg>
            </div>
          </div>
        `;
      }

      if (arcId === 6) {
        // Arc 6: Demonetization vs UPI Transactions Curve
        return `
          <div class="interactive-data-card">
            <div class="data-card-header">
              <h3 class="data-card-title">Digital Formalization: Monthly UPI Growth Post-2016</h3>
              <span class="data-card-source">Source: National Payments Corporation of India (NPCI) & RBI</span>
            </div>
            <div class="chart-svg-wrapper">
              <svg viewBox="0 0 720 180" width="100%" height="180" style="background:var(--bg-subtle); border-radius:6px;">
                <line x1="60" y1="140" x2="680" y2="140" stroke="var(--border-strong)" stroke-width="1" />
                <line x1="60" y1="90" x2="680" y2="90" stroke="var(--border-strong)" stroke-width="1" />
                <line x1="60" y1="40" x2="680" y2="40" stroke="var(--border-strong)" stroke-width="1" />

                <path d="M 80 138 Q 300 135 480 80 T 660 30" fill="none" stroke="var(--accent-saffron)" stroke-width="4" />
                
                <circle cx="80" cy="138" r="6" fill="var(--claim-red)" />
                <text x="80" y="160" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="middle">Nov 2016: 2M txns</text>

                <circle cx="360" cy="120" r="5" fill="var(--accent-gold)" />
                <text x="360" y="110" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="middle">2019: 1 Billion</text>

                <circle cx="660" cy="30" r="7" fill="var(--response-green)" stroke="#ffffff" stroke-width="1.5" />
                <text x="660" y="20" fill="var(--response-green)" font-size="11" font-weight="700" text-anchor="middle">2024+: 14+ Billion/mo</text>
              </svg>
            </div>
          </div>
        `;
      }

      if (arcId === 7) {
        // Arc 7: Farm Laws Agitation & Repeal Milestone
        return `
          <div class="interactive-data-card">
            <div class="data-card-header">
              <h3 class="data-card-title">Chronology of the Farm Laws Movement (378 Days)</h3>
              <span class="data-card-source">Source: Parliamentary Records & Samyukt Kisan Morcha</span>
            </div>
            <div class="chart-svg-wrapper">
              <svg viewBox="0 0 740 180" width="100%" height="180" style="background:var(--bg-subtle); border-radius:6px;">
                <line x1="50" y1="90" x2="690" y2="90" stroke="var(--border-strong)" stroke-width="3" />

                <circle cx="80" cy="90" r="12" fill="var(--claim-red)" />
                <text x="80" y="55" fill="var(--claim-red)" font-size="11" font-weight="700" text-anchor="middle">SEP 2020</text>
                <text x="80" y="125" fill="var(--text-bright)" font-weight="600" font-size="10" text-anchor="middle">3 Bills Passed</text>

                <circle cx="280" cy="90" r="12" fill="var(--evidence-blue)" />
                <text x="280" y="55" fill="var(--evidence-blue)" font-size="11" font-weight="700" text-anchor="middle">NOV 2020</text>
                <text x="280" y="125" fill="var(--text-bright)" font-weight="600" font-size="10" text-anchor="middle">Delhi Borders Chalo</text>

                <circle cx="480" cy="90" r="12" fill="var(--accent-gold)" />
                <text x="480" y="55" fill="var(--accent-gold)" font-size="11" font-weight="700" text-anchor="middle">JAN 2021</text>
                <text x="480" y="125" fill="var(--text-bright)" font-weight="600" font-size="10" text-anchor="middle">SC Stays Implementation</text>

                <circle cx="660" cy="90" r="15" fill="var(--response-green)" stroke="#ffffff" stroke-width="2" />
                <text x="660" y="55" fill="var(--response-green)" font-size="11" font-weight="700" text-anchor="middle">NOV 19, 2021</text>
                <text x="660" y="125" fill="var(--response-green)" font-weight="700" font-size="10" text-anchor="middle">Modi Announces Repeal</text>
                <text x="660" y="140" fill="var(--text-secondary)" font-size="9" text-anchor="middle">Historic Televised Apology</text>
              </svg>
            </div>
          </div>
        `;
      }

      if (arcId === 8) {
        // Arc 8: Adani Legal & Regulatory Milestones
        return `
          <div class="interactive-data-card">
            <div class="data-card-header">
              <h3 class="data-card-title">Adani Group: Regulatory Scrutiny & Legal Inquiries Timeline</h3>
              <span class="data-card-source">Source: SEBI, Supreme Court of India & US EDNY Court</span>
            </div>
            <div class="chart-svg-wrapper">
              <svg viewBox="0 0 740 180" width="100%" height="180" style="background:var(--bg-subtle); border-radius:6px;">
                <line x1="50" y1="90" x2="690" y2="90" stroke="var(--border-strong)" stroke-width="3" />

                <circle cx="80" cy="90" r="12" fill="var(--claim-red)" />
                <text x="80" y="55" fill="var(--claim-red)" font-size="11" font-weight="700" text-anchor="middle">JAN 2023</text>
                <text x="80" y="125" fill="var(--text-bright)" font-weight="600" font-size="10" text-anchor="middle">Hindenburg Report</text>
                <text x="80" y="140" fill="var(--text-muted)" font-size="9" text-anchor="middle">-$90B Cap Loss</text>

                <circle cx="280" cy="90" r="12" fill="var(--response-green)" />
                <text x="280" y="55" fill="var(--response-green)" font-size="11" font-weight="700" text-anchor="middle">JAN 2023</text>
                <text x="280" y="125" fill="var(--text-bright)" font-weight="600" font-size="10" text-anchor="middle">413-Page Rebuttal</text>
                <text x="280" y="140" fill="var(--text-muted)" font-size="9" text-anchor="middle">Adani Rejects Claims</text>

                <circle cx="480" cy="90" r="12" fill="var(--evidence-blue)" />
                <text x="480" y="55" fill="var(--evidence-blue)" font-size="11" font-weight="700" text-anchor="middle">JAN 2024</text>
                <text x="480" y="125" fill="var(--text-bright)" font-weight="600" font-size="10" text-anchor="middle">Supreme Court Order</text>
                <text x="480" y="140" fill="var(--text-muted)" font-size="9" text-anchor="middle">No SIT Probe Transferred</text>

                <circle cx="660" cy="90" r="14" fill="var(--accent-gold)" />
                <text x="660" y="55" fill="var(--accent-gold)" font-size="11" font-weight="700" text-anchor="middle">NOV 2024</text>
                <text x="660" y="125" fill="var(--text-bright)" font-weight="600" font-size="10" text-anchor="middle">US Federal Indictment</text>
                <text x="660" y="140" fill="var(--text-muted)" font-size="9" text-anchor="middle">NY Court (Active Case)</text>
              </svg>
            </div>
          </div>
        `;
      }

      if (arcId === 9) {
        // Arc 9: Press Freedom Index Trajectory
        return `
          <div class="interactive-data-card">
            <div class="data-card-header">
              <h3 class="data-card-title">World Press Freedom Index (RSF) Ranking (2014–2026)</h3>
              <span class="data-card-source">Source: Reporters Without Borders (180 Countries)</span>
            </div>
            <div class="chart-svg-wrapper">
              <svg viewBox="0 0 720 180" width="100%" height="180" style="background:var(--bg-subtle); border-radius:6px;">
                <line x1="60" y1="40" x2="680" y2="40" stroke="var(--border-strong)" stroke-width="1" />
                <line x1="60" y1="90" x2="680" y2="90" stroke="var(--border-strong)" stroke-width="1" />
                <line x1="60" y1="140" x2="680" y2="140" stroke="var(--border-strong)" stroke-width="1" />

                <polyline points="90,50 230,70 380,105 520,130 650,145" fill="none" stroke="var(--claim-red)" stroke-width="3.5" stroke-linecap="round" />

                <circle cx="90" cy="50" r="6" fill="var(--claim-red)" />
                <text x="90" y="32" fill="var(--claim-red)" font-size="11" font-weight="700" text-anchor="middle">2014: Rank 140</text>

                <circle cx="230" cy="70" r="5" fill="var(--claim-red)" />
                <text x="230" y="90" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="middle">2017: 136</text>

                <circle cx="380" cy="105" r="5" fill="var(--claim-red)" />
                <text x="380" y="125" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="middle">2020: 142</text>

                <circle cx="520" cy="130" r="5" fill="var(--claim-red)" />
                <text x="520" y="150" fill="var(--text-secondary)" font-size="10" font-weight="600" text-anchor="middle">2023: 161</text>

                <circle cx="650" cy="145" r="7" fill="var(--claim-red)" stroke="#ffffff" stroke-width="1.5" />
                <text x="650" y="170" fill="var(--claim-red)" font-size="11" font-weight="700" text-anchor="middle">2026: Rank 157</text>
              </svg>
            </div>
          </div>
        `;
      }

      if (arcId === 10) {
        // Arc 10: Hindutva Ideology Evolution
        return `
          <div class="interactive-data-card">
            <div class="data-card-header">
              <h3 class="data-card-title">Hindutva & Civilizational Politics: 100-Year Timeline</h3>
              <span class="data-card-source">Source: Historical & Constitutional Records</span>
            </div>
            <div class="chart-svg-wrapper">
              <svg viewBox="0 0 740 180" width="100%" height="180" style="background:var(--bg-subtle); border-radius:6px;">
                <line x1="50" y1="90" x2="690" y2="90" stroke="var(--border-strong)" stroke-width="3" />

                <circle cx="80" cy="90" r="12" fill="var(--accent-saffron)" />
                <text x="80" y="55" fill="var(--accent-saffron)" font-size="11" font-weight="700" text-anchor="middle">1923</text>
                <text x="80" y="125" fill="var(--text-bright)" font-weight="600" font-size="10" text-anchor="middle">Savarkar's Hindutva</text>

                <circle cx="280" cy="90" r="12" fill="var(--evidence-blue)" />
                <text x="280" y="55" fill="var(--evidence-blue)" font-size="11" font-weight="700" text-anchor="middle">1990–92</text>
                <text x="280" y="125" fill="var(--text-bright)" font-weight="600" font-size="10" text-anchor="middle">Ram Rath Yatra</text>

                <circle cx="480" cy="90" r="12" fill="var(--accent-gold)" />
                <text x="480" y="55" fill="var(--accent-gold)" font-size="11" font-weight="700" text-anchor="middle">NOV 2019</text>
                <text x="480" y="125" fill="var(--text-bright)" font-weight="600" font-size="10" text-anchor="middle">Supreme Court Verdict</text>

                <circle cx="660" cy="90" r="15" fill="var(--response-green)" stroke="#ffffff" stroke-width="2" />
                <text x="660" y="55" fill="var(--response-green)" font-size="11" font-weight="700" text-anchor="middle">JAN 22, 2024</text>
                <text x="660" y="125" fill="var(--response-green)" font-weight="700" font-size="10" text-anchor="middle">Ram Mandir Consecration</text>
              </svg>
            </div>
          </div>
        `;
      }

      if (arcId === 11) {
        // Arc 11: 2024 Lok Sabha Coalition Seat Breakdown
        return `
          <div class="interactive-data-card">
            <div class="data-card-header">
              <h3 class="data-card-title">18th Lok Sabha General Election 2024 Mandate (543 Seats)</h3>
              <span class="data-card-source">Source: Election Commission of India (ECI)</span>
            </div>
            <div class="chart-svg-wrapper">
              <svg viewBox="0 0 740 180" width="100%" height="180" style="background:var(--bg-subtle); border-radius:6px;">
                <rect x="50" y="60" width="640" height="40" rx="6" fill="#ffffff" stroke="var(--border-strong)" />

                <rect x="50" y="60" width="283" height="40" fill="var(--accent-saffron)" rx="6 0 0 6" />
                <rect x="333" y="60" width="62" height="40" fill="var(--accent-gold)" />
                <rect x="395" y="60" width="276" height="40" fill="var(--evidence-blue)" />
                <rect x="671" y="60" width="19" height="40" fill="var(--text-muted)" rx="0 6 6 0" />

                <text x="190" y="85" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle">BJP: 240 Seats</text>
                <text x="364" y="85" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">Allies: 53</text>
                <text x="533" y="85" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle">INDIA Bloc: 234 Seats</text>

                <text x="190" y="135" fill="var(--accent-saffron)" font-size="12" font-weight="700" text-anchor="middle">● NDA Coalition Total: 293 (Majority: 272)</text>
                <text x="533" y="135" fill="var(--evidence-blue)" font-size="12" font-weight="700" text-anchor="middle">● Opposition Coalition: 234</text>
              </svg>
            </div>
          </div>
        `;
      }

      if (arcId === 12) {
        // Arc 12: CJP 2026 Protests & Pradhan Resignation Chronology
        return `
          <div class="interactive-data-card">
            <div class="data-card-header">
              <h3 class="data-card-title">Cockroach Janta Party (CJP) Agitation & Resignation Chronology (May–July 2026)</h3>
              <span class="data-card-source">Source: Supreme Court Records, CNN, MOE Communiqué & CJP Archives</span>
            </div>
            <div class="chart-svg-wrapper">
              <svg viewBox="0 0 780 180" width="100%" height="180" style="background:var(--bg-subtle); border-radius:6px;">
                <line x1="40" y1="90" x2="740" y2="90" stroke="var(--border-strong)" stroke-width="3" />

                <!-- Node 1: CJI Remark -->
                <circle cx="70" cy="90" r="11" fill="var(--claim-red)" />
                <text x="70" y="55" fill="var(--claim-red)" font-size="10" font-weight="700" text-anchor="middle">MAY 15</text>
                <text x="70" y="125" fill="var(--text-bright)" font-weight="600" font-size="9" text-anchor="middle">CJI Surya Kant</text>
                <text x="70" y="140" fill="var(--text-muted)" font-size="8" text-anchor="middle">Contested Remark</text>

                <!-- Node 2: CJP Founding -->
                <circle cx="200" cy="90" r="11" fill="var(--accent-saffron)" />
                <text x="200" y="55" fill="var(--accent-saffron)" font-size="10" font-weight="700" text-anchor="middle">MAY 16</text>
                <text x="200" y="125" fill="var(--text-bright)" font-weight="600" font-size="9" text-anchor="middle">Dipke Founds CJP</text>
                <text x="200" y="140" fill="var(--text-muted)" font-size="8" text-anchor="middle">350k+ Members</text>

                <!-- Node 3: NEET Leaks -->
                <circle cx="340" cy="90" r="11" fill="var(--evidence-blue)" />
                <text x="340" y="55" fill="var(--evidence-blue)" font-size="10" font-weight="700" text-anchor="middle">JUNE 6</text>
                <text x="340" y="125" fill="var(--text-bright)" font-weight="600" font-size="9" text-anchor="middle">NEET Paper Leaks</text>
                <text x="340" y="140" fill="var(--text-muted)" font-size="8" text-anchor="middle">Demand Resignation</text>

                <!-- Node 4: Clashes -->
                <circle cx="480" cy="90" r="12" fill="var(--claim-red)" stroke="#ffffff" stroke-width="1.5" />
                <text x="480" y="55" fill="var(--claim-red)" font-size="10" font-weight="700" text-anchor="middle">JULY 20</text>
                <text x="480" y="125" fill="var(--text-bright)" font-weight="600" font-size="9" text-anchor="middle">Parliament Clashes</text>
                <text x="480" y="140" fill="var(--text-muted)" font-size="8" text-anchor="middle">Tear Gas & Batons</text>

                <!-- Node 5: Rahul Gandhi Sit-in -->
                <circle cx="610" cy="90" r="11" fill="var(--accent-gold)" />
                <text x="610" y="55" fill="var(--accent-gold)" font-size="10" font-weight="700" text-anchor="middle">JULY 22</text>
                <text x="610" y="125" fill="var(--text-bright)" font-weight="600" font-size="9" text-anchor="middle">Rahul Gandhi Sit-in</text>
                <text x="610" y="140" fill="var(--text-muted)" font-size="8" text-anchor="middle">PM Residence Detained</text>

                <!-- Node 6: Dharmendra Pradhan Resigns -->
                <circle cx="720" cy="90" r="15" fill="var(--response-green)" stroke="#ffffff" stroke-width="2" />
                <text x="720" y="55" fill="var(--response-green)" font-size="10" font-weight="700" text-anchor="middle">JULY 25, 2026</text>
                <text x="720" y="125" fill="var(--response-green)" font-weight="700" font-size="9" text-anchor="middle">Pradhan Resigns</text>
                <text x="720" y="140" fill="var(--text-secondary)" font-size="8" text-anchor="middle">Govt Concession</text>
              </svg>
            </div>
          </div>
        `;
      }

      return '';
    },

    /* ==========================================================================
       SCROLL SPY & PILL HIGHLIGHTING
       ========================================================================== */
    setupScrollSpy() {
      const sections = document.querySelectorAll('.arc-dossier-section, #overview-section');
      const pills = document.querySelectorAll('.screen-pill');

      window.addEventListener('scroll', () => {
        let currentId = '';
        const scrollPosition = window.scrollY + 180;

        sections.forEach(section => {
          if (section.offsetTop <= scrollPosition) {
            currentId = section.id;
          }
        });

        pills.forEach(pill => {
          if (pill.dataset.target === currentId) {
            pill.classList.add('active');
            pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } else {
            pill.classList.remove('active');
          }
        });
      });
    },

    handleInitialHash() {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      setTimeout(() => {
        // Direct ID match
        const elem = document.getElementById(hash) || document.getElementById(`screen-${hash}`) || document.getElementById(`arc-${hash}`);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    },

    toggleHeroAudio() {
      const vid = document.getElementById('heroModiVideo');
      const icon = document.getElementById('audioIcon');
      const text = document.getElementById('audioText');
      if (!vid) return;

      if (vid.muted) {
        vid.muted = false;
        if (icon) icon.textContent = '🔊';
        if (text) text.textContent = 'Mute Audio';
      } else {
        vid.muted = true;
        if (icon) icon.textContent = '🔇';
        if (text) text.textContent = 'Unmute Audio';
      }
    },

    /* ==========================================================================
       MODALS: SEARCH, LIGHTBOX & METHODOLOGY
       ========================================================================== */
    openSearchModal() {
      const modal = document.getElementById('searchModal');
      if (modal) {
        modal.classList.add('open');
        const input = document.getElementById('searchInput');
        if (input) {
          input.value = '';
          input.focus();
          this.executeSearch('');
        }
      }
    },

    closeSearchModal() {
      const modal = document.getElementById('searchModal');
      if (modal) modal.classList.remove('open');
    },

    executeSearch(query) {
      const container = document.getElementById('searchResultsContainer');
      if (!container) return;

      const q = query.toLowerCase().trim();
      if (!q) {
        container.innerHTML = `<div style="color:var(--text-muted); font-size:0.85rem; text-align:center; padding:1.5rem;">Type a keyword, person, legal case (e.g. <i>Zakia Jafri, Adani, Degree, Farm Laws, CAA, Emergency</i>)...</div>`;
        return;
      }

      const results = [];
      MODI_FILES_DATA.arcs.forEach(arc => {
        if (arc.title.toLowerCase().includes(q) || arc.summary.toLowerCase().includes(q)) {
          results.push({
            arcId: arc.id,
            title: `Arc ${arc.id}: ${arc.title}`,
            snippet: arc.summary,
            type: 'Chapter'
          });
        }

        arc.keyEvents.forEach(evt => {
          if (evt.headline.toLowerCase().includes(q) || evt.text.toLowerCase().includes(q)) {
            results.push({
              arcId: arc.id,
              title: `Arc ${arc.id} Event: ${evt.headline} (${evt.year})`,
              snippet: evt.text,
              type: 'Milestone'
            });
          }
        });

        arc.tripartiteAnalysis.forEach(item => {
          if (
            item.topic.toLowerCase().includes(q) ||
            item.claim.content.toLowerCase().includes(q) ||
            item.evidence.content.toLowerCase().includes(q) ||
            item.response.content.toLowerCase().includes(q)
          ) {
            results.push({
              arcId: arc.id,
              title: `Evidentiary Claim: ${item.topic} (Arc ${arc.id})`,
              snippet: item.evidence.content,
              type: 'Tripartite Audit'
            });
          }
        });
      });

      if (results.length === 0) {
        container.innerHTML = `<div style="color:var(--text-muted); font-size:0.85rem; text-align:center; padding:1.5rem;">No direct matching records found for "${query}".</div>`;
        return;
      }

      container.innerHTML = results.slice(0, 8).map(res => `
        <div class="search-result-card" onclick="App.closeSearchModal(); location.href='#arc-${res.arcId}';">
          <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem;">
            <strong style="color:var(--text-bright); font-size:0.95rem;">${res.title}</strong>
            <span class="legend-badge evidence" style="font-size:0.65rem;">${res.type}</span>
          </div>
          <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">${res.snippet.substring(0, 190)}...</div>
        </div>
      `).join('');
    },

    openLightbox(imageUrl, encodedCaption) {
      const modal = document.getElementById('lightboxModal');
      const img = document.getElementById('lightboxImg');
      const cap = document.getElementById('lightboxCaption');
      if (modal && img && cap) {
        img.src = imageUrl;
        cap.textContent = decodeURIComponent(encodedCaption);
        modal.classList.add('open');
      }
    },

    closeLightbox() {
      const modal = document.getElementById('lightboxModal');
      if (modal) modal.classList.remove('open');
    },

    openMethodologyModal() {
      const modal = document.getElementById('methodologyModal');
      if (modal) modal.classList.add('open');
    },

    closeMethodologyModal() {
      const modal = document.getElementById('methodologyModal');
      if (modal) modal.classList.remove('open');
    },

    /* ==========================================================================
       EVENT LISTENERS
       ========================================================================== */
    bindEvents() {
      document.addEventListener('keydown', (e) => {
        if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          this.openSearchModal();
        }
        if (e.key === 'Escape') {
          this.closeSearchModal();
          this.closeLightbox();
          this.closeMethodologyModal();
        }
      });
    }
  };

  window.App = App;
  App.init();
});
