let backbtn1 = document.getElementById('backbtn1')
let backbtn2 = document.getElementById('backbtn2')
let backbtn3 = document.getElementById('backbtn3')

let bmain_content = document.getElementById('main-content')
let bmain_content1 = document.getElementById('main-content1')
let bmain_content2 = document.getElementById('main-content2')
let bmain_content3 = document.getElementById('main-content3')

backbtn1.onclick = () => {
    bmain_content.className = 'main-content'
    bmain_content1.className = 'main-content1 visited'
}
backbtn2.onclick = () => {
    bmain_content1.className = 'main-content1'
    bmain_content2.className = 'main-content2 visited'
}
backbtn3.onclick = () => {
    bmain_content2.className = 'main-content2'
    bmain_content3.className = 'main-content3 visited'
}