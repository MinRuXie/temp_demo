# 無障礙網頁試改
* https://minruxie.github.io/temp_demo/accessibility_cenports-fulfillment/

## 修改項目
1. font-size改為相對單位
2. 表單元素增加aria-label屬性
3. a標籤增加 title屬性描述其行為

## 受測項目
* I. HM1130104C:可見的表單控制元件均需有對應的標籤<label>組件，或有標題(title)屬性，且其內容或值均不得為空字串或空白(A) 
    * 表單中需要使用者輸入之input控制元件，需有對應的label標籤組件。如為無法設置標籤組件，請以title屬性或aria-*屬性提供該控制元件的標題說明，以幫助螢幕報讀軟體識別。
    `<input type="text" placeholder="Your Name">`
* II. CS3140801C:需有CSS樣式規則使用百分比數值或相對長度單位來設定欄寬，且最大欄寬不得超過80個字母(中日韓語系的40個文字)(AAA) 
    * 外部CSS(https://minruxie.github.io/temp_demo/accessibility_cenports-fulfillment/css/plugins/bootstrap.css)中，樣式表宣告max-width屬性時，應以相對尺寸為計算單位。
    `max-width:540px`
* III. HM3330500C:使用標題(title)屬性來提供針對脈絡而作的協助說明(AAA) 
    * 表單中需要使用者輸入之input控制元件，需有對應的label標籤組件。如為無法設置標籤組件，請以title屬性或aria-*屬性提供該控制元件的標題說明，以幫助螢幕報讀軟體識別。
    `<input type="text" placeholder="Your Name">`

