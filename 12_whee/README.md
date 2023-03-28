# whee!下來玩

## 技術說明
HTML5、SCSS、Javascript 及 jQuery，響應式採用 Bootstrap 4.5.2 框架。
樣式部分請直接編譯 .scss 檔案，不要更動 .css 及 .css.map

## 頁面結構

    .
    ├── _css
    |   ├── mixin.scss（覆寫Bootstrap原生樣式）
    |   ├── style.scss（全站樣式）
    |   ├── variable.scss（樣式變數庫）
    |   ├── index.scss
    |   ├── mini-golf.scss
    |   ├── booth.scss
    |   ├── food-drink.scss
    |   ├── faq.scss
    |   ├── contact.scss
    |   ├── booknow.scss
    |   ├── booknow-booth.scss
    |   ├── booking.scss
    |   └── _plugins
    |
    ├── _font
    ├── _images
    |   ├── _general（全站共用圖）
    |   ├── _home  
    |   ├── _minigolf
    |   ├── _booth
    |   └── _fooddrink
    |
    ├── _js
    |   ├── main.js（全站動態效果、圖片預載入）
    |   ├── index.js
    |   ├── contact.js
    |   ├── faqs.js
    |   ├── video.js
    |   ├── template-b-1.js
    |   ├── template-b-2.js
    |   ├── booking-time.js
    |   └── _plugins
    |
    ├── _template
    |   ├── button.html
    |   ├── template_a-1.html
    |   ├── template_a-2.html
    |   ├── template_b-1.html
    |   ├── template_b-2.html
    |   ├── template_c-1.html
    |   ├── template_c-2.html
    |   ├── template_c-3.html
    |   └── template_modal.html
    |
    ├── index.html
    ├── mini-golf.html
    ├── booth.html
    ├── food-drink.html
    ├── faqs.html                    
    ├── contact.html
    ├── booknow.html
    ├── booknow-minigolf.html
    ├── booknow-booth.html
    ├── booking-people.html
    ├── booking-time.html
    ├── booking-info.html
    ├── booking-success.html
    ├── booking-fail.html
    ├── booking-group.html
    └── booking-group-submit.html

### 樣式
- css/mixin.scss 覆寫 bootstrap 格線系統樣式
- css/variable.scss 存放共用變數
- css/style.scss 全站共用樣式


### 動態
- js/main.js 全站共用動態、圖片預載入