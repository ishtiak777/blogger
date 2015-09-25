// checking if its mobile version
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var mVersion = getParameterByName('m');

// decalring all variables

var postTitle = [];
var postLink = [];
var finalString = '';

// setting variable values

postTitle[0] = 'Eid-Ul-Adha 2015 Eid Offers of all Operators';
postTitle[7] = 'Robi 1GB at 9tk &amp; special call rate on 9tk Recharge (unused bondho connection)';
postTitle[2] = 'Banglalink 25% bonus internet, 25 paisa/minute, 25 paisa/sms on 29tk recharge';
postTitle[3] = 'Grameenphone 1GB at 89 Tk 7 days dail *500*95#';
postTitle[4] = '2GB free internet and special call rate on 19Tk recharge Banglalink New or unused connection';
postTitle[5] = '';
postTitle[6] = '';
postTitle[1] = 'Grameenphone Eid Smartphone offer Symphony V52+Power bank at 6390Tk';

postLink[0] = 'http://bd.techbia.com/2015/09/eid-offers-of-all-operators-eid-ul-adha-2015.html';
postLink[7] = 'http://bd.techbia.com/2015/09/robi-1gb-at-9tk-special-call-rate-on.html';
postLink[2] = 'http://bd.techbia.com/2015/09/banglalink-25-bonus-internet-25.html';
postLink[3] = 'http://bd.techbia.com/2015/08/grameenphone-1gb-at-89-tk-7-days-dail.html';
postLink[4] = 'http://bd.techbia.com/2015/08/2gb-free-internet-and-special-call-rate.html';
postLink[5] = '';
postLink[6] = '';
postLink[1] = 'http://bd.techbia.com/2015/09/grameenphone-eid-smartphone-offer-symphony-v52-powerbank.html?m=1';
// putting all texts and links in a final string

for(var i=0;i<postTitle.length;i++){
	if(postLink[i]=='') continue;
	if(mVersion==1) finalString = finalString + '<li><a href="'+postLink[i]+'?m=1">'+postTitle[i]+'</a></li>';
	else finalString = finalString + '<li><a href="'+postLink[i]+'">'+postTitle[i]+'</a></li>';

}

// random posts starting

var randTitle = [];
var randLink = [];
var randFinal = '';

randTitle[0] = 'Banglalink 8 minute at 2tk for 4 hours - Dial *121*10#';
randTitle[1] = 'Grameenphone Eid Smartphone offer Symphony V52+Power bank at 6390Tk';
randTitle[2] = 'Grameenphone Eid offer for Star subscribers - Recharge and get Mug, Prayer mat and T-shirt';
randTitle[3] = 'GP (Grameenphone) Eid Offer Eid-ul-Azha 2015';
randTitle[4] = 'airtel Eid offer 3GB Free (bondho connection)';
randTitle[5] = 'Grameenphone eid offer 100% bonus on 75MB -150MB 3G at 30TK for 7 days';
randTitle[6] = 'Grameenphone Eid offer 200MB, 75 minute, 75 SMS, 75 MMS only at 50Tk';
randTitle[7] = 'Grameephone Eid Offer 200% bonus on 250MB - 750MB 99Tk';
randTitle[8] = 'Robi Eid Offer 3GB internet at 129Tk';

randLink[0] = 'http://bd.techbia.com/2015/09/banglalink-8-minute-at-2tk-for-4-hours.html';
randLink[1] = 'http://bd.techbia.com/2015/09/grameenphone-eid-smartphone-offer-symphony-v52-powerbank.html';
randLink[2] = 'http://bd.techbia.com/2015/09/grameenphone-eid-offer-for-star-subscribers.html';
randLink[3] = 'http://bd.techbia.com/2015/09/grameenphone-gp-eid-offer-eid-ul-azha-2015.html';
randLink[4] = 'http://bd.techbia.com/2015/09/airtel-eid-offer-2015-3gb-free-eid-ul-azha.html';
randLink[5] = 'http://bd.techbia.com/2015/09/grameenphone-eid-offer-150mb-30tk.html';
randLink[6] = 'http://bd.techbia.com/2015/09/grameenphone-eid-offer-200mb-75-minute-75sms-50tk.html?m=1';
randLink[7] = 'http://bd.techbia.com/2015/09/grameephone-eid-offer-750mb-99tk.html';
randLink[8] = 'http://bd.techbia.com/2015/09/robi-eid-offer-3gb-internet-at-129tk.html';

for(var j=randTitle.length-1;j>=3;j--){
	if(mVersion==1) randFinal = randFinal + '<li><a href="'+randLink[j]+'?m=1">'+randTitle[j]+'</a></li>';
	else randFinal = randFinal + '<li><a href="'+randLink[j]+'">'+randTitle[j]+'</a></li>';
}

// outputting the result

if(mVersion==1){
	document.write('<h3>Most viewd</h3>');
	document.write('<ul>'+finalString+'</ul>');

	document.write('<h3>Latest posts</h3>');
	document.write('<ul>'+randFinal+'</ul>');
}
