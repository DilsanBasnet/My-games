const subjects = [
    // Maths
    {
        name: "Mathematics",
        img: "image/maths img.jpg",
        link: "https://media.edusanjal.com/u/grade-9-mathematics.pdf"

    }, 
    // OPT Maths
    {
        name: "OPT Maths",
        img: "image/opt maths img.jpg",
        link:"https://drmathnp.com/books/new-arrivals/opt-maths-9/#p=1"
    },
    // Science
    {
        name: "Science",
        img: "image/science img.webp",
        link:"https://media.edusanjal.com/u/grade-9-science-and-technology.pdf"
    },
    // Computer
    {
        name: "Computer",
        img: "image/computer img.jpg",
        link:"https://hupen.com.np/files/Class-9-Book-Computer-Science-2081_1758105741.pdf"
    },
    // Social
    {
        name: "Social",
        img: "image/social book.jpg",
        link:"https://thuprai.com/book/social-study-grade-9/read/"
    },
    // English
    {
        name: "English",
        img: "image/english img.webp",
        link:"https://media.edusanjal.com/u/grade-9-english.pdf"
    },
    // Nepali
    {
        name: "Nepali",
        img: "image/nepali img.jpg",
        link:"https://thuprai.com/book/nepali-for-class-9/read/"
    },
    // Website Design
    {
        name: "Website Design",
        img: "image/website design.jpg",
        link:"https://giwmscdnone.gov.np/media/pdf_upload/compress-%204.%20Website%20Design%20Grade%20-%209_rrclysu.pdf"
    },
    // Fundamental of Computer
    {
        name: "Fundamental of Computer",
        img: "image/fundamental of computer.jpg",
        link:"https://giwmscdntwo.gov.np/media/pdf_upload/compress-Final%201.Fundamentals%20of%20Computer%20and%20Application%20Grade%209_puyzfi9.pdf"
    },
    // Fundament of Electrosystem
    {
        name: "Fundamental of Electrosystem",
        img: "image/fundamental of computer.jpg",
        link:"https://giwmscdntwo.gov.np/media/pdf_upload/compress-%203.%20Fundamentals%20of%20Electro-System%20Grade%209_b1bdjzi.pdf"
    },
    // C Programming
      {
        name: "Fundamental of C Programming",
        img: "image/c programming.jpg",
        link:"https://giwmscdnone.gov.np/media/pdf_upload/compress-%20%202.%20Programming%20principal%20%26%20concept%20in%20C%20Language%20G9_lb5h2p8.pdf"
    }
];

const grid = document.getElementById('grid');
const searchInput = document.getElementById('subjectSearch');
 
function displaySubjects(filteredList) {
    grid.innerHTML = "";
    filteredList.forEach(sub => {
        const card = `
        <div class = "card"> 
        <img src= "${sub.img}" alt="${sub.name}">
        <div class = "card-content">
        <h3>${sub.name} </h3>
        <p> OFFICIAL CDC 2082 BOOK </p>
        <a href="${sub.link}" target = "_blank"> VIEW PDF</a> 
        </div> 
        </div> 
        `;
        grid.innerHTML += card;
    });
}

displaySubjects(subjects);
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = subjects.filter(sub => sub.name.toLowerCase().includes(term));
    displaySubjects(filtered);

});

// PDF Viewer 


const modal = document.getElementById("pdfModal");
const pdfFrame = document.getElementById("pdfFrame");
const modalTitle = document.getElementById("modalTitle");
const fallbackLink = document.getElementById("fallbackLink");
const closeBtn = document.querySelector(".close-btn");

function openPDF(name, link) {
    modalTitle.innerText = "Reading: " + name;
    pdfFrame.src = link;
    fallbackLink.href = link;
    modal.style.display ="block";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
    pdfFrame.src = ""; 
};

function displaySubjects(filteredList) {
    grid.innerHTML = "";
    filteredList.forEach(sub => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <img src = "${sub.img}" alt = "${sub.name}">
        <div class ="card-content">
        <h3>${sub.name}</h3>
        <p> Class 9 Curriculum 2082 </p>
        <button class = "btn view-btn"> VIEW BOOK </button> 
        </div> 

        `;
        card.querySelector('.view-btn').addEventListener('click',() => {
            openPDF(sub.name, sub.link);
        });
        grid.appendChild(card);
    });
}