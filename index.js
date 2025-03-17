const Btn = document.querySelector("#addBtn");
const Main = document.querySelector("#Main");
Btn.addEventListener("click", addNote);
function addNote() {
  const noteData = document.createElement("div");
  noteData.classList.add("noteData");
  noteData.innerHTML = `
     <div class="tool">
        <i class=" save fa-solid fa-save"></i>
        <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea></textarea>
    `;
    const save = noteData.querySelector(".save");
    const trash = noteData.querySelector(".trash");
    const textarea = noteData.querySelector("textarea");

    save.addEventListener("click",saveNote)

    Main.appendChild(noteData)
}
 function saveNote() {
    const tasks = document.querySelectorAll(".noteData textarea")
    const data = Array.from(tasks).map(task => task.value)
    console.log(notes,data);
    
 }