

let wrapper= document.querySelector(".container");
const darkMode = document.querySelector(".mode-change");
let searchForm=document.querySelector("[ data-searchform]");
let getmodeimage=document.querySelector(".modeimage");
let getuserform=document.querySelector(" .userform");
let getmaincontent=document.querySelector(".main-content");
let getheading=document.querySelector(".dev-detect");
let changemode=document.querySelector(".mode-change");
let getform=document.querySelector(".form-container");





const currentmode=wrapper;
currentmode.classList.add("active");
getmaincontent.classList.add("active");
getuserform.classList.add("active");
getform.classList.add("active");


let count =0;
darkMode.innerText="dark";

function changebgColor() {

    
    if(count%2==0)
       { 
        currentmode.classList.remove("current-tab");
            currentmode.classList.add("active");
            getmaincontent.classList.add("active");
            getuserform.classList.add("active");
            getheading.classList.add("current-tab");
            changemode.classList.add("current-tab");

            wrapper=currentmode;
            count++;
            darkMode.innerText="Light";
            getmodeimage.src='./darkmode.png'
            
       }
       else{
        currentmode.classList.remove("active");
        currentmode.classList.add("current-tab");
        getmaincontent.classList.remove("active");
        getmaincontent.classList.add("current-tab");
        getuserform.classList.remove("active");
        getuserform.classList.add("current-tab");
        getheading.classList.remove("current-tab");
        getmodeimage.classList.remove("current-tab");
        changemode.classList.remove("current-tab");
        
        wrapper=currentmode;
        count++;
        darkMode.innerText="Dark";
         getmodeimage.src='./lightmode.png'
         

       }
        
    
}
// github url
let searchInput=document.querySelector("[data-searchinput]");

searchForm.addEventListener("submit", (e)=>{
    console.log("chal rhe ho ?");
    e.preventDefault();
    let nameuser=searchInput.value;
    if(nameuser=="")
        {
            
            return ;
        }
        else{
            getusergit(nameuser);
        }




});
async function getusergit(data)
{
    let USERNAME=data;
    try {
        const response=await fetch(`https://api.github.com/users/${USERNAME}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const userdata=await response.json();
        renderuserInfo(userdata);
    }
    catch(err) {
       
    }



}
function renderuserInfo(userdata)
{
    const getImage=document.querySelector(".user-image");
    const getuserName=document.querySelector(".user-name");
    const getname=document.querySelector(".userpname");
    
    
    const dateofJoin=document.querySelector(".join-data");
    const getuserBio=document.querySelector("#profile-bio");
    const repository=document.querySelector(".repos");
    const getFollower=document.querySelector(".followers");
    const getFollowing=document.querySelector(".following");
    const getlocation=document.querySelector(".locationuser");
    const getLink = document.querySelector(".linkuser");
    const getcompany= document.querySelector(".companyname");
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    getImage.src=`${userdata.avatar_url}`;
    getname.innerText=userdata?.name;
    getuserName.innerText= userdata.login;
    getuserName.href=userdata.html_url;
    getuserBio.innerText= (userdata?.bio == null) ? "This Profile has no Bio" : userdata?.bio;
   
    console.log("kya ho rha");

    
    
    repository.innerText=userdata?.public_repos;
    
    getFollower.innerText=userdata?.followers;
    getFollowing.innerText=userdata?.following;
    getlocation.innerText=userdata?.location;
    
    getLink.innerText= "Not available";
    getcompany.innerText=(userdata?.company== null) ? "Not available" : userdata?.company;
    
    let dateSegment = userdata?.created_at.split("T")[0].split("-");
    dateofJoin.innerText = `Joined ${dateSegment[2]} ${month[parseInt(dateSegment[1], 10) - 1]} ${dateSegment[0]}`;
   




}

getusergit("harshdtripathi");
searchInput.value="";