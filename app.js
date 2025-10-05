// Mock data with enhanced features
const mockProfiles = [
    {
        "id": 1,
        "name": "Aadhya",
        "email": "aadhya@email.com",
        "connect_with": "I ask questions",
        "hobbies": ["Music", "Museums", "Theatre"],
        "spend_time": "Cafes",
        "coffee_spend": "5–8 €",
        "people_type": "Artists",
        "country": "India",
        "time_bands": ["Morning", "Afternoon"],
        "madrid_locations": ["Malasaña", "Chueca"],
        "bio": "Curious artist from Mumbai who loves exploring culture through music and theatre. Always ready with thoughtful questions that spark deep conversations.",
        "availability": "Weekday mornings and weekend afternoons",
        "favorite_coffee": "Cappuccino with oat milk",
        "conversation_starters": ["What's the last piece of art that moved you?", "Tell me about a song that changed your perspective"],
        "availableNow": true,
        "coffeeStamps": 4
    },
    {
        "id": 2,
        "name": "Hans",
        "email": "hans@email.com",
        "connect_with": "I listen",
        "hobbies": ["Sports", "Running", "Netflix & Chill"],
        "spend_time": "Nature",
        "coffee_spend": "2–5 €",
        "people_type": "Entrepreneurs",
        "country": "Germany",
        "time_bands": ["Morning", "Evening"],
        "madrid_locations": ["Retiro", "Salamanca"],
        "bio": "Active entrepreneur from Berlin who believes in the power of listening. Enjoys morning runs and evening conversations about business ideas.",
        "availability": "Early mornings and late evenings",
        "favorite_coffee": "Black coffee, no sugar",
        "conversation_starters": ["What's your morning routine?", "Share a business idea you're excited about"],
        "availableNow": true,
        "coffeeStamps": 7
    },
    {
        "id": 3,
        "name": "Sofia",
        "email": "sofia@email.com",
        "connect_with": "I share stories",
        "hobbies": ["Baking", "Museums", "Music"],
        "spend_time": "At Home",
        "coffee_spend": "10–15 €",
        "people_type": "Creatives",
        "country": "Spain",
        "time_bands": ["Afternoon", "Evening"],
        "madrid_locations": ["La Latina", "Lavapiés"],
        "bio": "Madrid-born storyteller who creates magic in the kitchen and finds inspiration in local museums. Loves sharing experiences over artisanal coffee.",
        "availability": "Afternoon coffee breaks and weekend evenings",
        "favorite_coffee": "Cortado with homemade pastries",
        "conversation_starters": ["What's a story from your childhood that shaped you?", "Tell me about the best meal you've ever made"],
        "availableNow": false,
        "coffeeStamps": 2
    },
    {
        "id": 4,
        "name": "Caio",
        "email": "caio@email.com",
        "connect_with": "I vibe quietly",
        "hobbies": ["Music", "Geo-politics", "Theatre"],
        "spend_time": "Co-working Spaces",
        "coffee_spend": "5–8 €",
        "people_type": "Musicians",
        "country": "Brazil",
        "time_bands": ["Night", "Morning"],
        "madrid_locations": ["Chamberí", "Conde Duque"],
        "bio": "Thoughtful musician from São Paulo who enjoys quiet moments and deep discussions about world affairs. Creates ambient music inspired by urban life.",
        "availability": "Late night creative sessions and early morning coffee",
        "favorite_coffee": "Espresso with a side of inspiration",
        "conversation_starters": ["What music do you listen to when you need to think?", "How do you see the world changing?"],
        "availableNow": true,
        "coffeeStamps": 5
    },
    {
        "id": 5,
        "name": "Adunni",
        "email": "adunni@email.com",
        "connect_with": "I ask questions",
        "hobbies": ["Running", "Sports", "Netflix & Chill"],
        "spend_time": "The City",
        "coffee_spend": "15+ €",
        "people_type": "Founders",
        "country": "Nigeria",
        "time_bands": ["Morning", "Afternoon"],
        "madrid_locations": ["Malasaña", "Retiro"],
        "bio": "Dynamic founder from Lagos who balances high-energy workouts with thoughtful conversations. Believes every person has a story worth exploring.",
        "availability": "Morning coffee before runs, afternoon work breaks",
        "favorite_coffee": "Flat white with extra shot",
        "conversation_starters": ["What drives you to push your limits?", "Tell me about a challenge that made you stronger"],
        "availableNow": false,
        "coffeeStamps": 9
    },
    {
        "id": 6,
        "name": "Yuki",
        "email": "yuki@email.com",
        "connect_with": "I listen",
        "hobbies": ["Museums", "Baking", "Theatre"],
        "spend_time": "Cafes",
        "coffee_spend": "10–15 €",
        "people_type": "Artists",
        "country": "Japan",
        "time_bands": ["Afternoon", "Evening"],
        "madrid_locations": ["Chueca", "Salamanca"],
        "bio": "Contemplative artist from Tokyo who finds beauty in silence and sweetness in homemade treats. Believes listening is an art form.",
        "availability": "Quiet afternoon cafes and evening theatre shows",
        "favorite_coffee": "Matcha latte with handmade cookies",
        "conversation_starters": ["What's something you've learned from staying quiet?", "Share a tradition from your culture"],
        "availableNow": true,
        "coffeeStamps": 3
    },
    {
        "id": 7,
        "name": "Emma",
        "email": "emma@email.com",
        "connect_with": "I share stories",
        "hobbies": ["Music", "Running", "Geo-politics"],
        "spend_time": "Nature",
        "coffee_spend": "5–8 €",
        "people_type": "I don't mind—everyone has a story",
        "country": "United Kingdom",
        "time_bands": ["Morning", "Night"],
        "madrid_locations": ["La Latina", "Chamberí"],
        "bio": "Adventurous storyteller from London who runs towards new experiences and conversations about global affairs. Every person she meets becomes part of her story.",
        "availability": "Morning runs and late night deep talks",
        "favorite_coffee": "Americano with stories on the side",
        "conversation_starters": ["What's the most interesting place you've been?", "Tell me about someone who changed your perspective"],
        "availableNow": false,
        "coffeeStamps": 6
    },
    {
        "id": 8,
        "name": "Pierre",
        "email": "pierre@email.com",
        "connect_with": "I vibe quietly",
        "hobbies": ["Baking", "Museums", "Sports"],
        "spend_time": "At Home",
        "coffee_spend": "2–5 €",
        "people_type": "Creatives",
        "country": "France",
        "time_bands": ["Evening", "Night"],
        "madrid_locations": ["Lavapiés", "Conde Duque"],
        "bio": "Quiet creative from Lyon who expresses himself through baking and finds solace in art galleries. Enjoys intimate conversations over simple pleasures.",
        "availability": "Evening baking sessions and weekend museum visits",
        "favorite_coffee": "Café au lait with fresh pastries",
        "conversation_starters": ["What's your favorite thing to create?", "Tell me about a piece of art that speaks to you"],
        "availableNow": true,
        "coffeeStamps": 1
    },
    {
        "id": 9,
        "name": "Priya",
        "email": "priya@email.com",
        "connect_with": "I ask questions",
        "hobbies": ["Theatre", "Music", "Netflix & Chill"],
        "spend_time": "Co-working Spaces",
        "coffee_spend": "10–15 €",
        "people_type": "Entrepreneurs",
        "country": "India",
        "time_bands": ["Morning", "Afternoon"],
        "madrid_locations": ["Malasaña", "Retiro"],
        "bio": "Curious entrepreneur from Delhi who blends creativity with business acumen. Loves discovering new perspectives through thoughtful questions.",
        "availability": "Morning co-working sessions and afternoon creative breaks",
        "favorite_coffee": "Masala chai latte with networking",
        "conversation_starters": ["What's a question that changed how you think?", "Tell me about your creative process"],
        "availableNow": false,
        "coffeeStamps": 8
    },
    {
        "id": 10,
        "name": "Lars",
        "email": "lars@email.com",
        "connect_with": "I listen",
        "hobbies": ["Running", "Sports", "Geo-politics"],
        "spend_time": "The City",
        "coffee_spend": "15+ €",
        "people_type": "Founders",
        "country": "Norway",
        "time_bands": ["Morning", "Evening"],
        "madrid_locations": ["Salamanca", "Chueca"],
        "bio": "Thoughtful founder from Oslo who combines physical endurance with mental clarity. Values deep listening and global perspectives.",
        "availability": "Morning runs and evening strategy sessions",
        "favorite_coffee": "Premium single-origin with focused conversation",
        "conversation_starters": ["How do you stay mentally strong?", "What global trend excites you most?"],
        "availableNow": true,
        "coffeeStamps": 10
    }
];

const neighborhoods = [
    {
        "name": "Malasaña",
        "description": "Hip, artistic neighborhood with vintage cafes and creative energy",
        "coffee_spots": ["Café Central", "Lolina Vintage Café", "The Rooftop Coffee"],
        "vibe": "Alternative & Creative",
        "activeUsers": 42
    },
    {
        "name": "Chueca",
        "description": "Vibrant, diverse area known for trendy spots and inclusive atmosphere",
        "coffee_spots": ["Federal Café", "Café Belén", "La Bicicleta Café"],
        "vibe": "Trendy & Inclusive",
        "activeUsers": 38
    },
    {
        "name": "La Latina",
        "description": "Historic charm meets modern cafe culture in Madrid's heart",
        "coffee_spots": ["Café del Art", "La Rollerie", "Delic Coffee"],
        "vibe": "Historic & Authentic",
        "activeUsers": 31
    },
    {
        "name": "Lavapiés",
        "description": "Multicultural neighborhood with eclectic coffee houses",
        "coffee_spots": ["Café Barbieri", "La Infinito", "Tipos Infames"],
        "vibe": "Multicultural & Eclectic",
        "activeUsers": 27
    },
    {
        "name": "Salamanca",
        "description": "Upscale district with premium cafes and sophisticated ambiance",
        "coffee_spots": ["Café Gijón", "Dear Breakfast", "Saddle Coffee"],
        "vibe": "Upscale & Sophisticated",
        "activeUsers": 35
    },
    {
        "name": "Retiro",
        "description": "Peaceful area near the park, perfect for relaxed conversations",
        "coffee_spots": ["Café del Retiro", "Green & Roses", "Misión Café"],
        "vibe": "Peaceful & Natural",
        "activeUsers": 29
    },
    {
        "name": "Chamberí",
        "description": "Local favorite with cozy neighborhood cafes",
        "coffee_spots": ["Café Comercial", "Pum Pum Café", "Satan's Coffee Corner"],
        "vibe": "Cozy & Local",
        "activeUsers": 33
    },
    {
        "name": "Conde Duque",
        "description": "Cultural hub with artistic cafes near galleries and museums",
        "coffee_spots": ["Café & Tapas", "La Pecera", "Café Central Design"],
        "vibe": "Cultural & Artistic",
        "activeUsers": 24
    }
];

const countries = [
    {"name": "India", "flag": "🇮🇳"},
    {"name": "Germany", "flag": "🇩🇪"},
    {"name": "Spain", "flag": "🇪🇸"},
    {"name": "Brazil", "flag": "🇧🇷"},
    {"name": "Nigeria", "flag": "🇳🇬"},
    {"name": "Japan", "flag": "🇯🇵"},
    {"name": "United Kingdom", "flag": "🇬🇧"},
    {"name": "France", "flag": "🇫🇷"},
    {"name": "Norway", "flag": "🇳🇴"}
];

// DOM elements - will be populated after DOM loads
const sections = {};
const elements = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Whats\' BROwing app...');
    
    // Initialize sections
    sections.landing = document.getElementById('landing');
    sections.quiz = document.getElementById('quiz');
    sections.results = document.getElementById('results');
    sections.neighborhoods = document.getElementById('neighborhoods');
    sections.payment = document.getElementById('payment');
    sections.social = document.getElementById('social');
    
    // Initialize elements
    elements.startQuizBtn = document.getElementById('startQuizBtn');
    elements.coffeeRouletteBtn = document.getElementById('coffeeRouletteBtn');
    elements.prevBtn = document.getElementById('prevBtn');
    elements.nextBtn = document.getElementById('nextBtn');
    elements.submitBtn = document.getElementById('submitBtn');
    elements.retakeQuizBtn = document.getElementById('retakeQuizBtn');
    elements.continueToBooking = document.getElementById('continueToBooking');
    elements.currentQuestionSpan = document.getElementById('currentQuestion');
    elements.progressFill = document.getElementById('progressFill');
    elements.countrySelect = document.getElementById('country');
    elements.topMatches = document.getElementById('topMatches');
    elements.neighborhoodGrid = document.getElementById('neighborhoodGrid');
    elements.bookingDetails = document.getElementById('bookingDetails');
    elements.paymentTotal = document.getElementById('paymentTotal');
    elements.paymentForm = document.getElementById('paymentForm');
    elements.successModal = document.getElementById('successModal');
    elements.profileModal = document.getElementById('profileModal');
    elements.viewConnections = document.getElementById('viewConnections');
    elements.closeProfileModal = document.getElementById('closeProfileModal');
    elements.backToHome = document.getElementById('backToHome');
    elements.coffeeNowFilter = document.getElementById('coffeeNowFilter');
    
    initializeApp();
    setupEventListeners();
    populateCountrySelect();
    console.log('App initialized successfully!');
});

function initializeApp() {
    showSection('landing');
    resetQuizState();
}

function resetQuizState() {
    currentQuestion = 1;
    userResponses = {};
    selectedMatches = [];
    selectedNeighborhood = null;
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Main navigation buttons
    elements.startQuizBtn.addEventListener('click', function(e) {
        console.log('Start Quiz button clicked!');
        e.preventDefault();
        startQuiz();
    });
    
    // Coffee Roulette feature
    if (elements.coffeeRouletteBtn) {
        elements.coffeeRouletteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Coffee Roulette clicked!');
            triggerCoffeeRoulette();
        });
    } else {
        console.error('Coffee Roulette button not found!');
    }
    
    elements.prevBtn.addEventListener('click', previousQuestion);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.submitBtn.addEventListener('click', submitQuiz);
    elements.retakeQuizBtn.addEventListener('click', retakeQuiz);
    elements.continueToBooking.addEventListener('click', showNeighborhoods);
    elements.viewConnections.addEventListener('click', showSocialFeatures);
    elements.closeProfileModal.addEventListener('click', closeProfileModal);
    elements.backToHome.addEventListener('click', () => {
        console.log('Back to home clicked');
        showSection('landing');
    });

    // Coffee Now filter
    if (elements.coffeeNowFilter) {
        elements.coffeeNowFilter.addEventListener('change', function() {
            displayResults();
        });
    }

    // Form validation listeners
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('input', validateCurrentQuestion);
    }
    
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener('change', function() {
            console.log('Radio button changed:', input.name, input.value);
            validateCurrentQuestion();
        });
    });
    
    document.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.addEventListener('change', function() {
            console.log('Checkbox changed:', input.name, input.value, input.checked);
            validateCurrentQuestion();
        });
    });
    
    const countrySelect = document.getElementById('country');
    if (countrySelect) {
        countrySelect.addEventListener('change', validateCurrentQuestion);
    }

    // Payment form
    if (elements.paymentForm) {
        elements.paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processPayment();
        });
    }

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });

    // Modal backdrop click to close
    elements.successModal.addEventListener('click', function(e) {
        if (e.target === elements.successModal) {
            closeSuccessModal();
        }
    });

    console.log('Event listeners set up successfully!');
}

// Coffee Roulette Feature
function triggerCoffeeRoulette() {
    console.log('Coffee Roulette activated!');
    
    // Show loading animation
    elements.coffeeRouletteBtn.textContent = '🎲 Finding your match...';
    elements.coffeeRouletteBtn.disabled = true;
    
    setTimeout(() => {
        // Get only available now profiles
        const availableProfiles = mockProfiles.filter(p => p.availableNow);
        const randomMatch = availableProfiles[Math.floor(Math.random() * availableProfiles.length)];
        
        // Create instant match result
        userResponses = {
            email: 'roulette@user.com',
            matches: [randomMatch],
            isRoulette: true
        };
        
        selectedMatches = [randomMatch.id];
        
        // Show result with animation
        alert(`🎉 You've been matched with ${randomMatch.name}!\n\n${randomMatch.bio}\n\nThey're available RIGHT NOW for coffee in ${randomMatch.madrid_locations[0]}!`);
        
        elements.coffeeRouletteBtn.textContent = '🎲 Coffee Roulette - Meet Someone NOW!';
        elements.coffeeRouletteBtn.disabled = false;
        
        // Go directly to neighborhood selection
        showNeighborhoods();
    }, 2000);
}

function populateCountrySelect() {
    const select = elements.countrySelect;
    if (!select) return;
    
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        option.textContent = `${country.flag} ${country.name}`;
        select.appendChild(option);
    });
}

function showSection(sectionName) {
    console.log('Showing section:', sectionName);
    
    Object.keys(sections).forEach(key => {
        if (sections[key]) {
            sections[key].classList.add('hidden');
        }
    });
    
    if (sections[sectionName]) {
        sections[sectionName].classList.remove('hidden');
    }
}

function startQuiz() {
    console.log('Starting quiz...');
    resetQuizState();
    updateQuizUI();
    showSection('quiz');
}

function updateQuizUI() {
    const progress = (currentQuestion / 7) * 100;
    elements.progressFill.style.width = `${progress}%`;
    
    elements.currentQuestionSpan.textContent = currentQuestion;
    
    document.querySelectorAll('.question-slide').forEach(slide => {
        slide.classList.remove('active');
    });
    const currentSlide = document.querySelector(`[data-question="${currentQuestion}"]`);
    if (currentSlide) {
        currentSlide.classList.add('active');
    }
    
    elements.prevBtn.classList.toggle('hidden', currentQuestion === 1);
    elements.nextBtn.classList.toggle('hidden', currentQuestion === 7);
    elements.submitBtn.classList.toggle('hidden', currentQuestion !== 7);
    
    validateCurrentQuestion();
}

function validateCurrentQuestion() {
    let isValid = false;
    
    switch(currentQuestion) {
        case 1:
            const email = document.getElementById('email').value;
            isValid = email && email.includes('@');
            break;
        case 2:
            isValid = document.querySelector('input[name="connection"]:checked') !== null;
            break;
        case 3:
            isValid = document.querySelectorAll('input[name="hobbies"]:checked').length > 0;
            break;
        case 4:
            isValid = document.querySelector('input[name="setting"]:checked') !== null;
            break;
        case 5:
            isValid = document.querySelector('input[name="budget"]:checked') !== null;
            break;
        case 6:
            isValid = document.querySelector('input[name="people"]:checked') !== null;
            break;
        case 7:
            isValid = document.getElementById('country').value !== '';
            break;
    }
    
    const nextBtn = currentQuestion === 7 ? elements.submitBtn : elements.nextBtn;
    if (nextBtn) {
        nextBtn.disabled = !isValid;
        nextBtn.style.opacity = isValid ? '1' : '0.5';
    }
}

function previousQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        updateQuizUI();
    }
}

function nextQuestion() {
    if (currentQuestion < 7) {
        saveCurrentResponse();
        currentQuestion++;
        updateQuizUI();
    }
}

function saveCurrentResponse() {
    switch(currentQuestion) {
        case 1:
            userResponses.email = document.getElementById('email').value;
            break;
        case 2:
            const connectionChecked = document.querySelector('input[name="connection"]:checked');
            if (connectionChecked) {
                userResponses.connect_with = connectionChecked.value;
            }
            break;
        case 3:
            const selectedHobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked'))
                .map(cb => cb.value);
            const otherHobbies = document.getElementById('otherHobbies').value;
            if (otherHobbies) {
                selectedHobbies.push(otherHobbies);
            }
            userResponses.hobbies = selectedHobbies;
            break;
        case 4:
            const settingChecked = document.querySelector('input[name="setting"]:checked');
            if (settingChecked) {
                userResponses.spend_time = settingChecked.value;
            }
            break;
        case 5:
            const budgetChecked = document.querySelector('input[name="budget"]:checked');
            if (budgetChecked) {
                userResponses.coffee_spend = budgetChecked.value;
            }
            break;
        case 6:
            const peopleChecked = document.querySelector('input[name="people"]:checked');
            if (peopleChecked) {
                userResponses.people_type = peopleChecked.value;
            }
            break;
        case 7:
            userResponses.country = document.getElementById('country').value;
            break;
    }
    console.log('Saved response for question', currentQuestion, ':', userResponses);
}

function submitQuiz() {
    console.log('Submitting quiz...');
    saveCurrentResponse();
    
    userResponses.timestamp = new Date().toISOString();
    
    calculateMatches();
    displayResults();
    showSection('results');
}

function calculateMatches() {
    console.log('Calculating matches...');
    const matches = mockProfiles.map(profile => {
        const score = calculateMatchScore(userResponses, profile);
        return { ...profile, score };
    });
    
    matches.sort((a, b) => b.score - a.score);
    userResponses.matches = matches;
    console.log('Top matches:', matches.slice(0, 5));
}

function calculateMatchScore(user, profile) {
    let score = 0;
    
    if (user.hobbies && profile.hobbies) {
        const commonHobbies = user.hobbies.filter(hobby => 
            profile.hobbies.includes(hobby)
        ).length;
        const maxHobbies = Math.max(user.hobbies.length, profile.hobbies.length);
        if (maxHobbies > 0) {
            score += (commonHobbies / maxHobbies) * 30;
        }
    }
    
    if (user.people_type === profile.people_type || 
        user.people_type === "I don't mind—everyone has a story" ||
        profile.people_type === "I don't mind—everyone has a story") {
        score += 20;
    }
    
    if (user.spend_time === profile.spend_time) {
        score += 15;
    }
    
    if (user.coffee_spend === profile.coffee_spend) {
        score += 15;
    }
    
    if (user.country === profile.country) {
        score += 10;
    }
    
    if (user.connect_with === profile.connect_with) {
        score += 10;
    }
    
    return Math.min(Math.round(score), 100);
}

function displayResults() {
    console.log('Displaying results...');
    const container = elements.topMatches;
    if (!container) return;
    
    container.innerHTML = '';
    
    let matchesToShow = userResponses.matches.slice(0, 5);
    
    // Filter by Coffee Now if checked
    if (elements.coffeeNowFilter && elements.coffeeNowFilter.checked) {
        matchesToShow = matchesToShow.filter(m => m.availableNow);
    }
    
    matchesToShow.forEach((match, index) => {
        const matchCard = createMatchCard(match, index + 1);
        container.appendChild(matchCard);
    });
}

function createMatchCard(match, rank) {
    const card = document.createElement('div');
    card.className = 'match-card';
    card.dataset.matchId = match.id;
    
    const countryFlag = getCountryFlag(match.country);
    const sharedTags = getSharedTags(userResponses, match);
    
    card.innerHTML = `
        <div class="match-selector">
            <input type="checkbox" id="match-${match.id}" value="${match.id}">
            <label for="match-${match.id}"></label>
        </div>
        
        <div class="match-header">
            <div class="match-info">
                <div class="match-name-flag">
                    <div class="match-name">
                        ${match.name}
                        ${match.availableNow ? '<span class="coffee-now-badge">☕ Available Now</span>' : ''}
                    </div>
                    <div class="country-flag">${countryFlag}</div>
                </div>
                <div class="match-persona">${match.bio}</div>
                <div style="margin-top: 8px;">
                    <span style="font-size: 12px; color: #6b7280;">Coffee Stamps: </span>
                    ${'☕'.repeat(Math.min(match.coffeeStamps, 5))}
                    ${match.coffeeStamps > 5 ? ` +${match.coffeeStamps - 5}` : ''}
                </div>
            </div>
            <div class="match-score">
                <div class="score-percentage">${match.score}%</div>
                <div class="score-bar">
                    <div class="score-fill" style="width: ${match.score}%"></div>
                </div>
            </div>
        </div>
        
        <div class="match-tags">
            ${sharedTags.map(tag => `<span class="match-tag ${tag.shared ? 'shared' : ''}">${tag.text}</span>`).join('')}
        </div>
        
        <div class="match-actions">
            <button class="btn btn--secondary btn--sm" onclick="viewProfile(${match.id})">View Profile</button>
            <button class="btn btn--outline btn--sm" onclick="sendMessage(${match.id})">Send Message</button>
        </div>
    `;
    
    const checkbox = card.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
        toggleMatchSelection(match.id, this.checked);
        card.classList.toggle('selected', this.checked);
    });
    
    return card;
}

function toggleMatchSelection(matchId, selected) {
    if (selected) {
        if (!selectedMatches.includes(matchId)) {
            selectedMatches.push(matchId);
        }
    } else {
        selectedMatches = selectedMatches.filter(id => id !== matchId);
    }
    
    console.log('Selected matches:', selectedMatches);
    elements.continueToBooking.classList.toggle('hidden', selectedMatches.length === 0);
}

function getCountryFlag(countryName) {
    const country = countries.find(c => c.name === countryName);
    return country ? country.flag : '🌍';
}

function getSharedTags(user, profile) {
    const tags = [];
    
    if (profile.hobbies) {
        profile.hobbies.slice(0, 3).forEach(hobby => {
            const shared = user.hobbies && user.hobbies.includes(hobby);
            tags.push({ text: hobby, shared });
        });
    }
    
    tags.push({ text: profile.spend_time, shared: user.spend_time === profile.spend_time });
    tags.push({ text: profile.coffee_spend, shared: user.coffee_spend === profile.coffee_spend });
    
    return tags;
}

// Generate AI Icebreaker
function generateAIIcebreaker(userProfile, matchProfile) {
    const commonHobbies = userProfile.hobbies ? userProfile.hobbies.filter(h => matchProfile.hobbies.includes(h)) : [];
    
    if (commonHobbies.length > 0) {
        return `Since you both love ${commonHobbies[0]}, here's a starter: What's the most unexpected thing you learned from ${commonHobbies[0]}?`;
    }
    
    if (userProfile.spend_time === matchProfile.spend_time) {
        return `You both enjoy ${userProfile.spend_time} - what's your hidden gem spot there?`;
    }
    
    return `Perfect opener: Ask them about their journey as a ${matchProfile.people_type.toLowerCase()}!`;
}

function viewProfile(profileId) {
    const profile = mockProfiles.find(p => p.id === profileId);
    if (!profile) return;
    
    const modal = elements.profileModal;
    const modalTitle = document.getElementById('profileModalTitle');
    const modalBody = document.getElementById('profileModalBody');
    
    modalTitle.textContent = `${profile.name}'s Profile`;
    
    modalBody.innerHTML = `
        <div class="profile-header">
            <div class="profile-name">${profile.name} ${getCountryFlag(profile.country)}</div>
            ${profile.availableNow ? '<div class="coffee-now-badge">Available Now</div>' : ''}
        </div>
        <div class="profile-bio">${profile.bio}</div>
        <div class="profile-detail">
            <strong>Connection Style:</strong> ${profile.connect_with}
        </div>
        <div class="profile-detail">
            <strong>Hobbies:</strong> ${profile.hobbies.join(', ')}
        </div>
        <div class="profile-detail">
            <strong>Favorite Coffee:</strong> ${profile.favorite_coffee}
        </div>
        <div class="profile-detail">
            <strong>Availability:</strong> ${profile.availability}
        </div>
        <div class="profile-detail">
            <strong>Coffee Stamps Earned:</strong> ${profile.coffeeStamps} ☕
        </div>
        <div class="profile-detail">
            <strong>Conversation Starters:</strong>
            <ul>
                ${profile.conversation_starters.map(starter => `<li>${starter}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function sendMessage(profileId) {
    const profile = mockProfiles.find(p => p.id === profileId);
    if (!profile) return;
    
    alert(`Message sent to ${profile.name}! You can continue the conversation after booking your coffee meetup.`);
}

function closeProfileModal() {
    elements.profileModal.classList.add('hidden');
}

function showNeighborhoods() {
    console.log('Showing neighborhoods...');
    displayNeighborhoods();
    showSection('neighborhoods');
}

function displayNeighborhoods() {
    const container = elements.neighborhoodGrid;
    if (!container) return;
    
    container.innerHTML = '';
    
    neighborhoods.forEach(neighborhood => {
        const card = createNeighborhoodCard(neighborhood);
        container.appendChild(card);
    });
}

function createNeighborhoodCard(neighborhood) {
    const card = document.createElement('div');
    card.className = 'neighborhood-card';
    card.dataset.neighborhood = neighborhood.name;
    
    card.innerHTML = `
        <div class="neighborhood-name">${neighborhood.name}</div>
        <div class="neighborhood-vibe">${neighborhood.vibe}</div>
        <div class="neighborhood-description">${neighborhood.description}</div>
        <div style="text-align: center; margin: 12px 0; font-weight: 600; color: #6366f1;">
            ${neighborhood.activeUsers} active users here now
        </div>
        <div class="coffee-spots">
            <h4>Popular Coffee Spots</h4>
            <div class="spots-list">
                ${neighborhood.coffee_spots.map(spot => `<span class="spot-tag">${spot}</span>`).join('')}
            </div>
        </div>
        <button class="btn btn--primary select-area-btn" onclick="selectNeighborhood('${neighborhood.name}')">
            Select This Area
        </button>
    `;
    
    return card;
}

function selectNeighborhood(neighborhoodName) {
    console.log('Selected neighborhood:', neighborhoodName);
    selectedNeighborhood = neighborhoodName;
    
    document.querySelectorAll('.neighborhood-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const selectedCard = document.querySelector(`[data-neighborhood="${neighborhoodName}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    setTimeout(() => {
        showPaymentSection();
    }, 500);
}

function showPaymentSection() {
    console.log('Showing payment section...');
    displayBookingDetails();
    showSection('payment');
}

function displayBookingDetails() {
    const bookingContainer = elements.bookingDetails;
    const totalContainer = elements.paymentTotal;
    
    if (!bookingContainer || !totalContainer) return;
    
    const selectedProfilesData = mockProfiles.filter(profile => 
        selectedMatches.includes(profile.id)
    );
    
    const totalCost = selectedProfilesData.length * 5;
    
    bookingContainer.innerHTML = `
        <div class="detail-row">
            <span class="detail-label">Selected Matches</span>
            <span class="detail-value">${selectedProfilesData.map(p => p.name).join(', ')}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Neighborhood</span>
            <span class="detail-value">${selectedNeighborhood}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Number of People</span>
            <span class="detail-value">${selectedProfilesData.length}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Price per Person</span>
            <span class="detail-value">5€</span>
        </div>
    `;
    
    totalContainer.innerHTML = `
        <div class="total-label">Total Amount</div>
        <div class="total-amount">${totalCost}€</div>
    `;
}

function processPayment() {
    console.log('Processing payment...');
    
    elements.paymentForm.classList.add('loading');
    
    setTimeout(() => {
        elements.paymentForm.classList.remove('loading');
        
        // Generate AI icebreaker for success modal
        const selectedProfilesData = mockProfiles.filter(profile => 
            selectedMatches.includes(profile.id)
        );
        
        if (selectedProfilesData.length > 0) {
            const icebreaker = generateAIIcebreaker(userResponses, selectedProfilesData[0]);
            document.getElementById('aiIcebreaker').textContent = icebreaker;
        }
        
        showSuccessModal();
    }, 2000);
}

function showSuccessModal() {
    elements.successModal.classList.remove('hidden');
}

function closeSuccessModal() {
    elements.successModal.classList.add('hidden');
    showSection('landing');
}

function showSocialFeatures() {
    console.log('Showing social features...');
    elements.successModal.classList.add('hidden');
    setupSocialData();
    showSection('social');
}

function setupSocialData() {
    setupChatList();
    setupProfiles();
    switchTab('chat');
}

function setupChatList() {
    const chatList = document.getElementById('chatList');
    if (!chatList) return;
    
    const selectedProfiles = mockProfiles.filter(profile => 
        selectedMatches.includes(profile.id)
    );
    
    chatList.innerHTML = selectedProfiles.map(profile => `
        <div class="chat-item" onclick="openChat(${profile.id})">
            <div class="chat-avatar">${profile.name.charAt(0)}</div>
            <div class="chat-info">
                <div class="chat-name">${profile.name}</div>
                <div class="chat-preview">Hey! Looking forward to our coffee meetup!</div>
            </div>
            ${profile.availableNow ? '<span class="coffee-now-badge" style="margin-left: auto;">Now</span>' : ''}
        </div>
    `).join('');
}

function setupProfiles() {
    const profilesGrid = document.getElementById('socialProfiles');
    if (!profilesGrid) return;
    
    const selectedProfiles = mockProfiles.filter(profile => 
        selectedMatches.includes(profile.id)
    );
    
    profilesGrid.innerHTML = selectedProfiles.map(profile => `
        <div class="profile-card">
            <div class="profile-header">
                <div class="profile-name">${profile.name}</div>
                <div class="country-flag">${getCountryFlag(profile.country)}</div>
            </div>
            <div class="profile-bio">${profile.bio}</div>
            <div style="margin: 8px 0; font-size: 12px; color: #6b7280;">
                Coffee Stamps: ${'☕'.repeat(Math.min(profile.coffeeStamps, 5))}
            </div>
            <div class="profile-tags">
                ${profile.hobbies.slice(0, 3).map(hobby => `<span class="tag">${hobby}</span>`).join('')}
            </div>
            <div class="match-actions">
                <button class="btn btn--secondary btn--sm" onclick="viewProfile(${profile.id})">View Full Profile</button>
                <button class="btn btn--outline btn--sm" onclick="openChat(${profile.id})">Chat</button>
            </div>
        </div>
    `).join('');
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });
    
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
        pane.classList.add('hidden');
    });
    
    const activePane = document.getElementById(`${tabName}Tab`);
    if (activePane) {
        activePane.classList.add('active');
        activePane.classList.remove('hidden');
    }
}

function openChat(profileId) {
    const profile = mockProfiles.find(p => p.id === profileId);
    if (!profile) return;
    
    console.log('Opening chat with:', profile.name);
    
    document.querySelectorAll('.chat-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const chatItems = document.querySelectorAll('.chat-item');
    chatItems.forEach(item => {
        if (item.textContent.includes(profile.name)) {
            item.classList.add('active');
        }
    });
    
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow) {
        const icebreaker = generateAIIcebreaker(userResponses, profile);
        
        chatWindow.innerHTML = `
            <div class="chat-header">${profile.name} ${getCountryFlag(profile.country)}</div>
            <div class="chat-messages">
                <div class="message received">
                    <div class="message-bubble">Hey! I'm excited about our coffee meetup in ${selectedNeighborhood}!</div>
                    <div class="message-time">2:30 PM</div>
                </div>
                <div class="message received">
                    <div class="message-bubble">${profile.conversation_starters[0]}</div>
                    <div class="message-time">2:32 PM</div>
                </div>
                <div class="message sent">
                    <div class="message-bubble">Great question! I'd love to discuss this over coffee</div>
                    <div class="message-time">2:35 PM</div>
                </div>
                <div style="background: #f3f4f6; padding: 12px; margin: 16px 0; border-radius: 8px; border-left: 3px solid #6366f1;">
                    <strong style="font-size: 12px; color: #6366f1;">AI SUGGESTED ICEBREAKER:</strong>
                    <p style="margin: 8px 0 0 0; font-size: 14px;">${icebreaker}</p>
                </div>
            </div>
            <div class="chat-input">
                <div class="flex gap-8">
                    <input type="text" class="form-control" placeholder="Type a message...">
                    <button class="btn btn--primary">Send</button>
                </div>
            </div>
        `;
    }
    
    switchTab('chat');
}

function retakeQuiz() {
    console.log('Retaking quiz...');
    resetQuizState();
    
    document.querySelectorAll('input').forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
    
    const countrySelect = document.getElementById('country');
    if (countrySelect) {
        countrySelect.selectedIndex = 0;
    }
    
    updateQuizUI();
    showSection('quiz');
}

// Make functions globally accessible for onclick handlers
window.viewProfile = viewProfile;
window.sendMessage = sendMessage;
window.selectNeighborhood = selectNeighborhood;
window.openChat = openChat;
window.triggerCoffeeRoulette = triggerCoffeeRoulette;

console.log('Whats\' BROwing app script loaded successfully!');