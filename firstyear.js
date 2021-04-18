function emtpyValidate1(){
    if(document.Form1.HallTicket.value==""){
        alert("Enter Hall Ticket No.")
        document.Form1.htno.focus()
                     return false
       } else {
           var htno=document.Form1.HallTicket.value;
           if(htno.length==10){
             var brnch=document.getElementById("Branch").value;
             var yrSem=document.getElementById("Year-Sem").value;
             if(!brnch.localeCompare("select")){
                alert("Select Branch")
                return false
             }
             else{
                if(!yrSem.localeCompare("select")){
                    alert("Select Year-Sem")
                    return false
                }
               //window.location.replace("studentData.html")
               handleSubmit();
             }
           }
           else{
             alert("Enter valid Hall Ticket No.")
             document.Form1.htno.focus()
                     return false
           }
       }
   
   }
   
  function handleSubmit () {
    const htno1 = document.getElementById('Hallticket').value;
    const brnch1 = document.getElementById('Branch').value;
    const yrSem1 = document.getElementById('Year-Sem').value;


    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("htno1", htno1);
    sessionStorage.setItem("brnch1", brnch1);
    sessionStorage.setItem("yrSem1", yrSem1);
    window.location.replace("studentData.html")

    return;
} 