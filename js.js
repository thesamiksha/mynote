console.log('hey welcome to my js code');
let addbtn= document.getElementById('addbtn').addEventListener('click',function(){
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj. push(addtxt.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addtxt.value = '';
    //console.log(notesObj);
    showNotes();
})

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function(element,index){
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
                
                <div class="card-body">
                  <h5 class="card-title">Note${index+1}</h5>
                  <p class="card-text">${element}</p>
                  <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
              </div>`;
        
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length !=0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add a note.`;
    } 

}
// function to delete a note
function deleteNote(index){
    //console.log("I am deleting a note", index);
    let notes = localStorage.getItem('notes');
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputval = search.value
    //console.log('Input event fired!',inputval);
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval))
        {
            element.style.display = 'block';
        }else{
            element.style.display = 'none';
        }
        
        //console.log(cardTxt); 

    })
}) 
