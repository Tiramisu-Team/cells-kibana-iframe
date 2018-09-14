class CellsKibanaIframe extends Polymer.Element {

  static get is() {
    return 'cells-kibana-iframe';
  }

  static get properties() {
    return {
      iframeUrl: {
        type: String,
        value: 'https://search-tiramisues-pyjapf5clyzw462fbyzwiju6ua.us-west-2.es.amazonaws.com/_plugin/kibana/goto/4c455caf7aeb6a3758d3396611825800?embed=false'
      },
      titulo: {
        type: String,
        value: 'Titulo del marco'
      }
    };
  }
}

customElements.define(CellsKibanaIframe.is, CellsKibanaIframe);