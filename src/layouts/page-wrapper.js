import iconLogo from '../assets/icn-logo.png';

export class PageWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const res = await fetch(new URL('./page-wrapper.css', import.meta.url));
    const css = await res.text();

    this.shadowRoot.innerHTML = `
      <style>${css}</style>

      <header>
        <nav>
          <a href="#">
          <img src="${iconLogo}" alt="logo" />
          <span>Wastewise</span>
          </a>
          <a href="../login.html">Log in</a>
        </nav>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <p>&copy; Wastewise ♻️</p>
      </footer>
    `;
  }
}

customElements.define('page-wrapper', PageWrapper);
