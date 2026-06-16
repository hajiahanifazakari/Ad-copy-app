// ============================================
// ENHANCED FLYER STUDIO FUNCTIONS
// ============================================

function updateFlyerStyle(property, value) {
    const canvas = document.getElementById('flyerRenderCanvas');
    
    switch(property) {
        case 'bgColor':
            currentDesign.colors.primary = value;
            document.getElementById('bgColorPicker').value = value;
            applyCanvasGradient();
            break;
        case 'accentColor':
            currentDesign.colors.accent = value;
            document.getElementById('accentColorPicker').value = value;
            const ctaBtn = document.getElementById('canvasCTA');
            if (ctaBtn) ctaBtn.style.backgroundColor = value;
            break;
        case 'textColor':
            currentDesign.colors.text = value;
            document.getElementById('textColorPicker').value = value;
            document.getElementById('canvasHeadline').style.color = value;
            document.getElementById('canvasSubtext').style.color = value;
            break;
        case 'gradientMode':
            currentDesign.gradientMode = value;
            document.getElementById('gradientMode').value = value;
            applyCanvasGradient();
            break;
        case 'bgOpacity':
            const opacity = value / 100;
            currentDesign.bgOpacity = opacity;
            document.getElementById('opacityValue').innerText = value + '%';
            if (canvas) {
                canvas.style.opacity = opacity;
            }
            break;
        case 'headlineFont':
            currentDesign.fonts.heading = value;
            document.getElementById('headlineFont').value = value;
            document.getElementById('canvasHeadline').style.fontFamily = value;
            break;
        case 'headlineSize':
            currentDesign.fonts.size.heading = parseInt(value);
            document.getElementById('headlineSizeValue').innerText = value + 'px';
            document.getElementById('canvasHeadline').style.fontSize = value + 'px';
            break;
        case 'elementSpacing':
            currentDesign.elementSpacing = parseInt(value);
            document.getElementById('spacingValue').innerText = value + 'px';
            document.querySelector('[id^="canvasHeadline"]').parentElement.style.gap = value + 'px';
            break;
        case 'borderStyle':
            currentDesign.borderStyle = value;
            document.getElementById('borderStyle').value = value;
            applyBorderStyle(value);
            break;
    }
    
    logDesignChange(`Design Update: ${property} → ${value}`);
    updateFlyerCanvas();
}

function applyCanvasGradient() {
    const canvas = document.getElementById('flyerRenderCanvas');
    const mode = document.getElementById('gradientMode')?.value || 'solid';
    const primary = currentDesign.colors.primary;
    const secondary = currentDesign.colors.secondary;
    
    if (mode === 'solid') {
        canvas.style.background = primary;
    } else if (mode === 'linear') {
        canvas.style.background = `linear-gradient(to right, ${primary}, ${secondary})`;
    } else if (mode === 'radial') {
        canvas.style.background = `radial-gradient(circle, ${primary}, ${secondary})`;
    } else if (mode === 'diagonal') {
        canvas.style.background = `linear-gradient(135deg, ${primary}, ${secondary})`;
    }
}

function applyBorderStyle(style) {
    const canvas = document.getElementById('flyerRenderCanvas');
    
    switch(style) {
        case 'none':
            canvas.style.border = 'none';
            break;
        case 'solid':
            canvas.style.border = '3px solid rgba(255,255,255,0.3)';
            break;
        case 'dashed':
            canvas.style.border = '3px dashed rgba(255,255,255,0.5)';
            break;
        case 'double':
            canvas.style.border = '6px double rgba(255,255,255,0.4)';
            break;
        case 'rounded':
            canvas.style.border = '4px solid rgba(255,255,255,0.3)';
            canvas.style.borderRadius = '30px';
            break;
    }
}

function resetFlyerDesign() {
    if (!confirm('Reset all flyer design settings to defaults?')) return;
    
    currentDesign = {
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
    
    // Reset all controls
    document.getElementById('bgColorPicker').value = "#4F46E5";
    document.getElementById('accentColorPicker').value = "#FFFFFF";
    document.getElementById('textColorPicker').value = "#FFFFFF";
    document.getElementById('gradientMode').value = "linear";
    document.getElementById('bgOpacity').value = 100;
    document.getElementById('headlineFont').value = "Arial";
    document.getElementById('headlineSize').value = 32;
    document.getElementById('elementSpacing').value = 15;
    document.getElementById('borderStyle').value = "none";
    
    updateFlyerCanvas();
    alert('✅ Design reset to defaults!');
}

// ============================================
// GREGORIAN CALENDAR FUNCTIONS
// ============================================

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let selectedDate = null;

function renderCalendarGrid() {
    const grid = document.getElementById('calendarDaysGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const nextDays = 7 - lastDay.getDay() - 1;
    
    const monthYear = document.getElementById('calendarMonthYear');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    monthYear.innerText = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Previous month's days
    for (let i = firstDay.getDay(); i > 0; i--) {
        const day = prevLastDay.getDate() - i + 1;
        const cell = createCalendarCell(day, false, new Date(currentYear, currentMonth - 1, day));
        grid.appendChild(cell);
    }
    
    // Current month's days
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const isToday = new Date().toDateString() === new Date(currentYear, currentMonth, day).toDateString();
        const cell = createCalendarCell(day, true, new Date(currentYear, currentMonth, day), isToday);
        grid.appendChild(cell);
    }
    
    // Next month's days
    for (let day = 1; day <= nextDays; day++) {
        const cell = createCalendarCell(day, false, new Date(currentYear, currentMonth + 1, day));
        grid.appendChild(cell);
    }
    
    updateMonthYearSelect();
}

function createCalendarCell(day, isCurrentMonth, dateObj, isToday = false) {
    const cell = document.createElement('div');
    const dayId = `day-${dateObj.getTime()}`;
    
    cell.className = `p-2 md:p-3 flex flex-col justify-between overflow-hidden relative group transition cursor-pointer ${
        isCurrentMonth ? 'bg-white hover:bg-indigo-50/50' : 'bg-gray-50/30 text-gray-400'
    } ${isToday ? 'ring-2 ring-inset ring-indigo-400 rounded-lg' : ''}`;
    
    const dayHeader = document.createElement('div');
    dayHeader.className = `text-sm font-bold ${isToday ? 'text-indigo-600' : 'text-gray-500'}`;
    dayHeader.innerText = day;
    
    const eventsContainer = document.createElement('div');
    eventsContainer.id = `events-${dayId}`;
    eventsContainer.className = 'space-y-1 overflow-y-auto no-scrollbar w-full flex-1';
    
    cell.appendChild(dayHeader);
    cell.appendChild(eventsContainer);
    
    // Add click handler to open event modal
    cell.onclick = () => {
        if (isCurrentMonth) {
            openDayModal(day, currentMonth, currentYear, dateObj);
        }
    };
    
    return cell;
}

function openDayModal(day, month, year, dateObj) {
    const dateStr = dateObj.toDateString();
    selectedDate = dateObj;
    
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4";
    
    // Get existing plans for this day
    const dayKey = `${year}-${month}-${day}`;
    const existingPlans = calendarPlans[dayKey] || [];
    
    modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden">
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <h2 class="text-2xl font-bold">${dateObj.toDateString()}</h2>
                <p class="text-indigo-100 text-sm">Click a date to view and manage content</p>
            </div>
            <div class="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <div id="dayEvents" class="space-y-3">
                    ${existingPlans.length > 0 
                        ? existingPlans.map((plan, idx) => `
                            <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
                                <p class="font-semibold text-gray-800 text-sm">${plan.topic || 'Untitled'}</p>
                                <p class="text-xs text-gray-600 mt-1">${plan.caption || ''}</p>
                                <div class="flex gap-2 mt-2">
                                    <button onclick="editDayPlan('${dayKey}', ${idx}); this.closest('.fixed').remove();" class="text-xs text-indigo-600 hover:text-indigo-700 font-medium">Edit</button>
                                    <button onclick="deleteDayPlan('${dayKey}', ${idx}); this.closest('.fixed').remove();" class="text-xs text-rose-600 hover:text-rose-700 font-medium">Delete</button>
                                </div>
                            </div>
                        `).join('')
                        : '<p class="text-gray-500 text-center py-4">No content planned for this day</p>'
                    }
                </div>
            </div>
            <div class="flex gap-3 p-6 border-t border-gray-100 bg-gray-50">
                <button onclick="this.closest('.fixed').remove()" class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2.5 rounded-xl transition">
                    Close
                </button>
                <button onclick="addNewDayPlan('${dayKey}'); this.closest('.fixed').remove();" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-xl transition">
                    ➕ Add Plan
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function addNewDayPlan(dayKey) {
    const newPlan = {
        topic: prompt('Post topic:') || 'Untitled',
        caption: prompt('Caption:') || '',
        cta: prompt('Call to Action:') || '',
        kpis: prompt('Target KPIs:') || ''
    };
    
    if (!calendarPlans[dayKey]) {
        calendarPlans[dayKey] = [];
    }
    
    calendarPlans[dayKey].push(newPlan);
    alert(`✅ Plan added for ${dayKey}!`);
    renderCalendarGrid();
}

function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendarGrid();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendarGrid();
}

function todayMonth() {
    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    renderCalendarGrid();
}

function jumpToMonth(value) {
    const [year, month] = value.split('-');
    currentYear = parseInt(year);
    currentMonth = parseInt(month);
    renderCalendarGrid();
}

function updateMonthYearSelect() {
    const select = document.getElementById('monthYearSelect');
    if (!select) return;
    
    select.innerHTML = '';
    const current = new Date();
    
    for (let y = current.getFullYear() - 1; y <= current.getFullYear() + 2; y++) {
        for (let m = 0; m < 12; m++) {
            const option = document.createElement('option');
            const monthName = new Date(y, m).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            option.value = `${y}-${m}`;
            option.innerText = monthName;
            if (y === currentYear && m === currentMonth) {
                option.selected = true;
            }
            select.appendChild(option);
        }
    }
}

// ============================================
// MARKETING INTELLIGENCE HUB FUNCTIONS
// ============================================

function compileMarketingIntelligence() {
    updateIntelligenceProfile();
    generateAudienceInsights();
    generateContentOpportunities();
    generateCompetitorInsights();
    generateQuickTips();
}

function updateIntelligenceProfile() {
    document.getElementById('intelBrandName').innerText = brandProfile.name || 'Your Brand';
    document.getElementById('intelIndustry').innerText = brandProfile.industry || 'Not Set';
    document.getElementById('intelAudience').innerText = brandProfile.audience || 'Not Set';
    document.getElementById('intelGoal').innerText = brandProfile.goal || 'Not Set';
}

function generateAudienceInsights() {
    const container = document.getElementById('intelligenceInsights');
    if (!container) return;
    
    const audienceTone = brandProfile.tone || 'General';
    const industry = brandProfile.industry || 'General';
    const goal = brandProfile.goal;
    
    const insights = `
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-4 space-y-2">
            <h4 class="font-bold text-blue-900 flex items-center gap-2">👥 Audience Insights</h4>
            <ul class="text-xs text-blue-800 space-y-1">
                <li>✓ Primary Audience: ${brandProfile.audience || 'Not defined'}</li>
                <li>✓ Industry Focus: ${industry}</li>
                <li>✓ Brand Tone: ${audienceTone}</li>
                <li>✓ Primary Goal: ${goal}</li>
                <li>✓ Recommended Content Mix: 60% Educational, 30% Promotional, 10% Personal</li>
            </ul>
        </div>
        
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-4 space-y-2">
            <h4 class="font-bold text-green-900 flex items-center gap-2">🎯 Content Opportunities</h4>
            <ul class="text-xs text-green-800 space-y-1">
                <li>📱 Social Media: Leverage ${getRecommendedPlatforms()} for maximum reach</li>
                <li>📧 Email: Build a ${goal === 'Social Growth' ? 'community' : 'sales'} funnel with personalized content</li>
                <li>📝 Blog: Create long-form guides addressing audience pain points</li>
                <li>🎬 Video: Use short-form content (Reels, TikTok) for ${goal === 'Social Growth' ? '200%+' : '150%+'} engagement</li>
                <li>🔗 SEO: Target keywords in your ${industry} industry</li>
            </ul>
        </div>
        
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-4 space-y-2">
            <h4 class="font-bold text-amber-900 flex items-center gap-2">📊 Competitive Positioning</h4>
            <ul class="text-xs text-amber-800 space-y-1">
                <li>🏆 Differentiate with: ${audienceTone} tone, premium quality, customer focus</li>
                <li>💡 Unique Value: Focus on solving specific ${industry.toLowerCase()} challenges</li>
                <li>🎁 Lead Magnet Ideas: Free audit, checklist, template, or mini-course</li>
                <li>⚡ Quick Wins: Implement these in the next 2 weeks for 15-20% impact</li>
                <li>📈 Scaling Path: Master one channel before expanding to others</li>
            </ul>
        </div>
        
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-4 space-y-2">
            <h4 class="font-bold text-purple-900 flex items-center gap-2">🚀 Conversion & Growth Tactics</h4>
            <ul class="text-xs text-purple-800 space-y-1">
                <li>🎯 First 30 Days: Setup, content creation, audience building</li>
                <li>💬 Engagement: ${goal === 'Social Growth' ? 'Daily community interaction' : 'High-value email sequences'}</li>
                <li>🔄 Retargeting: Use warm audiences for ${goal === 'Lead Conversion' ? '5-10x' : '2-3x'} better results</li>
                <li>📱 Platform Strategy: ${goal === 'Social Growth' ? 'Focus on Instagram, TikTok, LinkedIn' : 'Email-first with Facebook ads'}</li>
                <li>⏱️ Frequency: Post ${goal === 'Social Growth' ? '5-7x' : '2-3x'} per week for consistency</li>
            </ul>
        </div>
    `;
    
    container.innerHTML = insights;
}

function generateContentOpportunities() {
    // Already covered in generateAudienceInsights
}

function generateCompetitorInsights() {
    // Already covered in generateAudienceInsights
}

function generateQuickTips() {
    const container = document.getElementById('quickTips');
    if (!container) return;
    
    const tips = [
        { icon: '⏰', text: 'Post at peak times: 6-9 PM on weekdays, 11 AM-2 PM on weekends' },
        { icon: '🎨', text: 'Use consistent brand colors and fonts across all platforms' },
        { icon: '📸', text: 'High-quality visuals increase engagement by 40%+' },
        { icon: '💬', text: 'Ask questions in captions to boost comment rates' },
        { icon: '🔗', text: 'Include CTAs in every post (link in bio, DM, comment)' },
        { icon: '📊', text: 'Track top-performing content and double down on it' },
        { icon: '🤝', text: 'Engage with 10-15 competitor accounts daily' },
        { icon: '✍️', text: 'Keep captions under 125 characters for best performance' }
    ];
    
    container.innerHTML = tips.map((tip, idx) => `
        <div class="p-2 rounded-lg hover:bg-white transition text-xs">
            <p><strong>${tip.icon}</strong> ${tip.text}</p>
        </div>
    `).join('');
}

function getRecommendedPlatforms() {
    const industry = brandProfile.industry?.toLowerCase() || '';
    
    if (industry.includes('tech') || industry.includes('saas')) {
        return 'LinkedIn, Twitter, Reddit';
    } else if (industry.includes('food') || industry.includes('beauty')) {
        return 'Instagram, TikTok, Pinterest';
    } else if (industry.includes('real estate')) {
        return 'Facebook, Instagram, YouTube';
    } else if (industry.includes('freelancer') || industry.includes('creator')) {
        return 'Instagram, TikTok, YouTube, Twitter';
    }
    
    return 'Instagram, Facebook, TikTok, LinkedIn';
}

// ============================================
// INITIALIZATION UPDATES
// ============================================

// Update DOMContentLoaded to include new initializations
const originalInit = () => {
    initializeCalendarGrid();
    renderCalendarGrid();
    rotateMarketingTips();
    setInterval(rotateMarketingTips, 9000);
    compileMarketingIntelligence();
};

// Override the onboarding completion
function executeFormDeploymentEnhanced() {
    // Read final variables from inputs safely
    brandProfile.name = document.getElementById('bizName').value || "Your Brand Studio";
    brandProfile.industry = document.getElementById('bizIndustry').value;
    brandProfile.audience = document.getElementById('bizAudience').value || "General Public Niche";
    brandProfile.tone = document.getElementById('bizTone').value;
    
    const selectedGoal = document.querySelector('input[name="bizGoal"]:checked');
    brandProfile.goal = selectedGoal ? selectedGoal.value : "Social Growth";

    // Write text layout details directly into workspace UI elements
    document.getElementById('headerWelcome').innerText = `Sync: ${brandProfile.name}`;
    document.getElementById('sideBizName').innerText = brandProfile.name;
    document.getElementById('avatarLetter').innerText = brandProfile.name.charAt(0).toUpperCase();

    // Fire standard modular dynamic generators loops
    synthesizeBrandKit();
    compileStrategyMatrix();
    seedCalendarEvents();
    renderCalendarGrid();
    compileMarketingIntelligence();

    // Close screen overlay modal element smoothly
    document.getElementById('onboardingModal').classList.add('hidden');
    document.getElementById('onboardingModal').classList.remove('flex');
}
