for(i=0;i<data.length;i++){
	var qnum = i+1;
        var accText = "<h4>Question "+qnum+": "+data[i].question+"</h4>";

	var showOn = data[i].show;
	var cond = (showOn == 'No') ? 'not' : 'so';
	accText += "<p>If "+cond+", possible reasons may be:</p>"; 
	accText += "<ul>";
        for(j=0;j<data[i].reasons.length;j++){
            accText += "<li>"+data[i].reasons[j]+"</li>";
        }
	accText += "</ul>";

	accText += "<p>It may indicate:</p>"; 
	accText += "<ul>";
        for(j=0;j<data[i].indicate.length;j++){
            accText += "<li>"+data[i].indicate[j]+"</li>";
        }
	accText += "</ul>";

	accText += "<h5>Tips for students</h5>";
	accText += "<ul>";
        for(j=0;j<data[i].students.length;j++){
            accText += "<li><a class='new-window' href='"+data[i].students[j].link+"'>"+data[i].students[j].text+"</a></li>";
        }
	accText += "</ul>";

	accText += "<h5>Tips for teachers</h5>";
	accText += "<ul>";
        for(j=0;j<data[i].teachers.length;j++){
            accText += "<li><a class='new-window' href='"+data[i].teachers[j].link+"'>"+data[i].teachers[j].text+"</a></li>";
        }
	accText += "</ul>";
	
	jQuery(".accessibility-show").append(accText);
}

