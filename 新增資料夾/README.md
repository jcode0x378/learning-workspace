# VSCode 教學環境設定

## 如何使用
- 如何下載這個專案到你的電腦，在 github 頁面點選綠色的按鈕「Clone and Download」：
  - 下載方式：點選［Download ZIP］下載壓縮檔到本機，解壓縮後用 VSCode 開啟資料夾即可。
  - git 方式：複製顯示的網址（以 .git 結尾），在終端機下用 `git clone` 加上網址的方式下載本機。
    - `git clone https://github.com/t7yang/learning-workspace.git`
    - `code learning-workspace` （用 VSCode 開啟資料夾）

## 延伸套件
- 開啟這個專案後 VSCode 會建議你安裝一系列的套件，請全部安裝。

## 設定
- 在這個專案下已經設定好一些「工作空間」的設定，這些設定只影響這個專案。
- 如果想把這些設定值套用到全域設定中，請複製 `.vscode/settings.json` 裡面的設定到全域設定檔中。
- 開啟全域設定檔的方式（macOS 請用 `cmd` 取代 `ctrl`）
  - `ctrl + ,` 開啟圖形設定檔，在右上角點選「開啟設定 (JSON)」。
  - `ctrl + shift + p` 開啟「命令選擇區」，輸入 `settngs json` 點選「開啟設定 (JSON)」。

## 字型
- 為了確保教學上的一致性，請學員下載並安裝 [Jetbrain Mono](https://www.jetbrains.com/lp/mono/) 字型。
- 字型安裝請選擇 TTF。
- Windows 安裝字型：下載字型檔後解壓縮並全選所有字型右鍵選「安裝」。
- [macOS 安裝字型](https://support.apple.com/zh-tw/HT201749)。

## 注意事項
- 請確保 `editor.formatOnSave": false` 以避免上課時 Live Share 存檔導致需要重複存檔（此設定預設為 `false` 若有改過請特別檢查）。
