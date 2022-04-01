document.addEventListener("DOMContentLoaded", () => {
  var changeBg = document.querySelector("#changeBg");
  changeBg.style.backgroundImage = `url(./resource/italiya.png)`;

  const changeContent = document.querySelectorAll("#changeContent");
  changeContent.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      fetch("http://localhost:3000/m")
        .then((responce) => responce.json())
        .then((data) => {
          setTimeout(() => {
            // var changeBg = document.querySelector("#changeBg");
            changeBg.style.backgroundImage = `url(${data[index].bgImg})`;
            document.querySelector("#myChange").innerHTML = `
          <div class="benjamin">
              <img src="${data[index].participantImg}" id="participantImg" alt="" />
              <span>
                <p class="lato-medium" id="participant">${data[index].participant}</p>
                <p class="lato-semibold" id="job">${data[index].job}</p>
              </span>
            </div>
            <div class="south-england-info">
              <p class="lato-medium">DESTINATIONS</p>
              <p class="roboto-slab-bold" id="destination">
                ${data[index].destination}
              </p>
              <div class="england-div">
                <button type="button" class="button-read" id="read-more-btn">
                  Read more
                  <img
                    src="https://img.icons8.com/material-rounded/25/ffffff/long-arrow-right.png"
                  />
                </button>

                <div type="button" class="play">
                  <img src="./resource/Border.svg" alt="" />
                  <img src="./resource/Arrow.svg" alt="" />
                </div>
                <div class="pause-item">
                  <p class="lato-medium">The chalk cliff of Beachy Head</p>
                  <p class="lato-semibold">18:05</p>
                </div>
              </div>
            </div>
          `;
          }, 300);
        });
    });
  });
});
