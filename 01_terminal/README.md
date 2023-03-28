# 腥紅陸空魔女碉堡
* 斷點 `1199.98px`


## ■ 傳送門

### 活動網站
* 首頁 `http://127.0.0.1:5500/`
* 規則頁 `http://127.0.0.1:5500/rules.html`

### 購票網站
* 票券說明 `http://127.0.0.1:5500/booking_now.html`
* Step1.選擇票種與人數 `http://127.0.0.1:5500/booking_ticket.html`
* Step2.選擇日期與時段 `http://127.0.0.1:5500/booking_datetime.html`
* Step3.填寫資料 `http://127.0.0.1:5500/booking_client.html`
* Step4.確認資料 `http://127.0.0.1:5500/booking_check.html`
* 購票成功 `http://127.0.0.1:5500/booking_success.html`
* 購票失敗 `http://127.0.0.1:5500/booking_fail.html`

### 元件庫
* 購票 `http://127.0.0.1:5500/booking_template.html`
* 活動 `http://127.0.0.1:5500/activity_template.html`


## ■ 專案結構
```
project/
    |- css/
    |   |- plugins/
    |   |   |- icomoon/
    |   |   |   |- style.css (iconfont)
    |   |   
    |   |- reset.scss (全站共用)
    |   |- variable.scss (全站共用)
    |   |- main-component.scss (全站共用)
    |   |- activity-component.scss (activity 元件)
    |   |- booking-component.scss  (booking 元件)
    |   |- index.scss (index 專用)    
    |   |- booking-now.scss (booking 介紹頁專用)
    |   |- booking-result.scss (booking 結果頁專用)
    |   |- booking-step.scss (booking 購票頁專用)
    |
    |- js/
    |   |- plugins/
    |   |- main.js (全站共用)
    |   |- index.js (index 專用)
    |   |- home-slideshow.js (index owl-carousel 專用)
    |   |- booking-dropdown.js (bs dropdown 元件專用)
    |   |- booking-ticket.js (booking_ticket.html 專用)
    |   |- booking-datetime.js (booking_datetime.html 專用)
    |   |- booking-client.js (booking_client.html 專用)
    |
    |- images/
    |
    |- index.html
    |- rules.html
    |
    |- booking_now.html
    |- booking_ticket.html
    |- booking_datetime.html
    |- booking_client.html
    |- booking_check.html
    |- booking_success.html
    |- booking_fail.html
    |
    |- booking_template.html (booking 元件)
    |- activity_template.html (activity 元件)
```


## ■ iconfont
* `css/plugins/icomoon/style.css`

```css
font-family: 'icomoon' !important;
```

## ■ 元件

### `main-component.scss`
* Nav Bar：購票、活動
* Nav Menu：購票、活動

### `activity-component.scss`
* Fixed Button (left)：活動
* Fixed Button (right)：活動

### `main.js`：全站
* JS loading animation 效果
* JS mobile - nav bar button 效果：控制 MENU 的開啟和關閉。
* JS mobile - nav menu item 效果：點擊 MENU 選項後，關閉 MENU。
* JS mobile - switch nav bar text 效果：切換 NAV BAR 顯示的文字。

### `index.js`：index.html
* JS anchor menu effect 效果：MENU 選項依據目前捲軸所在位置設定樣式。
* JS section hide target effect 效果：位於 HERO 區塊時，隱藏指定的元素。
* JS mobile - set nav bar section text 效果：NAV BAR 依據目前捲軸所在位置，設定 Section 文字。



## ■ Booking 資料驗證

### Step 1. booking_ticket.html
* 票種 (dorpdown)：必填
* 人數 (dropdown)：必填

#### 跳轉頁面
* 下一步 (button)
    * disabled：必填未完成，不可跳轉
    * normal：完成必填，可跳轉


### Step 2. booking_datetime.html

#### 1~3 組欄位集合
* 日期 (datepicker)：必填
* 時段 (dorpdown)：必填
* 時間 (dropdown)：必填

#### 跳轉頁面
* 下一步 (button)
    * disabled：必填未完成，不可跳轉
    * normal：完成必填，可跳轉


### Step 3. booking_client.html
* 姓名 (input)：必填
* 電話 (input)：必填 + 格式驗證
* 電子信箱 (input)：必填 + 格式驗證
* 其他備註 (textarea)：選填
* 落日轉運站劃位與體驗規則 (checkbox)：必填
* 隱私權條款 (checkbox)：必填

#### 跳轉頁面
* 下一步 (button)
    * disabled：必填未完成，不可跳轉
    * normal：完成必填，Click 驗證格式
        * 格式錯誤：不可跳轉
        * 格式正確：可跳轉


### Step 4. booking_check.html
* 折扣序號 (input)：選填
* 確認 (button)
    * disabled：未輸入、序號錯誤、輸入完按下確認後序號被吃掉
    * normal：已輸入但未按確認