let selectedSoftSkill = null;
let selectedHardSkill = null;
let score = 0;
let matches = {};  // เก็บการจับคู่ระหว่าง Soft Skills และ Hard Skills
const totalPairs = 10;  // จำนวนคำศัพท์ที่ต้องเชื่อมโยงทั้งหมด

const softSkillsList = [
    { name: "การออกแบบส่วนต่อประสานระหว่างผู้ใช้กับระบบ", match: 1 },
    { name: "ทักษะการสื่อสาร", match: 2 },
    { name: "การวิเคราะห์ข้อมูล", match: 3 },
    { name: "ทักษะการบริหารจัดการเวลา", match: 4 },
    { name: "การออกแบบประสบการณ์ผู้ใช้", match: 5 },
    { name: "ทักษะความยืดหยุ่นและปรับตัว", match: 6 },
    { name: "ความปลอดภัยและการเข้ารหัส", match: 7 },
    { name: "ทักษะการทำงานร่วมกับผู้อื่น", match: 8 },
    { name: "วิศวกรรมซอฟต์แวร์", match: 9 },
    { name: "ทักษะการคิดเชิงสร้างสรรค์", match: 10 }
];

const hardSkillsList = [
    { name: "User Interface Design", match: 1 },
    { name: "Communication", match: 2 },
    { name: "Data Analytics", match: 3 },
    { name: "Time Management", match: 4 },
    { name: "User Experience Design", match: 5 },
    { name: "Flexibility and Adaptability", match: 6 },
    { name: "Cybersecurity and Encryption", match: 7 },
    { name: "Teamwork and Collaboration", match: 8 },
    { name: "Software Engineering", match: 9 },
    { name: "Creativity", match: 10 }
];

document.getElementById("score").style.display = "none"

// ฟังก์ชันสุ่มลำดับในอาร์เรย์
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderSkills() {
    const softSkillsContainer = document.getElementById("soft-skills");
    const hardSkillsContainer = document.getElementById("hard-skills");

    // สุ่มลำดับ Soft Skills และ Hard Skills
    shuffleArray(softSkillsList);
    shuffleArray(hardSkillsList);

    // ล้างเนื้อหาใน list เดิม
    softSkillsContainer.innerHTML = "";
    hardSkillsContainer.innerHTML = "";

    // สร้างรายการ Soft Skills แบบสุ่ม
    softSkillsList.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill.name;
        li.setAttribute("data-match", skill.match);
        softSkillsContainer.appendChild(li);
    });

    // สร้างรายการ Hard Skills แบบสุ่ม
    hardSkillsList.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill.name;
        li.setAttribute("data-match", skill.match);
        hardSkillsContainer.appendChild(li);
    });

    // เพิ่ม event listener ให้กับรายการที่สร้างขึ้นมาใหม่
    setupSkillSelection();
}

function setupSkillSelection() {
    const softSkills = document.querySelectorAll("#soft-skills li");
    const hardSkills = document.querySelectorAll("#hard-skills li");

    softSkills.forEach(skill => {
        skill.addEventListener("click", function () {
            if (this.classList.contains("matched")) return;  // ถ้าคำศัพท์นี้ถูกจับคู่แล้ว ให้ข้าม
            softSkills.forEach(s => s.style.backgroundColor = "");
            this.style.backgroundColor = "lightblue";  // เลือก Soft Skill
            selectedSoftSkill = this.getAttribute("data-match");
            checkIfBothSelected();
        });
    });

    hardSkills.forEach(skill => {
        skill.addEventListener("click", function () {
            if (this.classList.contains("matched")) return;  // ถ้าคำศัพท์นี้ถูกจับคู่แล้ว ให้ข้าม
            hardSkills.forEach(s => s.style.backgroundColor = "");
            this.style.backgroundColor = "lightgreen";  // เลือก Hard Skill
            selectedHardSkill = this.getAttribute("data-match");
            checkIfBothSelected();
        });
    });
}

function checkIfBothSelected() {
    if (selectedSoftSkill && selectedHardSkill) {
        // บันทึกการจับคู่
        matches[selectedSoftSkill] = selectedHardSkill;

        // แสดงผลว่าจับคู่แล้ว
        markAsMatched(selectedSoftSkill, selectedHardSkill);

        // ล้างการเลือกหลังจากจับคู่
        selectedSoftSkill = null;
        selectedHardSkill = null;

        // ล้างสีของรายการหลังจับคู่
        document.querySelectorAll("#soft-skills li").forEach(s => s.style.backgroundColor = "");
        document.querySelectorAll("#hard-skills li").forEach(h => h.style.backgroundColor = "");

        // ตรวจสอบว่าจับคู่ครบ 10 ข้อแล้วหรือยัง
        if (Object.keys(matches).length === totalPairs) {
            document.getElementById("checkButton").disabled = false;  // ทำให้ปุ่มตรวจสอบคำตอบใช้งานได้
            document.getElementById("resetButton").disabled = false;  // ทำให้ปุ่มเริ่มใหม่ใช้งานได้
        }
    }
}

function markAsMatched(softSkillMatch, hardSkillMatch) {
    const softSkillElement = document.querySelector(`#soft-skills li[data-match="${softSkillMatch}"]`);
    const hardSkillElement = document.querySelector(`#hard-skills li[data-match="${hardSkillMatch}"]`);

    // เปลี่ยนสถานะว่า matched แล้ว
    softSkillElement.classList.add("matched");
    hardSkillElement.classList.add("matched");

    // แสดงข้อความว่าจับคู่แล้ว
    softSkillElement.textContent += " (จับคู่แล้ว)";
    hardSkillElement.textContent += " (จับคู่แล้ว)";

    // ปิดการใช้งานไม่ให้เลือกได้อีก
    softSkillElement.style.pointerEvents = "none";
    hardSkillElement.style.pointerEvents = "none";

    // เปลี่ยนสีเพื่อแสดงสถานะจับคู่แล้ว
    softSkillElement.style.backgroundColor = "lightgray";
    hardSkillElement.style.backgroundColor = "lightgray";
}

function checkAnswers() {
    let correctMatches = 0;

    // ตรวจสอบคำตอบที่ผู้ใช้จับคู่ไว้
    for (let softSkill in matches) {
        if (matches[softSkill] === softSkill) {
            correctMatches++;
        }
    }

    score = correctMatches;
    document.getElementById("score").textContent = "คะแนน: " + score + "/10";
    document.getElementById("score").style.display = "block";

    // แสดงข้อความผลลัพธ์
    if (correctMatches === 10) {
        document.getElementById("result").textContent = "คุณเชื่อมโยงครบ 10 ข้อถูกต้องทั้งหมด!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = `คุณเชื่อมโยงถูกต้อง ${correctMatches} ข้อจาก 10 ข้อ!`;
        document.getElementById("result").style.color = "blue";
    }

    // ปิดปุ่มตรวจสอบคำตอบหลังจากตรวจสอบเสร็จแล้ว
    document.getElementById("checkButton").disabled = true;

    // แสดงปุ่ม "ดูเฉลย" หลังจากตรวจสอบคำตอบแล้ว
    document.getElementById("showAnswerButton").style.display = "inline-block";

    // เมื่อตรวจสอบเสร็จ ให้แสดงปุ่ม "กลับไปยังหน้าเริ่มต้น"
    document.getElementById("back-to-start-btn").style.display = "inline-block";

    // เมื่อตรวจสอบเสร็จ ให้แสดงปุ่ม "เริ่มใหม่"
    document.getElementById("resetButton").style.display = "inline-block";

}

function showAnswers() {
    const correctList = document.getElementById("correct-list");
    correctList.innerHTML = "";  // ล้างรายการก่อนแสดงผลใหม่
    const correctPairsDiv = document.getElementById("correct-pairs");

    // แสดงคู่คำที่ถูกต้อง
    document.querySelectorAll("#soft-skills li").forEach(softSkillElement => {
        const softSkillMatch = softSkillElement.getAttribute("data-match");
        const hardSkillElement = document.querySelector(`#hard-skills li[data-match="${softSkillMatch}"]`);

        const listItem = document.createElement("li");

        // ตรวจสอบว่าคำตอบที่ผู้เล่นจับคู่ถูกหรือไม่
        if (matches[softSkillMatch] === softSkillMatch) {
            // ถ้าจับคู่ถูกต้อง แสดงเป็นสีเขียวในคู่คำที่ถูกต้อง
            softSkillElement.style.backgroundColor = "lightgreen";
            hardSkillElement.style.backgroundColor = "lightgreen";
            listItem.innerHTML = `<span style="color: green;">${softSkillElement.textContent.replace(" (จับคู่แล้ว)", "")} จับคู่กับ ${hardSkillElement.textContent.replace(" (จับคู่แล้ว)", "")}</span>`;
        } else {
            // ถ้าจับคู่ผิด แสดงเป็นสีแดงในคู่คำที่ถูกต้อง
            softSkillElement.style.backgroundColor = "lightcoral";
            hardSkillElement.style.backgroundColor = "lightcoral";
            listItem.innerHTML = `<span style="color: red;">${softSkillElement.textContent.replace(" (จับคู่แล้ว)", "")} จับคู่กับ ${hardSkillElement.textContent.replace(" (จับคู่แล้ว)", "")}</span>`;
        }

        correctList.appendChild(listItem);
    });

    // แสดง div ของการจับคู่ที่ถูกต้อง
    correctPairsDiv.style.display = "block";

    // ปิดการใช้งานปุ่ม "ดูเฉลย" หลังจากกดดูแล้ว
    document.getElementById("showAnswerButton").disabled = true;
}

function startGame() {
    document.getElementById("start-screen").style.display = "none";  // ซ่อนหน้าต้อนรับ
    document.getElementById("game-screen").style.display = "block";  // แสดงหน้าเกม
    document.getElementById("back-to-start-btn").style.display = "none"; // ซ่อนปุ่มกลับไปยังหน้าเริ่มต้นตอนเริ่มเกมใหม่
    renderSkills();  // เรียกใช้ฟังก์ชันเพื่อสุ่มและแสดงผลรายการคำศัพท์
}

function goToStart() {
    document.getElementById("game-screen").style.display = "none";  // ซ่อนหน้าเกม
    document.getElementById("start-screen").style.display = "block";  // แสดงหน้าต้อนรับอีกครั้ง
    resetGame();  // รีเซ็ตเกมเพื่อให้เริ่มใหม่ได้
}

function resetGame() {
    score = 0;
    matches = {};  // ล้างการจับคู่
    selectedSoftSkill = null;
    selectedHardSkill = null;
    document.getElementById("score").textContent = "คะแนน: 0";
    document.getElementById("score").style.display = "none"; // ซ่อนคะแนนในตอนเริ่มเกมใหม่
    document.getElementById("result").textContent = "";
    document.getElementById("correct-pairs").style.display = "none";
    document.getElementById("checkButton").disabled = true;  // ปิดการใช้งานปุ่มตรวจสอบคำตอบในตอนเริ่มเกมใหม่
    document.getElementById("showAnswerButton").style.display = "none";  // ซ่อนปุ่ม "ดูเฉลย" ในตอนเริ่มเกมใหม่
    document.getElementById("back-to-start-btn").style.display = "none";
    document.getElementById("resetButton").style.display = "none";

    // เพิ่มการเปิดใช้งานปุ่ม "ดูเฉลย" อีกครั้ง
    document.getElementById("showAnswerButton").disabled = false;

    // เพิ่มการเปิดใช้งานปุ่ม "เริ่มใหม่" อีกครั้ง
    document.getElementById("resetButton").disabled = false;

    // ซ่อนการแสดงคู่คำที่ถูกต้อง
    document.getElementById("correct-pairs").style.display = "none";

    // สุ่มและแสดงผลรายการใหม่
    renderSkills();
}

// เรียกใช้ renderSkills() เพื่อสุ่มและแสดงผลคำศัพท์เมื่อโหลดหน้าเว็บ
renderSkills();
