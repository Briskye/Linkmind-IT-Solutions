// ERP Modal
const erpModal = document.getElementById("erpModal");
document.getElementById("openErpModal").onclick = (e) => { e.preventDefault(); erpModal.style.display = "flex"; };
document.querySelector(".close-erp").onclick = () => { erpModal.style.display = "none"; };
window.addEventListener("click", (e) => { if (e.target === erpModal) erpModal.style.display = "none"; });

// API Modal
const apiModal = document.getElementById("apiModal");
document.getElementById("openApiModal").onclick = (e) => { e.preventDefault(); apiModal.style.display = "flex"; };
document.querySelector(".close-api").onclick = () => { apiModal.style.display = "none"; };
window.addEventListener("click", (e) => { if (e.target === apiModal) apiModal.style.display = "none"; });

// Process Automation Modal
const autoModal = document.getElementById("autoModal");
document.getElementById("openAutoModal").onclick = (e) => { e.preventDefault(); autoModal.style.display = "flex"; };
document.querySelector(".close-auto").onclick = () => { autoModal.style.display = "none"; };
window.addEventListener("click", (e) => { if (e.target === autoModal) autoModal.style.display = "none"; });