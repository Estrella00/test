const areatemp = document.querySelector(".areatemp");
const alltemp = document.querySelector(".alltemp");
const alltemptxt = document.querySelector(".alltemptxt");
const alltempdegree = document.querySelector(".alltempdegree");
const container = document.querySelector(".container");
const air = document.querySelector(".air");
const fps = document.querySelector(".fps");
const hight = document.querySelector(".hight");
// const list = document.querySelectorAll("li.areatemp-item");



function Videoinfo(resolution,airtxt,online,fpstxt,highttxt) {
    //螢幕大小
    // let w = window.outerWidth;
    // let h = window.outerHeight;
    // let screen = `${w}*${h}`;

    //console.log(info);
 
            document.getElementById("size").innerHTML = resolution;
      
      
            air.innerHTML=(`AIR: ${airtxt}`);
       
       
             //訊號網路連線
            let onlinetxt;
            if (online==1) {
                console.log('網路已連線');
                onlinetxt="網路已連線";
            } else if(online==2){
                console.log('網路離線');
                onlinetxt="網路離線";
            } else if(online==3){
                console.log('訊號品質差');
                onlinetxt="訊號品質差";
            }
            else
            {
                console.log('狀態錯誤');
                onlinetxt="狀態輸入錯誤";
            }
            document.getElementById("online").innerHTML = onlinetxt;
        
        
            fps.innerHTML=(`FPS: ${fpstxt}`);
        
        
            hight.innerHTML=(`HIGHT: ${highttxt}`);
  }

  Videoinfo("1920*1080",20,1,50,70);


  function Overall(x,y){

     if(x === undefined) 
    {
        x= 1;
    }  
    if (y === undefined) 
    {
        y = 50;
    } 
    //整體溫度
    if(x==1)
    {
        alltemp.setAttribute("class","alltemp_c");
        alltemptxt.innerHTML = `<h2 class="alltemptxt">整體環境溫度正常</h2>`
        alltempdegree.innerHTML = `<p class="alltempdegree">警告溫度設定: ${y}&deg;C</p>`
    }
    else if(x==2){
        alltemp.setAttribute("class","alltemp_w");
        alltemptxt.innerHTML = `<h2 class="alltemptxt">整體環境溫度異常</h2>`
        alltempdegree.innerHTML = `<p class="alltempdegree">警告溫度設定: ${y}&deg;C</p>`
    }   
    else
    {
        alltemptxt.innerHTML = `<h2 class="alltemptxt">整體環境溫度無法判斷</h2>`
    } 
}
Overall(1,40);


//溫度正or異常
function TempData(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6){
    let tempdata=[
        {
            "content":x1,
            "degree":y1
        },{
            "content":x2,
            "degree":y2
        },{
            "content":x3,
            "degree":y3
        },{
            "content":x4,
            "degree":y4
        },{
            "content":x5,
            "degree":y5
        },{
            "content":x6,
            "degree":y6
        }
    ];
    
    let str = '';
    let count = 1;

      tempdata.forEach(function (item,index) {
     if(index<=5){
        if(item.content == 1){
            str+=`<li class="areatemp-item correct" data-num="${index}"><h2><span>${count}.</span>溫度正常</h2><p>警告溫度設定: ${item.degree}&deg;C</p></li>`
        }
        else if(item.content == 2)
        {
            str+=`<li class="areatemp-item wrong" data-num="${index}"><h2><span>${count}.</span>溫度異常</h2><p>警告溫度設定: ${item.degree}&deg;C</p></li>`
        }
        else if(item.content == undefined){
        str+=`<li class="areatemp-item gray " data-num="${index}"><h2></h2><p></p></li>`
        }
        else
        {
            str+=`<li class="areatemp-item gray " data-num="${index}"><h2><span>${count}.</span>溫度判斷</h2><p></p></li>`
        }
      count+=1;
     }
   })
    
    areatemp.innerHTML = str;
 
  }

  TempData(1,20,2,30,1,50,1,80);




