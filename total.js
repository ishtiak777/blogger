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

postTitle[0] = 'Robi 1GB 9Tk bondho sim reactivation offer';
postTitle[5] = 'Banglalink Reactivation offer 1GB at 29tk';
postTitle[2] = 'Symphony V85 at 6990 Tk with free Mug Grameenphone offer';
postTitle[3] = 'airtel 1GB 3G internet at 98Tk with 5 days validity';
postTitle[4] = 'Robi 1GB 89Tk recharge offer';
postTitle[1] = 'Grameenphone 90MB at 14Tk valentines offer #trulyspecial';

postLink[0] = 'http://3goffer.com/robi-1gb-9tk-bondho-sim-reactivation-offer/';
postLink[5] = 'http://3goffer.com/banglalink-reactivation-offer-1gb-at-29tk/';
postLink[2] = 'http://3goffer.com/grameenphone-symphony-v85-at-6990-tk/';
postLink[3] = 'http://3goffer.com/airtel-1gb-98tk-recharge-offer-5-days-validity/';
postLink[4] = 'http://3goffer.com/robi-1gb-89tk-recharge-offer/';
postLink[1] = 'http://3goffer.com/gp-grameenphone-90mb-at-14tk-call-rate/';
// putting all texts and links in a final string

for(var i=0;i<postTitle.length;i++){
	if(postLink[i]=='') continue;
	if(mVersion==1) finalString = finalString + '<li><a href="'+postLink[i]+'">'+postTitle[i]+'</a></li>';
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


for(var j=randTitle.length-1;j>=0;j--){
	if(mVersion==1) randFinal = randFinal + '<li><a href="'+randLink[j]+'?m=1">'+randTitle[j]+'</a></li>';
	else randFinal = randFinal + '<li><a href="'+randLink[j]+'">'+randTitle[j]+'</a></li>';
}

// outputting the result

if(mVersion==1){
//	document.write('<h3>Most viewd</h3>');
//	document.write('<ul>'+finalString+'</ul>');

	document.write('<h3>Latest posts</h3>');
	document.write('<ul>'+finalString+'</ul>');
}
