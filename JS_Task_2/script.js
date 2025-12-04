let btn = document.querySelector("button")
let main = document.querySelector("main")

let shayari = [
    "मोहब्बत वो नहीं जो दुनिया को दिखा दी जाए।",
    "खामोशियों में छुपी कहानियाँ अक्सर अधूरी होती हैं।",
    "तेरी यादों का बस एक ही कसूर है—ये दिल को चैन नहीं लेने देती।",
    "तू मिले या ना मिले, ये किस्मत की बात है।",
    "ज़िंदगी ने बहुत कुछ सिखा दिया खामोश रहकर।",
    "तेरी मुस्कुराहट ही मेरी पहचान है।",
    "इश्क़ ऐसा करो कि दुनिया मिसाल दे।",
    "कुछ लोग दिल में उतर जाते हैं बिना इजाज़त के।",
    "हम वहां भी मुस्कुरा देते हैं जहाँ दिल रोता है।",
    "तू साथ हो तो हर लम्हा हसीन लगता है।"
];



btn.addEventListener('click', () => {
    
    let h1 = document.createElement('h1');
    let t= Math.random()*100
    let l= Math.random()*100

    let r= Math.random()*360

    
    let a = Math.floor(Math.random()*shayari.length);
    
    h1.innerHTML=shayari[a];
    h1.style.position='absolute'

    console.log(h1);
    h1.style.top=t+"%"
    h1.style.left=l+"%"

    

    h1.style.rotate=r+"deg"
    
    main.appendChild(h1)
    
    
    
})