let range_input = document.getElementById('range_input')
let age_value = document.getElementById('age_value')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let selected_symptoms = document.getElementById('selected-symptoms')
let symptom_search = document.getElementById('symptom-search')
let suggestions = document.getElementById('suggestions')
let nextbtn3 = document.getElementById('nextbtn3')
let data = document.getElementById('main-content3')
let main_content4 = document.getElementById('main-content4')
let final_output = document.getElementById('final-output')



 
let symptoms_suggestions = ['pain chest','shortness of breath','dizziness','asthenia','fall','syncope','vertigo','sweat','sweating increased','palpitation','nausea','angina pectoris','pressure chest','polyuria','polydypsia','pain chest','orthopnea','rale','unresponsiveness','mental status changes','vomiting','labored breathing','feeling suicidal','suicidal','hallucinations auditory','feeling hopeless','weepiness','sleeplessness','motor retardation','irritable mood','blackout','mood depressed','hallucinations visual','worry','agitation','tremor','intoxication','verbal auditory hallucinations',
'energy increased','difficulty','nightmare','unable to concentrate','homelessness','hypokinesia','pressure chest','dyspnea on exertion','chest tightness','cough','fever','decreased translucency','productive cough','pleuritic pain','yellow sputum','breath sounds decreased','chill','rhonchus','green sputum','non-productive cough','wheezing','haemoptysis','distress respiratory','tachypnea','malaise','night sweat','shortness of breath',
'jugular venous distention','dyspnea','cough','wheezing','dysarthria','speech slurred','facial paresis','hemiplegia','seizure','numbness','wheezing','chest tightness','symptom aggravating factors','distress respiratory','st segment elevation','st segment depression','t wave inverted','presence of q wave','chest discomfort','bradycardia','syncope','pain','nonsmoker','numbness','dyspnea','fever','erythema','hepatosplenomegaly','pruritus','diarrhea','abscess bacterial',
'swelling','pain','apyrexial','cough','dysuria','hematuria','renal angle tenderness','lethargy','hyponatremia','hemodynamically stable','difficulty passing urine','consciousness clear','chill','guaiac positive','monoclonal','ecchymosis','tumor cell invasion','haemorrhage','pallor','fatigue','heme positive','pain back','orthostasis','arthralgia','transaminitis','sputum purulent','hypoxemia','hypercapnia','patient non compliance','unconscious state','bedridden','abdominal tenderness','unsteady gait','hallucinations auditory','hyperkalemia','urgency of\xa0micturition',
'ascites','hypotension','hypokinesia','seizure','enuresis','consciousness clear','asterixis','muscle twitch','sleepy','headache','dysarthria','lightheadedness','unresponsiveness','food intolerance','numbness of hand','general discomfort','drowsiness','stiffness','unsteady gait','prostatism','polyuria','weight gain','tired','mass of body structure','worry','feeling suicidal','has religious belief','nervousness','formication','hot flush','nightmare','mass of body structure','lesion','cushingoid facies','cushingoid\xa0habitus','emphysematous change',
'decreased body weight','hoarseness','thicken','hematuria','night sweat','spontaneous rupture of membranes','','muscle hypotonia','hypotonic','feeling suicidal','erythema','redness','hypesthesia','hyperacusis','scratch marks','sore to touch','burning sensation','satiety early','throbbing sensation quality','sensory discomfort','constipation','pain abdominal','heartburn','asthenia','breech presentation','cyanosis','apyrexial','swelling','pain in lower limb','cardiomegaly','clonus','redness','unwell','anorexia','history of - blackout','mass of body structure','anosmia','metastatic lesion','hemianopsia homonymous','headache','hematocrit decreased','neck stiffness','cicatrisation',
'non-productive cough','hypometabolism','aura','myoclonus','gurgle','wheelchair bound','left\xa0atrial\xa0hypertrophy','patient non compliance','vomiting','oliguria','catatonia','yellow sputum','unhappy','paresthesia','gravida 0','sore to touch','lung nodule','ascites','distended abdomen','ache','macerated skin','heavy feeling','rest pain','sinus rhythm','labored breathing','sleepy','suicidal','homelessness','withdraw','behavior hyperactive','terrify','photopsia','giddy mood','dizziness','disturbed family','hypersomnia','hyperhidrosis disorder','mydriasis','extrapyramidal sign','loose associations','exhaustion','snore','r wave feature','overweight','systolic murmur','ecchymosis','drowsiness',
'asymptomatic','anorexia','splenomegaly','bleeding of vagina','macule','photophobia','painful swallowing','mental status changes','cachexia','dysarthria','hyperkalemia','hypocalcemia result','hypothermia','natural','chest discomfort','atypia','general unsteadiness','distended abdomen','throat sore','snuffle','hacking cough','stridor','decreased body weight','paresis','aphagia','focal seizures','abnormal sensation','stupor','fremitus','"Stahlis line"','stinging sensation','paralyse','facial paresis','prostatism','hirsutism','sniffle','bradykinesia','out of breath','urge incontinence','lightheadedness','speech slurred','vision blurred','room spinning','rambling speech','clumsiness','decreased stool caliber','hematochezia','egophony','scar tissue','pain abdominal','hallucinations auditory','neologism','decompensation','loose associations',
'stool color yellow','rigor - temperature-associated observation','paraparesis','moody','fear of falling','spasm','orthopnea','pain abdominal','hyperventilation','excruciating pain','gag','posturing','pulse absent','thicken','hematuria','dysesthesia','polymyalgia','passed stones','qt interval prolonged','ataxia','urgency of\xa0micturition','"Heberdens node"','hepatomegaly','fatigue','dyspnea on exertion','sciatica','frothy sputum','pain',
'mass in breast','retropulsion','estrogen use','formication','hypersomnolence','underweight','dullness','red blotches','colic abdominal','constipation','rale','hypokalemia','paraparesis','hunger','nervousness','prostate tender','pain foot','urinary hesitation','heme positive','disequilibrium','flushing','indifferent mood','urinoma','hypoalbuminemia','pustule','pallor','slowing of urinary stream','extreme exhaustion','no status change','breakthrough pain','pansystolic murmur','systolic ejection murmur','stuffy nose','barking cough','rapid shallow breathing','noisy respiration','nasal discharge present','frail','cystic lesion','hemodynamically stable','transaminitis','projectile vomiting','vomiting','heavy legs','left\xa0atrial\xa0hypertrophy','paresthesia','titubation','painful swallowing','dysdiadochokinesia','achalasia','side pain','hot flush',
'ecchymosis','monocytosis','posterior\xa0rhinorrhea','unresponsiveness','incoherent','lameness','claudication','clammy skin','hypotension','mediastinal shift','nausea and vomiting','awakening early','tenesmus','fecaluria','pneumatouria','feeling hopeless','todd paralysis','alcoholic withdrawal symptoms','yellow sputum','myalgia','dyspareunia','poor dentition','floppy','spontaneous rupture of membranes','inappropriate affect','poor feeding','wheelchair bound','moan','achalasia','lesion','welt','tinnitus','hydropneumothorax','superimposition','difficulty passing urine','sore to touch','feeling strange','seizure','uncoordination','absences finding','tonic seizures','debilitation','mediastinal shift','impaired cognition','drool','pin-point pupils','tremor resting','groggy','fever','diarrhea','adverse reaction','adverse effect','abdominal bloating',
'asthenia','fatigability','slowing of urinary stream','para 2','abortion','intermenstrual heavy bleeding','previous pregnancies 2','primigravida','abnormally hard consistency','proteinemia','fall','thicken','pain neck','lung nodule','atypia','urinary hesitation','dizzy spells','shooting pain','hyperemesis','polydypsia','milky','regurgitates after swallowing','aura','lip smacking','phonophobia','rolling of eyes','ambidexterity','tumor cell invasion','pulsus\xa0paradoxus','gravida 10','hemiplegia','bruit','mass in breast','diarrhea','breath-holding spell','scleral\xa0icterus','retch','irritable mood','energy increased','blanch','elation','verbally abusive behavior','nightmare','transsexual','side pain','pruritus','behavior showing increased motor activity','coordination abnormal','moan','choke','haemorrhage','bowel sounds decreased','no known drug allergies',
'fremitus','clonus','low back pain','charleyhorse','out of breath','sedentary','feels hot/feverish','chill','pleuritic pain','flare','pulsus\xa0paradoxus','pericardial friction rub','intoxication','tremor','hoard','panic','shortness of breath','dyspnea','cardiovascular finding','cardiovascular event','soft tissue swelling','agitation','unsteady gait','transaminitis','rhd positive','cyanosis','para 1','myalgia','nasal flaring','sneeze','extreme exhaustion','intoxication','rale','hypokinesia','hypertonicity','stool color yellow','moan','"Murphys sign"','flatulence','gasping for breath','feces in rectum','abnormally hard consistency','prodrome','photophobia','ambidexterity','splenomegaly','hypoproteinemia','colic abdominal','palpitation','left\xa0atrial\xa0hypertrophy','alcohol binge episode','abscess bacterial','abdomen acute','air fluid level',
'catching breath','flatulence','large-for-dates fetus','immobile','loose associations','homicidal thoughts','impaired cognition','extreme exhaustion','prostatism','systolic murmur','Disease'];

async function suggest(value){
    if(value)
    {
        const suggested_symptoms = symptoms_suggestions.filter((suggested) =>{
        return suggested.startsWith(value)
    })
        render_suggested_symptoms(suggested_symptoms)
    }
    else{
        suggestions.innerHTML=''
    }
    
}

async function render_suggested_symptoms(arr){
    suggestions.innerHTML =''
    for(let i = 0 ; i < arr.length ; i++)
    {
        selected_symptoms.style = "z-index : -1"
        let item = document.createElement('div')
        item.innerText = arr[i]
        item.onclick = async () =>{
            await addNewSymptom(arr[i])
            symptom_search.value=''
            suggest('')
            selected_symptoms.style = "z-index : 1"
            await render_symptoms()
        }
        suggestions.appendChild(item)
    }
}

async function addNewSymptom(symptom){
    if(symptom)
    {
        const resp = await fetch('/symptoms' , {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              symptoms: symptom,
            }),
          })
          const data = await resp.json()
          if(resp.status==400)
          {
              window.alert("Not Added")
          }
          
    }
}
async function value_updation(value){
    age_value.innerText = value
}

async function render_symptoms(){
    selected_symptoms.innerHTML=''
    let resp = await fetch('/symptoms')
    let symptoms = await resp.json()
    for(let i = 0 ; i < symptoms.length ; i++)
    {
        let item = document.createElement('span')
        let item_container = document.createElement('div')
        item_container.className ='item-container'
        let cross = document.createElement('div')
        let one = document.createElement('span')
        let two = document.createElement('span')
        cross.className ='cross'
        one.className ='one'
        two.className ='two'
        cross.appendChild(one)
        cross.appendChild(two)
        cross.onclick = async ()=>{
            resp = await fetch('/symptoms/remove', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',    
                },
                body : JSON.stringify({
                    symptoms : symptoms[i]
                })
            })


            await render_symptoms()
        }
        item.innerText = symptoms[i] 
        item.className ='symptom-added'
        item_container.appendChild(item)
        item_container.appendChild(cross)
        selected_symptoms.appendChild(item_container)
    }
}

async function getDisease(){
    let resp = await fetch('/symptoms/final')
    let response = await resp.json()
    return response
}

range_input.oninput = async ()=>{
    value_updation(range_input.value)
}

plus.onclick = async () =>{
    range_input.value++
    value_updation(range_input.value)
}

minus.onclick = async () =>{
    range_input.value--
    value_updation(range_input.value)
}

nextbtn3.onclick = async () => {
    data.className = 'main-content3 visited' 
    main_content4.className = 'main-content4'
    let response = await getDisease()
    final_output.innerText = response
}

symptom_search.addEventListener('keyup', async (event) => {
    suggest(symptom_search.value)
})

value_updation(range_input.value)
