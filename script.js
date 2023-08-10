
function generteCV(){
    let name = document.getElementById('name').value;

    let nametemp = document.getElementById('nametemp');
    nametemp.innerHTML = name;

    document.getElementById("namet").innerHTML = name;

    document.getElementById("phonetemp").innerHTML = document.getElementById("phone").value;

    document.getElementById("emailtemp").innerHTML = document.getElementById("email").value;

    document.getElementById("fbt").innerHTML = document.getElementById("facebook").value;
    document.getElementById("ldt").innerHTML = document.getElementById("linkedin").value;
    document.getElementById("int").innerHTML = document.getElementById("instaField").value;

    document.getElementById("objectivetemp").innerHTML = document.getElementById("careerObjective").value;

    document.getElementById("techskiltemp").innerHTML = document.getElementById("technicalSkills").value;
    document.getElementById("edutemp").innerHTML = document.getElementById("educationFields").value;
    document.getElementById("webtemp").innerHTML = document.getElementById("Website").value;


    document.getElementById("resumeForm").style.display = 'none';
    document.getElementById("resume-template").style.display = 'block';
}



function PrintCV(){
     window.print();
}