"use strict";

{
  // 【タスクを追加ボタン】を押したときのイベント
  // ul,input要素の取得とliの作成
  document.querySelector("#addTask").addEventListener("click", () => {
    const li = document.createElement("li");
    const ul = document.querySelector("ul").appendChild(li);
    const task = document.querySelector("#task-name");
    li.textContent = task.value;

    // 入力項目のリセットとフォーカス設定
    task.value = "";
    task.focus();

    // チェックボックスの作成と追加
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "task");
    li.appendChild(input);

    //  liに完了・削除ボタンを追加
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "完了";
    li.appendChild(completeBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "削除";
    li.appendChild(deleteBtn);

    //   //  完了ボタンクリック
    //   completeBtn.addEventListener('click',e=>{
    //     e.preventDefault();
    //     this.setAttribute('class','completeBtn disabled');
    //     // 同じ親要素内の直前の要素を指定
    //     this.previousElementSibling.setAttribute('class','line-through');
    //   });

    //   //  削除ボタンクリック
    //   deleteBtn.addEventListener('click', e=>{
    //     e.preventDefault();
    //     todoList.removeChild(this.closest('li'));
    //   });
    // }
  });
}
