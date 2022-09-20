

const express = require('express') // gọi express
const app = express() // gọi function sẵn trong express, toán tử call
const port = 3000 // cổng

// route : định nghĩa tuyến đường
// cách viết của arrow function, sd ký tự =>
app.get('/trang-chu', (req, res) => {
   
    var a = 5;
    var b = 6;
    var c = a+b;


    res.send('Hello Word!')
} )

// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port} `)
})
