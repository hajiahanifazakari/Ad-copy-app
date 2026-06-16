// --- GLOBAL APPLICATION ENVIRONMENT STATE ENGINE ---
let brandProfile = {
    name: "",
    industry: "Food & Beverage",
    audience: "",
    tone: "Witty & Energetic",
    goal: "Social Growth"
};

let currentWizardStep = 1;
let generationVault = [];

const tipsArray = [
    "Use vertical 9:16 short-form video layouts to maximize organic reach structures.",
    "Incorporate a localized user review in your weekend newsletter outreach sequence.",
    "High-contrast text graphics yield 24% higher click-through on promotional ads layouts.",
    "Keep capture structures concise; try limiting social captions to under 140 characters."
];

// --- CORE INIT EVENT BOUNDARY MOUNT ---
document.addEventListener("DOMContentLoaded", () => {
    // Render initial icons framework layout elements
    lucide.createIcons();
    initializeCalendarGrid();
    rotateMarketingTips();
    
    // Cycle tips loop dynamically
    setInterval(rotateMarketingTips, 9000);
});

function rotateMarketingTips() {
    const el = document.getElementById('rotatingTip');
    if (el) {
        el.innerText = tipsArray[Math.floor(Math.random() * tipsArray.length)];
    }
}

// --- MULTI-STEP PIPELINE RUNTIME WIZARD ---
function openOnboarding() {
    currentWizardStep = 1;
    updateWizardUI();
    document.getElementById('onboardingModal').classList.remove('hidden');
    document.getElementById('onboardingModal').classList.add('flex');
}

function navigateWizard(direction) {
    currentWizardStep += direction;
    if (currentWizardStep < 1) currentWizardStep = 1;
    if (currentWizardStep > 3) currentWizardStep = 3;
    updateWizardUI();
}

function updateWizardUI() {
    // Mask step layers cleanly
    document.getElementById('wizardStep1').classList.add('hidden');
    document.getElementById('wizardStep2').classList.add('hidden');
    document.getElementById('wizardStep3').classList.add('hidden');

    // Show explicit index layout step
    document.getElementById(`wizardStep${currentWizardStep}`).classList.remove('hidden');

    // Display metadata tracking updates
    document.getElementById('stepIndicator').innerText = `Step ${currentWizardStep} of 3`;
    
    const prevBtn = document.getElementById('prevStepBtn');
    const nextBtn = document.getElementById('nextStepBtn');

    prevBtn.style.visibility = (currentWizardStep === 1) ? 'hidden' : 'visible';
    
    if (currentWizardStep === 3) {
        nextBtn.innerHTML = `Deploy AI Pipeline <i data-lucide="check" class="w-4 h-4"></i>`;
        nextBtn.type = "submit";
    } else {
        nextBtn.innerHTML = `Next Step <i data-lucide="arrow-right" class="w-4 h-4"></i>`;
        nextBtn.type = "button";
    }
    lucide.createIcons();

    // Map configuration tracking active bar lights
    const dots = document.getElementById('stepDots').children;
    for (let i = 0; i < dots.length; i++) {
        if (i < currentWizardStep) {
            dots[i].className = "h-1.5 w-8 bg-indigo-600 rounded-full transition-all duration-300";
        } else {
            dots[i].className = "h-1.5 w-3 bg-gray-200 rounded-full transition-all duration-300";
        }
    }
}

function handleOnboardingSubmit(event) {
    event.preventDefault();
    if (currentWizardStep < 3) {
        navigateWizard(1);
        return;
    }

    // Bind state parameter configurations
    brandProfile.name = document.getElementById('bizName').value || "Your Brand Studio";
    brandProfile.industry = document.getElementById('bizIndustry').value;
    brandProfile.audience = document.getElementById('bizAudience').value || "General Demographic Market";
    brandProfile.tone = document.getElementById('bizTone').value;
    brandProfile.goal = document.querySelector('input[name="bizGoal"]:checked').value;

    // Propagate updates instantly across client layouts
    document.getElementById('headerWelcome').innerText = `Sync: ${brandProfile.name}`;
    document.getElementById('sideBizName').innerText = brandProfile.name;
    document.getElementById('avatarLetter').innerText = brandProfile.name.charAt(0).toUpperCase();

    // Fire generation pipelines mapping mock frameworks
    synthesizeBrandKit();
    compileStrategyMatrix();
    seedCalendarEvents();

    // Close screen modal mask overlay
    document.getElementById('onboardingModal').classList.add('hidden');
    document.getElementById('onboardingModal').classList.remove('flex');
}

// --- APPLICATION VIEWPORT CONTROLLER ROUTER ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-view').forEach(view => view.classList.add('hidden'));
    document.getElementById(`view-${tabId}`).classList.remove('hidden');

    // Wipe status properties across standard buttons navigation arrays
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-50', 'text-indigo-600');
        btn.classList.add('text-gray-500', 'hover:bg-gray-50', 'hover:text-gray-900');
    });

    // Remap activation parameters on current clicked node components
    document.querySelectorAll(`.tab-btn[data-tab="${tabId}"]`).forEach(btn => {
        btn.classList.add('bg-indigo-50', 'text-indigo-600');
        btn.classList.remove('text-gray-500', 'hover:bg-gray-50');
    });
}

// --- TEXT GENERATION LOGIC LOOP ---
function generateTextContent() {
    const type = document.getElementById('creatorType').value;
    const prompt = document.getElementById('creatorPrompt').value;
    
    const emptyState = document.getElementById('creatorOutputEmpty');
    const loader = document.getElementById('creatorOutputLoader');
    const container = document.getElementById('creatorOutputContainer');
    const actionRow = document.getElementById('creatorActionRow');

    emptyState.classList.add('hidden');
    container.classList.add('hidden');
    actionRow.classList.add('hidden');
    loader.classList.remove('hidden');

    setTimeout(() => {
        loader.classList.add('hidden');
        container.classList.remove('hidden');
        actionRow.classList.remove('hidden');

        container.innerText = runTextSynthesisEngine(type, prompt);
    }, 1200);
}

function runTextSynthesisEngine(type, userPrompt) {
    const name = brandProfile.name || "Our Brand";
    const tone = brandProfile.tone;
    const detail = userPrompt ? `"${userPrompt}"` : "our baseline core premium offering framework";

    switch(type) {
        case "Social Media Caption":
            return `✨ Fresh perspective alert via ${name}! ✨\n\nThinking deeply around how we approach ${detail}. Every single touchpoint is curated explicitly to deliver luxury outcomes matching structural precision. \n\nHow does your team optimize this flow? Drop your strategy variants down below! 👇\n\n#Innovation #Strategy #MarketMateAI #${brandProfile.industry.replace(/\s+/g, '')}`;
        case "Product Description":
            return `Introducing the flagship iteration by ${name}. Built on high-performance operational architectures, this answers the exact marketplace demand for ${detail}. Synthesized using certified non-destructive frameworks, optimized for daily efficiency loops.\n\nKey Specifications:\n• Tuned directly for premium deployment profiles.\n• Architectural endurance mapping built-in.\n• Dynamic custom calibration layers included natively.`;
        case "Email Newsletter":
            return `Subject: Breaking status-quo limitations with ${name} 🚀\n\nHello Insider,\n\nThe marketplace transitions fast, but your capability matrix can scale faster. We are officially dropping configurations focusing on ${detail}.\n\nWe looked closely at industry standards and decided they weren't optimized enough. Here is your early-access invitation layout to join the next tier of scale.\n\nBest regards,\nTeam ${name}`;
        default:
            return `• Strategy Bundle Focus Axis: ${detail}\n• Content Vector Alignment: Optimized for ${tone} output parameters.\n• Execution Recommendation: Disseminate across core traffic channels during peak engagement index timelines.`;
    }
}

function handleOmniGenerate() {
    const promptVal = document.getElementById('omniPrompt').value;
    if (!promptVal) return;

    document.getElementById('creatorPrompt').value = promptVal;
    switchTab('creator');
    generateTextContent();
    document.getElementById('omniPrompt').value = "";
}

// --- DYNAMIC VISUAL LAYER RE-CALIBRATION RUNTIME ---
function updateFlyerCanvas() {
    const type = document.getElementById('flyerLayout').value;
    const headline = document.getElementById('flyerHeadline').value;
    const subtext = document.getElementById('flyerSubtext').value;
    const cta = document.getElementById('flyerCTA').value;

    document.getElementById('canvasHeadline').innerText = headline;
    document.getElementById('canvasSubtext').innerText = subtext;
    document.getElementById('canvasCTA').innerText = cta;

    const tagEl = document.getElementById('canvasHeaderTag');
    const canvasEl = document.getElementById('flyerRenderCanvas');

    if (type === 'event') {
        tagEl.innerText = "Exclusive Invitation";
        canvasEl.className = "aspect-[4/5] max-w-[380px] mx-auto bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl shadow-xl p-8 flex flex-col justify-between text-white relative overflow-hidden transition-all duration-300";
    } else if (type === 'promo') {
        tagEl.innerText = "Limited Flash Offer";
        canvasEl.className = "aspect-[4/5] max-w-[380px] mx-auto bg-gradient-to-br from-rose-600 to-amber-500 rounded-2xl shadow-xl p-8 flex flex-col justify-between text-white relative overflow-hidden transition-all duration-300";
    } else {
        tagEl.innerText = "Community Update";
        canvasEl.className = "aspect-[4/5] max-w-[380px] mx-auto bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-8 flex flex-col justify-between text-white relative overflow-hidden transition-all duration-300";
    }
}

function generateFlyerBackground() {
    const prompt = document.getElementById('flyerBgPrompt').value;
    if (!prompt) return;
    alert(`AI Vector Injection active: Modifying design grid architecture to support palette variants matching: "${prompt}"`);
    document.getElementById('flyerBgPrompt').value = "";
}

// --- GRAPHICS BRAND PALETTE COMPILER ---
function synthesizeBrandKit() {
    const container = document.getElementById('kitColorContainer');
    container.innerHTML = "";

    let colors = [];
    if (brandProfile.tone.includes("Witty")) {
        colors = [
            { name: "Electric Indigo", hex: "#4F46E5" },
            { name: "Vibrant Violet", hex: "#7C3AED" },
            { name: "Amber Pop", hex: "#F59E0B" },
            { name: "Slate Ground", hex: "#0F172A" }
        ];
        document.getElementById('kitFontHeader').innerText = "Plus Jakarta Sans";
    } else if (brandProfile.tone.includes("Professional")) {
        colors = [
            { name: "Navy Corporate", hex: "#1E3A8A" },
            { name: "Steel Slate", hex: "#475569" },
            { name: "Ice Accent", hex: "#E0F2FE" },
            { name: "Ink Core", hex: "#030712" }
        ];
        document.getElementById('kitFontHeader').innerText = "Merriweather Serif";
    } else {
        colors = [
            { name: "Sage Minimal", hex: "#15803D" },
            { name: "Earthy Clay", hex: "#B45309" },
            { name: "Warm Linen", hex: "#FEF3C7" },
            { name: "Charcoal Elite", hex: "#1F2937" }
        ];
        document.getElementById('kitFontHeader').innerText = "Inter Display";
    }

    colors.forEach(c => {
        const row = document.createElement('div');
        row.className = "flex items-center justify-between p-2 border border-gray-50 rounded-xl hover:bg-gray-50 transition cursor-pointer";
        row.onclick = () => alert(`Copied Hex Color code: ${c.hex}`);
        row.innerHTML = `
            <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg shadow-inner border border-black/5" style="background-color: ${c.hex}"></div>
                <div>
                    <p class="text-xs font-semibold text-gray-800">${c.name}</p>
                    <span class="text-[10px] text-gray-400 font-mono">${c.hex}</span>
                </div>
            </div>
            <i data-lucide="copy" class="w-3.5 h-3.5 text-gray-400"></i>
        `;
        container.appendChild(row);
    });

    const voiceContainer = document.getElementById('kitVoiceContainer');
    voiceContainer.innerHTML = `
        <div class="p-3 border-l-4 border-indigo-500 bg-indigo-50/30 rounded-r-xl">
            <p class="text-xs font-semibold text-gray-800 mb-0.5">Core Tonality Vector</p>
            <p class="text-[11px] text-gray-500 leading-normal">Maintain an output standard configured explicitly as: ${brandProfile.tone}. Avoid legacy fluff words.</p>
        </div>
        <div class="p-3 border-l-4 border-emerald-500 bg-emerald-50/30 rounded-r-xl">
            <p class="text-xs font-semibold text-gray-800 mb-0.5">Audience Matrix Fit</p>
            <p class="text-[11px] text-gray-500 leading-normal">Optimized directly to parse intent layouts appealing to: ${brandProfile.audience}.</p>
        </div>
    `;
    lucide.createIcons();
}

function compileStrategyMatrix() {
    const grid = document.getElementById('strategyCardGrid');
    grid.innerHTML = `
        <div class="border border-gray-100 rounded-xl p-4 bg-white shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">Acquisition Blueprint</span>
            <h4 class="font-semibold text-gray-800 text-sm">The 3-Part Content Loop</h4>
            <p class="text-xs text-gray-500 leading-relaxed">Publish 1 authority post clarifying problem architecture, 1 conversion asset offering immediate value, and 1 community interaction anchor weekly.</p>
        </div>
        <div class="border border-gray-100 rounded-xl p-4 bg-white shadow-sm space-y-2">
            <span class="text-[10px] font-bold text-violet-600 uppercase tracking-wider block">Niche Execution Axis</span>
            <h4 class="font-semibold text-gray-800 text-sm">${brandProfile.industry} Growth Hack</h4>
            <p class="text-xs text-gray-500 leading-relaxed">Competitors focus entirely on programmatic feature display. Differentiate instantly by publishing raw case-studies structured using your unique style profile.</p>
        </div>
    `;
}

// --- CHRONOLOGICAL DEADLINE GRAPH MATRIX ---
function initializeCalendarGrid() {
    const grid = document.getElementById('calendarDaysGrid');
    grid.innerHTML = ""; 
    
    for (let i = 1; i <= 35; i++) {
        const cell = document.createElement('div');
        cell.className = "p-1.5 md:p-2 bg-white flex flex-col justify-between overflow-hidden relative group hover:bg-gray-50/50 transition select-none";
        
        const dayNum = (i % 31) + 1;
        cell.innerHTML = `<span class="text-[10px] font-semibold text-gray-400 block self-start">${dayNum}</span><div class="space-y-1 overflow-y-auto no-scrollbar w-full" id="cal-cell-slot-${i}"></div>`;
        grid.appendChild(cell);
    }
}

function seedCalendarEvents() {
    initializeCalendarGrid(); 
    
    const appointments = [
        { slot: 4, label: "Promo Email Campaign", color: "bg-amber-100 text-amber-800 border-amber-200" },
        { slot: 12, label: "IG Flyer Push", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
        { slot: 24, label: "Product Copy Audit", color: "bg-emerald-100 text-emerald-800 border-emerald-200" }
    ];

    appointments.forEach(app => {
        const targetSlot = document.getElementById(`cal-cell-slot-${app.slot}`);
        if (targetSlot) {
            const block = document.createElement('span');
            block.className = `text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded border block truncate leading-tight tracking-tight shadow-sm ${app.color}`;
            block.innerText = app.label;
            targetSlot.appendChild(block);
        }
    });
}

// --- VAULT ASSET LEDGER ARRAY UTILITIES ---
function saveCurrentTextAsset() {
    const content = document.getElementById('creatorOutputContainer').innerText;
    const type = document.getElementById('creatorType').value;
    if (!content) return;

    const asset = {
        id: Date.now(),
        type: type,
        payload: content,
        format: "Text Script"
    };

    generationVault.push(asset);
    synchronizeVaultUI();
    alert("Asset securely committed to workspace storage vault library dashboard layout.");
}

function vaultFlyerAsset() {
    const headline = document.getElementById('flyerHeadline').value;
    const asset = {
        id: Date.now(),
        type: "Visual Grid Component",
        payload: `Blueprint title: ${headline}`,
        format: "Canvas Vector Layout Structure"
    };

    generationVault.push(asset);
    synchronizeVaultUI();
    alert("Design metrics cached to workspace tracking vault elements safely.");
}

function synchronizeVaultUI() {
    const emptyState = document.getElementById('vaultEmptyState');
    const grid = document.getElementById('vaultGrid');
    document.getElementById('dashAssetCount').innerText = `${generationVault.length} Core ${generationVault.length === 1 ? 'Asset' : 'Assets'}`;

    if (generationVault.length === 0) {
        emptyState.classList.remove('hidden');
        grid.classList.add('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    grid.classList.remove('hidden');
    grid.innerHTML = ""; 

    generationVault.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-white border border-gray-100 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-sm hover:border-indigo-100 transition";
        card.innerHTML = `
            <div class="space-y-1">
                <div class="flex items-center justify-between">
                    <span class="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full uppercase tracking-wider">${item.format}</span>
                    <span class="text-[10px] text-gray-300 font-mono">#${item.id.toString().slice(-4)}</span>
                </div>
                <h4 class="font-bold text-gray-800 text-sm truncate">${item.type}</h4>
                <p class="text-xs text-gray-500 line-clamp-2 leading-relaxed">${item.payload}</p>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-gray-50">
                <button onclick="removeVaultItem(${item.id})" class="text-[11px] font-semibold text-rose-500 hover:text-rose-700 transition flex items-center gap-1"><i data-lucide="trash-2" class="w-3 h-3"></i> Erase</button>
                <button onclick="alert('Asset extracted for multi-channel staging.')" class="text-[11px] font-bold text-gray-700 hover:text-indigo-600 transition flex items-center gap-1">Stage Track <i data-lucide="arrow-up-right" class="w-3 h-3"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });
    lucide.createIcons();
}

function removeVaultItem(itemId) {
    generationVault = generationVault.filter(i => i.id !== itemId);
    synchronizeVaultUI();
}

// --- BASIC UTILITY ACTIONS ---
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Material successfully copied to clipboard system operations storage.");
    });
}

function downloadFlyerAsset() {
    alert("Compiling layers... System dynamically packet-rendering your customized high-resolution PNG workspace download format cleanly.");
}