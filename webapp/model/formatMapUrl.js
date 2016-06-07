sap.ui.define([], function() {
	"use strict";

	return {
		apply: function(sName, sStreet, sHouseNumber, sZIPCode, sCity) {
			
			
			var sGoogleKey = "AIzaSyBCaMGKZfDipNB8L0DkWH78ddwFuVC8Dz0";
			
			// https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=YOUR_API_KEY
			
			var sCenter = sName + "," + sStreet + "," + sHouseNumber + "," + sZIPCode + "," + sCity;
			
			var sUrl = "https://maps.googleapis.com/maps/api/staticmap?center=" + sCenter + "&zoom=14&size=400x400&markers=color:blue%7Clabel:S%7C" + sCenter + "&key=" + sGoogleKey;
			
			return sUrl;
		}
	};
});