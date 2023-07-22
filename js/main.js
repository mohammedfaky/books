var bookName= document.getElementById('bookName');
var websitUrl= document.getElementById('websitUrl');
var booksContainer;
if(localStorage.getItem('bookshop') != null){
    booksContainer=JSON.parse(localStorage.getItem('bookshop'));
    bookStore();

}
else{
    booksContainer=[];
}
function clik(){
    books={
        name: bookName.value,
        websit:websitUrl.value,
    }
    booksContainer.push(books);
    localStorage.setItem("bookshop",JSON.stringify(booksContainer))
    bookStore()
    clearForm()
}
function clearForm(){
    bookName.value="";
    websitUrl.value="";
}
function bookStore(){
    var list= ``;
    for(var i=0;i<booksContainer.length;i++){
        list+=` <tr>
        <td>${[i+1]}</td>
        <td>${booksContainer[i].name}</td>
    <a href="https://mo.com/"></a>
        <td><button class="btn btn-success">
    <a href="https://mo.com/" target="blank" class="text-white text-decoration-none"><i class="fa-solid fa-eye pe-2"></i> Visit</a></button></td>
        <td><button class="btn btn-danger" onclick="deletBooks(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>`
    }
    document.getElementById('mo').innerHTML=list;
}

function deletBooks(index){
booksContainer.splice(index ,1);
localStorage.setItem("bookshop",JSON.stringify(booksContainer));
bookStore();
}
function validBookName(){
    var regx = /^\w{3,50000}$/;
    var regx2 = /^\w{3,50000}.com$/;
    if (regx.test(bookName.value)){
        document.getElementById('valid').innerHTML=`<span class="text-success">MATCH</span>`;
    }
    else{
        document.getElementById('valid').innerHTML=`<span class="text-danger">NOT MATCH</span>`;
    }
    if (regx2.test(websitUrl.value)){
        document.getElementById('valid2').innerHTML=`<span class="text-success">MATCH</span>`;
    }
    else{
        document.getElementById('valid2').innerHTML=`<span class="text-danger">NOT MATCH</span>`;
    }
}
