function loadNavbar(activePage = "") {

  const nav = `
    <div class="nav">

      <a href="index.html"
         class="${activePage === 'guide' ? 'active' : ''}">
         Guide
      </a>

      <a href="generator.html"
         class="${activePage === 'generator' ? 'active' : ''}">
         Generator
      </a>

      <a href="faq.html"
         class="${activePage === 'faq' ? 'active' : ''}">
         FAQ
      </a>

      <a href="State-gazette.html"
         class="${activePage === 'state' ? 'active' : ''}">
         State Gazette
      </a>

      <a href="Check-Notification.html"
         class="${activePage === 'check' ? 'active' : ''}">
         Check Gazette
      </a>

      <a href="support.html" class="support-btn">
        Support Me 🙏
      </a>

      <div class="nav-right">

        <div class="translate-wrapper">

          <img src="assets/ccc.png"
               alt="Translate"
               class="translate-icon">

          <select class="custom-language notranslate"
                  onchange="changeLanguage(this.value)">

            <option value="hi">हिन्दी</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="ml">മലയാളം</option>
            <option value="bn">বাংলা</option>
            <option value="mr">मराठी</option>
            <option value="en">English</option>

          </select>

          <div id="google_translate_element"></div>

        </div>

        <a href="support.html"
           class="flag-link"
           title="Support this project 🩷">

          <img src="assets/trans.gif"
               class="nav-flag"
               alt="Support Project">

        </a>

      </div>

    </div>
  `;

  document.getElementById("navbar").innerHTML = nav;
}

function loadSiteFooter() {

  const footerHTML = `

    <div class="section">

      <h2>Support This Project 🙏</h2>

      <p>
        This website is independently built and maintained by a trans person
        trying to make Gazette procedures easier, safer and more accessible
        for everyone.
      </p>

      <p>
        If this tool helped you save money, avoid agents, reduce confusion
        or navigate the process more easily, please consider supporting
        the project.
      </p>

      <a href="support.html" class="btn">
        Support Me / Donate →
      </a>

    </div>

    <div class="section center">

      <h3>Connect</h3>

      <a class="btn"
         href="https://github.com/MensIsneM/Gazette"
         target="_blank">

         This project is on GitHub
      </a>

      <br><br>

      <a class="btn"
         href="mailto:mensisnem.dev@gmail.com">

         Contact Me for any Questions
      </a>

    </div>

    <div class="footer">
      Built by a Trans Person with LOVE ❤️<br>MensIsneM
    </div>

  `;

  document.getElementById("site-footer").innerHTML = footerHTML;
}