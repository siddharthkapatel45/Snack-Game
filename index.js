// random food generator

let x = Math.floor(Math.random() * 16) + 1;


let y = Math.floor(Math.random() * 16) + 1;




let board=document.getElementById('board');
board.innerHTML="";
console.log("u");
// All initialization 
let direction={x:17,y:15};
let input_dir={x:0,y:0};
let previous_direction={x:0,y:0};
let food={x:x,y:y};
let score=0;
let speed=300;
let food_music=new Audio("music/food.mp3");
let game_over_music=new Audio("music/gameover.mp3");
let move_music=new Audio("music/move.mp3");

let snack_array=[

    {x:0,y:0}
]





let interval=setInterval(()=>{
   
    
  
    GameEngine();
   

},speed)
// colide function
const IsCollide=(snack_array)=>{
    if(snack_array[0].y===19)
        return true;
    if(snack_array[0].x===19)
        return true;
    if(snack_array[0].x===-1)
    return true;
if(snack_array[0].y===-1)
return true;
return false;

}
let GameEngine=()=>{
    // update snack and food
    // snack coolide with wall
    document.getElementById('score').innerText=`Score: ${score}`;
    if(IsCollide(snack_array))
    {
        game_over_music.play();
 input_dir={x:0,y:0};
    document.getElementById('score').innerText=`Your Final Score is: ${score}`;
        
 
        alert(`Your Score is: ${score},Press Any Key To Continue`);
score=0;
         snack_array=[

            {x:0,y:0}
        ]
      



    }
      // if snack does not collide with wall
      if(snack_array[0].y===food.y&&snack_array[0].x===food.x)
      {
food_music.play();

        // add extra segmantation block of snack and regenarate the food 
        score++;
        console.log(speed);
// increase speed for high speed
        if(score>10)
        {
        speed=100;
            clearInterval(interval);
            interval=setInterval(()=>{
                GameEngine();

            },speed);
    }


        let x = Math.floor(Math.random() * 18) + 1;
        let y = Math.floor(Math.random() * 18) + 1;
        snack_array.push({x:food.x,y:food.y});

                food.x=x;
                food.y=y;
                



      }
    //   snack movements
    for(let i=(snack_array.length-2);i>=0;i--)
    {
        snack_array[i+1]={...snack_array[i]};


    }
      


    snack_array[0].x=snack_array[0].x+ input_dir.x;
        snack_array[0].y=snack_array[0].y+ input_dir.y;




    

    


    // all about snack and head
    board.innerHTML="";
    snack_array.forEach((value,index)=>{
        let new_element=document.createElement('div');
        if(index===0)
        new_element.classList='head';
    else
    new_element.classList='snack';

        new_element.style.gridRowStart=value.y;
        new_element.style.gridColumnStart=value.x;
    board.appendChild(new_element);
        // all about food 
        let food_element=document.createElement('div');
        food_element.classList='food';
      
        food_element.style.gridRowStart=food.y;
        food_element.style.gridColumnStart=food.x;
    board.appendChild(food_element);




    })
  

    

    

}
// input from user 
window.addEventListener('keydown',(e)=>{
    input_dir.x=1;
    input_dir.y=0;

    move_music.play();
            switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            input_dir.y=-1;
            input_dir.x=0;
            break;
        case "ArrowDown":
            input_dir.x=0;
            input_dir.y=1;
        
            console.log("ArrowDown");
            
            
            break;
        case "ArrowRight":
            input_dir.y=0;
            input_dir.x=1;
            console.log("ArrowRight");
            
            break;
        case "ArrowLeft":
            input_dir.y=0;
            input_dir.x=-1;
            console.log("ArrowLeft");
            
            break;

    
        default:
            break;
    }


})


