nameOfTheStudentArray = [];
    
function submit()
{
    var displayStudentArray = [];
//Criar o Loop for 1

//-----------------------
    console.log(nameOfTheStudentArray);

    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
    console.log(lenghtOfNameOfStudentsArray);

//Criar o Loop for 2
    
//-------------
    console.log(displayStudentArray);
    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

    var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

}

function sorting()
{
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);

    var displayStudentArraySorting = [];

    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
    console.log(lenghtOfNameOfStudentsArray);

//Criar o loop for 3
    
//-------------------
    var removeCommas = displayStudentArraySorting.join(" ");
    console.log(removeCommas);

    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}


//Atividade Adicional
function newUpdate()
{
    document.getElementById("displayNameWithoutCommas").innerHTML = "<h1>" + nameOfTheStudentArray +"</h1>";
}





