const arrayresult=(obj,value)=>{
let arr=Object.keys(obj);
let resultado=[];
arr.forEach(function(element){
    if(value==element){
        resultado=obj[element];
    }
});
return resultado;                     //retorna un array con lo que se imprimira
}
const imprimir=(id,array)=>{
let box =document.getElementById(id);
array.forEach(function(element){
    box.innerHTML+=`<div class="libros"><img class="imagen-libro" src="${element["img"]}" alt="Portada del libro"/><p>name:${element["name"]}</p></div>`
})
};
//<p>${element["description"]}</p>
document.getElementById("biografia").addEventListener("click",function(){
    document.getElementById("seccion").style.display="none";
    document.getElementById("seccion2").style.display="block";
    imprimir("seccion2",arrayresult(STORIES,"BIOGRAFIAS"));
})
