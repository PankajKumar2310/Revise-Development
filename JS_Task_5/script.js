let main = document.querySelector("main");

let str=''


let arry=[
    {
      "fullName": "Aditi Sharma",
      "imgLink": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      "professionDescription": "Software engineer specializing in backend development and cloud services."
    },
    {
      "fullName": "Neha Iyer",
      "imgLink": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "professionDescription": "Digital marketing strategist focused on social media growth and brand campaigns."
    },
    {
      "fullName": "Ritika Mehra",
      "imgLink": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      "professionDescription": "Fashion designer known for blending traditional Indian textiles with modern styles."
    },
    {
      "fullName": "Priya Nair",
      "imgLink": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "professionDescription": "Clinical psychologist working in cognitive behavioral therapy and mental wellness programs."
    },
    {
      "fullName": "Meera Kulkarni",
      "imgLink": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "professionDescription": "Architect specializing in sustainable residential and commercial design."
    },
    {
      "fullName": "Ananya Verma",
      "imgLink": "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      "professionDescription": "Teacher and education researcher focusing on early childhood learning."
    },
    {
      "fullName": "Kavya Reddy",
      "imgLink": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "professionDescription": "Data analyst with expertise in predictive modeling and business intelligence."
    },
    {
      "fullName": "Sahana Krishnan",
      "imgLink": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "professionDescription": "Civil engineer working on large-scale infrastructure and urban development projects."
    },
    {
      "fullName": "Isha Chatterjee",
      "imgLink": "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      "professionDescription": "Graphic designer focusing on branding, illustration, and UI/UX visuals."
    },
    {
      "fullName": "Tanya Bansal",
      "imgLink": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "professionDescription": "Entrepreneur managing a wellness-focused startup offering organic skincare products."
    }
  ]

  
  arry.forEach((e)=>{
    str +=`<div id="card">
           <div id="ig"> <img src=${e.imgLink}/></div>
            <h2>${e.fullName}</h2>
            <p>${e.professionDescription}</p>
        </div>`
    
    main.innerHTML=str;
  })