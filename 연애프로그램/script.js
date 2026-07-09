const stages = [
    {
        title: "너와 나의 짜릿한 인력",
        player: {
            symbol: "Na",
            name: "나트륨",
            role: "1족 알칼리 금속",
            valence: 1,
            charge: "0",
            trait: "에너지가 넘치는 직진남. 전자 1개를 잃고 안정해지고 싶다."
        },
        target: {
            symbol: "Cl",
            name: "염소",
            role: "17족 할로젠",
            valence: 7,
            charge: "0",
            trait: "전자 1개가 부족한 까칠한 완벽주의자."
        },
        speaker: "염소 Cl",
        dialogue: "아... 전자 하나만 더 있으면 네온처럼 완벽해질 텐데. 너 혹시 영양가 있는 전자 가지고 있어?",
        choices: [
            {
                text: "난 전자가 1개 남아서 고민인데, 내 걸 받아줄래?",
                love: 100,
                danger: 8,
                label: "해피 엔딩",
                title: "짠내 나는 커플 NaCl 탄생!",
                result: "나트륨은 전자 하나를 잃어 Na+가 되고, 염소는 전자 하나를 얻어 Cl-가 됐다. 플러스와 마이너스는 강하게 끌려 서로 결합했다.",
                science: "금속인 나트륨은 전자를 잃기 쉽고, 비금속인 염소는 전자를 얻기 쉽다. 양이온과 음이온 사이의 정전기적 인력이 이온 결합이다."
            },
            {
                text: "우리 전자를 반씩 공유해서 같이 쓰자.",
                love: 22,
                danger: 18,
                label: "거절 엔딩",
                title: "염소의 취향이 아니었다",
                result: "염소는 눈을 가늘게 뜨고 말했다. '난 딱 한 개를 얻고 싶은 거지, 어정쩡하게 나눠 쓰고 싶은 게 아니야.'",
                science: "Na와 Cl의 대표 결합은 전자를 공유하는 공유 결합이 아니라 전자가 이동하는 이온 결합이다."
            },
            {
                text: "전자? 내가 왜 줘야 해?",
                love: 0,
                danger: 35,
                label: "불안정 엔딩",
                title: "둘 다 예민한 상태로 남았다",
                result: "나트륨은 여전히 전자 하나 때문에 불안했고, 염소는 여전히 하나가 부족해서 날카로웠다.",
                science: "안정한 전자 배치를 이루려면 Na는 전자 1개를 잃고 Cl은 전자 1개를 얻어야 한다."
            }
        ]
    },
    {
        title: "우리 서로의 부족함을 채우자",
        player: {
            symbol: "H",
            name: "수소",
            role: "작은 비금속",
            valence: 1,
            charge: "0",
            trait: "전자 1개를 더 가진 것처럼 되어 헬륨처럼 안정해지고 싶다."
        },
        target: {
            symbol: "O",
            name: "산소",
            role: "16족 비금속",
            valence: 6,
            charge: "0",
            trait: "전자 2개가 부족해서 혼자 온 고백에는 만족하지 못한다."
        },
        speaker: "산소 O",
        dialogue: "전자 하나? 귀엽네. 근데 난 두 개가 필요하거든. 혹시 너 혼자 온 거야?",
        choices: [
            {
                text: "친구 수소를 데려올게. 우리 둘이 함께 공유하자.",
                love: 100,
                danger: 5,
                label: "해피 엔딩",
                title: "생명의 근원 H2O 탄생!",
                result: "수소 두 명은 각각 산소와 전자쌍을 공유했다. 산소는 옥텟에 가까워지고, 수소들은 듀엣을 만족해 물이 됐다.",
                science: "물 분자에서 산소는 두 수소와 각각 공유 결합을 만든다. 수소는 듀엣 규칙, 산소는 옥텟 규칙을 만족한다."
            },
            {
                text: "내 전자 하나만 공유하면 충분하지 않아?",
                love: 45,
                danger: 15,
                label: "아쉬운 엔딩",
                title: "산소는 아직 허전했다",
                result: "산소는 손가락 두 개를 펼쳤다. '하나는 고맙지만, 난 두 개가 필요하다니까?'",
                science: "산소의 최외각 전자는 6개이므로 안정한 8개처럼 되려면 전자쌍 공유가 두 번 필요하다."
            },
            {
                text: "내 전자를 완전히 줄게.",
                love: 18,
                danger: 30,
                label: "불안정 엔딩",
                title: "수소가 너무 무리했다",
                result: "수소는 전자를 잃고 더 외로워졌다. 산소도 원하는 안정한 관계를 얻지 못했다.",
                science: "수소와 산소 같은 비금속끼리는 전자를 완전히 주고받기보다 전자쌍을 공유해 안정해진다."
            }
        ]
    },
    {
        title: "철벽의 18족",
        player: {
            symbol: "Na",
            name: "나트륨",
            role: "1족 알칼리 금속",
            valence: 1,
            charge: "0",
            trait: "누군가에게 전자를 넘기고 안정해지고 싶은 직진형 원소."
        },
        target: {
            symbol: "Ne",
            name: "네온",
            role: "18족 비활성 기체",
            valence: 8,
            charge: "0",
            trait: "이미 완벽한 전자 배치. 남의 전자도 마음도 필요 없다."
        },
        speaker: "네온 Ne",
        dialogue: "무슨 일이지? 난 이미 최외각 전자 8개로 완벽한데.",
        choices: [
            {
                text: "내 전자를 받아줘!",
                love: 0,
                danger: 3,
                label: "철벽 엔딩",
                title: "완벽한 전자 배치 앞에서 사랑은 무력했다",
                result: "네온은 표정 하나 바꾸지 않았다. '난 받을 필요가 없어. 이미 완성형이거든.'",
                science: "네온 같은 18족 비활성 기체는 안정한 최외각 전자 배치를 가져 다른 원소와 잘 반응하지 않는다."
            },
            {
                text: "우리 전자를 공유하자!",
                love: 0,
                danger: 3,
                label: "철벽 엔딩",
                title: "공유 제안도 통하지 않았다",
                result: "네온은 차갑게 답했다. '부족한 게 있어야 나누지. 난 부족한 게 없어.'",
                science: "공유 결합은 부족한 전자를 함께 채우기 위한 방식이다. 이미 안정한 네온에게는 필요하지 않다."
            },
            {
                text: "혹시 외롭지 않아?",
                love: 0,
                danger: 1,
                label: "솔로 엔딩",
                title: "네온은 혼자서도 완벽했다",
                result: "네온은 반짝이며 말했다. '외로움? 그건 반응성이 큰 애들이나 느끼는 감정 아닐까?'",
                science: "비활성 기체의 낮은 반응성은 이미 안정한 전자 배치에서 비롯된다."
            }
        ]
    }
];

let currentStage = 0;

const stageTabs = document.querySelector("#stageTabs");
const playerCard = document.querySelector("#playerCard");
const targetCard = document.querySelector("#targetCard");
const stageNumber = document.querySelector("#stageNumber");
const stageTitle = document.querySelector("#stageTitle");
const speakerName = document.querySelector("#speakerName");
const dialogueText = document.querySelector("#dialogueText");
const choices = document.querySelector("#choices");
const loveMeter = document.querySelector("#loveMeter");
const dangerMeter = document.querySelector("#dangerMeter");
const resultCard = document.querySelector("#resultCard");
const resultLabel = document.querySelector("#resultLabel");
const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");
const scienceNote = document.querySelector("#scienceNote");
const nextButton = document.querySelector("#nextButton");

function electronDots(count) {
    return Array.from({ length: count }, () => '<span class="electron" aria-hidden="true"></span>').join("");
}

function renderElementCard(element) {
    return `
        <div>
            <div class="element-symbol">${element.symbol}</div>
            <h3>${element.name}</h3>
            <p><strong>${element.role}</strong></p>
            <p class="trait">${element.trait}</p>
        </div>
        <div>
            <p>최외각 전자: <strong>${element.valence}개</strong></p>
            <p>현재 전하: <strong>${element.charge}</strong></p>
            <div class="electron-strip" aria-label="최외각 전자 ${element.valence}개">
                ${electronDots(element.valence)}
            </div>
        </div>
    `;
}

function renderTabs() {
    stageTabs.innerHTML = stages.map((stage, index) => `
        <button class="stage-tab ${index === currentStage ? "active" : ""}" data-stage="${index}">
            ${index + 1}스테이지
        </button>
    `).join("");

    document.querySelectorAll(".stage-tab").forEach((button) => {
        button.addEventListener("click", () => {
            currentStage = Number(button.dataset.stage);
            nextButton.textContent = "다음 스테이지";
            renderStage();
        });
    });
}

function renderStage() {
    const stage = stages[currentStage];

    renderTabs();

    playerCard.innerHTML = renderElementCard(stage.player);
    targetCard.innerHTML = renderElementCard(stage.target);

    stageNumber.textContent = `${currentStage + 1} STAGE`;
    stageTitle.textContent = stage.title;
    speakerName.textContent = stage.speaker;
    dialogueText.textContent = stage.dialogue;

    loveMeter.style.width = "0%";
    dangerMeter.style.width = "0%";

    resultCard.classList.add("hidden");
    nextButton.textContent = "다음 스테이지";

    choices.innerHTML = stage.choices.map((choice, index) => `
        <button class="choice-button" data-choice="${index}">
            ${index + 1}. ${choice.text}
        </button>
    `).join("");

    document.querySelectorAll(".choice-button").forEach((button) => {
        button.addEventListener("click", () => {
            selectChoice(Number(button.dataset.choice));
        });
    });
}

function selectChoice(choiceIndex) {
    const choice = stages[currentStage].choices[choiceIndex];

    loveMeter.style.width = `${choice.love}%`;
    dangerMeter.style.width = `${choice.danger}%`;

    resultLabel.textContent = choice.label;
    resultTitle.textContent = choice.title;
    resultText.textContent = choice.result;
    scienceNote.textContent = choice.science;

    resultCard.classList.remove("hidden");

    choices.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
    });
}

nextButton.addEventListener("click", handleNextButton);

function handleNextButton() {
    if (nextButton.textContent === "처음부터 다시하기") {
        currentStage = 0;
        renderStage();
        return;
    }

    if (currentStage === stages.length - 1) {
        showFinalEnding();
        return;
    }

    currentStage += 1;
    renderStage();
}

function showFinalEnding() {
    stageTabs.querySelectorAll(".stage-tab").forEach((button) => {
        button.classList.remove("active");
    });

    playerCard.innerHTML = `
        <div>
            <div class="element-symbol">A+</div>
            <h3>플레이어</h3>
            <p><strong>옥텟 마스터</strong></p>
            <p class="trait">원소들의 마음과 전자 배치를 모두 이해했다.</p>
        </div>
        <div>
            <p>학습 완료도: <strong>100%</strong></p>
            <p>현재 상태: <strong>안정</strong></p>
            <div class="electron-strip">
                ${electronDots(8)}
            </div>
        </div>
    `;

    targetCard.innerHTML = `
        <div>
            <div class="element-symbol">8</div>
            <h3>옥텟 규칙</h3>
            <p><strong>최종 개념</strong></p>
            <p class="trait">대부분의 원소는 최외각 전자 8개처럼 되려는 방향으로 결합한다.</p>
        </div>
        <div>
            <p>이온 결합: <strong>완료</strong></p>
            <p>공유 결합: <strong>완료</strong></p>
            <div class="electron-strip">
                ${electronDots(8)}
            </div>
        </div>
    `;

    stageNumber.textContent = "FINAL";
    stageTitle.textContent = "옥텟연애 졸업식";
    speakerName.textContent = "화학 선생님";
    dialogueText.textContent = "축하합니다! 이온 결합, 공유 결합, 비활성 기체의 철벽까지 모두 배웠습니다.";

    loveMeter.style.width = "100%";
    dangerMeter.style.width = "0%";

    choices.innerHTML = "";

    resultCard.classList.remove("hidden");
    resultLabel.textContent = "최종 엔딩";
    resultTitle.textContent = "전자를 이해한 자";
    resultText.textContent = "당신은 원소들의 마음을 읽고, 안정한 전자 배치가 왜 중요한지 깨달았다. 이제 어떤 원소가 와도 결합의 운명을 판단할 수 있다!";
    scienceNote.textContent = "최외각 전자가 안정해지는 방향으로 원소들은 전자를 잃거나, 얻거나, 공유한다. 이것이 화학 결합의 핵심이다.";

    nextButton.textContent = "처음부터 다시하기";
}

renderStage();