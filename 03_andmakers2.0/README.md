# 恩咩可城堡
* 斷點：`max-width: 1199.98px`
* popup 斷點： `max-width: 575px`

## ■ Bootstrap 設定
* 全站使用 `.container-xl` 作為容器
* 全站使用 `.col-xl-*`、`.col-xxl-*` 作為格線


## ■ 本機端
* A1 HOME `http://127.0.0.1:5501/`
* A2 About Us `http://127.0.0.1:5501/about.html`
* A3 Services `http://127.0.0.1:5501/service.html`
* A4 Catalog `http://127.0.0.1:5501/catalog.html`
* A5 Contact Us `http://127.0.0.1:5501/contact.html`
* A6 FAQs `http://127.0.0.1:5501/faq.html`
* A7 TOS & Policies `http://127.0.0.1:5501/terms.html`
* A7.1 Terms of Service `http://127.0.0.1:5501/terms-conditions.html`
* A7.2 Privacy Policies `http://127.0.0.1:5501/privacy.html`
* A8 Not Found `http://127.0.0.1:5501/404.html`
* 元件 `http://127.0.0.1:5501/components.html`

## ■ 專案結構
```
andmakers2.0/
    |─ css/
    |   |─ plugins/
    |   |   |- icommon/
    |   |   |   |- style.css (iconfont 檔案)
    |   |─ mixin.scss (覆寫 Bootstrap 設定)
    |   |─ variable.scss (共用變數)
    |   |─ style.scss (共用樣式)
    |
    |─ font/
    |
    |─ images/
    |   |─ general/ (共用圖片)
    |
    |─ js/
    |   |─ plugins/
    |   |─ main.js  (共用程式)
    |
    |─ data/ (大 JSON)
    |   |─ partner.json
    |   |─ faqs.json
    |   |─ faqs-featured.json
    |   |─ catalog.json
    |   |─ review.json
    |
    |─ index.html
    |─ components.html (共用元件)
    |
```