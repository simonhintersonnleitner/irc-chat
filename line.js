
var $ = require('jquery');

var line = function(from,msg) {
		this.from = from;
		this.msg = msg;
		this.timestamp = Date.now();
	}


line.prototype.print = function() {
	$("#output table").prepend("<tr><td>"+ this.from + " say:</td><td>" + this.msg + "</td></tr>");
};

module.exports = line;


