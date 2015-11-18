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
postTitle[1] = 'Grameenphone Eid Smartphone offer Symphony V52+Power bank at 6390Tk';

postLink[0] = 'http://bd.techbia.com/2015/09/eid-offers-of-all-operators-eid-ul-adha-2015.html';
postLink[7] = 'http://bd.techbia.com/2015/09/robi-1gb-at-9tk-special-call-rate-on.html';
postLink[2] = 'http://bd.techbia.com/2015/09/banglalink-25-bonus-internet-25.html';
postLink[3] = 'http://bd.techbia.com/2015/08/grameenphone-1gb-at-89-tk-7-days-dail.html';
postLink[4] = 'http://bd.techbia.com/2015/08/2gb-free-internet-and-special-call-rate.html';
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
randTitle[1] = 'Grameenphone GP bondho sim offer special call rate on recharge';
randTitle[2] = 'Grameenphone GP 60 MB internet 9Tk 2 days *5000*118#';
randTitle[3] = 'Grameenphone GP 1GB internet 150tk 14 days';
randTitle[4] = 'Robi internet+ offer - buy internet pack get talktime and sms free';


randLink[0] = 'http://bd.techbia.com/2015/09/banglalink-8-minute-at-2tk-for-4-hours.html';
randLink[1] = 'http://bd.techbia.com/2015/11/grameenphone-gp-bondho-sim-offer.html';
randLink[2] = 'http://bd.techbia.com/2015/11/grameenphone-gp-60-mb-internet-9tk-2-days.html';
randLink[3] = 'http://bd.techbia.com/2015/11/grameenphone-gp-1gb-internet-150tk-14days.html';
randLink[4] = 'http://bd.techbia.com/2015/11/robi-internet-plus-buy-internet-pack-free-minute-sms.html';


for(var j=randTitle.length-1;j>=3;j--){
	if(mVersion==1) randFinal = randFinal + '<li><a href="'+randLink[j]+'?m=1">'+randTitle[j]+'</a></li>';
	else randFinal = randFinal + '<li><a href="'+randLink[j]+'">'+randTitle[j]+'</a></li>';
}

// outputting the result

if(mVersion==1){
//	document.write('<h3>Most viewd</h3>');
//	document.write('<ul>'+finalString+'</ul>');

	document.write('<h3>Latest posts</h3>');
	document.write('<ul>'+randFinal+'</ul>');
}
