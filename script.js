console.log("connected js ")

function strToNum(id) {
  return parseInt(document.getElementById(id).innerText);
}


const copyButtons = document.querySelectorAll(".copy-btn");
copyButtons.forEach(function (copyButton) {
  copyButton.addEventListener("click", function () {
    const parentCard = copyButton.parentElement.parentElement;

    const number = parentCard.querySelector(".services-num").innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied : " + number);

    const copyNum = strToNum("copy-count");
    document.getElementById("copy-count").innerText = copyNum + 1;
  });
});


const allHeart = document.getElementsByClassName("heart-click");
for (const heart of allHeart) {
  heart.addEventListener("click", function () {
    const heartValue = strToNum("heart-count");
    document.getElementById("heart-count").innerText = heartValue + 1;
  });
}

const callButtons = document.querySelectorAll(".call-btn");
const callData = [];

callButtons.forEach(function (callBtn) {
  callBtn.addEventListener("click", function () {
    const parentDiv = callBtn.parentElement.parentElement;

     const serviceName = parentDiv.querySelector(".services-name").innerText;
    const callServicesName = parentDiv.querySelector(".callServices").innerText;
    const serviceNum = parentDiv.querySelector(".services-num").innerText;
    const coinValue = strToNum("coin-count");


if (coinValue < 20) {
      alert(
        "You don't have enough coins. You need at least 20 coins to make a call"
      );

      return;
    }

 alert(`📞 Calling ${serviceName} ${serviceNum}...`);

    document.getElementById("coin-count").innerText = coinValue - 20;


      const data = {
      name: callServicesName,
      num: serviceNum,
      date: new Date().toLocaleTimeString(),
    };
    callData.push(data);

    const historyContainer = document.getElementById("history-container");
    historyContainer.innerText = "";


      callData.forEach(function (value) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="flex gap-1 justify-between items-center bg-[#F2F4F6] p-2 rounded-md mb-2">
          <div>
            <h2 class="italic text-xs">${value.name}</h2>
            <p class="italic text-xs text-gray-500">${value.num}</p>
          </div>
          <p class="text-xs italic">${value.date}</p>
        </div>
      `;
      historyContainer.appendChild(div);
    });
  });
});

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("history-container").innerText = "";
  callData.length = 0;
});
