# 🚀 ExpressJs - Template API

_Template API dengan ExpressJs. Project pribadi, silahkan bisa dipakai kalau mau._

## 📂 Struktur Folder

```

├── assets
├── migrations
├── seeders
├── src
│   ├── config
│   │   └── config.js
│   │   └── database.js
│   │   └── index.js
│   ├── controllers
│   │   └── home.js
│   │   └── index.js
│   ├── middlewares
│   │   └── ipWhitelist.js
│   │   └── Logs.js
│   ├── models
│   │   └── index.js
│   ├── routes
│   │   └── index.js
│   ├── utils
│       └── errorHandlers.js
│       └── response.js
├── .env
├── .gitignore
├── App.js
├── package.json
└── README.md

```

## 📝 Installation

```
npm install
```

## ▶️ Start Server

```
npm run dev
```

or

```
npm run start
```

## 📡 Contoh Response API

#### ✅ Success

```
{
  "success": true,
  "code": 200,
  "message": "API is running",
  "method": "GET",
  "path": "/api",
  "timestamp": "2025-10-04T11:00:00.000Z",
  "data": {
    "version": "1.0.0"
  }
}
```

#### ✅ Error

```
{
  "success": false,
  "code": 404,
  "message": "Not Found",
  "method": "GET",
  "path": "/api",
  "timestamp": "2025-10-04T11:00:00.000Z"
}
```

## ☕☕☕ Ngopi

Scan QR, terimakasih sudah memberikan segelas kopi.

<p align="center"> <img src="./assets/ngopi.jpg" alt="Ngopi QR" width="480" height="480" style="border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,0.2);" /> </p>
