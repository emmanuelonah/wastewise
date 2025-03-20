import iconFaqs from '../assets/icn-question-mark.svg';

export class Faqs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const res = await fetch(new URL('./faqs.css', import.meta.url));
    const css = await res.text();

    this.shadowRoot.innerHTML = `
        <style>${css}</style>
        <div class="container">
          <div class="container__row1">
            <h1>Frequently Asked Questions</h1>
            <img src="${iconFaqs}" alt="FAQs" />
          </div>
          <div class="container__row2">
            <details class="faq">
              <summary>What is Wastewise?</summary>
              <p>Wastewise is a web application that helps users reduce waste by providing information on how to properly dispose of items and where to recycle them.</p>
            </details>
            <details class="faq">
              <summary>How do I use Wastewise?</summary>
              <p>Simply type the name of the item you want to dispose of in the search bar and click the search button. Wastewise will provide you with information on how to properly dispose of the item and where to recycle it.</p>
            </details>
            <details class="faq">
              <summary>How can I contribute to Wastewise?</summary>
              <p>If you have information on how to properly dispose of an item or where to recycle it, you can submit it to Wastewise by clicking the "Contribute" button.</p>
            </details>
            <details class="faq">
              <summary>How can I contact Wastewise?</summary>
              <p>You can contact Wastewise by sending an email to
                <a href="mailto:emmajerry2016@gmail.com">emmajerry2016@gmail.com</a>
              </p>
            </details>        
          </div>
        </div>
      `;
  }
}

customElements.define('fa-questions', Faqs);
