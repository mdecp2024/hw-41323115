var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-41323115 \xa0 \n 個人網站: https://mde.tw/cp2024/content/index.html \xa0 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '影片連結: \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': "第一題 \n \n 第二題 \n \n 第三題 \n \n 以下方程式列印採用  Mathjax Version 3 格式 . \n \n \n set1 - Physics \n Use python to solve the problem: A jet touches down at velocity 310 km/h. Find the constant acceleration required to stop the aircraft 1000 m down the runway. \n To solve this problem, we'll use the kinematic equations of motion under constant acceleration. The question asks for the constant acceleration required to stop the jet after a certain distance, which means we are looking for the deceleration. \n Step 1: Problem Breakdown \n We are given: - Initial velocity \\( v_0 = 310 \\, \\text{km/h} \\) - Final velocity \\( v = 0 \\, \\text{m/s} \\) (since the jet stops) - Distance \\( d = 1000 \\, \\text{m} \\) \n We are asked to find the constant acceleration \\( a \\) that brings the jet to a stop. \n Step 2: Kinematic Equation \n The appropriate kinematic equation for this problem, where the object is decelerating (i.e., stopping), is: \n \\[ v^2 = v_0^2 + 2ad \\] \n Where: - \\( v \\) is the final velocity (which is 0 since the jet stops), - \\( v_0 \\) is the initial velocity, - \\( a \\) is the constant acceleration (which we need to solve for), - \\( d \\) is the distance traveled. \n Step 3: Solving for Acceleration \\( a \\) \n Rearranging the equation to solve for \\( a \\): \n \\[ a = \\frac{v^2 - v_0^2}{2d} \\] \n Since \\( v = 0 \\), this simplifies to: \n \\[ a = \\frac{-v_0^2}{2d} \\] \n Step 4: Converting Units \n The velocity \\( v_0 = 310 \\, \\text{km/h} \\) needs to be converted to meters per second (m/s) because the distance is in meters and we want the acceleration in meters per second squared (m/s²). \n \\[ v_0 = 310 \\, \\text{km/h} = \\frac{310 \\times 1000}{3600} \\, \\text{m/s} = 86.11 \\, \\text{m/s} \\] \n Step 5: Substituting Known Values \n Now we can substitute the values into the equation: \n \\[ a = \\frac{-(86.11)^2}{2 \\times 1000} \\] \n Let's calculate this using Python. \n Python Code Implementation:  problem-set1-1.py \n \n Use function to solve this kind of problem.  problem-set1-2.py \n Extend to be more general to solve all kind of these problems.  problem-set1-3.py \n set2- Calculus \n Under ideal conditions a certain bacteria population is known to double every three hours. Suppose that there are initially 100 bacteria. When will the population first reach 50,000 ? \n We are asked to determine when a bacteria population, starting at 100 bacteria, will first reach 50,000, given that the population doubles every 3 hours. \n Exponential Growth Equation: \n The population growth can be modeled by the exponential growth formula: \n \\[ P(t) = P_0 \\times 2^{\\frac{t}{T}} \\] \n Where: - \\( P(t) \\) is the population at time \\( t \\), - \\( P_0 \\) is the initial population, - \\( T \\) is the doubling time (in hours), - \\( t \\) is the time elapsed (in hours). \n Given: - \\( P_0 = 100 \\) (initial population), - \\( T = 3 \\) hours (doubling time), - \\( P(t) = 50,000 \\) (target population). \n Step 1: Plugging in the known values \n We want to find the time \\( t \\) when the population reaches 50,000. Substituting the known values into the growth equation: \n \\[ 50,000 = 100 \\times 2^{\\frac{t}{3}} \\] \n Step 2: Simplifying the equation \n First, divide both sides by 100 to isolate the exponential term: \n \\[ 500 = 2^{\\frac{t}{3}} \\] \n Step 3: Solving for \\( t \\) \n To solve for \\( t \\), take the logarithm (base 2) of both sides of the equation: \n \\[ \\log_2(500) = \\frac{t}{3} \\] \n Now, multiply both sides by 3 to solve for \\( t \\): \n \\[ t = 3 \\times \\log_2(500) \\] \n Step 4: Change of Base Formula \n To compute \\( \\log_2(500) \\) in Python or any other programming language, we can use the change of base formula: \n \\[ \\log_2(x) = \\frac{\\log_{10}(x)}{\\log_{10}(2)} \\] \n Thus, the equation for \\( t \\) becomes: \n \\[ t = 3 \\times \\frac{\\log_{10}(500)}{\\log_{10}(2)} \\] \n Python Code to Calculate \\( t \\):  problem-set2-1.py \n \n", 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '1.\xa0 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n \n \n 程式碼 \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12', 'text': '1. 請各組組員分別利用 \xa0 Brython 以及 Jupyter lab \xa0 環境, 執行 可攜程式 \xa0 notebook 目錄中的 \xa0 01_string_input_print.ipynb 至\xa010_for_search.ipynb \xa0 筆記本程式, 完成後請將能在 Brython 執行的程式碼存入個人 \xa0 Gist \xa0 後, 將各程式執行連結放入 w12_hw 網頁上. 最後請說明各範例中所使用的程式語法以及執行心得. \n \n \n 程式碼 \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w12_hw', 'text': 'w12-1: \n 解 \n 程式碼 \n 使用了print和input的語法。 \n w12-2: \n 解 \n 程式碼 \n 使用了input語法 \n w12-3: \n 解 \n 程式碼 \n w12-4: \n 解 \n 程式碼 \n w12-5: \n 解 \n 程式碼 \n w12-6: \n 解 \n 程式碼 \n 12-7: \n 解 \n 程式碼 \n 12-8: \n 解 \n 程式碼 \n 12-9: \n 解 \n 程式碼 \n 12-10: \n 解 \n 程式碼 \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13', 'text': '程式碼 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n 程式碼 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n 程式碼 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w13_hw', 'text': '\n 程式碼 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_ex', 'text': '請根據兩個圓繪圖所圍成的 區域 (目前圍成三個區域, 但若圓心移動可能彼此獨立)進行不同顏色著色, 條件是當各圓半徑與圓心座標變動時, 程式只需輸入兩個圓的圓心座標與半徑, 就可以完成各區域的著色任務. \n 解 \n 程式碼 \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w15', 'text': '從 1 累加到 100 \n  addto(1, 100) \n add_only_even(1, 100) \n add_avoid_8(1, 100) \n 避開數字出現"8以及3" \n 3092 \n 心得: \n 這段程式設計讓我深入理解了條件篩選與累加的應用。透過避開包含「8」的數字和基數（奇數），我學會了如何利用 Python 的條件判斷來過濾數字，並進行有效的累加。這個練習也強化了我對  for  迴圈和  sum()  函式的使用，讓我更加熟悉在範圍內篩選並計算總和的過程。 \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': '題目: 請以 自己的學號最後四碼 作為繪圖的座標原點, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖座標原點), 並以 pixel=2 的黑色直線分別利用 Brython 繪圖, 標示出向右為正的 X 軸, 以及向下為正的 Y 軸, 並且利用文字標示出原點座標 (例如: (39, 32)), 之後請自選最左側圖形的起始點座標, 直接在頁面畫出下列圖像, 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像 ( 圖片來源 ). \n  導入 brython 程式庫  \n \n \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n 解 \n 程式碼 \n \n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'w16_exam2', 'text': '請以 自己的學號最後四碼 作為下列繪圖的左上方點座標, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖左上方點座標), 並以紅色文字標示出該點座標 (例如: (39, 32)), 之後請利用 \xa0 pixel=2 的藍色直線 , \xa0 自訂迷宮畫布大小 , 直接在頁面畫出下列圖像, 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像). \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n 解 \n 程式碼 \n \n \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'w16_exam3', 'text': '請以自己的學號最後四碼作為下列繪圖的左上方點座標, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖左上方點座標), 並以紅色文字標示出該點座標 (例如: (39, 32)), 之後請利用\xa0pixel=2 的黑色直線,\xa0自訂迷宮畫布大小, 直接在頁面畫出下列圖像, 並且利用紅色連續線段標示從上方入口, 走至下方出口的路線圖. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n 解 \n 程式碼 \n', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};