// Perform dom manipulation through Polymer.dom if available

var Polydom;

if(Polymer && typeof Polymer.dom === 'function') {
    // Bind to Polymer.dom
    Polydom = Polymer.dom.bind(Polymer);
} else {
    // Identity function
    Polydom = function(x) {return x;};
}
