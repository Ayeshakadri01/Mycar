
 m=0;

var myInterval;
function start()
{


      myInterval=setInterval(run,30);
    
    
    function run()
    
    {
      if(m==1200)
      {
        clearInterval(x);
        m=0;
      }
      else
      {
        m+=5;
    
        var x=document.getElementById("img");
        x.style.marginLeft=m+'px';
      }
}
}


function Stop()
{
  clearInterval(myInterval);


}


