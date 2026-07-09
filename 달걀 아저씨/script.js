const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const gameScreen = document.getElementById("gameScreen");
const endingScreen = document.getElementById("endingScreen");
const quizStartBtn = document.getElementById("quizStartBtn");

const quizNumber = document.getElementById("quizNumber");
const quizBudgetText = document.getElementById("quizBudgetText");
const quizQuestion = document.getElementById("quizQuestion");
const quizChoices = document.getElementById("quizChoices");

const warningOverlay = document.getElementById("warningOverlay");
const warningLabel = document.getElementById("warningLabel");
const warningText = document.getElementById("warningText");
const warningDesc = document.getElementById("warningDesc");
const closeWarningBtn = document.getElementById("closeWarningBtn");
const nextQuizBtn = document.getElementById("nextQuizBtn");
const goGameBtn = document.getElementById("goGameBtn");
const nextStageBtn = document.getElementById("nextStageBtn");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const stageBtns = document.querySelectorAll(".stageBtn");
const gears = document.querySelectorAll(".gear");

const budgetEl = document.getElementById("budget");
const costEl = document.getElementById("cost");
const gravityText = document.getElementById("gravityText");
const windText = document.getElementById("windText");
const stageTitle = document.getElementById("stageTitle");
const message = document.getElementById("message");

const vxSlider = document.getElementById("vx");
const startXSlider = document.getElementById("startX");
const vxText = document.getElementById("vxText");
const xText = document.getElementById("xText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

const IMPACT_SCALE = 22;

const quizPool = [
    {
        q: "충격량이 같을 때 평균 충격력을 줄이려면 무엇을 늘려야 할까요?",
        answer: "충돌 시간",
        options: ["충돌 시간", "질량", "낙하 높이"],
        reason: "평균 충격력은 충격량을 충돌 시간으로 나눈 값입니다. 충돌 시간이 길어지면 평균 충격력이 줄어듭니다."
    },
    {
        q: "공기 저항이 거의 없다면 무거운 물체와 가벼운 물체의 자유 낙하 속도는?",
        answer: "거의 같다",
        options: ["무거운 물체가 훨씬 빠르다", "거의 같다", "가벼운 물체가 훨씬 빠르다"],
        reason: "공기 저항이 없다면 모든 물체는 질량과 상관없이 같은 중력 가속도로 떨어집니다."
    },
    {
        q: "낙하산이 달걀 아저씨를 살리는 핵심 원리는?",
        answer: "공기 저항 증가",
        options: ["공기 저항 증가", "질량 증가", "중력 증가"],
        reason: "낙하산은 공기 저항을 크게 만들어 낙하 속도를 줄이고 충돌 순간의 운동량을 줄입니다."
    },
    {
        q: "운동량은 어떤 두 물리량을 곱한 값일까요?",
        answer: "질량과 속도",
        options: ["질량과 속도", "시간과 온도", "높이와 색깔"],
        reason: "운동량은 질량 x 속도입니다. 질량이 크거나 속도가 빠를수록 충돌 영향이 커집니다."
    },
    {
        q: "강철 갑옷이 오히려 위험할 수 있는 이유는?",
        answer: "질량이 커져 운동량이 증가하기 때문",
        options: ["질량이 커져 운동량이 증가하기 때문", "중력이 사라지기 때문", "달걀이 더 가벼워지기 때문"],
        reason: "강철 갑옷은 질량을 크게 늘립니다. 질량이 늘면 운동량과 충격량도 커져 달걀이 더 쉽게 깨질 수 있습니다."
    },
    {
        q: "자유 낙하 운동에서 물체를 아래로 끌어당기는 힘은?",
        answer: "중력",
        options: ["중력", "마찰력", "자기력"],
        reason: "자유 낙하 운동은 중력 때문에 일어납니다. 지구에서는 중력이 물체를 아래로 끌어당깁니다."
    },
    {
        q: "높은 곳에서 떨어질수록 충돌이 위험해지는 가장 큰 이유는?",
        answer: "충돌 직전 속도가 커지기 때문",
        options: ["충돌 직전 속도가 커지기 때문", "달걀이 작아지기 때문", "중력이 갑자기 사라지기 때문"],
        reason: "낙하 시간이 길어질수록 속도가 커지고, 속도가 커지면 운동량과 충격도 커집니다."
    },
    {
        q: "스펀지가 충격을 줄이는 방식으로 가장 알맞은 것은?",
        answer: "충돌 시간을 늘린다",
        options: ["충돌 시간을 늘린다", "질량을 없앤다", "중력을 막는다"],
        reason: "스펀지는 물체가 멈추는 시간을 길게 만들어 평균 충격력을 줄입니다."
    },
    {
        q: "에어백이 사람이나 달걀을 보호하는 원리는?",
        answer: "충돌 시간을 크게 늘린다",
        options: ["충돌 시간을 크게 늘린다", "속도를 순간적으로 더 빠르게 한다", "질량을 무한대로 만든다"],
        reason: "에어백은 충돌할 때 몸이 멈추는 시간을 늘려 평균 충격력을 줄여줍니다."
    },
    {
        q: "같은 속도로 부딪힐 때 질량이 큰 물체가 더 위험한 이유는?",
        answer: "운동량이 더 크기 때문",
        options: ["운동량이 더 크기 때문", "색깔이 진하기 때문", "공기 저항이 항상 0이기 때문"],
        reason: "운동량은 질량 x 속도입니다. 같은 속도라면 질량이 클수록 운동량이 커집니다."
    },
    {
        q: "우주 정거장 스테이지에서 낙하산 효과가 거의 없는 이유는?",
        answer: "공기와 중력이 거의 없기 때문",
        options: ["공기와 중력이 거의 없기 때문", "달걀이 너무 작기 때문", "낙하산이 너무 예쁘기 때문"],
        reason: "낙하산은 공기 저항을 이용합니다. 우주처럼 공기가 거의 없으면 낙하산의 효과도 거의 없습니다."
    },
    {
        q: "충돌 순간 달걀이 깨지는지 판단할 때 중요한 값은?",
        answer: "평균 충격력",
        options: ["평균 충격력", "옷 색깔", "버튼 크기"],
        reason: "달걀 껍데기가 버틸 수 있는 한계보다 평균 충격력이 크면 달걀이 깨집니다."
    }
];

const itemData = {
    bubble: { cost: 15, mass: 0.1, drag: 0.02, impactTime: 0.25 },
    sponge: { cost: 20, mass: 0.15, drag: 0.01, impactTime: 0.32 },
    parachute: { cost: 35, mass: 0.2, drag: 0.42, impactTime: 0.05 },
    airbag: { cost: 40, mass: 0.2, drag: 0.03, impactTime: 0.9 },
    armor: { cost: 25, mass: 2.8, drag: 0.005, impactTime: -0.08 }
};

const stages = [
    {
        title: "학교 옥상 낙하",
        gravity: 9.8,
        wind: 0,
        targetXRatio: 0.5,
        targetWidth: 170,
        durability: 72,
        intro: "1스테이지 목표: 단단함보다 충돌 시간을 늘리는 것이 중요합니다.",
        hint: "힌트: 강철 갑옷은 질량을 키워 운동량을 증가시킵니다.",
        clearReason:
            "정답인 이유: 뽁뽁이와 스펀지 신발은 충돌 시간을 늘려줍니다. 충격량이 비슷할 때 충돌 시간이 길어지면 평균 충격력이 작아져 달걀이 깨지지 않습니다."
    },
    {
        title: "강풍 고층 빌딩",
        gravity: 9.8,
        wind: 55,
        targetXRatio: 0.72,
        targetWidth: 150,
        durability: 62,
        intro: "2스테이지 목표: 낙하산으로 속도를 줄이고 바람을 계산하세요.",
        hint: "힌트: 바람이 오른쪽으로 밀기 때문에 수평 발사 속도를 왼쪽으로 조절해보세요.",
        clearReason:
            "정답인 이유: 낙하산은 공기 저항을 크게 만들어 낙하 속도를 줄입니다. 또한 강풍이 오른쪽으로 밀기 때문에 수평 속도와 시작 위치를 조절해야 과녁에 도착할 수 있습니다."
    },
    {
        title: "우주 정거장",
        gravity: 0.15,
        wind: 0,
        targetXRatio: 0.5,
        targetWidth: 180,
        durability: 999,
        intro: "3스테이지 목표: 중력이 거의 없으면 낙하 자체가 이상해집니다.",
        hint: "힌트: 중력이 거의 없으면 강한 충돌도 거의 일어나지 않습니다.",
        clearReason:
            "핵심 개념: 중력이 거의 없으면 아래로 떨어지는 낙하 운동 자체가 잘 일어나지 않습니다. 그래서 뭘 장착하든 달걀 아저씨는 크게 충돌하지 않고 둥둥 떠다니며 성공합니다."
    }
];

let quizIndex = 0;
let quizList = [];
let gameBudget = 60;
let spentBudget = 0;
let clearedStages = [false, false, false];
let currentStage = 0;
let egg;
let running = false;
let finished = false;
let lastTime = 0;

function hideAllScreens() {
    homeScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    endingScreen.classList.add("hidden");
}

function showOverlay(label, text, desc = "") {
    warningLabel.textContent = label;
    warningText.textContent = text;
    warningDesc.textContent = desc;
    warningOverlay.classList.remove("hidden");

    closeWarningBtn.classList.add("hidden");
    nextQuizBtn.classList.add("hidden");
    goGameBtn.classList.add("hidden");
    nextStageBtn.classList.add("hidden");
}

function hideOverlay() {
    warningOverlay.classList.add("hidden");
    warningDesc.textContent = "";
}

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function setupQuizRound() {
    quizIndex = 0;
    gameBudget = 60;
    spentBudget = 0;
    clearedStages = [false, false, false];

    quizList = shuffleArray(quizPool)
        .slice(0, 5)
        .map((quiz) => ({
            ...quiz,
            shuffledOptions: shuffleArray(quiz.options)
        }));
}

function renderQuiz() {
    const quiz = quizList[quizIndex];

    quizNumber.textContent = `${quizIndex + 1} / ${quizList.length}`;
    quizBudgetText.textContent = gameBudget;
    quizQuestion.textContent = quiz.q;
    quizChoices.innerHTML = "";

    quiz.shuffledOptions.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = `${index + 1}. ${option}`;
        button.addEventListener("click", () => checkQuizAnswer(option));
        quizChoices.appendChild(button);
    });
}

function checkQuizAnswer(selectedAnswer) {
    const quiz = quizList[quizIndex];
    const correct = selectedAnswer === quiz.answer;

    if (correct) {
        gameBudget += 15;
        showOverlay(
            "정답",
            "정답!",
            `올바른 답: ${quiz.answer}\n${quiz.reason}\n보상으로 예산 15원을 획득했습니다.`
        );
    } else {
        showOverlay(
            "오답",
            "오답!",
            `올바른 답: ${quiz.answer}\n틀린 이유: ${quiz.reason}`
        );
    }

    nextQuizBtn.classList.remove("hidden");
}

function goNextQuiz() {
    quizIndex += 1;

    if (quizIndex >= quizList.length) {
        showFinalBudget();
        return;
    }

    hideOverlay();
    renderQuiz();
}

function showFinalBudget() {
    showOverlay("최종 예산", "최종 예산", "");

    let rotateCount = 0;
    const spinningValues = ["60", "75", "90", "105", "120", "135"];

    const spinTimer = setInterval(() => {
        warningText.textContent = `${spinningValues[rotateCount % spinningValues.length]}원`;
        rotateCount += 1;
    }, 120);

    setTimeout(() => {
        clearInterval(spinTimer);
        warningLabel.textContent = "최종 예산";
        warningText.textContent = `${gameBudget}원`;
        warningDesc.textContent = "이 예산으로 달걀 아저씨의 보호 장비를 구매할 수 있습니다.";
        goGameBtn.classList.remove("hidden");
    }, 2000);
}

function enterGame() {
    hideOverlay();
    hideAllScreens();
    gameScreen.classList.remove("hidden");
    setStage(0);
    resizeCanvas();
}

function selectedItems() {
    return [...gears].filter((gear) => gear.checked).map((gear) => gear.value);
}

function totalCost() {
    return selectedItems().reduce((sum, key) => sum + itemData[key].cost, 0);
}

function getPhysics() {
    const selected = selectedItems();

    let mass = 1;
    let drag = 0.015;
    let impactTime = 0.14;

    selected.forEach((key) => {
        mass += itemData[key].mass;
        drag += itemData[key].drag;
        impactTime += itemData[key].impactTime;
    });

    return {
        mass,
        drag,
        impactTime: Math.max(0.05, impactTime),
        hasAirbag: selected.includes("airbag"),
        hasParachute: selected.includes("parachute")
    };
}

function stageTargetX() {
    return canvas.width * stages[currentStage].targetXRatio;
}

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();

    canvas.width = Math.floor(rect.width);
    canvas.height = Math.floor(rect.height);

    resetEgg();
    draw();
}

function resetEgg() {
    const startX = canvas.width * (Number(startXSlider.value) / 100);

    egg = {
        x: startX,
        y: 70,
        vx: Number(vxSlider.value),
        vy: 0,
        radius: 22,
        rotation: 0,
        cracked: false,
        safe: false,
        floatingTime: 0
    };

    running = false;
    finished = false;
    lastTime = 0;
}

function updateUI() {
    const stage = stages[currentStage];
    const currentCost = clearedStages[currentStage] ? 0 : totalCost();
    const totalUsed = spentBudget + currentCost;
    const remainingBudget = gameBudget - totalUsed;

    budgetEl.textContent = remainingBudget;
    costEl.textContent = totalUsed;
    gravityText.textContent = stage.gravity;
    windText.textContent = stage.wind === 0 ? "없음" : `→ ${Math.abs(stage.wind)}`;
    stageTitle.textContent = stage.title;
    vxText.textContent = vxSlider.value;
    xText.textContent = startXSlider.value;

    if (remainingBudget < 0) {
        message.textContent = `예산 초과입니다. ${Math.abs(remainingBudget)}원을 줄여야 출발할 수 있습니다.`;
    } else {
        message.textContent =
            `${stage.intro}\n` +
            `지금까지 사용한 예산: ${spentBudget}원`;
    }
}

function setStage(index) {
    currentStage = index;

    stageBtns.forEach((btn) => {
        btn.classList.toggle("active", Number(btn.dataset.stage) === index);
    });

    gears.forEach((gear) => {
        gear.checked = false;
    });

    updateUI();
    resetEgg();
    draw();
}

function startCountdown() {
    if (spentBudget + totalCost() > gameBudget) {
        showOverlay(
            "예산 초과",
            "출발 불가",
            "전 스테이지에서 사용한 예산까지 포함하면 최종 예산을 초과합니다."
        );
        closeWarningBtn.classList.remove("hidden");
        return;
    }

    let count = 3;
    showOverlay("낙하 경고", String(count), "달걀 아저씨 낙하 준비 중...");

    const timer = setInterval(() => {
        count -= 1;

        if (count > 0) {
            warningText.textContent = String(count);
            return;
        }

        if (count === 0) {
            warningText.textContent = "낙하!";
            return;
        }

        clearInterval(timer);
        hideOverlay();
        startGame();
    }, 800);
}

function startGame() {
    resetEgg();
    running = true;
    finished = false;
    message.textContent = "낙하 중... 속도, 질량, 충돌 시간이 결과를 결정합니다.";
    requestAnimationFrame(loop);
}

function loop(time) {
    if (!running) return;

    if (!lastTime) lastTime = time;

    const dt = Math.min((time - lastTime) / 1000, 0.033);
    lastTime = time;

    update(dt);
    draw();

    if (running) requestAnimationFrame(loop);
}

function update(dt) {
    const stage = stages[currentStage];
    const physics = getPhysics();
    const groundY = canvas.height - 78;

    const airResistanceX = -egg.vx * Math.abs(egg.vx) * physics.drag * 0.002;
    const airResistanceY = -egg.vy * Math.abs(egg.vy) * physics.drag * 0.002;

    egg.vx += (stage.wind * 0.35 + airResistanceX) * dt;
    egg.vy += (stage.gravity * 36 + airResistanceY) * dt;

    egg.x += egg.vx * dt;
    egg.y += egg.vy * dt;
    egg.rotation += egg.vx * dt * 0.018;

    if (stage.gravity < 1) {
        egg.floatingTime += dt;
        egg.y += Math.sin(egg.floatingTime * 2.4) * 0.5;
    }

    if (egg.x < egg.radius) {
        egg.x = egg.radius;
        egg.vx *= -0.45;
    }

    if (egg.x > canvas.width - egg.radius) {
        egg.x = canvas.width - egg.radius;
        egg.vx *= -0.45;
    }

    if (currentStage === 2 && egg.floatingTime > 5) {
        running = false;
        finished = true;
        egg.safe = true;

        message.textContent =
            "3스테이지 성공: 중력이 거의 없어 달걀 아저씨가 크게 충돌하지 않습니다.\n" +
            "핵심 개념: 낙하 운동은 중력이 있어야 제대로 일어납니다.";

        draw();

        setTimeout(showStageClear, 1000);
        return;
    }

    if (egg.y + egg.radius >= groundY) {
        egg.y = groundY - egg.radius;
        finishLanding();
    }
}

function finishLanding() {
    const stage = stages[currentStage];
    const physics = getPhysics();

    running = false;
    finished = true;

    const speed = Math.sqrt(egg.vx * egg.vx + egg.vy * egg.vy);
    let impactForce = ((physics.mass * speed) / physics.impactTime) / IMPACT_SCALE;

    if (physics.hasAirbag) {
        impactForce *= 0.28;
    }

    const targetX = stageTargetX();
    const targetLeft = targetX - stage.targetWidth / 2;
    const targetRight = targetX + stage.targetWidth / 2;
    const landedOnTarget = egg.x >= targetLeft && egg.x <= targetRight;

    if (!landedOnTarget) {
        egg.cracked = true;

        message.textContent =
            "실패: 과녁을 벗어났습니다.\n" +
            `착지 위치를 조절하세요. 현재 충격력은 약 ${impactForce.toFixed(1)}입니다.`;

        showOverlay("경고", "실패\n하였습니다", "과녁에 착지하지 못했습니다.");
        closeWarningBtn.classList.remove("hidden");
        draw();
        return;
    }

    if (impactForce > stage.durability) {
        egg.cracked = true;

        message.textContent =
            "실패: 달걀 껍데기가 깨졌습니다.\n" +
            `평균 충격력 ${impactForce.toFixed(1)} > 내구도 ${stage.durability}\n` +
            stage.hint;

        showOverlay("경고", "실패\n하였습니다", "충격력이 달걀 껍데기의 내구도를 넘었습니다.");
        closeWarningBtn.classList.remove("hidden");
        draw();
        return;
    }

    egg.safe = true;

    message.textContent =
        "성공: 달걀 아저씨 생존!\n" +
        `평균 충격력 ${impactForce.toFixed(1)} <= 내구도 ${stage.durability}\n` +
        "충돌 시간을 늘리거나 속도를 줄이면 충격력이 감소합니다.";

    draw();
    setTimeout(showStageClear, 1000);
}

function showStageClear() {
    const stage = stages[currentStage];

    if (!clearedStages[currentStage]) {
        spentBudget += totalCost();
        clearedStages[currentStage] = true;
    }

    updateUI();

    showOverlay(
        "스테이지 클리어",
        "스테이지\n클리어",
        `${stage.clearReason}\n\n이번 스테이지 사용 예산: ${totalCost()}원\n남은 총 예산: ${gameBudget - spentBudget}원`
    );

    nextStageBtn.textContent =
        currentStage >= stages.length - 1 ? "엔딩 보기" : "다음 스테이지로 넘어가기";

    nextStageBtn.classList.remove("hidden");
}

function goNextStage() {
    hideOverlay();

    if (currentStage >= stages.length - 1) {
        showEndingScreen();
        return;
    }

    setStage(currentStage + 1);
}

function showEndingScreen() {
    hideOverlay();
    hideAllScreens();
    endingScreen.classList.remove("hidden");
}

function drawBackground(stage) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
    sky.addColorStop(0, "#9d7147");
    sky.addColorStop(0.55, "#c49a62");
    sky.addColorStop(1, "#704329");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 0.18;

    for (let i = 0; i < canvas.width; i += 28) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i - 160, canvas.height);
        ctx.strokeStyle = "#2b170c";
        ctx.stroke();
    }

    ctx.globalAlpha = 1;

    drawBuilding(stage);
    drawGround();
    drawTarget(stage);

    if (currentStage === 1) drawWind();
    if (currentStage === 2) drawStars();
}

function drawBuilding(stage) {
    const topY = egg ? egg.y - 40 : 30;
    const buildingWidth = 110;

    ctx.fillStyle = "#4b2e1c";
    ctx.fillRect(0, 0, buildingWidth, canvas.height - 78);

    ctx.fillStyle = "#24150c";

    for (let y = 30; y < canvas.height - 120; y += 52) {
        ctx.fillRect(25, y, 24, 28);
        ctx.fillRect(64, y, 24, 28);
    }

    ctx.fillStyle = "#d6aa68";
    ctx.fillRect(0, Math.max(48, topY), buildingWidth + 22, 14);

    ctx.fillStyle = "#2a1a10";
    ctx.font = "700 15px Gowun Batang";
    ctx.fillText(stage.title, 18, 24);
}

function drawGround() {
    const groundY = canvas.height - 78;

    ctx.fillStyle = "#382011";
    ctx.fillRect(0, groundY, canvas.width, 78);

    ctx.fillStyle = "#5d3a21";

    for (let x = 0; x < canvas.width; x += 38) {
        ctx.fillRect(x, groundY + 18, 22, 6);
    }
}

function drawTarget(stage) {
    const groundY = canvas.height - 78;
    const x = stageTargetX();
    const w = stage.targetWidth;

    ctx.fillStyle = "#e7c27c";
    ctx.fillRect(x - w / 2, groundY + 8, w, 16);

    ctx.strokeStyle = "#8f2418";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.ellipse(x, groundY + 16, w / 2, 17, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "#2a1a10";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(x, groundY + 16, w / 4, 8, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#2a1a10";
    ctx.font = "700 15px Gowun Batang";
    ctx.fillText("과녁", x - 14, groundY + 48);
}

function drawWind() {
    ctx.strokeStyle = "rgba(255, 235, 180, 0.75)";
    ctx.lineWidth = 4;

    for (let y = 130; y < canvas.height - 130; y += 80) {
        ctx.beginPath();
        ctx.moveTo(190, y);
        ctx.bezierCurveTo(310, y - 30, 430, y + 30, 560, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(560, y);
        ctx.lineTo(536, y - 13);
        ctx.lineTo(540, y + 16);
        ctx.closePath();
        ctx.fillStyle = "rgba(255, 235, 180, 0.75)";
        ctx.fill();
    }
}

function drawStars() {
    ctx.fillStyle = "rgba(255, 239, 190, 0.8)";

    for (let i = 0; i < 45; i++) {
        const x = (i * 97) % canvas.width;
        const y = 60 + ((i * 53) % 420);
        ctx.fillRect(x, y, 3, 3);
    }

    ctx.fillStyle = "#3e2818";
    ctx.beginPath();
    ctx.arc(canvas.width - 95, 95, 38, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#c9a166";
    ctx.font = "700 16px Gowun Batang";
    ctx.fillText("무중력?", canvas.width - 130, 155);
}

function drawEgg() {
    const physics = getPhysics();
    const selected = selectedItems();

    ctx.save();
    ctx.translate(egg.x, egg.y);
    ctx.rotate(egg.rotation);

    if (physics.hasParachute) drawParachute();
    if (selected.includes("bubble")) drawBubbleWrap();

    if (selected.includes("armor")) {
        ctx.fillStyle = "#57524a";
        ctx.beginPath();
        ctx.ellipse(0, 4, 31, 39, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.fillStyle = egg.cracked ? "#d9c082" : "#f4dfae";
    ctx.beginPath();
    ctx.ellipse(0, 0, 23, 31, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#2a1a10";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "#2a1a10";
    ctx.beginPath();
    ctx.arc(-8, -5, 2.5, 0, Math.PI * 2);
    ctx.arc(8, -5, 2.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 5, 7, 0, Math.PI);
    ctx.stroke();

    ctx.fillStyle = "#2a1a10";
    ctx.fillRect(-16, 19, 32, 18);

    ctx.fillStyle = "#f4dfae";
    ctx.fillRect(-6, 19, 12, 18);

    drawThinLimbs(selected);

    if (physics.hasAirbag && finished) {
        ctx.fillStyle = "rgba(245, 229, 174, 0.75)";
        ctx.beginPath();
        ctx.ellipse(0, 34, 48, 20, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#7d4f2e";
        ctx.stroke();
    }

    if (egg.cracked) {
        ctx.strokeStyle = "#7c1f16";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-4, -25);
        ctx.lineTo(5, -12);
        ctx.lineTo(-3, 0);
        ctx.lineTo(7, 14);
        ctx.stroke();
    }

    if (egg.safe) {
        ctx.fillStyle = "#3f6b3f";
        ctx.font = "700 19px Gowun Batang";
        ctx.fillText("생존", -20, -42);
    }

    ctx.restore();
}

function drawParachute() {
    ctx.save();
    ctx.rotate(-egg.rotation);

    ctx.fillStyle = "#7a2d1e";
    ctx.beginPath();
    ctx.arc(0, -76, 58, Math.PI, Math.PI * 2);
    ctx.lineTo(58, -76);
    ctx.lineTo(-58, -76);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = "#2a1a10";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-42, -75);
    ctx.lineTo(-16, -24);
    ctx.moveTo(42, -75);
    ctx.lineTo(16, -24);
    ctx.moveTo(0, -76);
    ctx.lineTo(0, -25);
    ctx.stroke();

    ctx.restore();
}

function drawBubbleWrap() {
    ctx.fillStyle = "rgba(240, 230, 180, 0.55)";

    for (let a = 0; a < Math.PI * 2; a += Math.PI / 5) {
        ctx.beginPath();
        ctx.arc(Math.cos(a) * 26, Math.sin(a) * 30, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#76502f";
        ctx.stroke();
    }
}

function drawThinLimbs(selected) {
    ctx.strokeStyle = "#2a1a10";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(-23, 12);
    ctx.lineTo(-39, 25);
    ctx.moveTo(23, 12);
    ctx.lineTo(39, 25);
    ctx.moveTo(-9, 36);
    ctx.lineTo(-18, 52);
    ctx.moveTo(9, 36);
    ctx.lineTo(18, 52);
    ctx.stroke();

    if (selected.includes("sponge")) {
        ctx.fillStyle = "#c08a3e";
        ctx.fillRect(-28, 51, 18, 7);
        ctx.fillRect(10, 51, 18, 7);
    } else {
        ctx.fillStyle = "#2a1a10";
        ctx.fillRect(-26, 51, 15, 5);
        ctx.fillRect(11, 51, 15, 5);
    }
}

function drawHUD() {
    const physics = getPhysics();

    ctx.fillStyle = "rgba(242, 216, 162, 0.82)";
    ctx.fillRect(canvas.width - 210, canvas.height - 155, 188, 96);

    ctx.strokeStyle = "#2a1a10";
    ctx.lineWidth = 2;
    ctx.strokeRect(canvas.width - 210, canvas.height - 155, 188, 96);

    ctx.fillStyle = "#2a1a10";
    ctx.font = "700 14px Gowun Batang";
    ctx.fillText(`질량: ${physics.mass.toFixed(2)}`, canvas.width - 194, canvas.height - 128);
    ctx.fillText(`공기저항: ${physics.drag.toFixed(3)}`, canvas.width - 194, canvas.height - 104);
    ctx.fillText(`충돌시간: ${physics.impactTime.toFixed(2)}초`, canvas.width - 194, canvas.height - 80);
}

function draw() {
    if (!ctx || gameScreen.classList.contains("hidden")) return;

    drawBackground(stages[currentStage]);

    if (egg) {
        drawEgg();
    }

    drawHUD();
}

quizStartBtn.addEventListener("click", () => {
    setupQuizRound();
    hideAllScreens();
    quizScreen.classList.remove("hidden");
    renderQuiz();
});

nextQuizBtn.addEventListener("click", goNextQuiz);
goGameBtn.addEventListener("click", enterGame);
nextStageBtn.addEventListener("click", goNextStage);
closeWarningBtn.addEventListener("click", hideOverlay);

stageBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        setStage(Number(btn.dataset.stage));
    });
});

gears.forEach((gear) => {
    gear.addEventListener("change", () => {
        updateUI();
        draw();
    });
});

vxSlider.addEventListener("input", () => {
    updateUI();
    resetEgg();
    draw();
});

startXSlider.addEventListener("input", () => {
    updateUI();
    resetEgg();
    draw();
});

startBtn.addEventListener("click", startCountdown);

resetBtn.addEventListener("click", () => {
    updateUI();
    resetEgg();
    draw();
});

window.addEventListener("resize", () => {
    if (!gameScreen.classList.contains("hidden")) {
        resizeCanvas();
    }
});