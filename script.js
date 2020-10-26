$(document).ready(function(){
    $('#previous').hide();
    const images = [];
    images[0]="images/1.png";
    images[1]="images/2.png";
    images[2]="images/3.png";
    images[3]="images/4.png";
    images[4]="images/5.png";
    images[5]="images/6.png";
    images[6]="images/7.png";
    images[7]="images/8.png";
    let index = 1;
    let timeInterval = setInterval(ShowNextPicture,1000);
    function ShowNextPicture(){
        $('#previous').show();
        $('#next').show();
        if(index == 0){
            $("#next").show();
            $("#previous").hide();
        }
        if(index === images.length-1){
            index = 0;
            $("#next").hide();
            $("#previous").show();


        }
        $("#gallery").attr('src',images[index]);
        console.log(index)
        index++;
       
}
//$("#show-time").text(timeInterval.toString());

    $("#previous").click(function(){
        console.log("You have pressed previous"+ index);
        if(index === 0)
        {
            $("#previous").hide();
            return
        }
        else
        {
            $("#next").show();
            index--;
            $("#gallery").attr('src',images[index]);
        }
  
    })
    $("#next").click(function(){
        console.log("You have pressed next"+ index);
        if(index === images.length-1)
        {
            $("#next").hide();
        }
        else{
            $("#previous").show();
            index++;
            $("#gallery").attr('src',images[index]);
            $("#next").show();
        }

    })
    $("#button").click(function(){
        if($("#button").text()==="Pause"){
        console.log("You have pressed pause");
        clearInterval(timeInterval);
        $("#button").text("Resume")
            return
        }
        if($("#button").text()==="Resume"){
            console.log("You have pressed resume");
            clearInterval(timeInterval);
            timeInterval = setInterval(ShowNextPicture,1000);
            $("#button").text("Pause")
            return
            }
        
  
    })


}
);