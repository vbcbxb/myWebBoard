// 환경변수 불러오기
require('dotenv').config();
// express 모듈
const express = require('express');
// path 모듈
const path = require('path');

// 서버 생성
const app = express();
// 포트 설정
const PORT = Number(process.env.PORT) || 3000;
app.get('/',(req,res) => {
    res.status(200);
    res.send('myWebBoard');
}); 
// 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// 정적 파일
app.use(express.static(path.join(__dirname, 'public')));

// 바디파서
app.use(express.json()); //application/json 파싱
app.use(express.urlencoded({extended:true})); //application/x-www-form-urlencode

// 라우터 미들웨어 등록
app.use('/users', require('./routes/userRoutes'));


// 서버 실행
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port:${PORT}` );
});