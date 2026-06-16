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
    initializeCalendarGrid();
    rotateMarketingTips();
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
    // If going forward from Step 1, make sure they typed something
    if (direction === 1 && currentWizardStep === 1) {
        const nameVal = document.getElementById('bizName').value.trim();
        if (!nameVal) {
            alert("Please enter a Business Name to continue.");
            return;
        }
    }

    // Step 3 submission execution boundary
    if (direction === 1 && currentWizardStep === 3) {
        executeFormDeployment();
        return;
    }

    currentWizardStep += direction;
    updateWizardUI();
}

function updateWizardUI() {
    // Hide all step windows cleanly
    document.getElementById('wizardStep1').classList.add('hidden');
    document.getElementById('wizardStep2').classList.add('hidden');
    document.getElementById('wizardStep3').classList.add('hidden');

    // Show current target step window
    document.getElementById(`wizardStep${currentWizardStep}`).classList.remove('hidden');

    // Update numbers indicators
    document.getElementById('stepIndicator').innerText = `Step ${currentWizardStep} of 3`;
    
    const prevBtn = document.getElementById('prevStepBtn');
    const nextBtn = document.getElementById('nextStepBtn');

    // Show/hide Back button based on index position
    if (currentWizardStep === 1) {
        prevBtn.classList.add('invisible');
    } else {
        prevBtn.classList.remove('invisible');
    }
    
    // Change layout labels for final deployment step
    if (currentWizardStep === 3) {
        nextBtn.innerText = "Deploy AI Pipeline ✓";
    } else {
        nextBtn.innerText = "Next Step →";
    }

    // Update bottom dot lights
    const dots = document.getElementById('stepDots').children;
    for (let i = 0; i < dots.length; i++) {
        if (i < currentWizardStep) {
            dots[i].className = "h-1.5 w-8 bg-indigo-600 rounded-full transition-all";
        } else {
            dots[i].className = "h-1.5 w-3 bg-gray-200 rounded-full transition-all";
        }
    }
}

function executeFormDeployment() {
    // Read final variables from inputs safely
    brandProfile.name = document.getElementById('bizName').value || "Your Brand Studio";
    brandProfile.industry = document.getElementById('bizIndustry').value;
    brandProfile.audience = document.getElementById('bizAudience').value || "General Public Niche";
    brandProfile.tone = document.getElementById('bizTone').value;
    
    const selectedGoal = document.querySelector('input[name="bizGoal"]:checked');
    brandProfile.goal = selectedGoal ? selectedGoal.value : "Social Growth";

    // Write text layout details directly into your workspace UI elements
    document.getElementById('headerWelcome').innerText = `Sync: ${brandProfile.name}`;
    document.getElementById('sideBizName').innerText = brandProfile.name;
    document.getElementById('avatarLetter').innerText = brandProfile.name.charAt(0).toUpperCase();

    // Fire standard modular dynamic generators loops
    synthesizeBrandKit();
    compileStrategyMatrix();
    seedCalendarEvents();

    // Close screen overlay modal element smoothly
    document.getElementById('onboardingModal').classList.add('hidden');
    document.getElementById('onboardingModal').classList.remove('flex');
}

// --- APPLICATION VIEWPORT CONTROLLER ROUTER ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-view').forEach(view => view.classList.add('hidden'));
    document.getElementById(`view-${tabId}`).classList.remove('hidden');

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-50', 'text-indigo-600');
        btn.classList.add('text-gray-500', 'hover:bg-gray-50', 'hover:text-gray-900');
    });

    document.querySelectorAll(`.tab-btn[data-tab="${tabId}"]`).forEach(btn => {
        btn.classList.add('bg-indigo-50', 'text-indigo-600');
        btn.classList.remove('text-gray-500', 'hover:bg-gray-50');
    });
}

function updateCreatorOptions() {
    const type = document.getElementById('creatorType').value;
    const styleSection = document.getElementById('captionStyleSection');
    
    if (type === "Social Media Caption") {
        styleSection.classList.remove('hidden');
    } else {
        styleSection.classList.add('hidden');
    }
}

// --- TEXT GENERATION LOGIC LOOP ---
function generateTextContent() {
    const type = document.getElementById('creatorType').value;
    const prompt = document.getElementById('creatorPrompt').value;
    
    // Get caption style if it's a social media caption
    let captionStyle = "mixed";
    const styleSelector = document.getElementById('captionStyle');
    if (styleSelector && type === "Social Media Caption") {
        captionStyle = styleSelector.value;
    }
    
    const emptyState = document.getElementById('creatorOutputEmpty');
    const loader = document.getElementById('creatorOutputLoader');
    const container = document.getElementById('creatorOutputContainer');
    const actionRow = document.getElementById('creatorActionRow');

    if (!prompt && type !== "High-Density Hashtags") {
        alert("Please enter context parameters to generate content.");
        return;
    }

    emptyState.classList.add('hidden');
    container.classList.add('hidden');
    actionRow.classList.add('hidden');
    loader.classList.remove('hidden');

    setTimeout(() => {
        loader.classList.add('hidden');
        container.classList.remove('hidden');
        actionRow.classList.remove('hidden');

        const generatedContent = runTextSynthesisEngine(type, prompt, captionStyle);
        container.innerText = generatedContent;
        container.style.fontSize = '0.875rem';
        container.style.whiteSpace = 'pre-wrap';
    }, 1200);
}

function regenerateContent() {
    generateTextContent();
}

function generateMultipleCaptions(userPrompt, style = "mixed") {
    const name = brandProfile.name || "Our Brand";
    const audience = brandProfile.audience || "our target market";
    const tone = brandProfile.tone;
    const detail = userPrompt ? `"${userPrompt}"` : "our core value proposition";

    const promotionalCaptions = [
        `🎉 LIMITED TIME OFFER! 🎉\n\n${detail} is here and we're keeping it exclusive.\n\n📢 Grab yours before we run out.\n→ Link in bio\n\n#${name.replace(/\s+/g, '')} #ExclusiveDeal #ShopNow`,
        
        `🔥 FLASH SALE ALERT 🔥\n\nOur ${audience} are going WILD for ${detail}!\n\n⏰ Available for 48 hours only\n💰 Unbeatable pricing\n✨ While supplies last\n\n#LimitedOffer #MustHave #${brandProfile.industry.replace(/\s+/g, '')}`
    ];

    const educationalCaptions = [
        `💡 Did you know? 💡\n\n${detail} can transform how your business operates.\n\nHere's why it matters:\n✓ Proven results\n✓ Time-tested strategy\n✓ Industry standard\n\nReady to learn more? Drop a comment! 👇\n\n#Education #Growth #${name.replace(/\s+/g, '')}`,
        
        `📚 INSIDER KNOWLEDGE 📚\n\nWe're breaking down ${detail} into actionable steps:\n\n1️⃣ Understand the fundamentals\n2️⃣ Apply to your business\n3️⃣ Track results & optimize\n\nWhich step are you on? Let's discuss below!\n\n#Marketing101 #Strategy #${audience.replace(/\s+/g, '')}`
    ];

    const engagementCaptions = [
        `🤔 Quick question for you:\n\nWhat's your biggest challenge with ${detail}?\n\nComment below and let's brainstorm together! 💬\n\nOur ${audience} community always brings the best insights.\n\n#CommunityFirst #AskUs #${name.replace(/\s+/g, '')}`,
        
        `🎬 STORY TIME 🎬\n\nWhen we first tried ${detail}, we weren't sure if it would work.\n\nBut then something amazing happened...\n\nSwipe to see the full breakdown! ➡️\n\n#BehindTheScenes #Growth #${brandProfile.industry.replace(/\s+/g, '')}`
    ];

    const salesFocusedCaptions = [
        `💼 SOLUTION ALERT 💼\n\nStruggles with ${detail}?\n\nThat's exactly why ${name} exists.\n\n✅ Proven system\n✅ ${audience} tested\n✅ Results guaranteed\n\nDM for a free consultation 📩\n\n#SalesPitch #${name.replace(/\s+/g, '')} #ConvertNow`,
        
        `🚀 TRANSFORMATION INCOMING 🚀\n\n${name} clients who mastered ${detail} saw:\n\n📈 300%+ engagement increase\n💰 2x revenue growth\n⏱️ 50% time savings\n\nReady to join them?\n→ Link in bio for details\n\n#CaseStudy #ResultsDriven #GrowthHacking`
    ];

    let selectedCaptions = [];
    if (style === "promotional") selectedCaptions = promotionalCaptions;
    else if (style === "educational") selectedCaptions = educationalCaptions;
    else if (style === "engagement") selectedCaptions = engagementCaptions;
    else if (style === "sales") selectedCaptions = salesFocusedCaptions;
    else {
        selectedCaptions = [
            ...promotionalCaptions,
            ...educationalCaptions,
            ...engagementCaptions,
            ...salesFocusedCaptions
        ];
    }

    return selectedCaptions;
}

function runTextSynthesisEngine(type, userPrompt, captionStyle = "mixed") {
    const name = brandProfile.name || "Our Brand";
    const audience = brandProfile.audience || "our target market";
    const tone = brandProfile.tone;
    const detail = userPrompt ? `"${userPrompt}"` : "our core value proposition";

    switch(type) {
        case "Social Media Caption":
            const captions = generateMultipleCaptions(userPrompt, captionStyle);
            return captions[Math.floor(Math.random() * captions.length)];
            
        case "Product Description":
            const descriptions = [
                `🌟 Introducing the ${name} flagship solution.\n\nBuilt to solve ${detail}, this represents the pinnacle of modern design and functionality. Perfect for ${audience} who refuse to compromise.\n\nKey Features:\n• Premium quality engineering\n• Optimized for daily impact\n• ${tone} aesthetic that turns heads\n\n👉 Shop now and transform your business.`,
                
                `Engineered for excellence. The ${name} solution tackles ${detail} with unprecedented precision.\n\nWhether you're in ${brandProfile.industry} or beyond, this transforms how ${audience} operate daily.\n\nWhat's included:\n✓ Professional-grade tools\n✓ Expert support\n✓ Lifetime value\n\nYour competitive advantage starts here.`
            ];
            return descriptions[Math.floor(Math.random() * descriptions.length)];
            
        case "Email Newsletter":
            return `Subject: 🚀 ${name} Insider Exclusive: ${detail}\n\nHello valued ${audience},\n\nThe market moves fast, but ${name} moves faster.\n\nThis week we're officially releasing a breakthrough initiative focused on ${detail}. This changes everything for our community.\n\n🎯 What's Inside This Week:\n→ Exclusive insights tailored specifically to your needs\n→ Real strategies we're using right now with results\n→ Direct access to our latest innovations\n→ Special offer for subscribers only\n\nOur ${tone} approach means no fluff—just actionable, results-driven value.\n\nHere's what one of our clients said:\n"This completely transformed how we think about ${detail}. Highly recommended!"\n\nReady to level up and transform your approach?\n\n[CLICK HERE TO LEARN MORE →]\n\nBest regards,\n${name} Team\n\nP.S. This offer expires in 3 days. Don't miss out on the breakthrough your business needs!`;
            
        case "Blog Campaign Outlines":
            return `📝 BLOG CAMPAIGN OUTLINE: ${detail}\n\n═══════════════════════════════════════════════\n\n1. THE HOOK\n"Why ${audience} Can't Ignore ${detail} Anymore"\n\nOpening Hook:\n- Shocking statistic about ${detail}\n- Personal story from real client experience\n- Teaser of the transformation possible\n- Hook completion: "Read on to discover the 3-step system..."\n\n2. THE PROBLEM SECTION\n"Why Your Current Approach Is Costing You"\n\nPain Points for ${audience}:\n- Specific struggles with ${detail}\n- Market evidence and data supporting the problem\n- The hidden cost of inaction (time, money, missed opportunities)\n- How competitors are solving this\n\n3. THE TRANSFORMATION FRAMEWORK\n"How ${name} Changes The Game"\n\nOur 3-Part System:\n- Step 1: [Specific action]\n- Step 2: [Specific action]\n- Step 3: [Specific action]\n\nReal Case Studies:\n- Client A: Results\n- Client B: Results\n- Client C: Results\n\n4. THE ACTION STEPS\n"Your Roadmap to Results"\n\nThis Week:\n✓ Action 1\n✓ Action 2\n✓ Action 3\n\nNext Month:\n✓ Advanced implementation\n✓ Scale your results\n✓ Optimize performance\n\n5. THE CALL TO ACTION\n"Take The First Step Today"\n\n→ Download our free guide\n→ Book a strategy call\n→ Join our community\n\nPowered by ${tone} energy and results-driven strategy!`;
            
        case "High-Density Hashtags":
            const industryTag = brandProfile.industry.replace(/\s+/g, '');
            return `🏷️ HASHTAG STRATEGY FOR ${name.toUpperCase()}\n\n═══════════════════════════════════════════════\n\n📌 BRANDED HASHTAGS (Always Use - Build Your Brand)\n#${name.replace(/\s+/g, '')} #${name.replace(/\s+/g, '')}Team #Team${name.replace(/\s+/g, '')}\n\n🎯 NICHE AUTHORITY TAGS (10-15% usage - Show Expertise)\n#${detail.split(' ')[0].toLowerCase()}Strategy #${detail.split(' ')[0].toLowerCase()}Tips\n#ContentCreator #${tone.split(' ')[0]} #${industryTag}\n\n🔥 TRENDING AMPLIFIERS (5-10% usage - Gain Visibility)\n#FYP #ForYou #Viral #Trending #Explore\n#${new Date().getFullYear()}Trends #ViralVideo\n\n👥 AUDIENCE TARGETING TAGS (20-30% usage - Reach Right People)\n#${audience.split(' ')[0].toLowerCase()}Community #${audience.replace(/\s+/g, '')}Growth\n#${brandProfile.goal.replace(/\s+/g, '')} #${industryTag}Growth\n\n💬 COMMUNITY BUILDERS (Engagement - Build Connection)\n#Ask${audience.split(' ')[0]} #${name.replace(/\s+/g, '')}Fam #JoinOurCommunity\n#${industryTag}Lovers #${industryTag}Addicts\n\n📊 DEPLOYMENT STRATEGY:\n30% Branded | 40% Niche/Authority | 20% Trending | 10% Community\n\n💡 Pro Tips:\n• Mix popular and niche tags\n• Test combinations weekly\n• Track performance by tag\n• Rotate trending tags daily`;
            
        default:
            return `📋 Strategic Framework: ${detail}\n\n• Primary Focus: ${tone}\n• Target Audience: ${audience}\n• Industry: ${brandProfile.industry}\n• Optimization Goal: ${brandProfile.goal}\n\nNext Steps:\n✓ Define audience segments\n✓ Create content calendar\n✓ Establish KPI tracking\n✓ Launch initial campaign`;
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
    
    const canvas = document.getElementById('flyerRenderCanvas');
    const decoration = document.getElementById('canvasBgDecoration');
    
    // Apply visual effects based on prompt keywords
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes('abstract') || lowerPrompt.includes('modern')) {
        decoration.innerHTML = '<div class="w-96 h-96 rounded-full border-[20px] border-white/30 animate-pulse"></div>';
    } else if (lowerPrompt.includes('geometric') || lowerPrompt.includes('pattern')) {
        decoration.innerHTML = '<div class="grid grid-cols-4 gap-4 w-full h-full p-8 opacity-20"><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div><div class="bg-white rounded-lg"></div></div>';
    } else if (lowerPrompt.includes('gradient') || lowerPrompt.includes('smooth')) {
        decoration.innerHTML = '<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>';
    }
    
    document.getElementById('flyerBgPrompt').value = "";
    setTimeout(() => alert(`✨ AI Vector Injection complete: "${prompt}"\nBackground pattern applied to canvas.`), 300);
}

// --- GRAPHICS BRAND PALETTE COMPILER ---
function synthesizeBrandKit() {
    const container = document.getElementById('kitColorContainer');
    if (!container) return;
    container.innerHTML = "";

    let colors = [];
    if (brandProfile.tone.includes("Witty") || brandProfile.tone.includes("Energetic")) {
        colors = [
            { name: "Electric Indigo", hex: "#4F46E5" },
            { name: "Vibrant Violet", hex: "#7C3AED" },
            { name: "Amber Pop", hex: "#F59E0B" },
            { name: "Hot Pink", hex: "#EC4899" },
            { name: "Cyan Burst", hex: "#06B6D4" }
        ];
    } else if (brandProfile.tone.includes("Professional")) {
        colors = [
            { name: "Navy Corporate", hex: "#1E3A8A" },
            { name: "Steel Slate", hex: "#475569" },
            { name: "Charcoal", hex: "#1F2937" },
            { name: "Silver Mist", hex: "#D1D5DB" },
            { name: "Accent Blue", hex: "#3B82F6" }
        ];
    } else if (brandProfile.tone.includes("Warm")) {
        colors = [
            { name: "Warm Rose", hex: "#FB7185" },
            { name: "Sunset Gold", hex: "#FBBF24" },
            { name: "Coral Reef", hex: "#FF6B6B" },
            { name: "Peach Cream", hex: "#FECACA" },
            { name: "Terracotta", hex: "#EA580C" }
        ];
    } else {
        colors = [
            { name: "Slate Gray", hex: "#64748B" },
            { name: "Cool Mint", hex: "#10B981" },
            { name: "Elegant Gold", hex: "#D97706" },
            { name: "Stone White", hex: "#F8FAFC" },
            { name: "Deep Charcoal", hex: "#0F172A" }
        ];
    }

    colors.forEach(c => {
        const row = document.createElement('div');
        row.className = "flex items-center justify-between p-2 border border-gray-50 rounded-xl hover:bg-gray-50 transition cursor-pointer group";
        row.onclick = () => {
            navigator.clipboard.writeText(c.hex);
            const feedback = document.createElement('span');
            feedback.className = "absolute text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition";
            feedback.innerText = "Copied!";
        };
        row.innerHTML = `
            <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg shadow-inner border border-black/5" style="background-color: ${c.hex}"></div>
                <div>
                    <p class="text-xs font-semibold text-gray-800">${c.name}</p>
                    <span class="text-[10px] text-gray-400 font-mono">${c.hex}</span>
                </div>
            </div>
            <span class="group-hover:opacity-100 opacity-50 transition">📋</span>
        `;
        container.appendChild(row);
    });

    const voiceContainer = document.getElementById('kitVoiceContainer');
    voiceContainer.innerHTML = `
        <div class="p-3 border-l-4 border-indigo-500 bg-indigo-50/30 rounded-r-xl">
            <p class="text-xs font-semibold text-gray-800 mb-0.5">Core Tonality Vector</p>
            <p class="text-[11px] text-gray-500 leading-normal">Maintain an output standard configured explicitly as: <strong>${brandProfile.tone}</strong></p>
        </div>
        <div class="p-3 border-l-4 border-amber-500 bg-amber-50/30 rounded-r-xl">
            <p class="text-xs font-semibold text-gray-800 mb-0.5">Primary Objective</p>
            <p class="text-[11px] text-gray-500 leading-normal">Focus optimization vectors on: <strong>${brandProfile.goal}</strong></p>
        </div>
    `;
}

function compileStrategyMatrix() {
    const grid = document.getElementById('strategyCardGrid');
    if (!grid) return;
    
    let strategies = [];
    
    if (brandProfile.goal === "Social Growth") {
        strategies = [
            {
                tag: "Week 1-2: Foundation",
                title: "Audit & Optimize Current Presence",
                desc: "Analyze existing channels, optimize profiles with keywords, update bio with clear CTAs. Baseline metrics: followers, engagement rate, traffic.",
                icon: "📊",
                action: "Start profiling audit",
                kpis: "Baseline metrics collected"
            },
            {
                tag: "Week 3-4: Content Strategy",
                title: "Build Content Pillars (3-5 themes)",
                desc: "Define core topics that resonate with ${audience}. Create editorial calendar. Content mix: 60% educational, 30% promotional, 10% personal.",
                icon: "📝",
                action: "Create content calendar",
                kpis: "30 posts planned, 5 pillars defined"
            },
            {
                tag: "Month 2: Engagement Engine",
                title: "Master The Comment Game",
                desc: "Spend 30 min/day engaging in niche communities. Comment on competitor posts (5-10), engage with followers. Build relationships, not just followers.",
                icon: "💬",
                action: "Set engagement goals",
                kpis: "50+ quality comments daily, 5-10% engagement rate"
            },
            {
                tag: "Month 2-3: Growth Acceleration",
                title: "Influencer Partnerships & Collaborations",
                desc: "Partner with 3-5 micro-influencers (10K-100K). Co-create content, cross-promote. Guest appearances on podcasts/videos.",
                icon: "🤝",
                action: "Build influencer list",
                kpis: "3-5 partnerships locked, 50K+ reach"
            },
            {
                tag: "Ongoing: Analytics & Optimization",
                title: "Weekly Performance Review",
                desc: "Track: follower growth, engagement rate, click-through, conversion. What's working? Double down. What's not? Pivot quickly.",
                icon: "📈",
                action: "Set up tracking",
                kpis: "20%+ monthly growth, 3%+ engagement"
            },
            {
                tag: "Content Ideas",
                title: "Proven Post Formats for ${audience}",
                desc: "Carousel posts (120% engagement), Reels (200% engagement), User testimonials, Behind-the-scenes, Educational threads, Trending sounds/music.",
                icon: "🎬",
                action: "Create content templates",
                kpis: "5 template formats ready"
            }
        ];
    } else {
        strategies = [
            {
                tag: "Foundation: Audience Deep Dive",
                title: "Identify Your Ideal Customer",
                desc: "Create detailed buyer personas. Who has money? What pain does your solution solve? What objections will they have? Build messaging around this.",
                icon: "👥",
                action: "Create buyer personas",
                kpis: "3-5 detailed personas documented"
            },
            {
                tag: "Week 1-2: Lead Magnet Launch",
                title: "High-Value Lead Magnet (Free Resource)",
                desc: "PDF guide, checklist, template, or mini-course. This must solve a specific problem your audience has. Drive traffic via ads, organic, partnerships.",
                icon: "🎁",
                action: "Create lead magnet",
                kpis: "100+ leads captured, 20%+ conversion"
            },
            {
                tag: "Week 2-3: Sales Funnel Setup",
                title: "Email Sequence: Awareness → Decision",
                desc: "5-7 email sequence. Email 1: Lead magnet confirmation. Email 2-3: Build trust with case studies. Email 4-5: Limited-time offer. Email 6-7: Urgency/scarcity.",
                icon: "📧",
                action: "Build email sequence",
                kpis: "40%+ open rate, 10%+ click rate"
            },
            {
                tag: "Week 3-4: Paid Ads Launch",
                title: "High-Converting Ad Campaigns",
                desc: "Run ads to lead magnet on Facebook/Instagram. Test 3-5 ad creatives. Target lookalikes of best customers. Budget: $500-1000 to start. Track CAC closely.",
                icon: "💰",
                action: "Set up ad campaigns",
                kpis: "$5-15 cost per lead, 2-3% CTR"
            },
            {
                tag: "Month 2: Sales Optimization",
                title: "Direct Sales/Demo Calls",
                desc: "Offer free strategy call to qualified leads. Discovery → Demo → Proposal. Use proven sales framework: Problem → Agitation → Solution.",
                icon: "📞",
                action: "Create sales scripts",
                kpis: "20%+ show-up rate, 30%+ close rate"
            },
            {
                tag: "Month 2-3: Retargeting Strategy",
                title: "Win Back Warm Leads",
                desc: "Retarget website visitors who didn't convert. Dynamic ads showing your product/service. Offer limited-time discount. This converts 5-10x better.",
                icon: "🎯",
                action: "Set up retargeting pixels",
                kpis: "3-5x ROAS, 50%+ reduction in CAC"
            }
        ];
    }
    
    grid.innerHTML = "";
    strategies.forEach((strat, idx) => {
        const cardColors = idx % 2 === 0 ? "bg-indigo-50/50 border-indigo-100 hover:border-indigo-300" : "bg-purple-50/50 border-purple-100 hover:border-purple-300";
        const card = document.createElement('div');
        card.className = `border rounded-xl p-4 ${cardColors} shadow-sm space-y-2 hover:shadow-md transition cursor-pointer group`;
        card.onclick = () => showStrategyDetails(strat);
        card.innerHTML = `
            <div class="flex items-start justify-between">
                <div>
                    <span class="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">${strat.tag}</span>
                    <h4 class="font-semibold text-gray-800 text-sm mt-1">${strat.title}</h4>
                </div>
                <span class="text-2xl">${strat.icon}</span>
            </div>
            <p class="text-xs text-gray-500 leading-relaxed">${strat.desc}</p>
            <div class="flex gap-2 pt-2">
                <button onclick="event.stopPropagation(); alert('${strat.action}')" class="text-[10px] text-indigo-600 font-semibold hover:text-indigo-700">→ ${strat.action}</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function showStrategyDetails(strat) {
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4";
    modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden">
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <h2 class="text-2xl font-bold">${strat.icon} ${strat.title}</h2>
                <p class="text-indigo-100 text-sm mt-1">${strat.tag}</p>
            </div>
            <div class="p-6 space-y-4">
                <div>
                    <h3 class="font-bold text-gray-800 mb-2">Strategy Overview</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">${strat.desc}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                        <span class="text-[10px] text-gray-400 font-bold uppercase">Recommended Action</span>
                        <p class="text-sm font-semibold text-indigo-600 mt-1">${strat.action}</p>
                    </div>
                    <div>
                        <span class="text-[10px] text-gray-400 font-bold uppercase">Success KPIs</span>
                        <p class="text-sm font-semibold text-green-600 mt-1">${strat.kpis}</p>
                    </div>
                </div>
                <div class="pt-4 bg-indigo-50/30 rounded-xl p-4">
                    <p class="text-xs text-gray-600"><strong>💡 Pro Tip:</strong> Focus on one strategy at a time. Consistency beats perfection. Track everything with data. Optimize weekly.</p>
                </div>
            </div>
            <div class="flex gap-3 p-6 border-t border-gray-100 bg-gray-50">
                <button onclick="this.closest('.fixed').remove()" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-xl transition">
                    Got It! Close
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function initializeCalendarGrid() {
    const grid = document.getElementById('calendarDaysGrid');
    if (!grid) return;
    grid.innerHTML = ""; 
    
    for (let i = 1; i <= 35; i++) {
        const cell = document.createElement('div');
        cell.className = "p-1.5 md:p-2 bg-white flex flex-col justify-between overflow-hidden relative group hover:bg-gray-50/50 transition select-none";
        const dayNum = (i % 31) + 1;
        cell.innerHTML = `<span class="text-[10px] font-semibold text-gray-400 block self-start">${dayNum}</span><div class="space-y-1 overflow-y-auto no-scrollbar w-full" id="cal-cell-slot-${i}"></div>`;
        grid.appendChild(cell);
    }
}

let calendarPlans = {};

function seedCalendarEvents() {
    initializeCalendarGrid(); 
    
    // Generate dynamic events based on brand goal
    let appointments = [];
    
    if (brandProfile.goal === "Social Growth") {
        appointments = [
            { slot: 2, label: "Social Content Sprint", color: "bg-indigo-100 text-indigo-800 border-indigo-200", plan: { topic: "Industry Trends", platform: "All", objective: "Educational" } },
            { slot: 4, label: "Hashtag Research", color: "bg-blue-100 text-blue-800 border-blue-200", plan: { topic: "Hashtag Strategy", platform: "Instagram", objective: "Reach" } },
            { slot: 8, label: "Influencer Outreach", color: "bg-purple-100 text-purple-800 border-purple-200", plan: { topic: "Collaboration", platform: "Twitter/LinkedIn", objective: "Partnership" } },
            { slot: 12, label: "IG Flyer Push", color: "bg-pink-100 text-pink-800 border-pink-200", plan: { topic: "Product Launch", platform: "Instagram", objective: "Sales" } },
            { slot: 15, label: "TikTok Campaign", color: "bg-rose-100 text-rose-800 border-rose-200", plan: { topic: "Trending Challenge", platform: "TikTok", objective: "Viral" } },
            { slot: 20, label: "Analytics Review", color: "bg-green-100 text-green-800 border-green-200", plan: { topic: "Data Analysis", platform: "All", objective: "Optimization" } },
            { slot: 25, label: "Community Engagement", color: "bg-amber-100 text-amber-800 border-amber-200", plan: { topic: "Q&A Session", platform: "All", objective: "Engagement" } },
            { slot: 30, label: "Content Calendar Planning", color: "bg-cyan-100 text-cyan-800 border-cyan-200", plan: { topic: "Monthly Planning", platform: "All", objective: "Strategy" } }
        ];
    } else {
        appointments = [
            { slot: 1, label: "Lead Strategy Session", color: "bg-indigo-100 text-indigo-800 border-indigo-200", plan: { topic: "Sales Strategy", platform: "Email", objective: "Lead Gen" } },
            { slot: 3, label: "Email Funnel Build", color: "bg-blue-100 text-blue-800 border-blue-200", plan: { topic: "Email Sequence", platform: "Email", objective: "Nurture" } },
            { slot: 6, label: "Landing Page Test", color: "bg-purple-100 text-purple-800 border-purple-200", plan: { topic: "A/B Testing", platform: "Website", objective: "Conversion" } },
            { slot: 9, label: "Ad Copy Optimization", color: "bg-pink-100 text-pink-800 border-pink-200", plan: { topic: "Ad Copywriting", platform: "Facebook", objective: "CTR" } },
            { slot: 14, label: "Conversion Audit", color: "bg-rose-100 text-rose-800 border-rose-200", plan: { topic: "Funnel Analysis", platform: "All", objective: "ROI" } },
            { slot: 18, label: "Sales Collateral", color: "bg-green-100 text-green-800 border-green-200", plan: { topic: "Sales Materials", platform: "Website", objective: "Sales" } },
            { slot: 22, label: "Customer Success Plan", color: "bg-amber-100 text-amber-800 border-amber-200", plan: { topic: "Retention", platform: "Email", objective: "Loyalty" } },
            { slot: 28, label: "ROI Analysis", color: "bg-cyan-100 text-cyan-800 border-cyan-200", plan: { topic: "Performance Review", platform: "All", objective: "Optimization" } }
        ];
    }

    appointments.forEach(app => {
        const targetSlot = document.getElementById(`cal-cell-slot-${app.slot}`);
        if (targetSlot) {
            const block = document.createElement('span');
            block.className = `text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded border block truncate leading-tight shadow-sm ${app.color} cursor-pointer hover:shadow-md transition`;
            block.innerText = app.label;
            block.title = app.label;
            block.onclick = (e) => {
                e.stopPropagation();
                openContentPlan(app.slot, app.plan, app.label);
            };
            
            calendarPlans[app.slot] = app.plan;
            targetSlot.appendChild(block);
        }
    });
    
    // Add click handlers to calendar cells for adding new events
    document.querySelectorAll('[id^="cal-cell-slot-"]').forEach((cell, index) => {
        cell.parentElement.onclick = () => openCalendarEventModal(index + 1);
    });
}

function openContentPlan(slot, plan, label) {
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4";
    modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden">
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex items-center justify-between">
                <div>
                    <h2 class="text-2xl font-bold">📅 Day ${slot} - Content Plan</h2>
                    <p class="text-indigo-100 text-sm mt-1">${label}</p>
                </div>
                <button onclick="this.closest('.fixed').remove()" class="text-2xl hover:text-indigo-200">×</button>
            </div>
            
            <div class="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100">
                        <span class="text-[10px] text-gray-600 font-bold uppercase">📝 Post Topic</span>
                        <p class="text-sm font-semibold text-gray-800 mt-2">${plan.topic || 'Not specified'}</p>
                    </div>
                    <div class="bg-purple-50/50 rounded-xl p-4 border border-purple-100">
                        <span class="text-[10px] text-gray-600 font-bold uppercase">📱 Platform</span>
                        <p class="text-sm font-semibold text-gray-800 mt-2">${plan.platform || 'All Channels'}</p>
                    </div>
                </div>
                
                <div class="bg-pink-50/50 rounded-xl p-4 border border-pink-100">
                    <span class="text-[10px] text-gray-600 font-bold uppercase">🎯 Content Objective</span>
                    <p class="text-sm font-semibold text-gray-800 mt-2">${plan.objective || 'Engagement'}</p>
                </div>
                
                <div class="bg-amber-50/50 rounded-xl p-4 border border-amber-100">
                    <span class="text-[10px] text-gray-600 font-bold uppercase">💬 Sample Caption</span>
                    <textarea class="w-full text-xs p-2 mt-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" rows="4" placeholder="Generate or edit caption...">${plan.caption || ''}</textarea>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-green-50/50 rounded-xl p-4 border border-green-100">
                        <span class="text-[10px] text-gray-600 font-bold uppercase">🔗 CTA</span>
                        <input type="text" class="w-full text-xs p-2 mt-2 border border-green-200 rounded-lg" placeholder="e.g., Link in bio, Comment below" value="${plan.cta || ''}">
                    </div>
                    <div class="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                        <span class="text-[10px] text-gray-600 font-bold uppercase">📊 Target KPIs</span>
                        <input type="text" class="w-full text-xs p-2 mt-2 border border-blue-200 rounded-lg" placeholder="e.g., 500 likes, 50 comments" value="${plan.kpis || ''}">
                    </div>
                </div>
                
                <div class="pt-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
                    <p class="text-xs text-gray-600"><strong>💡 Quick Tip:</strong> Use clear CTAs to drive engagement. Track performance daily and adjust next week's content based on results.</p>
                </div>
            </div>
            
            <div class="flex gap-3 p-6 border-t border-gray-100 bg-gray-50">
                <button onclick="this.closest('.fixed').remove()" class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2.5 rounded-xl transition">
                    Close
                </button>
                <button onclick="saveContentPlan(${slot}); this.closest('.fixed').remove();" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-xl transition">
                    ✅ Save Plan
                </button>
                <button onclick="deleteCalendarEvent(${slot}); this.closest('.fixed').remove();" class="px-4 bg-rose-600 hover:bg-rose-700 text-white font-medium py-2.5 rounded-xl transition">
                    🗑️
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function openCalendarEventModal(slot) {
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4";
    modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-xl w-full shadow-2xl">
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex items-center justify-between">
                <h2 class="text-2xl font-bold">➕ Add Content Plan - Day ${slot}</h2>
                <button onclick="this.closest('.fixed').remove()" class="text-2xl hover:text-indigo-200">×</button>
            </div>
            
            <div class="p-6 space-y-4">
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Post Topic</label>
                    <input type="text" id="planTopic" placeholder="e.g., Product Launch, Customer Testimonial..." class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Platform</label>
                        <select id="planPlatform" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Instagram</option>
                            <option>Facebook</option>
                            <option>TikTok</option>
                            <option>LinkedIn</option>
                            <option>Twitter</option>
                            <option>Email</option>
                            <option>All</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Objective</label>
                        <select id="planObjective" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Engagement</option>
                            <option>Sales</option>
                            <option>Education</option>
                            <option>Lead Gen</option>
                            <option>Brand Awareness</option>
                            <option>Traffic</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Caption</label>
                    <textarea id="planCaption" rows="3" placeholder="Write your caption..." class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"></textarea>
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase mb-1">CTA</label>
                    <input type="text" id="planCTA" placeholder="e.g., Link in bio, Comment your thoughts, Sign up now" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Expected KPIs</label>
                    <input type="text" id="planKPIs" placeholder="e.g., 500 likes, 50 comments, 5% CTR" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
            </div>
            
            <div class="flex gap-3 p-6 border-t border-gray-100 bg-gray-50">
                <button onclick="this.closest('.fixed').remove()" class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2.5 rounded-xl transition">
                    Cancel
                </button>
                <button onclick="saveNewCalendarEvent(${slot}); this.closest('.fixed').remove();" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-xl transition">
                    ✅ Add To Calendar
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function saveNewCalendarEvent(slot) {
    const plan = {
        topic: document.getElementById('planTopic').value || 'Untitled',
        platform: document.getElementById('planPlatform').value || 'All',
        objective: document.getElementById('planObjective').value || 'Engagement',
        caption: document.getElementById('planCaption').value || '',
        cta: document.getElementById('planCTA').value || '',
        kpis: document.getElementById('planKPIs').value || ''
    };
    
    calendarPlans[slot] = plan;
    
    const targetSlot = document.getElementById(`cal-cell-slot-${slot}`);
    if (targetSlot) {
        const block = document.createElement('span');
        block.className = "text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded border block truncate leading-tight shadow-sm bg-indigo-100 text-indigo-800 border-indigo-200 cursor-pointer hover:shadow-md transition";
        block.innerText = plan.topic;
        block.title = plan.topic;
        block.onclick = (e) => {
            e.stopPropagation();
            openContentPlan(slot, plan, plan.topic);
        };
        targetSlot.appendChild(block);
    }
    
    alert(`✅ Content plan added for Day ${slot}!`);
}

function saveContentPlan(slot) {
    alert(`✅ Content plan for Day ${slot} updated!`);
}

function deleteCalendarEvent(slot) {
    delete calendarPlans[slot];
    const targetSlot = document.getElementById(`cal-cell-slot-${slot}`);
    if (targetSlot) {
        const lastEvent = targetSlot.lastChild;
        if (lastEvent) lastEvent.remove();
    }
    alert(`🗑️ Event deleted from Day ${slot}`);
}

function saveCurrentTextAsset() {
    const content = document.getElementById('creatorOutputContainer').innerText;
    const type = document.getElementById('creatorType').value;
    if (!content) {
        alert("No content to save. Generate something first!");
        return;
    }

    const asset = { 
        id: Date.now(), 
        type: type, 
        payload: content.substring(0, 100) + "...", 
        fullContent: content,
        format: "Text Script",
        created: new Date().toLocaleDateString()
    };
    generationVault.push(asset);
    synchronizeVaultUI();
    
    // Show success feedback
    alert(`✅ "${type}" saved to vault!\nTotal assets: ${generationVault.length}`);
}

function vaultFlyerAsset() {
    const headline = document.getElementById('flyerHeadline').value;
    const subtext = document.getElementById('flyerSubtext').value;
    const cta = document.getElementById('flyerCTA').value;
    const layout = document.getElementById('flyerLayout').value;
    
    const asset = { 
        id: Date.now(), 
        type: "Visual Design Blueprint", 
        payload: `${layout}: "${headline}" | "${cta}"`,
        format: "Canvas Vector Layout",
        details: { headline, subtext, cta, layout },
        created: new Date().toLocaleDateString()
    };
    generationVault.push(asset);
    synchronizeVaultUI();
    
    alert(`✅ Design blueprint saved!\n"${headline}"\nTotal assets: ${generationVault.length}`);
}

function synchronizeVaultUI() {
    const emptyState = document.getElementById('vaultEmptyState');
    const grid = document.getElementById('vaultGrid');
    document.getElementById('dashAssetCount').innerText = `${generationVault.length} Core Assets`;

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
        card.className = "bg-white border border-gray-100 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-sm hover:border-indigo-200 hover:shadow-md transition group";
        
        const iconMap = {
            "Social Media Caption": "📱",
            "Product Description": "🛍️",
            "Email Newsletter": "📧",
            "Blog Campaign Outlines": "📝",
            "High-Density Hashtags": "🏷️",
            "Visual Design Blueprint": "🎨"
        };
        
        const icon = iconMap[item.type] || "📦";
        
        card.innerHTML = `
            <div class="space-y-1">
                <div class="flex items-start justify-between gap-2">
                    <h4 class="font-bold text-gray-800 text-sm flex-1">${icon} ${item.type}</h4>
                    <span class="text-[9px] text-gray-400 whitespace-nowrap">${item.created || "Today"}</span>
                </div>
                <p class="text-xs text-gray-500 line-clamp-2 leading-relaxed">${item.payload}</p>
                <span class="text-[10px] text-indigo-600 font-medium">${item.format}</span>
            </div>
            <div class="flex gap-2">
                <button onclick="expandVaultItem(${item.id})" class="flex-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-700 text-left group-hover:opacity-100 transition">View</button>
                <button onclick="removeVaultItem(${item.id})" class="text-[11px] font-semibold text-rose-500 hover:text-rose-700">Delete</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function expandVaultItem(itemId) {
    const item = generationVault.find(i => i.id === itemId);
    if (!item) return;
    
    const content = item.fullContent || item.payload;
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4";
    modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl">
            <div class="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 class="text-lg font-bold text-gray-800">${item.type}</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
            </div>
            <div class="flex-1 overflow-y-auto p-6">
                <p class="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">${content}</p>
            </div>
            <div class="flex gap-3 p-6 border-t border-gray-100 bg-gray-50">
                <button onclick="navigator.clipboard.writeText(\`${content.replace(/`/g, '\\`')}\`); alert('Copied to clipboard!'); this.closest('.fixed').remove();" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-xl transition">
                    📋 Copy All
                </button>
                <button onclick="this.closest('.fixed').remove()" class="px-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2.5 rounded-xl transition">
                    Close
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function removeVaultItem(itemId) {
    generationVault = generationVault.filter(i => i.id !== itemId);
    synchronizeVaultUI();
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        // Show success feedback
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = "✅ Copied!";
        btn.classList.add('bg-green-100', 'text-green-700');
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove('bg-green-100', 'text-green-700');
        }, 2000);
    }).catch(err => {
        alert("Failed to copy. Please try again.");
    });
}

let currentDesign = {
    colors: { primary: "#4F46E5", secondary: "#7C3AED", accent: "#F59E0B", text: "#FFFFFF" },
    fonts: { heading: "Arial Black", body: "Arial", size: { heading: 28, body: 14, cta: 14 } },
    layout: "event",
    headline: "GRAND REVEAL LAUNCH",
    subtext: "Join us this Saturday from 9 AM onwards for introductory offers.",
    cta: "CLAIM 20% DISCOUNT",
    bgImage: null,
    logoUrl: null,
    padding: { top: 8, right: 8, bottom: 8, left: 8 },
    positioning: { headline_y: 120, subtext_y: 280, cta_y: 380 }
};

// --- ADVANCED FLYER CUSTOMIZATION ---
function updateFlyerDesign(property, value) {
    // Handle nested properties like colors.primary
    if (property.includes('.')) {
        const [parent, child] = property.split('.');
        if (currentDesign[parent]) {
            currentDesign[parent][child] = value;
        }
    } else {
        currentDesign[property] = value;
    }
    updateFlyerCanvas();
}

function updateFlyerColor(colorType, hexValue) {
    if (currentDesign.colors.hasOwnProperty(colorType)) {
        currentDesign.colors[colorType] = hexValue;
        const canvas = document.getElementById('flyerRenderCanvas');
        
        if (colorType === 'primary' || colorType === 'secondary') {
            canvas.style.backgroundImage = `linear-gradient(to bottom right, ${currentDesign.colors.primary}, ${currentDesign.colors.secondary})`;
        } else if (colorType === 'accent') {
            const ctaBtn = document.getElementById('canvasCTA');
            if (ctaBtn) ctaBtn.style.backgroundColor = hexValue;
        }
        
        // Save to vault with note
        logDesignChange(`Color Update: ${colorType} → ${hexValue}`);
    }
}

function updateFlyerFont(fontType, fontFamily) {
    if (currentDesign.fonts.hasOwnProperty(fontType)) {
        currentDesign.fonts[fontType] = fontFamily;
        const elements = {
            heading: document.getElementById('canvasHeadline'),
            body: document.getElementById('canvasSubtext'),
            cta: document.getElementById('canvasCTA')
        };
        
        if (elements[fontType]) {
            elements[fontType].style.fontFamily = fontFamily;
        }
        logDesignChange(`Font Update: ${fontType} → ${fontFamily}`);
    }
}

function updateFlyerFontSize(elementType, sizeInPx) {
    if (currentDesign.fonts.size.hasOwnProperty(elementType)) {
        currentDesign.fonts.size[elementType] = sizeInPx;
        const sizeMap = { heading: 'canvasHeadline', body: 'canvasSubtext', cta: 'canvasCTA' };
        const element = document.getElementById(sizeMap[elementType]);
        if (element) {
            element.style.fontSize = sizeInPx + 'px';
        }
        logDesignChange(`Font Size Update: ${elementType} → ${sizeInPx}px`);
    }
}

function uploadFlyerImage(inputElement) {
    if (!inputElement.files || inputElement.files.length === 0) return;
    
    const file = inputElement.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
        currentDesign.bgImage = e.target.result;
        const decoration = document.getElementById('canvasBgDecoration');
        if (decoration) {
            decoration.innerHTML = `<img src="${currentDesign.bgImage}" style="width:100%; height:100%; object-fit:cover; opacity:0.3;">`;
        }
        logDesignChange(`Image Uploaded: ${file.name}`);
    };
    
    reader.readAsDataURL(file);
}

function uploadLogoImage(inputElement) {
    if (!inputElement.files || inputElement.files.length === 0) return;
    
    const file = inputElement.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
        currentDesign.logoUrl = e.target.result;
        const canvas = document.getElementById('flyerRenderCanvas');
        if (!canvas.querySelector('.logo-placeholder')) {
            const logo = document.createElement('img');
            logo.className = 'logo-placeholder';
            logo.src = currentDesign.logoUrl;
            logo.style.cssText = 'position: absolute; top: 10px; right: 10px; width: 40px; height: 40px; z-index: 20;';
            canvas.appendChild(logo);
        } else {
            canvas.querySelector('.logo-placeholder').src = currentDesign.logoUrl;
        }
        logDesignChange(`Logo Uploaded: ${file.name}`);
    };
    
    reader.readAsDataURL(file);
}

function updateTextPosition(elementType, yPosition) {
    if (currentDesign.positioning.hasOwnProperty(elementType + '_y')) {
        currentDesign.positioning[elementType + '_y'] = yPosition;
        const positionMap = { 
            headline: 'canvasHeadline', 
            subtext: 'canvasSubtext', 
            cta: 'canvasCTA' 
        };
        const element = document.getElementById(positionMap[elementType]);
        if (element) {
            element.style.transform = `translateY(${yPosition - 200}px)`;
        }
    }
}

function updateLayoutPadding(direction, value) {
    if (currentDesign.padding.hasOwnProperty(direction)) {
        currentDesign.padding[direction] = value;
        const canvas = document.getElementById('flyerRenderCanvas');
        if (canvas) {
            canvas.style.padding = `${currentDesign.padding.top}px ${currentDesign.padding.right}px ${currentDesign.padding.bottom}px ${currentDesign.padding.left}px`;
        }
    }
}

function logDesignChange(message) {
    // Log design changes for undo/redo functionality
    if (!currentDesign.history) {
        currentDesign.history = [];
    }
    currentDesign.history.push({
        message: message,
        timestamp: new Date().toLocaleTimeString(),
        design: JSON.parse(JSON.stringify(currentDesign))
    });
}

function downloadFlyerAsset() {
    const headline = document.getElementById('flyerHeadline').value;
    const canvas = document.getElementById('flyerRenderCanvas');
    
    // Use html2canvas if available, otherwise fall back to canvas rendering
    if (typeof html2canvas !== 'undefined') {
        html2canvas(canvas).then(c => {
            const link = document.createElement('a');
            link.href = c.toDataURL();
            link.download = `flyer-${headline.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.png`;
            link.click();
            alert(`✅ High-resolution flyer exported!\nFile: flyer-${headline}.png`);
        });
    } else {
        // Fallback to basic canvas export
        const exportCanvas = document.createElement('canvas');
        exportCanvas.width = 380;
        exportCanvas.height = 475;
        const ctx = exportCanvas.getContext('2d');
        
        const gradient = ctx.createLinearGradient(0, 0, 380, 475);
        gradient.addColorStop(0, currentDesign.colors.primary);
        gradient.addColorStop(1, currentDesign.colors.secondary);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 380, 475);
        
        ctx.fillStyle = currentDesign.colors.text;
        ctx.font = `bold ${currentDesign.fonts.size.heading}px ${currentDesign.fonts.heading}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(headline, 190, currentDesign.positioning.headline_y);
        
        ctx.font = `${currentDesign.fonts.size.body}px ${currentDesign.fonts.body}`;
        ctx.fillText(document.getElementById('canvasSubtext').innerText, 190, currentDesign.positioning.subtext_y);
        
        ctx.fillStyle = currentDesign.colors.accent;
        ctx.fillRect(50, currentDesign.positioning.cta_y - 25, 280, 50);
        
        ctx.fillStyle = currentDesign.colors.text;
        ctx.font = `bold ${currentDesign.fonts.size.cta}px Arial`;
        ctx.fillText(document.getElementById('canvasCTA').innerText, 190, currentDesign.positioning.cta_y + 5);
        
        exportCanvas.toBlob(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `flyer-${headline.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
            alert(`✅ Flyer exported successfully!\nFile: flyer-${headline}.png`);
        });
    }
}
// --- MOBILE-FIXED VIEW NAVIGATION CONTROLLER ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-view').forEach(v => v.classList.add('hidden'));
    const targetedView = document.getElementById(`view-${tabId}`);
    if (targetedView) targetedView.classList.remove('hidden');

    // Desktop UI State Reset
    document.querySelectorAll('aside .tab-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-50', 'text-indigo-600');
        btn.classList.add('text-gray-500', 'hover:bg-gray-50');
    });
    const activeDeskBtn = document.querySelector(`aside .tab-btn[data-tab="${tabId}"]`);
    if (activeDeskBtn) {
        activeDeskBtn.classList.add('bg-indigo-50', 'text-indigo-600');
        activeDeskBtn.classList.remove('text-gray-500');
    }

    // FIXED: Changed [data-tab] to [data-mobile-tab] to match HTML footprint precisely
    document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
        btn.classList.remove('text-indigo-600');
        btn.classList.add('text-gray-400');
    });
    const activeMobBtn = document.querySelector(`.mobile-tab-btn[data-mobile-tab="${tabId}"]`);
    if (activeMobBtn) {
        activeMobBtn.classList.add('text-indigo-600');
        activeMobBtn.classList.remove('text-gray-400');
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
}
// === MOBILE ONBOARDING BUTTON FIX ===
// Add this after your existing button event listeners

function addMobileTapSupport(selector, handler) {
  document.querySelectorAll(selector).forEach(el => {
    // Remove existing listeners to avoid duplicates
    el.replaceWith(el.cloneNode(true));
  });

  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('click', handler);
    
    // Explicit touchend for mobile browsers that miss 'click'
    el.addEventListener('touchend', function(e) {
      e.preventDefault(); // prevents ghost click
      handler.call(this, e);
    }, { passive: false });
  });
}

// Apply to your onboarding option cards
addMobileTapSupport('.onboarding-option', function() {
  // your existing selection logic here
  this.classList.toggle('selected');
});

// Apply to Next/Back buttons
addMobileTapSupport('.next-btn, [data-action="next"]', function() {
  // your existing next step logic
});

addMobileTapSupport('.back-btn, [data-action="back"]', function() {
  // your existing back step logic
});