const quizForm = document.getElementById("quiz-form");
const resultDiv = document.getElementById("result");


const saveQuiz = async (score) => {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmYyN2JhMDkwNjhkMjY5ZDIyNThlNCIsImlhdCI6MTY5NDQ0MzQ1OCwiZXhwIjoxNjk0NDQ3MDU4fQ.vJ7Adp_DlOzd__whccpzH6lm_uOcdK8b0Zp4xfW0dxs`

    try {
        const response = await fetch(`http://localhost:8000/api/v1/quiz/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //send token 
                Authorization: `Bearer ${token}`,

            },

            body: JSON.stringify({
                quizName: quizForm.q1.value,
                quizScore: score

            })
        })

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            alert(data.message);
        }
    } catch (error) {
        console.log(error)
        alert(error)
    }
}


quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = {
        q1: quizForm.q1.value,
        q2: quizForm.q2.value,
        q3: quizForm.q3.value,
        q4: quizForm.q4.value,
        q5: quizForm.q5.value,
        q6: quizForm.q6.value,
        q7: quizForm.q7.value,
        q8: quizForm.q8.value,
        q9: quizForm.q9.value,
        q10: quizForm.q10.value,

    };

    const score = calculateScore(answers);
    saveQuiz(score);

    showResult(score);
    hideQuizForm();
});

function calculateScore(answers) {
    let score = 0;
    if (answers.q1 === "a") {
        score++;
    }
    if (answers.q2 === "b") {
        score++;
    }
    if (answers.q3 === "c") {
        score++;
    }
    if (answers.q4 === "a") {
        score++;
    }
    if (answers.q5 === "b") {
        score++;
    }
    if (answers.q6 === "c") {
        score++;
    }
    if (answers.q7 === "a") {
        score++;
    }
    if (answers.q8 === "d") {
        score++;
    }
    if (answers.q9 === "a") {
        score++;
    }
    if (answers.q10 === "c") {
        score++;
    }
    return score;
}

function showResult(score) {
    resultDiv.innerHTML = `<p>Your score: ${score} out of 10</p>`;
}

function hideQuizForm() {
    quizForm.style.display = "none";
}

