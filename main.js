var today=new Date();
var year=today.getFullYear();
document.write("year="+year+"<br><br>");
if(year%4==0){
    document.write(year+"is leap year");
}
else{
    document.write( year+" is not a leap year");
}