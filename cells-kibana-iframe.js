class CellsKibanaIframe extends Polymer.Element {

  static get is() {
    return 'cells-kibana-iframe';
  }

  static get properties() {
    return {
      iframeUrl: {
        type: String,
        value: 'https://search-tiramisues-pyjapf5clyzw462fbyzwiju6ua.us-west-2.es.amazonaws.com/_plugin/kibana/goto/305aa20c9e6ef02c3df7965e03ae60d0?embed=false'
      }
    };
  }
}

customElements.define(CellsKibanaIframe.is, CellsKibanaIframe);