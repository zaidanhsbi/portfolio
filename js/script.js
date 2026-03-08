function toggleEducation() {
    const btn = document.querySelector(".smk");
    const detail = document.querySelector(".education-detail");
    
    btn.classList.toggle("open");
    detail.classList.toggle("open");
}