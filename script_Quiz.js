const questions = [
    {
        question: "Soft Skills คืออะไร?",
        options: ["ทักษะที่ง่ายต่อการเรียนรู้", "ทักษะที่เกี่ยวข้องกับเทคโนโลยี", "ทักษะที่เกี่ยวข้องกับคุณสมบัติส่วนบุคคลและทักษะความสัมพันธ์ระหว่างบุคคล", "ทักษะที่เกี่ยวข้องกับความสามารถทางกายภาพ"],
        answer: 2
    },
    {
        question: "Hard Skills คืออะไร?",
        options: ["ทักษะที่ไม่มีคุณค่าในที่ทำงาน", "ทักษะที่เกี่ยวข้องกับความรู้เฉพาะทาง", "ทักษะที่ยากต่อการเรียนรู้", "ทักษะทางสังคม"],
        answer: 1
    },
    {
        question: "ข้อใดไม่ใช่ Soft Skills?",
        options: ["การบริหารจัดการเวลา", "การทำบัญชี", "ความคิดสร้างสรรค์", "การสื่อสาร"],
        answer: 1
    },
    {
        question: "ข้อใดไม่ใช่ Hard Skills?",
        options: ["การออกแบบเว็บไซต์", "ความเชี่ยวชาญในภาษาต่างประเทศ", "การเขียนโปรแกรมคอมพิวเตอร์", "การเป็นผู้นำ"],
        answer: 3
    },
    {
        question: "ทำไม Soft Skills จึงมีความสำคัญในที่ทำงาน?",
        options: ["Soft Skills ช่วยพัฒนาการมีปฏิสัมพันธ์ที่ดีกับเพื่อนร่วมงาน", "Soft Skills เป็นอุปสรรคต่อการสื่อสารและการทำงานเป็นทีม", "Soft Skills สามารถทะเลาะกับเพื่อนร่วมงานได้ง่ายขึ้น", "Soft Skills เป็นประโยชน์ต่อพนักงานแต่ละคนเท่านั้น ไม่ใช่ต่อทีม"],
        answer: 0
    },
    {
        question: "ทำไม Hard Skills จึงมีความสำคัญในที่ทำงาน?",
        options: ["เพื่อเสริมสร้างความคิดสร้างสรรค์และนวัตกรรม", "เพื่อปรับปรุงความสมดุลระหว่างชีวิตและการทำงาน", "เพื่อปฏิบัติงานเฉพาะด้านได้อย่างมีประสิทธิภาพ", "เพื่อเข้าสังคมกับเพื่อนร่วมงาน"],
        answer: 2
    },
    {
        question: "อะไรคือความแตกต่างระหว่าง Hard Skills และ Soft Skills?",
        options: ["Hard Skills เรียนรู้ได้จากพรสวรรค์โดยธรรมชาติเท่านั้น ส่วน Soft Skills เรียนรู้ผ่านการฝึกฝน", "Hard Skills เป็นความสามารถเฉพาะเจาะจงที่สามารถสอนได้ซึ่งสามารถกำหนดและวัดผลได้ ส่วน Soft Skills เป็นทักษะที่เกี่ยวข้องกับวิธีการทำงานและการโต้ตอบกับผู้อื่น", "Hard Skills เกี่ยวข้องกับการทำอาหารและการอบขนม ส่วน Soft Skills เกี่ยวข้องกับการเขียนโปรแกรม", "Hard Skills ง่ายต่อการพัฒนา ในขณะที่ Soft Skills นั้นพัฒนาได้ยาก"],
        answer: 1
    },
    {
        question: "จะพัฒนา Soft Skills ได้อย่างไร?",
        options: ["การปฏิบัติงาน", "เข้าร่วมชมรม", "เข้าร่วมกิจกรรมจิตอาสา", "ถูกทุกข้อ"],
        answer: 3
    },
    {
        question: "จะพัฒนา Hard Skills ได้อย่างไร?",
        options: ["การศึกษาในระบบหรือศึกษาด้วยตนเอง", "ไปเที่ยวกับเพื่อน", "ดูหนัง", "ฟังเพลง"],
        answer: 0
    },
    {
        question: "เพราะเหตุใดการมีทั้ง Hard Skills และ Soft Skills จึงเป็นประโยชน์",
        options: ["เพราะทำให้มีงานทำน้อยลง", "เพราะทำให้หลีกเลี่ยงการทำงานได้", "เพราะทำให้สามารถปรับตัวได้มากขึ้นในสภาพแวดล้อมการทำงานที่แตกต่างกัน", "เพราะทำให้เลิกงานได้ไวขึ้น"],
        answer: 2
    },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let userAnswers = [];  // เก็บคำตอบของผู้ใช้

function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    currentQuestionIndex = 0;  // รีเซ็ตให้เริ่มต้นใหม่
    score = 0;  // รีเซ็ตคะแนน
    userAnswers = [];  // รีเซ็ตคำตอบของผู้ใช้
    selectedOptionIndex = null;  // รีเซ็ตการเลือกคำตอบ
    document.querySelector(".question-container").classList.remove("hidden");  // แสดงคำถาม
    document.getElementById("result").classList.add("hidden");  // ซ่อนผลลัพธ์
    document.getElementById("retry-btn").classList.add("hidden");  // ซ่อนปุ่ม Retry
    document.getElementById("go-to-start-btn").classList.add("hidden");  // ซ่อนปุ่ม Go to Start
    loadQuestion();  // โหลดคำถามแรกใหม่
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const options = document.querySelectorAll(".option");
    options.forEach((button, index) => {
        button.innerText = currentQuestion.options[index];
        button.disabled = false;
        button.classList.remove("selected");

        // ตรวจสอบว่าผู้ใช้ตอบคำถามนี้หรือยัง
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add("selected");
            selectedOptionIndex = index;
        }
    });

    if (selectedOptionIndex === null) {
        document.getElementById("next-btn").classList.add("hidden");
    } else {
        document.getElementById("next-btn").classList.remove("hidden");
    }

    if (currentQuestionIndex === 0) {
        document.getElementById("prev-btn").classList.add("hidden");
    } else {
        document.getElementById("prev-btn").classList.remove("hidden");
    }
}

function selectOption(selectedIndex) {
    const options = document.querySelectorAll(".option");

    if (selectedOptionIndex !== null) {
        options[selectedOptionIndex].classList.remove("selected");
    }

    options[selectedIndex].classList.add("selected");
    selectedOptionIndex = selectedIndex;
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    // ตรวจสอบว่าผู้ใช้ได้เลือกคำตอบหรือไม่
    if (selectedOptionIndex === null) {
        alert("Please select an option before proceeding.");  // แจ้งเตือนให้เลือกคำตอบก่อน
        return;  // ออกจากฟังก์ชัน ถ้ายังไม่มีการเลือกคำตอบ
    }

    // เก็บคำตอบของผู้ใช้ในแต่ละคำถาม
    userAnswers[currentQuestionIndex] = selectedOptionIndex;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        selectedOptionIndex = null;  // รีเซ็ตตัวเลือกสำหรับคำถามถัดไป
        loadQuestion();
    } else {
        if (userAnswers.length < questions.length) {
            alert("You must answer all the questions before submitting the quiz.");
            currentQuestionIndex--;  // ย้อนกลับไปยังคำถามสุดท้ายที่ยังไม่ได้ตอบ
            return;
        }
        showResult();  // แสดงผลลัพธ์ถ้าตอบครบทุกข้อ
    }
}

function prevQuestion() {
    // เก็บคำตอบของผู้ใช้ในแต่ละคำถามก่อนย้อนกลับ
    userAnswers[currentQuestionIndex] = selectedOptionIndex;

    currentQuestionIndex--;
    loadQuestion();
}

function calculateScore() {
    score = 0;  // รีเซ็ตคะแนนก่อนคำนวณใหม่
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].answer) {
            score++;
        }
    });
}

function showResult() {
    if (userAnswers.length < questions.length) {
        alert("You must answer all the questions before submitting the quiz.");
        return;
    }

    calculateScore();  // คำนวณคะแนนใหม่ก่อนแสดงผล
    document.querySelector(".question-container").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("prev-btn").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").innerText = score + " / " + questions.length;

    // แสดงเฉลย
    const resultContainer = document.getElementById("answer-key");
    resultContainer.innerHTML = "";  // ล้างข้อมูลเดิมออก
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.answer;
        const userAnswerText = userAnswer !== null ? question.options[userAnswer] : "No answer";
        const correctAnswerText = question.options[correctAnswer];

        const resultText = document.createElement("p");
        resultText.innerHTML = `
            <strong>Question ${index + 1}:</strong> ${question.question} <br>
            Your answer: <span style="color: ${userAnswer === correctAnswer ? 'green' : 'red'}">${userAnswerText}</span><br>
            Correct answer: <span style="color: green">${correctAnswerText}</span><br><br>
        `;
        resultContainer.appendChild(resultText);
    });

    document.getElementById("retry-btn").classList.remove("hidden");
    document.getElementById("go-to-start-btn").classList.remove("hidden"); // แสดงปุ่ม "Go to Start"
}

function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];  // รีเซ็ตคำตอบของผู้ใช้
    selectedOptionIndex = null;  // รีเซ็ตการเลือกคำตอบ
    document.getElementById("result").classList.add("hidden");
    document.getElementById("retry-btn").classList.add("hidden");
    document.getElementById("go-to-start-btn").classList.add("hidden"); // ซ่อนปุ่ม "Go to Start"
    document.querySelector(".question-container").classList.remove("hidden");
    loadQuestion();
}

function goToStart() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("retry-btn").classList.add("hidden");
    document.getElementById("go-to-start-btn").classList.add("hidden");  // ซ่อนปุ่ม "Go to Start"
    document.getElementById("quiz").classList.add("hidden");  // ซ่อนหน้าแบบทดสอบ
    document.getElementById("start-screen").classList.remove("hidden");  // กลับไปที่หน้าเริ่มต้น
}

window.onload = () => {
    document.getElementById("start-screen").classList.remove("hidden");
};
