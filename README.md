# 🚀 Microservices Project: Article Service & API Gateway

[![Node.js](https://img.shields.io/badge/Node.js-18+-brightgreen)](https://nodejs.org/) 
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)](https://www.mysql.com/) 
[![Status](https://img.shields.io/badge/Status-Development-orange)]()

Proyek ini terdiri dari **API Gateway** dan **Service Artikel** menggunakan **Node.js** dan **MySQL**.

---

## 🏗️ Arsitektur Microservices

```mermaid
flowchart LR
    A[Client / Browser] --> B[API Gateway]
    B --> C[Service Artikel]
    C --> D[(MySQL Database)]

    API Gateway: Pintu masuk semua request, meneruskan ke service sesuai.

    Service Artikel: Mengelola data artikel (posts) termasuk CRUD.

⚙️ Prasyarat

    Node.js v18+

    NPM

    MySQL Server

📝 Konfigurasi Environment

API Gateway (.env)
APP_NAME=api-gateway TIMEOUT=500000 HOSTNAME=http://localhost:8000 URL_SERVICE_ARTICLE=http://localhost:5000 PORT=8000

Service Artikel (.env)
PORT=5000 DB_NAME=service-article DB_USERNAME=root DB_PASSWORD= DB_HOSTNAME=localhost
💾 Database & Tabel

CREATE DATABASE IF NOT EXISTS service-article;
USE service-article;

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(100),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status VARCHAR(100) CHECK (status IN ('Publish', 'Draft', 'Thrash'))
);

▶️ Menjalankan Layanan

Service Artikel:

cd service-article
npm install
npm start

Jalan di: http://localhost:5000

API Gateway:

cd api-gateway
npm install
npm start

Jalan di: http://localhost:8000
🌐 Endpoint via API Gateway

    GET /posts

    POST /posts

    PUT /posts/:id

    DELETE /posts/:id

📂 Struktur Folder

root
├─ api-gateway/
│  ├─ index.js
│  └─ .env
├─ service-article/
│  ├─ index.js
│  └─ .env
└─ README.md

⚠️ Catatan

    Pastikan MySQL aktif sebelum menjalankan Service Artikel.

    Gunakan Postman atau Insomnia untuk testing API.

    Sesuaikan port atau hostname sesuai kebutuhan.
