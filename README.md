# Weather Dashboard

เว็บแอปพลิเคชันสำหรับค้นหาข้อมูลสภาพอากาศปัจจุบันจาก **OpenWeatherMap API** พัฒนาด้วย HTML, CSS และ JavaScript โดยรองรับทั้งการค้นหาเมืองเดียวและการค้นหาหลายเมืองพร้อมกัน

## Features

- ค้นหาสภาพอากาศด้วยชื่อเมือง
- ค้นหาหลายเมืองพร้อมกันจำนวน 3 เมือง
- แสดงอุณหภูมิ ความชื้น และความเร็วลม
- ใช้ `fetch()` เพื่อเรียกข้อมูลจาก Public API
- ใช้ `async/await` เพื่อรอผลลัพธ์จาก API
- ใช้ `Promise.all()` เพื่อเรียกข้อมูลหลายเมืองพร้อมกัน
- แสดงสถานะ Loading ระหว่างรอข้อมูล
- แสดงข้อความ Error เมื่อไม่พบเมืองหรือ API Key ไม่ถูกต้อง
- ผลการค้นหาใหม่จะแสดงต่อจากผลเดิมโดยไม่ล้างการ์ดก่อนหน้า

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap Current Weather API

## Project Structure

```text
weather-app_67051099/
├── assets/
├── index.html
├── style.css
├── app.js
├── config.js
├── .gitignore
└── README.md
```

## Setup

1. สมัครบัญชีและสร้าง API Key ที่ [OpenWeatherMap](https://openweathermap.org/api)
2. สร้างไฟล์ `config.js` ภายในโฟลเดอร์โปรเจกต์
3. เพิ่ม API Key ลงในไฟล์ดังนี้

```javascript
const CONFIG = {
    API_KEY: 'YOUR_API_KEY'
};
```

4. เปิดโปรเจกต์ด้วย Visual Studio Code
5. เปิด `index.html` ด้วย Live Server

> ไฟล์ `config.js` ถูกเพิ่มไว้ใน `.gitignore` เพื่อป้องกันไม่ให้ API Key ถูกอัปโหลดขึ้น GitHub

## How to Use

### ค้นหาเมืองเดียว

1. กรอกชื่อเมือง เช่น `Bangkok`
2. กดปุ่ม **ค้นหา**
3. ระบบจะแสดงข้อมูลสภาพอากาศของเมืองนั้น

### ค้นหาหลายเมือง

1. กรอกชื่อเมืองให้ครบทั้ง 3 ช่อง เช่น `Bangkok`, `Chiang Mai` และ `Phuket`
2. กดปุ่ม **ค้นหาหลายเมือง**
3. ระบบจะเรียก API ของทั้ง 3 เมืองพร้อมกันและแสดงผลเป็นการ์ด

## Program Flow

```text
ผู้ใช้กรอกชื่อเมือง
        ↓
JavaScript รับค่าจาก Input
        ↓
fetchWeather() ส่ง Request ไปยัง API
        ↓
OpenWeatherMap ส่ง JSON Response กลับมา
        ↓
response.json() แปลง JSON เป็น JavaScript Object
        ↓
displayWeather() แสดงข้อมูลบนหน้าเว็บไซต์
```

สำหรับการค้นหาหลายเมือง โปรแกรมใช้ `map()` เพื่อสร้างรายการ Promise และใช้ `Promise.all()` รอผลลัพธ์ทั้งหมด

```javascript
const requests = cities.map(function (city) {
    return fetchWeather(city);
});

const results = await Promise.all(requests);
```

## Error Handling

ระบบรองรับข้อผิดพลาดหลัก ได้แก่

- ไม่ได้กรอกชื่อเมือง
- ไม่พบชื่อเมือง (`404`)
- API Key ไม่ถูกต้องหรือยังไม่เปิดใช้งาน (`401`)
- ข้อผิดพลาด HTTP อื่น ๆ

## Author

- Student ID: 67051099

## Reference

- [OpenWeatherMap API](https://openweathermap.org/api)
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
