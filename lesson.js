
/**
 *  LESSON 3: Server Side Rending and Client Side Rending
 * 
 *  - SSR : tốt cho sale bởi vì cái mã source chứa hết mã html và chữ, tốt cho tìm kiếm, 
 *          trình duyệt render, load lại trang, nó sẽ trả về đủ dữ liệu, mỗi lần bấm nó sẽ load lại toàn bộ trang
 *  - CSR : trả về mã js, javascript render, k cần load lại, nó sẽ trả về bộ khung của javascript, khi cần thêm dữ liệu nó sẽ tải thêm
 * 
 */

/*
    bấm ctrl + c để thoát ứng dụng
    start : node main.js ( file work chính )
    npm start : start the server

*/

/**
 *  - NodeJS là một nền tảng được xây dựng trên V8 JavaScript Engine – trình thông dịch 
 *    thực thi mã JavaScript, giúp xây dựng các ứng dụng web một cách đơn giản và dễ dàng mở rộng.
 *  - Expressjs là một framework được xây dựng trên nền tảng Nodejs
 */

/*
    Lesson 5: Install ExpressJS (  )

    - Lệnh kiểm tra nodejs: node -v
    - Khi cài nodejs nó sẽ cài kèm theo Node Package Management, viết tắt là npm -v
    - Khởi tạo ứng dụng đầu tiên :
      1. npm init 
      2. Sau đó enter
      3. Cài expressjs ( search: npm express, lệnh: npm install express )
      4. Sau đó vào trang Expressjs xem code để hiểu và làm theo

*/


/** 
 *  Lesson 6 : Install Nodemon $ inspector
 *  b1: Vào trang npm nodemon ( giúp tự động restart )
 *  cú pháp : npm install --save--dev nodemon 
 * 
 *  search đến phần usage ;
 *  nodemon ./server.js localhost 8080
    nodemon --inspect ./server.js 80 ( giúp kiểm tra lỗi trong phần inspect, bấm vào phần biểu tượng node rồi bấm qua console )
 *  
    breakpoint: điểm ngắt

 * 
 */

// Lesson 7: Add git repository

