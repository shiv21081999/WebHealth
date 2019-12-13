let nextbtn = document.getElementById('nextbtn')
let nextbtn1 = document.getElementById('nextbtn1')
let nextbtn2 = document.getElementById('nextbtn2')
let main_content = document.getElementById('main-content')
let main_content1 = document.getElementById('main-content1')
let main_content2 = document.getElementById('main-content2')
let main_content3 = document.getElementById('main-content3')


nextbtn.onclick = () =>{
    main_content.className = "main-content visited"
    main_content1.className = "main-content1"
}
nextbtn1.onclick = () =>{
    main_content1.className = "main-content1 visited"
    main_content2.className = "main-content2"
}
nextbtn2 .onclick = () =>{
    main_content2.className = "main-content2 visited"
    main_content3.className = "main-content3"
}