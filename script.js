const options = document.getElementsByClassName("opt");
//Nos traemos todos los h4 para cambiarlos según el json. 
let main = document.getElementById("main"); 
const h_1 = document.getElementsByTagName("h1"); 
const h_6 = document.getElementsByClassName("last_week");
for(let i = 0; i < options.length; i++)
{
    options[i].addEventListener("click", opt);
}

function opt(e)
{
    
    let id_target = e.target.id;     
    datos().then(
        function(r) 
        {
            main.classList.add("desaparecer");
            for(let i = 0; i < r.length; i++)
            {
                if(id_target == "weekly")
                {
                    
                    h_6[i].innerText = `Last Week ${r[i].timeframes.weekly.previous}hrs`;
                    h_1[i].innerText = `${r[i].timeframes.weekly.current}hrs`;
                    
                }
                else if(id_target == "daily")
                {
                    h_6[i].innerText = `Last day ${r[i].timeframes.daily.previous}hrs`;
                    h_1[i].innerText = `${r[i].timeframes.daily.current}hrs`;
                    
                }
                else if(id_target == "monthly")
                {
                    h_6[i].innerText = `Last month ${r[i].timeframes.monthly.previous}hrs`;
                    h_1[i].innerText = `${r[i].timeframes.monthly.current}hrs`;
                    
                }
            }
        }
        );
        
    main.classList.remove("desaparecer");
}

async function datos()
{
     const response = await fetch("data.json");
     const datos = await response.json();
     return datos;
}

//USANDO FETCH
// const r = 
// fetch("data.json")
// .then(
//     (res) => res.json()
// )
// .then(
//     (data) => console.log(data)
// )
