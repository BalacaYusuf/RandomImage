


const mainImage=[

    {
        src:"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot",
        width: "320",
        height: "195",
    },

    {
        src:"http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot",
        width: "320",
        height: "195",
    },

    {
        src :"http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot",
        width: "320",
        height: "195",
    },
];

const GenButton=document.querySelector("myButton");
const MainImage=document.querySelector("myImage");


GenButton.addEventListener("click",()=>{
   
    const camingImage=RandomImage(mainImage);
    console.log(camingImage);

    MainImage.src=camingImage.src;
    MainImage.width=camingImage.width;
    MainImage.height=camingImage.height;

})


function RandomImage(mainImage){
    const randomIndex=Math.floor(Math.random() * mainImage.length);
    // return mainImage[randomIndex];
    console.log(randomIndex);
}

window.onload=()=>RandomImage();