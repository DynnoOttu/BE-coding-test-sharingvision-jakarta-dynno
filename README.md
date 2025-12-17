# Microservices Project: Article Service & API Gateway

Selamat datang di proyek **Microservices** yang terdiri dari dua layanan utama: **Service Artikel** dan **API Gateway**. Proyek ini menggunakan **Node.js** dan **MySQL**.

## Daftar Layanan
1. **API Gateway**: Bertindak sebagai pintu masuk untuk semua request, mengarahkan ke service sesuai.
2. **Service Artikel**: Mengelola data artikel (`posts`) termasuk CRUD, terhubung ke MySQL.

## Prasyarat
- Node.js (v18+ disarankan)
- NPM
- MySQL Server

## Konfigurasi Environment
**API Gateway (.env):**  
`APP_NAME=api-gateway TIMEOUT=500000 HOSTNAME=http://localhost:8000 URL_SERVICE_ARTICLE=http://localhost:5000 PORT=8000`  

**Service Artikel (.env):**  
`PORT=5000 DB_NAME=service-article DB_USERNAME=root DB_PASSWORD= DB_HOSTNAME=localhost`

## Membuat Database dan Tabel
```sql
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
