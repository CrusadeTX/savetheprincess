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
    let index = 0;
    let timeInterval = setInterval(ShowNextPicture,1000);
    function ShowNextPicture(){
        $("#gallery").attr('src',images[index]);
        console.log(index)
        
        if(index == 0){
            $("#next").show();
            $("#previous").hide();
        }
        if(index>0 && index<images.length-2){
            $('#previous').show();
            $('#next').show();
        }
        if(index === images.length-1 || index>images.length){
            index = -1;
           $("#next").hide();
           $("#previous").show();
        }
        index++;  
}
//$("#show-time").text(timeInterval.toString());

    $("#previous").click(function(){
        if(index>=0 && index<images.length){
            $("#gallery").attr('src',images[index]);
            console.log(index)
            index--;
            $("#next").show();
            $("#previous").show();
            }
            if(index===-1){
              $("#previous").hide();
              index++
               
            }
            if(index=== images.length){
                $("#next").hide();
            }
            console.log(index+" end")
  
    })
    $("#next").click(function(){
        if(index<images.length){
        $("#gallery").attr('src',images[index]);
        index++;
        $("#next").show();
        $("#previous").show();
        }
        if(index===images.length){
          $("#next").hide();
           
        }
        if(index===1){
            $("#previous").hide();
        }
    
  
        
        console.log(index)

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