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