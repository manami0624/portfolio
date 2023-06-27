window.addEventListener('load', function() {
  const pullDownButton = document.getElementById("lists");
  const pullDownParents = document.getElementById("pull-down");
  const pullDownChild = document.querySelectorAll(".menu_line");
  const menuText = pullDownButton.querySelector(".menu_text");

  pullDownButton.addEventListener('mouseover', function() {
    this.style.color = "#0085A1";
  });

  pullDownButton.addEventListener('mouseout', function() {
    this.style.color = "";
  });

  pullDownButton.addEventListener('click', function() {
    // プルダウンメニューの表示と非表示の設定
    if (pullDownParents.style.display === "block") {
      pullDownParents.style.display = "";
      menuText.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      `;
    } else {
      pullDownParents.style.display = "block";
      menuText.textContent = "×";
    }

    // ×マークの表示と非表示の切り替え
    this.classList.toggle("active");
  });

  // ページロード時に初期状態を設定
  if (pullDownParents.style.display === "block") {
    menuText.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    `;
    pullDownButton.classList.add("active");
  }
});

window.addEventListener('load', function() {
  const topImage = document.querySelector('.top-image');

  topImage.style.opacity = '0'; // 初期状態で写真を透明にする

  setTimeout(function() {
    topImage.style.transition = 'opacity 2s'; // 1秒かけて写真が現れるようにする
    topImage.style.opacity = '1';
    topImage.style.opacity = '0.9';
  }, 500); // 0.5秒後にアニメーションを開始する
});
