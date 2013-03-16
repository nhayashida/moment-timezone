var moment = require("../../moment-timezone");

exports["Pacific/Auckland"] = {

	"1927" : function (t) {
		t.equal(moment("1927-11-05T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1927-11-05T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1927-11-05T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1927-11-05T14:30:00+00:00 should be 03:00:00 NZST");

		t.equal(moment("1927-11-05T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1927-11-05T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1927-11-05T14:30:00+00:00").tz("Pacific/Auckland").zone(), -750, "1927-11-05T14:30:00+00:00 should be -750 minutes offset in NZST");

		t.done();
	},

	"1928" : function (t) {
		t.equal(moment("1928-03-03T13:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1928-03-03T13:29:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1928-03-03T13:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:00:00", "1928-03-03T13:30:00+00:00 should be 01:00:00 NZMT");
		t.equal(moment("1928-10-13T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1928-10-13T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1928-10-13T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1928-10-13T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1928-03-03T13:29:59+00:00").tz("Pacific/Auckland").zone(), -750, "1928-03-03T13:29:59+00:00 should be -750 minutes offset in NZST");
		t.equal(moment("1928-03-03T13:30:00+00:00").tz("Pacific/Auckland").zone(), -690, "1928-03-03T13:30:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1928-10-13T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1928-10-13T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1928-10-13T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1928-10-13T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1929" : function (t) {
		t.equal(moment("1929-03-16T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1929-03-16T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1929-03-16T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1929-03-16T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1929-10-12T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1929-10-12T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1929-10-12T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1929-10-12T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1929-03-16T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1929-03-16T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1929-03-16T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1929-03-16T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1929-10-12T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1929-10-12T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1929-10-12T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1929-10-12T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-03-15T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1930-03-15T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1930-03-15T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1930-03-15T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1930-10-11T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1930-10-11T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1930-10-11T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1930-10-11T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1930-03-15T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1930-03-15T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1930-03-15T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1930-03-15T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1930-10-11T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1930-10-11T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1930-10-11T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1930-10-11T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-03-14T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1931-03-14T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1931-03-14T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1931-03-14T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1931-10-10T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1931-10-10T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1931-10-10T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1931-10-10T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1931-03-14T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1931-03-14T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1931-03-14T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1931-03-14T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1931-10-10T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1931-10-10T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1931-10-10T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1931-10-10T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-03-19T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1932-03-19T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1932-03-19T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1932-03-19T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1932-10-08T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1932-10-08T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1932-10-08T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1932-10-08T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1932-03-19T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1932-03-19T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1932-03-19T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1932-03-19T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1932-10-08T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1932-10-08T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1932-10-08T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1932-10-08T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-03-18T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1933-03-18T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1933-03-18T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1933-03-18T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1933-10-07T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1933-10-07T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1933-10-07T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1933-10-07T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1933-03-18T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1933-03-18T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1933-03-18T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1933-03-18T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1933-10-07T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1933-10-07T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1933-10-07T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1933-10-07T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1934" : function (t) {
		t.equal(moment("1934-04-28T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1934-04-28T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1934-04-28T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1934-04-28T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1934-09-29T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1934-09-29T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1934-09-29T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1934-09-29T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1934-04-28T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1934-04-28T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1934-04-28T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1934-04-28T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1934-09-29T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1934-09-29T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1934-09-29T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1934-09-29T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-04-27T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1935-04-27T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1935-04-27T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1935-04-27T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1935-09-28T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1935-09-28T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1935-09-28T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1935-09-28T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1935-04-27T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1935-04-27T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1935-04-27T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1935-04-27T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1935-09-28T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1935-09-28T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1935-09-28T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1935-09-28T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1936" : function (t) {
		t.equal(moment("1936-04-25T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1936-04-25T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1936-04-25T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1936-04-25T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1936-09-26T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1936-09-26T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1936-09-26T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1936-09-26T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1936-04-25T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1936-04-25T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1936-04-25T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1936-04-25T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1936-09-26T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1936-09-26T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1936-09-26T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1936-09-26T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-04-24T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1937-04-24T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1937-04-24T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1937-04-24T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1937-09-25T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1937-09-25T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1937-09-25T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1937-09-25T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1937-04-24T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1937-04-24T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1937-04-24T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1937-04-24T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1937-09-25T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1937-09-25T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1937-09-25T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1937-09-25T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-04-23T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1938-04-23T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1938-04-23T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1938-04-23T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1938-09-24T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1938-09-24T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1938-09-24T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1938-09-24T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1938-04-23T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1938-04-23T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1938-04-23T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1938-04-23T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1938-09-24T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1938-09-24T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1938-09-24T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1938-09-24T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-04-29T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1939-04-29T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1939-04-29T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1939-04-29T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1939-09-23T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1939-09-23T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1939-09-23T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1939-09-23T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1939-04-29T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1939-04-29T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1939-04-29T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1939-04-29T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1939-09-23T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1939-09-23T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1939-09-23T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1939-09-23T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-04-27T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1940-04-27T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1940-04-27T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:30:00", "1940-04-27T14:00:00+00:00 should be 01:30:00 NZMT");
		t.equal(moment("1940-09-28T14:29:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1940-09-28T14:29:59+00:00 should be 01:59:59 NZMT");
		t.equal(moment("1940-09-28T14:30:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:30:00", "1940-09-28T14:30:00+00:00 should be 02:30:00 NZST");

		t.equal(moment("1940-04-27T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1940-04-27T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1940-04-27T14:00:00+00:00").tz("Pacific/Auckland").zone(), -690, "1940-04-27T14:00:00+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1940-09-28T14:29:59+00:00").tz("Pacific/Auckland").zone(), -690, "1940-09-28T14:29:59+00:00 should be -690 minutes offset in NZMT");
		t.equal(moment("1940-09-28T14:30:00+00:00").tz("Pacific/Auckland").zone(), -720, "1940-09-28T14:30:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-12-31T11:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "23:59:59", "1945-12-31T11:59:59+00:00 should be 23:59:59 NZST");
		t.equal(moment("1945-12-31T12:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "00:00:00", "1945-12-31T12:00:00+00:00 should be 00:00:00 NZST");

		t.equal(moment("1945-12-31T11:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1945-12-31T11:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1945-12-31T12:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1945-12-31T12:00:00+00:00 should be -720 minutes offset in NZST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-11-02T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1974-11-02T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1974-11-02T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1974-11-02T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1974-11-02T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1974-11-02T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1974-11-02T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1974-11-02T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-02-22T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1975-02-22T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1975-02-22T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1975-02-22T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1975-10-25T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1975-10-25T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1975-10-25T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1975-10-25T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1975-02-22T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1975-02-22T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1975-02-22T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1975-02-22T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1975-10-25T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1975-10-25T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1975-10-25T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1975-10-25T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-03-06T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1976-03-06T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1976-03-06T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1976-03-06T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1976-10-30T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1976-10-30T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1976-10-30T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1976-10-30T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1976-03-06T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1976-03-06T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1976-03-06T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1976-03-06T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1976-10-30T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1976-10-30T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1976-10-30T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1976-10-30T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-03-05T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1977-03-05T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1977-03-05T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1977-03-05T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1977-10-29T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1977-10-29T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1977-10-29T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1977-10-29T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1977-03-05T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1977-03-05T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1977-03-05T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1977-03-05T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1977-10-29T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1977-10-29T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1977-10-29T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1977-10-29T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-03-04T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1978-03-04T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1978-03-04T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1978-03-04T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1978-10-28T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1978-10-28T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1978-10-28T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1978-10-28T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1978-03-04T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1978-03-04T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1978-03-04T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1978-03-04T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1978-10-28T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1978-10-28T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1978-10-28T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1978-10-28T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-03-03T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1979-03-03T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1979-03-03T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1979-03-03T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1979-10-27T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1979-10-27T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1979-10-27T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1979-10-27T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1979-03-03T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1979-03-03T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1979-03-03T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1979-03-03T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1979-10-27T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1979-10-27T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1979-10-27T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1979-10-27T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-03-01T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1980-03-01T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1980-03-01T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1980-03-01T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1980-10-25T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1980-10-25T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1980-10-25T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1980-10-25T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1980-03-01T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1980-03-01T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1980-03-01T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1980-03-01T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1980-10-25T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1980-10-25T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1980-10-25T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1980-10-25T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-02-28T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1981-02-28T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1981-02-28T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1981-02-28T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1981-10-24T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1981-10-24T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1981-10-24T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1981-10-24T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1981-02-28T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1981-02-28T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1981-02-28T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1981-02-28T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1981-10-24T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1981-10-24T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1981-10-24T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1981-10-24T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-06T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1982-03-06T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1982-03-06T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1982-03-06T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1982-10-30T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1982-10-30T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1982-10-30T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1982-10-30T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1982-03-06T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1982-03-06T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1982-03-06T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1982-03-06T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1982-10-30T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1982-10-30T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1982-10-30T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1982-10-30T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-05T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1983-03-05T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1983-03-05T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1983-03-05T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1983-10-29T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1983-10-29T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1983-10-29T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1983-10-29T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1983-03-05T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1983-03-05T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1983-03-05T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1983-03-05T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1983-10-29T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1983-10-29T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1983-10-29T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1983-10-29T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-03T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1984-03-03T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1984-03-03T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1984-03-03T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1984-10-27T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1984-10-27T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1984-10-27T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1984-10-27T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1984-03-03T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1984-03-03T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1984-03-03T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1984-03-03T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1984-10-27T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1984-10-27T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1984-10-27T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1984-10-27T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-02T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1985-03-02T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1985-03-02T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1985-03-02T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1985-10-26T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1985-10-26T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1985-10-26T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1985-10-26T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1985-03-02T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1985-03-02T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1985-03-02T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1985-03-02T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1985-10-26T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1985-10-26T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1985-10-26T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1985-10-26T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-01T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1986-03-01T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1986-03-01T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1986-03-01T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1986-10-25T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1986-10-25T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1986-10-25T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1986-10-25T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1986-03-01T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1986-03-01T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1986-03-01T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1986-03-01T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1986-10-25T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1986-10-25T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1986-10-25T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1986-10-25T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-02-28T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1987-02-28T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1987-02-28T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1987-02-28T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1987-10-24T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1987-10-24T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1987-10-24T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1987-10-24T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1987-02-28T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1987-02-28T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1987-02-28T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1987-02-28T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1987-10-24T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1987-10-24T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1987-10-24T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1987-10-24T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-05T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1988-03-05T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1988-03-05T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1988-03-05T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1988-10-29T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1988-10-29T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1988-10-29T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1988-10-29T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1988-03-05T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1988-03-05T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1988-03-05T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1988-03-05T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1988-10-29T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1988-10-29T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1988-10-29T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1988-10-29T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-04T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1989-03-04T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1989-03-04T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1989-03-04T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1989-10-07T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1989-10-07T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1989-10-07T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1989-10-07T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1989-03-04T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1989-03-04T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1989-03-04T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1989-03-04T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1989-10-07T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1989-10-07T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1989-10-07T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1989-10-07T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-17T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1990-03-17T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1990-03-17T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1990-03-17T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1990-10-06T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1990-10-06T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1990-10-06T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1990-10-06T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1990-03-17T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1990-03-17T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1990-03-17T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1990-03-17T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1990-10-06T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1990-10-06T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1990-10-06T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1990-10-06T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-16T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1991-03-16T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1991-03-16T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1991-03-16T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1991-10-05T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1991-10-05T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1991-10-05T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1991-10-05T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1991-03-16T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1991-03-16T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1991-03-16T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1991-03-16T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1991-10-05T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1991-10-05T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1991-10-05T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1991-10-05T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-14T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1992-03-14T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1992-03-14T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1992-03-14T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1992-10-03T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1992-10-03T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1992-10-03T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1992-10-03T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1992-03-14T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1992-03-14T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1992-03-14T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1992-03-14T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1992-10-03T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1992-10-03T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1992-10-03T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1992-10-03T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-20T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1993-03-20T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1993-03-20T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1993-03-20T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1993-10-02T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1993-10-02T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1993-10-02T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1993-10-02T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1993-03-20T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1993-03-20T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1993-03-20T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1993-03-20T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1993-10-02T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1993-10-02T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1993-10-02T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1993-10-02T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-19T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1994-03-19T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1994-03-19T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1994-03-19T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1994-10-01T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1994-10-01T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1994-10-01T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1994-10-01T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1994-03-19T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1994-03-19T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1994-03-19T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1994-03-19T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1994-10-01T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1994-10-01T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1994-10-01T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1994-10-01T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-18T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1995-03-18T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1995-03-18T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1995-03-18T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1995-09-30T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1995-09-30T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1995-09-30T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1995-09-30T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1995-03-18T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1995-03-18T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1995-03-18T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1995-03-18T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1995-09-30T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1995-09-30T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1995-09-30T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1995-09-30T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-16T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1996-03-16T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1996-03-16T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1996-03-16T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1996-10-05T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1996-10-05T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1996-10-05T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1996-10-05T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1996-03-16T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1996-03-16T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1996-03-16T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1996-03-16T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1996-10-05T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1996-10-05T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1996-10-05T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1996-10-05T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-15T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1997-03-15T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1997-03-15T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1997-03-15T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1997-10-04T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1997-10-04T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1997-10-04T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1997-10-04T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1997-03-15T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1997-03-15T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1997-03-15T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1997-03-15T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1997-10-04T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1997-10-04T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1997-10-04T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1997-10-04T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-14T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1998-03-14T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1998-03-14T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1998-03-14T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1998-10-03T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1998-10-03T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1998-10-03T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1998-10-03T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1998-03-14T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1998-03-14T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1998-03-14T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1998-03-14T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1998-10-03T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1998-10-03T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1998-10-03T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1998-10-03T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-20T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "1999-03-20T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("1999-03-20T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "1999-03-20T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("1999-10-02T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "1999-10-02T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("1999-10-02T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "1999-10-02T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("1999-03-20T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "1999-03-20T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("1999-03-20T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "1999-03-20T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1999-10-02T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "1999-10-02T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("1999-10-02T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "1999-10-02T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-18T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2000-03-18T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2000-03-18T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2000-03-18T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2000-09-30T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2000-09-30T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2000-09-30T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2000-09-30T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2000-03-18T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2000-03-18T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2000-03-18T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2000-03-18T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2000-09-30T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2000-09-30T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2000-09-30T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2000-09-30T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-17T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2001-03-17T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2001-03-17T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2001-03-17T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2001-10-06T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2001-10-06T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2001-10-06T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2001-10-06T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2001-03-17T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2001-03-17T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2001-03-17T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2001-03-17T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2001-10-06T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2001-10-06T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2001-10-06T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2001-10-06T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-16T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2002-03-16T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2002-03-16T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2002-03-16T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2002-10-05T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2002-10-05T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2002-10-05T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2002-10-05T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2002-03-16T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2002-03-16T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2002-03-16T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2002-03-16T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2002-10-05T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2002-10-05T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2002-10-05T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2002-10-05T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-15T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2003-03-15T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2003-03-15T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2003-03-15T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2003-10-04T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2003-10-04T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2003-10-04T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2003-10-04T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2003-03-15T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2003-03-15T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2003-03-15T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2003-03-15T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2003-10-04T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2003-10-04T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2003-10-04T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2003-10-04T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-20T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2004-03-20T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2004-03-20T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2004-03-20T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2004-10-02T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2004-10-02T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2004-10-02T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2004-10-02T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2004-03-20T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2004-03-20T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2004-03-20T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2004-03-20T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2004-10-02T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2004-10-02T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2004-10-02T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2004-10-02T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-19T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2005-03-19T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2005-03-19T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2005-03-19T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2005-10-01T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2005-10-01T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2005-10-01T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2005-10-01T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2005-03-19T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2005-03-19T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2005-03-19T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2005-03-19T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2005-10-01T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2005-10-01T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2005-10-01T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2005-10-01T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-18T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2006-03-18T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2006-03-18T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2006-03-18T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2006-09-30T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2006-09-30T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2006-09-30T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2006-09-30T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2006-03-18T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2006-03-18T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2006-03-18T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2006-03-18T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2006-09-30T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2006-09-30T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2006-09-30T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2006-09-30T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-17T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2007-03-17T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2007-03-17T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2007-03-17T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2007-09-29T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2007-09-29T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2007-09-29T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2007-09-29T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2007-03-17T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2007-03-17T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2007-03-17T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2007-03-17T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2007-09-29T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2007-09-29T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2007-09-29T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2007-09-29T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-04-05T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2008-04-05T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2008-04-05T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2008-04-05T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2008-09-27T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2008-09-27T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2008-09-27T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2008-09-27T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2008-04-05T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2008-04-05T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2008-04-05T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2008-04-05T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2008-09-27T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2008-09-27T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2008-09-27T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2008-09-27T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-04-04T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2009-04-04T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2009-04-04T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2009-04-04T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2009-09-26T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2009-09-26T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2009-09-26T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2009-09-26T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2009-04-04T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2009-04-04T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2009-04-04T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2009-04-04T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2009-09-26T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2009-09-26T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2009-09-26T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2009-09-26T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-03T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2010-04-03T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2010-04-03T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2010-04-03T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2010-09-25T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2010-09-25T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2010-09-25T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2010-09-25T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2010-04-03T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2010-04-03T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2010-04-03T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2010-04-03T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2010-09-25T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2010-09-25T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2010-09-25T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2010-09-25T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-04-02T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2011-04-02T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2011-04-02T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2011-04-02T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2011-09-24T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2011-09-24T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2011-09-24T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2011-09-24T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2011-04-02T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2011-04-02T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2011-04-02T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2011-04-02T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2011-09-24T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2011-09-24T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2011-09-24T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2011-09-24T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-31T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2012-03-31T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2012-03-31T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2012-03-31T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2012-09-29T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2012-09-29T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2012-09-29T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2012-09-29T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2012-03-31T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2012-03-31T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2012-03-31T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2012-03-31T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2012-09-29T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2012-09-29T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2012-09-29T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2012-09-29T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2013-04-06T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2013-04-06T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2013-09-28T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2013-09-28T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2013-04-06T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2013-04-06T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2013-09-28T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2013-09-28T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-05T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2014-04-05T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2014-04-05T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2014-04-05T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2014-09-27T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2014-09-27T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2014-09-27T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2014-09-27T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2014-04-05T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2014-04-05T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2014-04-05T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2014-04-05T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2014-09-27T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2014-09-27T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2014-09-27T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2014-09-27T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-04T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2015-04-04T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2015-04-04T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2015-04-04T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2015-09-26T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2015-09-26T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2015-09-26T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2015-09-26T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2015-04-04T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2015-04-04T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2015-04-04T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2015-04-04T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2015-09-26T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2015-09-26T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2015-09-26T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2015-09-26T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-02T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2016-04-02T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2016-04-02T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2016-04-02T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2016-09-24T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2016-09-24T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2016-09-24T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2016-09-24T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2016-04-02T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2016-04-02T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2016-04-02T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2016-04-02T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2016-09-24T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2016-09-24T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2016-09-24T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2016-09-24T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-01T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2017-04-01T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2017-04-01T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2017-04-01T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2017-09-23T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2017-09-23T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2017-09-23T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2017-09-23T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2017-04-01T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2017-04-01T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2017-04-01T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2017-04-01T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2017-09-23T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2017-09-23T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2017-09-23T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2017-09-23T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-31T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2018-03-31T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2018-03-31T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2018-03-31T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2018-09-29T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2018-09-29T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2018-09-29T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2018-09-29T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2018-03-31T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2018-03-31T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2018-03-31T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2018-03-31T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2018-09-29T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2018-09-29T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2018-09-29T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2018-09-29T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-06T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2019-04-06T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2019-04-06T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2019-04-06T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2019-09-28T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2019-09-28T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2019-09-28T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2019-09-28T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2019-04-06T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2019-04-06T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2019-04-06T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2019-04-06T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2019-09-28T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2019-09-28T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2019-09-28T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2019-09-28T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-04T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2020-04-04T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2020-04-04T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2020-04-04T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2020-09-26T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2020-09-26T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2020-09-26T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2020-09-26T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2020-04-04T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2020-04-04T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2020-04-04T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2020-04-04T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2020-09-26T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2020-09-26T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2020-09-26T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2020-09-26T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-03T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2021-04-03T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2021-04-03T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2021-04-03T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2021-09-25T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2021-09-25T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2021-09-25T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2021-09-25T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2021-04-03T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2021-04-03T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2021-04-03T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2021-04-03T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2021-09-25T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2021-09-25T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2021-09-25T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2021-09-25T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-02T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2022-04-02T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2022-04-02T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2022-04-02T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2022-09-24T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2022-09-24T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2022-09-24T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2022-09-24T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2022-04-02T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2022-04-02T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2022-04-02T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2022-04-02T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2022-09-24T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2022-09-24T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2022-09-24T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2022-09-24T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-01T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2023-04-01T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2023-04-01T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2023-04-01T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2023-09-23T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2023-09-23T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2023-09-23T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2023-09-23T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2023-04-01T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2023-04-01T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2023-04-01T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2023-04-01T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2023-09-23T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2023-09-23T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2023-09-23T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2023-09-23T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-06T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2024-04-06T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2024-04-06T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2024-04-06T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2024-09-28T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2024-09-28T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2024-09-28T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2024-09-28T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2024-04-06T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2024-04-06T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2024-04-06T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2024-04-06T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2024-09-28T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2024-09-28T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2024-09-28T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2024-09-28T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-05T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2025-04-05T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2025-04-05T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2025-04-05T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2025-09-27T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2025-09-27T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2025-09-27T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2025-09-27T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2025-04-05T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2025-04-05T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2025-04-05T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2025-04-05T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2025-09-27T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2025-09-27T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2025-09-27T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2025-09-27T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-04T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2026-04-04T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2026-04-04T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2026-04-04T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2026-09-26T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2026-09-26T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2026-09-26T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2026-09-26T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2026-04-04T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2026-04-04T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2026-04-04T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2026-04-04T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2026-09-26T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2026-09-26T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2026-09-26T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2026-09-26T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-03T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2027-04-03T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2027-04-03T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2027-04-03T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2027-09-25T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2027-09-25T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2027-09-25T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2027-09-25T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2027-04-03T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2027-04-03T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2027-04-03T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2027-04-03T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2027-09-25T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2027-09-25T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2027-09-25T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2027-09-25T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-01T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2028-04-01T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2028-04-01T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2028-04-01T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2028-09-23T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2028-09-23T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2028-09-23T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2028-09-23T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2028-04-01T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2028-04-01T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2028-04-01T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2028-04-01T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2028-09-23T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2028-09-23T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2028-09-23T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2028-09-23T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-31T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2029-03-31T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2029-03-31T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2029-03-31T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2029-09-29T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2029-09-29T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2029-09-29T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2029-09-29T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2029-03-31T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2029-03-31T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2029-03-31T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2029-03-31T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2029-09-29T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2029-09-29T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2029-09-29T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2029-09-29T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-06T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2030-04-06T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2030-04-06T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2030-04-06T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2030-09-28T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2030-09-28T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2030-09-28T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2030-09-28T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2030-04-06T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2030-04-06T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2030-04-06T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2030-04-06T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2030-09-28T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2030-09-28T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2030-09-28T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2030-09-28T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-05T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2031-04-05T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2031-04-05T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2031-04-05T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2031-09-27T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2031-09-27T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2031-09-27T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2031-09-27T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2031-04-05T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2031-04-05T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2031-04-05T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2031-04-05T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2031-09-27T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2031-09-27T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2031-09-27T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2031-09-27T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-03T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2032-04-03T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2032-04-03T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2032-04-03T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2032-09-25T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2032-09-25T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2032-09-25T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2032-09-25T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2032-04-03T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2032-04-03T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2032-04-03T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2032-04-03T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2032-09-25T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2032-09-25T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2032-09-25T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2032-09-25T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-02T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2033-04-02T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2033-04-02T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2033-04-02T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2033-09-24T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2033-09-24T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2033-09-24T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2033-09-24T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2033-04-02T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2033-04-02T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2033-04-02T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2033-04-02T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2033-09-24T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2033-09-24T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2033-09-24T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2033-09-24T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-01T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2034-04-01T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2034-04-01T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2034-04-01T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2034-09-23T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2034-09-23T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2034-09-23T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2034-09-23T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2034-04-01T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2034-04-01T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2034-04-01T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2034-04-01T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2034-09-23T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2034-09-23T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2034-09-23T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2034-09-23T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-31T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2035-03-31T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2035-03-31T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2035-03-31T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2035-09-29T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2035-09-29T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2035-09-29T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2035-09-29T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2035-03-31T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2035-03-31T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2035-03-31T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2035-03-31T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2035-09-29T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2035-09-29T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2035-09-29T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2035-09-29T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-05T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2036-04-05T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2036-04-05T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2036-04-05T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2036-09-27T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2036-09-27T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2036-09-27T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2036-09-27T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2036-04-05T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2036-04-05T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2036-04-05T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2036-04-05T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2036-09-27T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2036-09-27T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2036-09-27T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2036-09-27T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-04T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:59:59", "2037-04-04T13:59:59+00:00 should be 02:59:59 NZDT");
		t.equal(moment("2037-04-04T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "02:00:00", "2037-04-04T14:00:00+00:00 should be 02:00:00 NZST");
		t.equal(moment("2037-09-26T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "01:59:59", "2037-09-26T13:59:59+00:00 should be 01:59:59 NZST");
		t.equal(moment("2037-09-26T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm:ss"), "03:00:00", "2037-09-26T14:00:00+00:00 should be 03:00:00 NZDT");

		t.equal(moment("2037-04-04T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2037-04-04T13:59:59+00:00 should be -780 minutes offset in NZDT");
		t.equal(moment("2037-04-04T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2037-04-04T14:00:00+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2037-09-26T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2037-09-26T13:59:59+00:00 should be -720 minutes offset in NZST");
		t.equal(moment("2037-09-26T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2037-09-26T14:00:00+00:00 should be -780 minutes offset in NZDT");

		t.done();
	}
};