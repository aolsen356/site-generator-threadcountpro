// Quiz state management
let currentQuestion = 0;
let answers = {};

// Quiz questions
const questions = [
    {
        id: "temperature",
        question: "How do you usually feel when you sleep?",
        options: [
            { value: "hot", label: "Hot Sleeper", description: "I often wake up sweaty or kick off the covers" },
            { value: "cold", label: "Cold Sleeper", description: "I need extra blankets to stay warm" },
            { value: "neutral", label: "Just Right", description: "I'm comfortable most nights" }
        ]
    },
    {
        id: "climate",
        question: "What's your bedroom climate like?",
        options: [
            { value: "humid", label: "Warm & Humid", description: "Hot summers, muggy nights, or no AC" },
            { value: "dry", label: "Warm & Dry", description: "Desert climate or well air-conditioned" },
            { value: "cold-climate", label: "Cold Climate", description: "Long winters, often chilly at night" },
            { value: "all-season", label: "Varies by Season", description: "Hot summers and cold winters" }
        ]
    },
    {
        id: "feel",
        question: "What sheet feel do you prefer?",
        options: [
            { value: "crisp", label: "Crisp & Cool", description: "Like a fresh hotel bed, lightweight" },
            { value: "silky", label: "Silky & Smooth", description: "Soft, luxurious glide against skin" },
            { value: "cozy", label: "Cozy & Warm", description: "Soft, fuzzy, like a warm hug" },
            { value: "any", label: "No Preference", description: "I'm open to suggestions" }
        ]
    },
    {
        id: "budget",
        question: "What's your budget for a sheet set?",
        options: [
            { value: "budget", label: "Budget-Friendly", description: "Under $40 - great value matters most" },
            { value: "mid", label: "Mid-Range", description: "$40-$70 - balance of quality and price" },
            { value: "premium", label: "Premium", description: "$70+ - willing to invest in quality" }
        ]
    },
    {
        id: "priority",
        question: "What matters most to you?",
        options: [
            { value: "cooling", label: "Staying Cool", description: "Temperature control is my top priority" },
            { value: "softness", label: "Maximum Softness", description: "I want the softest sheets possible" },
            { value: "durability", label: "Long-Lasting", description: "I want sheets that last for years" },
            { value: "easy-care", label: "Easy Care", description: "Low maintenance, wrinkle-resistant" }
        ]
    }
];

// Initialize quiz
function startQuiz() {
    currentQuestion = 0;
    answers = {};
    document.getElementById('quizIntro').classList.add('hidden');
    document.getElementById('results').classList.add('hidden');
    document.querySelector('.quiz-section').classList.remove('hidden');
    renderQuestion();

    // Scroll to quiz
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}

// Render current question
function renderQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('quizContainer');

    let html = `
        <div class="quiz-question">
            <div class="quiz-progress">
                ${questions.map((_, i) => `
                    <div class="progress-dot ${i < currentQuestion ? 'completed' : ''} ${i === currentQuestion ? 'active' : ''}"></div>
                `).join('')}
            </div>

            <h3 class="question-text">${question.question}</h3>

            <div class="options">
                ${question.options.map(opt => `
                    <div class="option ${answers[question.id] === opt.value ? 'selected' : ''}"
                         onclick="selectOption('${question.id}', '${opt.value}')">
                        <div class="option-label">${opt.label}</div>
                        <div class="option-description">${opt.description}</div>
                    </div>
                `).join('')}
            </div>

            <div class="quiz-nav">
                ${currentQuestion > 0 ?
                    '<button class="btn-back" onclick="prevQuestion()">← Back</button>' :
                    '<div></div>'}
                <button class="btn-primary" onclick="nextQuestion()" ${!answers[question.id] ? 'disabled style="opacity:0.5;cursor:not-allowed"' : ''}>
                    ${currentQuestion === questions.length - 1 ? 'See Results' : 'Next →'}
                </button>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// Select an option
function selectOption(questionId, value) {
    answers[questionId] = value;
    renderQuestion();
}

// Go to next question
function nextQuestion() {
    const question = questions[currentQuestion];
    if (!answers[question.id]) return;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showResults();
    }
}

// Go to previous question
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// Calculate recommendations based on answers
function calculateRecommendations() {
    const scores = {};

    sheetProducts.forEach(product => {
        let score = 0;
        let matchReasons = [];

        // Temperature preference scoring
        if (answers.temperature === 'hot') {
            score += product.temperatureRating * 3; // Higher = cooler = better
            if (product.temperatureRating >= 4) {
                matchReasons.push("Excellent cooling for hot sleepers");
            }
        } else if (answers.temperature === 'cold') {
            score += (6 - product.temperatureRating) * 3; // Lower = warmer = better
            if (product.temperatureRating <= 2) {
                matchReasons.push("Extra warmth for cold sleepers");
            }
        } else {
            score += 10; // Neutral gets baseline
            if (product.temperatureRating === 3) {
                matchReasons.push("Balanced temperature regulation");
            }
        }

        // Climate matching
        if (product.bestFor.includes(answers.climate)) {
            score += 15;
            if (answers.climate === 'humid') {
                matchReasons.push("Moisture-wicking for humid climates");
            } else if (answers.climate === 'cold-climate') {
                matchReasons.push("Warm and cozy for cold climates");
            }
        }

        // Feel preference
        if (answers.feel === 'crisp' && product.weave === 'Percale') {
            score += 20;
            matchReasons.push("Crisp percale weave you prefer");
        } else if (answers.feel === 'silky' && (product.weave === 'Sateen' || product.material.includes('Bamboo'))) {
            score += 20;
            matchReasons.push("Silky-smooth texture you love");
        } else if (answers.feel === 'cozy' && product.weave === 'Flannel') {
            score += 20;
            matchReasons.push("Cozy flannel feel perfect for you");
        } else if (answers.feel === 'any') {
            score += 10;
        }

        // Budget matching
        if (product.budgetTier === answers.budget) {
            score += 15;
            matchReasons.push("Within your budget range");
        } else if (answers.budget === 'premium') {
            score += 10; // Premium budget can afford anything
        }

        // Priority matching
        if (answers.priority === 'cooling' && product.temperatureRating >= 4) {
            score += 15;
            matchReasons.push("Top-rated for cooling");
        } else if (answers.priority === 'softness' && product.softnessRating >= 4) {
            score += 15;
            matchReasons.push("Exceptionally soft");
        } else if (answers.priority === 'durability' && product.durabilityRating >= 4) {
            score += 15;
            matchReasons.push("Built to last");
        } else if (answers.priority === 'easy-care' && product.material.includes('Microfiber')) {
            score += 15;
            matchReasons.push("Low maintenance care");
        }

        scores[product.id] = {
            score,
            matchReasons: matchReasons.slice(0, 3) // Top 3 reasons
        };
    });

    // Sort by score and return top 3
    return sheetProducts
        .map(p => ({
            ...p,
            score: scores[p.id].score,
            matchReasons: scores[p.id].matchReasons
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
}

// Show results
function showResults() {
    const recommendations = calculateRecommendations();

    // Hide quiz, show results
    document.querySelector('.quiz-section').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');

    const container = document.getElementById('resultsContainer');

    container.innerHTML = recommendations.map((product, index) => `
        <div class="product-card ${index === 0 ? 'top-pick' : ''}">
            ${index === 0 ? '<div class="product-badge">Top Pick for You</div>' : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image"
                 onerror="this.onerror=null; this.style.background='#f7fafc'; this.alt='Image unavailable'">
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-material">${product.material}${product.threadCount ? ` • ${product.threadCount} TC` : ''}</div>

                ${product.matchReasons.length > 0 ? `
                    <div class="match-reason">
                        <strong>Why we recommend this:</strong> ${product.matchReasons.join('. ')}.
                    </div>
                ` : ''}

                <ul class="product-features">
                    ${product.features.slice(0, 4).map(f => `<li>${f}</li>`).join('')}
                </ul>

                <div class="product-price">${product.price}</div>
                <a href="${getAmazonLink(product.asin)}" target="_blank" rel="noopener" class="product-link">
                    View on Amazon
                </a>
            </div>
        </div>
    `).join('');

    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });

    // Track in GA4
    if (typeof gtag !== 'undefined') {
        gtag('event', 'quiz_completed', {
            'temperature': answers.temperature,
            'climate': answers.climate,
            'budget': answers.budget,
            'top_recommendation': recommendations[0]?.name
        });
    }
}

// Restart quiz
function restartQuiz() {
    document.getElementById('results').classList.add('hidden');
    startQuiz();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Any initialization code
});
