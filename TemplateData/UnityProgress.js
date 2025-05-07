var pc = 1;
function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module)
    return;
  if (!gameInstance.logo) {
    gameInstance.logo = document.createElement("div");
    gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
    gameInstance.container.appendChild(gameInstance.logo);
  }
  if (!gameInstance.progress) {
    gameInstance.progress = document.createElement("div");
    gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
    gameInstance.progress.empty = document.createElement("div");
    gameInstance.progress.empty.className = "empty";
    gameInstance.progress.appendChild(gameInstance.progress.empty);
    gameInstance.progress.full = document.createElement("div");
    gameInstance.progress.full.className = "full";
    gameInstance.progress.appendChild(gameInstance.progress.full);
    gameInstance.container.appendChild(gameInstance.progress);
    gameInstance.progressText = document.createElement("div");
    gameInstance.progressText.className = "progressText " + gameInstance.Module.splashScreenStyle;
    gameInstance.progress.appendChild(gameInstance.progressText);

    gameInstance.progressCircle = document.createElement("div");
    gameInstance.progressCircle.className = "progressCircle";
    gameInstance.progress.appendChild(gameInstance.progressCircle);
    gameInstance.progressNumText = document.createElement("div");
    gameInstance.progressNumText.className = "progressNumText";
    gameInstance.progressCircle.appendChild(gameInstance.progressNumText);
  }
  var tempw = 548 * progress;
  gameInstance.progress.full.style.width = tempw + "px";
  // gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";

  if (progress <= 0.3) {
    var r = Math.random();
    if (r > 0.9) {
      //	  pc = pc+1;
    }
    gameInstance.progressText.innerHTML = "正在下载框架，请耐心等待";
  }
  else if (progress <= 0.88) {
    var r = Math.random();
    if (r > 0.9) {
      //	  pc = pc+1;
    }
    gameInstance.progressText.innerHTML = "正在下载数据，请耐心等待";
  }
  else if (progress < 1) {
    if (Math.random() > 0.9)
      //	  pc = pc+1;
      gameInstance.progressText.innerHTML = "正在加载场景，请耐心等待";
  }
  gameInstance.progressNumText.innerHTML = (100 * progress).toFixed(0) + "%";

  if (progress == 1) {
    setTimeout(WaitForClose, 5000);//等待5s隐藏加载界面
  }
}

function WaitForClose() {
  gameInstance.logo.style.display = gameInstance.progress.style.display = "none";
  document.getElementById("webcontent").style.display = "none";
}