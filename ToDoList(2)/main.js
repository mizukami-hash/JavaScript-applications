"use strict";

{
  // 　表
  const table = document.querySelector("table");
  // todo
  const todo = document.querySelector("#todo");
  // 優先度
  const priority = document.querySelector("select");
  // 締め切り
  const deadline = document.querySelector('input[type ="date"]');
  // 登録ボタン
  const submit = document.querySelector("#submit");

  // 登録ボタンクリック時のイベント

  submit.addEventListener("click", () => {
    // 1行ごとの入力項目を入れるオブジェクトを作って値を代入
    const items = {};
    items.todo = todo.value;
    items.priority = priority.value;
    items.deadline = deadline.value;
    items.done = false;
    console.log(items);

    // リセット
    todo.value = "";
    priority.value = "普";
    deadline.value = "";

    // trを作成・追加

    const tr = document.createElement("tr");

    // tdを作成、itemsのdone項目に来た時だけチェックボックスを作成
    for (const prop in items) {
      const td = document.createElement("td");
      if (prop == "done") {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = items[prop];
        td.appendChild(checkbox);
      } else {
        td.textContent = items[prop];
      }

      tr.appendChild(td);
    }
    table.appendChild(tr);
  });

  // 絞り込みフィルターボタンの作成
  // const filterBtn = document.createElement('button');
  // filterBtn.textContent='優先度（高）で絞り込み';
  // filterBtn.id ='priority'  /*css用にidを追加*/
  // const main = document.querySelector('main');
  // main.appendChild(filterBtn);

  // filterBtn.addEventListener('click',()=>{
  //   for (const items of list){
  //     if(items.priority =='高'){
  //       addItem(items);
  //     }
  //   }

  // 未入力の時のエラー
  // 保存機能

  // });
}
