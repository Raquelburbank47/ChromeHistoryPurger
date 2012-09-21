
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('weekform').addEventListener('submit', function (evt){
        evt.preventDefault();
        var week = parseFloat(document.getElementById('week').value);
        if (!isNaN(week)){
			var range = new Object();
			range.startTime = 0;
			range.endTime = new Date().getTime() - 86400 * 1000 * 7 * week;
			chrome.history.deleteRange(range, function (){
				document.getElementById('title').innerHTML = 'History has been purged';
			});
        }
        else{
            alert('Invalid week number');
        }
		return false;
    });
});

