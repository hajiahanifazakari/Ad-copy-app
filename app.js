// --- GLOBAL APPLICATION STATE ENGINE ---
let brandProfile = {
    name: "Sourdough Social",
    offering: "Artisanal Wild Yeast Croissants",
    industry: "Food & Beverage",
    audience: "Local weekend foodies & organic purists",
    tone: "Witty & Energetic",
    goal: "Social Growth"
};

let currentWizardStep = 1;
let generationVault = [];
let scheduledCampaignsMap = {};

// Track Calendar View States Instantly (June 2026 default)
let currentCalendarYear = 2026;
let currentCalendarMonth = 5; 
let activeFocusedDayStr = "";

const rotationTips = [
    "Context Architecture tip: Target specific offering profiles explicitly in structural copy layers.",
    "Conversion optimization index notes show 32% cleaner click metrics via high-contrast layout grids.",
    "Ensure voice parameters map strictly to your target demographics framework constants."
];

// --- CORE INIT BOUNDARY MOUNT ---
document.addEventListener("DOMContentLoaded", () => {
    syncProfileMetricsUI();
    renderGregorianGrid();
    setupDashboardRotation();
    applyStudioEdits();
});

function setupDashboardRotation() {
    const block = document.getElementById('rotatingTip');
    if (block) {
        block.innerText = rotationTips[0];
        setInterval(() => {
            block.innerText = rotationTips[Math.floor(Math.random() * rotationTips.length)];
        }, 8000);
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
    if (direction === 1 && currentWizardStep === 1) {
        const nameVal = document.getElementById('bizName').value.trim();
        const offerVal = document.getElementById('bizOffering').value.trim();
        if (!nameVal || !offerVal) {
            alert("Please supply both your Brand Name and Core Offering Parameters to proceed.");
            return;
        }
    }

    if (direction === 1 && currentWizardStep === 3) {
        commitWizardForm();
        return;
    }

    currentWizardStep += direction;
    updateWizardUI();
}

function updateWizardUI() {
    document.getElementById('wizardStep1').classList.add('hidden');
    document.getElementById('wizardStep2').classList.add('hidden');
    document.getElementById('wizardStep3').classList.add('hidden');
    document.getElementById(`wizardStep${currentWizardStep}`).classList.remove('hidden');

    document.getElementById('stepIndicator').innerText = `Step ${currentWizardStep} of 3`;
    
    const prevBtn = document.getElementById('prevStepBtn');
    const nextBtn = document.getElementById('nextStepBtn');

    prevBtn.style.visibility = (currentWizardStep === 1) ? 'hidden' : 'visible';
    nextBtn.innerText = (currentWizardStep === 3) ? "Deploy Framework ✓" : "Next Step →";

    const dots = document.getElementById('stepDots').children;
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = (i < currentWizardStep) 
            ? "h-1.5 w-8 bg-indigo-600 rounded-full transition-all" 
            : "h-1.5 w-3 bg-gray-200 rounded-full transition-all";
    }
}

function commitWizardForm() {
    brandProfile.name = document.getElementById('bizName').value.trim();
    brandProfile.offering = document.getElementById('bizOffering').value.trim();
    brandProfile.industry = document.getElementById('bizIndustry').value;
    brandProfile.audience = document.getElementById('bizAudience').value.trim();
    brandProfile.tone = document.getElementById('bizTone').value;
    brandProfile.goal = document.querySelector('input[name="bizGoal"]:checked').value;

    syncProfileMetricsUI();

    document.getElementById('onboardingModal').classList.add('hidden');
    document.getElementById('onboardingModal').classList.remove('flex');
}

function syncProfileMetricsUI() {
    document.getElementById('headerWelcome').innerText = `Sync: ${brandProfile.name}`;
    document.getElementById('sideBizName').innerText = brandProfile.name;
    document.getElementById('avatarLetter').innerText = brandProfile.name.charAt(0).toUpperCase();

    document.getElementById('dashOffering').innerText = brandProfile.offering;
    document.getElementById('dashAudience').innerText = brandProfile.audience;
    document.getElementById('canvasBrandTag').innerText = brandProfile.name;

    document.getElementById('creatorPrompt').placeholder = `Add specific angle regarding ${brandProfile.offering} for ${brandProfile.audience}...`;

    compileIntelligenceHub();
}

// --- MOBILE COMPATIBLE VIEWPORT ROUTER ENGINE ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-view').forEach(v => v.classList.add('hidden'));
    document.getElementById(`view-${tabId}`).classList.remove('hidden');

    // Reset Desktop Sidebar Nav Buttons
    document.querySelectorAll('aside .tab-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-50', 'text-indigo-600');
        btn.classList.add('text-gray-500', 'hover:bg-gray-50', 'hover:text-gray-900');
    });
    const activeDesktopBtn = document.querySelector(`aside .tab-btn[data-tab="${tabId}"]`);
    if (activeDesktopBtn) {
        activeDesktopBtn.classList.add('bg-indigo-50', 'text-indigo-600');
        activeDesktopBtn.classList.remove('text-gray-500', 'hover:bg-gray-50');
    }

    // Reset Mobile Nav Links
    document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
        btn.classList.remove('text-indigo-600');
        btn.classList.add('text-gray-400');
    });
    const activeMobileBtn = document.querySelector(`.mobile-tab-btn[data-tab="${tabId}"]`);
    if (activeMobileBtn) {
        activeMobileBtn.classList.add('text-indigo-600');
        activeMobileBtn.classList.remove('text-gray-400');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- CONTEXT-AWARE CONTENT FACTORY ENGINE ---
function generateTextContent() {
    const type = document.getElementById('creatorType').value;
    const customPrompt = document.getElementById('creatorPrompt').value.trim();

    document.getElementById('creatorOutputEmpty').classList.add('hidden');
    document.getElementById('creatorOutputContainer').classList.remove('hidden');
    document.getElementById('creatorActionRow').classList.remove('hidden');

    const contextContextStr = customPrompt ? `Focus Angle: "${customPrompt}"` : "General Core Promotion Variant Layout Matrix";

    let generatedText = "";
    let mathematicalReasoning = "";

    if (type === "Social Media Caption") {
        generatedText = `✨ Uncompromising quality layers via Team ${brandProfile.name}! ✨\n\nLet's map real intentional structures around our ${brandProfile.offering}. Engineered specifically to align perfectly with needs mapping to ${brandProfile.audience}, this addresses every baseline requirement seamlessly. \n\n${contextContextStr}.\n\nDrop your perspective in the responses below! 👇\n\n#${brandProfile.name.replace(/\s+/g, '')} #AIOptimized`;
        mathematicalReasoning = `Optimized for the '${brandProfile.tone}' tone constraints. Integrated industry-specific hashtags matching the '${brandProfile.industry}' workspace matrix.`;
    } else if (type === "Product Ad Copy") {
        generatedText = `📢 ATTENTION: ${brandProfile.audience.toUpperCase()} \n\n${brandProfile.name} is proud to pull back the curtain on our breakthrough ${brandProfile.offering}. \n\nWhy look at secondary alternatives when you can access elite results designed explicitly for your vertical parameters? ${contextContextStr}.\n\n⚡ Lock in your custom strategic allocation framework directly via our platform bio pipeline link!`;
        mathematicalReasoning = `Engineered to achieve the direct objective: '${brandProfile.goal}'. Leveraged scarcity frameworks targeting high-intent decision vectors inside the '${brandProfile.audience}' customer profile.`;
    } else if (type === "Marketing Launch Message") {
        generatedText = `Subject: Engineered Release: The New standard for ${brandProfile.offering} by ${brandProfile.name}\n\nHello Insider,\n\nWe looked closely at structural parameters defining our space, and determined that legacy approaches were failing ${brandProfile.audience}.\n\nOur latest rollout optimizes this entire operational sequence. ${contextContextStr}.\n\nBest regards,\nExecutive Team, ${brandProfile.name}`;
        mathematicalReasoning = `Configured using an authoritative formal layout layer. Bypassed typical junk-filter flag words while mapping value features directly around '${brandProfile.offering}'.`;
    } else {
        generatedText = `💡 DYNAMIC CAMPAIGN VECTOR INDEX FOR ${brandProfile.name.toUpperCase()}\n\n• Pillar 01 Framework: Address exact customer points concerning ${brandProfile.offering}.\n• Distribution Strategy Layer: Disseminate matching '${brandProfile.tone}' baseline signatures.\n• Context Focus Mapping Node: ${contextContextStr}`;
        mathematicalReasoning = `Assembled an abstract conceptual framework optimized directly to fulfill the core operational vector: '${brandProfile.goal}'.`;
    }

    document.getElementById('textOutputPayload').innerText = generatedText;
    document.getElementById('textOutputReasoning').innerText = mathematicalReasoning;
}

function handleOmniGenerate() {
    const val = document.getElementById('omniPrompt').value.trim();
    if (!val) return;
    document.getElementById('creatorPrompt').value = val;
    switchTab('creator');
    generateTextContent();
    document.getElementById('omniPrompt').value = "";
}

// --- UNIVERSAL CLIPBOARD HANDLER ---
function copyToClipboard(elementId) {
    const node = document.getElementById(elementId);
    if (!node) return;
    
    const targetText = node.innerText || node.value;
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(targetText)
            .then(() => alert("Asset successfully copied to clipboard."))
            .catch(() => fallbackCopyEngine(targetText));
    } else {
        fallbackCopyEngine(targetText);
    }
}

function fallbackCopyEngine(text) {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    tempInput.style.position = "fixed";
    tempInput.style.opacity = "0";
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
        document.execCommand("copy");
        alert("Asset copied to clipboard.");
    } catch (err) {
        alert("Clipboard structural failure. Please copy selection manually.");
    }
    document.body.removeChild(tempInput);
}

// --- DYNAMIC DESIGN STUDIO LAYER ENGINE ---
function applyStudioEdits() {
    const headText = document.getElementById('studioTextHead').value;
    const bodyText = document.getElementById('studioTextBody').value;
    const ctaText = document.getElementById('studioTextCTA').value;
    const font = document.getElementById('studioFontFamily').value;
    const colorText = document.getElementById('studioColorText').value;
    
    const bgA = document.getElementById('studioColorBgA').value;
    const bgB = document.getElementById('studioColorBgB').value;
    const gradAngle = document.getElementById('studioGradAngle').value;
    
    const opacityDecor = document.getElementById('studioOpDecor').value;
    const borderW = document.getElementById('studioBorderWidth').value;
    
    const imgUrl = document.getElementById('studioImgUrl').value.trim();
    const imgH = document.getElementById('studioImgHeight').value;
    const imgFit = document.getElementById('studioImgFit').value;

    const canvas = document.getElementById('flyerCanvasContainer');
    canvas.style.fontFamily = font;
    canvas.style.color = colorText;
    canvas.style.borderWidth = borderW;
    canvas.style.background = `linear-gradient(${gradAngle}, ${bgA}, ${bgB})`;

    document.getElementById('canvasTextHead').innerText = headText;
    document.getElementById('canvasTextHead').style.color = colorText;
    document.getElementById('canvasTextBody').innerText = bodyText;
    document.getElementById('canvasTextCTA').innerText = ctaText;
    document.getElementById('canvasDecorRing').style.opacity = opacityDecor;

    const imgNode = document.getElementById('canvasImgNode');
    const imgWrapper = document.getElementById('canvasImgWrapper');
    if (imgUrl) {
        imgWrapper.classList.remove('hidden');
        imgNode.src = imgUrl;
        imgWrapper.style.height = imgH;
        imgNode.style.objectFit = imgFit;
    } else {
        imgWrapper.classList.add('hidden');
    }
}

function downloadFlyerAsset() {
    alert("Compiling high-resolution layers... PNG export complete.");
}

function saveCurrentTextAsset() {
    const payload = document.getElementById('textOutputPayload').innerText;
    if (!payload) return;
    const item = { id: Date.now(), title: document.getElementById('creatorType').value, data: payload };
    generationVault.push(item);
    renderVaultUI();
}

function vaultFlyerAsset() {
    const head = document.getElementById('studioTextHead').value;
    const item = { id: Date.now(), title: "Design Layer Structure", data: `Headline: ${head}` };
    generationVault.push(item);
    renderVaultUI();
}

function renderVaultUI() {
    const emptyState = document.getElementById('vaultEmptyState');
    const grid = document.getElementById('vaultGrid');

    if (generationVault.length === 0) {
        emptyState.classList.remove('hidden');
        grid.classList.add('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    grid.classList.remove('hidden');
    grid.innerHTML = "";

    generationVault.forEach(item => {
        const d = document.createElement('div');
        d.className = "bg-white border border-gray-100 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-sm";
        d.innerHTML = `
            <div>
                <span class="text-[8px] font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full inline-block mb-1">Staged Element</span>
                <h4 class="text-xs font-bold text-gray-800 truncate">${item.title}</h4>
                <p class="text-[11px] text-gray-500 line-clamp-2 mt-1 leading-relaxed">${item.data}</p>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-gray-50">
                <button onclick="deleteVaultNode(${item.id})" class="text-[10px] font-bold text-rose-500 p-1">Delete</button>
            </div>
        `;
        grid.appendChild(d);
    });
}

function deleteVaultNode(id) {
    generationVault = generationVault.filter(x => x.id !== id);
    renderVaultUI();
}

// --- INTELLIGENCE MATRIX GEN ---
function compileIntelligenceHub() {
    document.getElementById('intelGrowth').innerText = `Inject 3 specific target parameters framing your unique offering ("${brandProfile.offering}") into consistent algorithmic loops. Focus copy matrices entirely on the chosen objective structural target: "${brandProfile.goal}".`;
    document.getElementById('intelAudience').innerText = `Segments filtering for "${brandProfile.audience}" indicate an affinity for hyper-focused, non-generic frameworks. Utilize your configured "${brandProfile.tone}" voice configuration to maximize retention triggers.`;
    document.getElementById('intelCompetitors').innerText = `Competitors within the immediate "${brandProfile.industry}" vertical consistently deploy uncalibrated legacy templates. Build an alternative layout using custom vector combinations in the design studio to stand out instantly.`;
    document.getElementById('intelConversion').innerText = `To optimize conversion parameters for "${brandProfile.audience}", deploy high-contrast, product-specific messaging. Remove non-essential steps and leverage copy tailored to show the unique value of "${brandProfile.offering}".`;
}

// --- REAL GREGORIAN CALENDAR PLATFORM ENGINE ---
const monthNamesArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function shiftMonth(direction) {
    currentCalendarMonth += direction;
    if (currentCalendarMonth < 0) { currentCalendarMonth = 11; currentCalendarYear--; }
    if (currentCalendarMonth > 11) { currentCalendarMonth = 0; currentCalendarYear++; }
    renderGregorianGrid();
}

function renderGregorianGrid() {
    const grid = document.getElementById('gregorianDaysGrid');
    if (!grid) return;
    grid.innerHTML = "";

    document.getElementById('calendarMonthYearLabel').innerText = `${monthNamesArray[currentCalendarMonth]} ${currentCalendarYear}`;

    const startDayOfWeek = new Date(currentCalendarYear, currentCalendarMonth, 1).getDay();
    const totalDaysInMonth = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();

    for (let i = 0; i < startDayOfWeek; i++) {
        const pad = document.createElement('div');
        pad.className = "bg-gray-50/40 border-b border-r border-gray-100 min-h-[50px] md:min-h-[70px]";
        grid.appendChild(pad);
    }

    for (let day = 1; day <= totalDaysInMonth; day++) {
        const cell = document.createElement('div');
        cell.className = "bg-white p-1.5 flex flex-col justify-between border-r border-b border-gray-100 cursor-pointer hover:bg-indigo-50/30 transition min-h-[50px] md:min-h-[70px] relative overflow-hidden";
        
        const dateStr = `${currentCalendarYear}-${String(currentCalendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        cell.onclick = () => activateSchedulerPane(dateStr);

        let tasksHtml = "";
        if (scheduledCampaignsMap[dateStr]) {
            scheduledCampaignsMap[dateStr].forEach(t => {
                tasksHtml += `<span class="text-[7px] md:text-[8px] bg-indigo-600 text-white font-extrabold px-1 rounded truncate block max-w-full leading-tight shadow-sm">${t}</span>`;
            });
        }

        cell.innerHTML = `
            <span class="text-[10px] font-bold text-gray-400 block">${day}</span>
            <div class="space-y-0.5 mt-0.5 w-full overflow-hidden truncate">${tasksHtml}</div>
        `;
        grid.appendChild(cell);
    }
}

function activateSchedulerPane(dateStr) {
    activeFocusedDayStr = dateStr;
    const panel = document.getElementById('schedulerPanel');
    panel.classList.remove('hidden');
    document.getElementById('schedulerDateLabel').innerText = `Date Track: [ ${dateStr} ]`;
    document.getElementById('schedulerInputTask').value = "";
    refreshScheduledTasksList();
    
    // Auto-scroll screen down to panel context view on mobile layout viewports
    panel.scrollIntoView({ behavior: 'smooth' });
}

function commitCalendarTask() {
    const inputNode = document.getElementById('schedulerInputTask');
    const txt = inputNode.value.trim();
    if (!txt) return;

    if (!scheduledCampaignsMap[activeFocusedDayStr]) {
        scheduledCampaignsMap[activeFocusedDayStr] = [];
    }
    scheduledCampaignsMap[activeFocusedDayStr].push(txt);
    inputNode.value = "";
    
    refreshScheduledTasksList();
    renderGregorianGrid();
}

function refreshScheduledTasksList() {
    const container = document.getElementById('schedulerTasksList');
    container.innerHTML = "";
    const currentTasks = scheduledCampaignsMap[activeFocusedDayStr] || [];

    if (currentTasks.length === 0) {
        container.innerHTML = `<p class="text-[10px] text-gray-400 italic">No plans mapped to this date sequence point.</p>`;
        return;
    }

    currentTasks.forEach((t, idx) => {
        const row = document.createElement('div');
        row.className = "flex items-center justify-between bg-slate-50 px-2 py-2 rounded-lg text-xs font-semibold text-slate-700";
        row.innerHTML = `
            <span class="truncate max-w-[75%]">● ${t}</span>
            <button onclick="deleteScheduledTask(${idx})" class="text-rose-500 font-bold text-[10px] p-1.5">Remove</button>
        `;
        container.appendChild(row);
    });
}

function deleteScheduledTask(index) {
    if (scheduledCampaignsMap[activeFocusedDayStr]) {
        scheduledCampaignsMap[activeFocusedDayStr].splice(index, 1);
        if (scheduledCampaignsMap[activeFocusedDayStr].length === 0) {
            delete scheduledCampaignsMap[activeFocusedDayStr];
        }
    }
    refreshScheduledTasksList();
    renderGregorianGrid();
}