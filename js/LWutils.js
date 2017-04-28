/**************************************************
* Learn Words // LWutils.js
* coded by Anatolii Marezhanyi aka e1r0nd//[CRG] - March 2014
* http://linkedin.com/in/merezhany/ e1r0nd.crg@gmail.com
*
* Updates November 2016 by Hannes Hirzel
*
* Placed in public domain.
**************************************************/



if(typeof(LW.Utils) == 'undefined' || LW.Utils == null || !LW.Utils){

	LW.Utils = {
		getFeedbackImage: function()
		{
			var numberOfImages = 11;

			var key = 'feedbackImg';
			var imgNr = localStorage.getItem(key);
			imgNr++;
			if(imgNr > numberOfImages)
			{
				imgNr = 1;
			}
			localStorage.setItem(key,imgNr);
			return imgNr;
		},
		playAudio: function(src) {

			var isCordovaApp = !!window.cordova;

			var my_media = null;

			if(isCordovaApp)
			{
				my_media = new Media(cordova.file.applicationDirectory + "www/" + src);
				console.log(cordova.file.applicationDirectory + "www/" + src);
			}
			else
			{
				my_media = new Audio(src);
				console.log(src);
			}

			my_media.play();
		},
        delay: 0     //    Utils.delay = 24h * 60m * 60s * 100μs
	};
}
