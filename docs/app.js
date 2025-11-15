async function loadData() {
    try {
        const response = await fetch("data.json?cache=" + Date.now());
        const data = await response.json();
        renderCards(data);
    } catch (error) {
        console.error("데이터 로드 실패:", error);
    }
}

function renderCards(data) {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="keyword">${item.keyword}</div>
            <div class="title">${item.title}</div>
            <div class="source">${item.source}</div>
            <a href="${item.url}" target="_blank" class="link">기사 보기</a>
            <div class="time">${item.time}</div>
        `;

        container.appendChild(card);
    });
}

loadData();