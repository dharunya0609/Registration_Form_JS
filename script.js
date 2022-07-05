function myFunction() 
{
    var name=document.getElementById('name').value;
    var nregex=/^[A-z\.]+$/;
    var nres=nregex.test(name);
    if(!nres)
     {
        document.getElementById("demo1").innerHTML="<ul> <li>Invalid Name!.</li> <li>Please, don't leave the field Empty.</li> <li>Only Uppercase and Lowercase Letters are allowed!</li> <li>Dot allowed</li> <li>Please, don't include symbols and digits.</li> </ul>";
        document.getElementById("name").focus();
     }
   if(nres)
     {
        document.getElementById("demo1").innerHTML="VERIFIED!";
     }
    var mail=document.getElementById('mail').value;
    let mregex=/^[a-z]*\.[0-9]{2}[a-z]+@[a-z]+\.[a-z]{2,3}$/;
    let mres=mregex.test(mail);
    if(!mres)
     {
       document.getElementById("demo2").innerHTML="<ul> <li>Invalid Mail Address!.</li> <li>Please, include @ symbol in your mail id.</li> <li>Please, give your Kongu.edu mail id.</li> </ul>";
     }
    if(mres)
     {
       document.getElementById("demo2").innerHTML="VERIFIED!";
     }
}
function validate()
{
    
    
    var ph=document.getElementById("ph").value;
    let pregex=/^\d{10}$/;
    let pres=pregex.test(ph);
    if(!pres)
    {
        document.getElementById("demo3").innerHTML="<ul> <li>Invalid Phone number!.</li> <li>Please, include 10 digits.</li></ul>";  
    }
    else
    {
       document.getElementById("demo3").innerHTML="VERIFIED!";       
    }
    var un=document.getElementById("uname").value;
    let unregex=/^[a-z]{8,10}[\s][0-9]+$/;
    let unres=unregex.test(un);
    if(!unres)
     {
       document.getElementById("demo4").innerHTML="<ul> <li>Invalid Username!.</li> <li>8-10 characters long.</li> <li>Please, include Lower case letters.</li> <li>Please, include one digit and special character.</li> <li>Spaces are not allowed !</li> </ul>";
     }
    else
     {
       document.getElementById("demo4").innerHTML="VERIFIED!";
     }
    var pd=document.getElementById("pwd").value;
    let pdregex=/^[A-z0-9]{10,12}$/;
    let pdres=pdregex.test(pd);
    if(!pdres)
     {
        document.getElementById("demo5").innerHTML="<ul> <li>Invalid Password!.</li> <li>10-12 characters long.</li> <li>Please, include Upper & Lower case letters.</li> <li>Please, include one digit.</li> <li>Spaces and Special symbols are not allowed !</li> </ul>";
        document.getElementById("pwd").focus();
     }
     else
     {
        document.getElementById("demo5").innerHTML="VERIFIED!";
     }
     var x=document.getElementById("1").checked;
     if(x)
      {
        document.getElementById("demo6").innerHTML="Checked!";
      }
      else
       {
         document.getElementById("demo6").innerHTML="unchecked, please check!";
       }
      if(document.getElementById("r1").checked||document.getElementById("r1").checked)
      {
        document.getElementById("demo7").innerHTML="Radio Button Checked.";
      }
      else
      {
        document.getElementById("demo7").innerHTML="Radio Button Unchecked";
      }
      if(document.form.lang.selectedIndex=="")
       {
          document.getElementById("demo8").innerHTML="NOT SELECTED!";
       }
       else
       {
         document.getElementById("demo8").innerHTML="SELECTED!";
       }

      if(pres && unres && pdres)
       {
        document.getElementById("form").submit();
       }
}
function focusFunction()
{
    document.getElementById("name").style.borderColor="blue";
}

function blurFunction()
{
    document.getElementById("name").style.borderColor="black";

}
