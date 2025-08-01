# Quiz API

Bu proje, Node.js ve Express.js kullanılarak geliştirilmiş basit bir **Quiz (Soru-Cevap)** API sistemidir. Uygulama, sabit bir JSON dosyasındaki sorular üzerinden çalışır ve kullanıcıların soruları görüp cevaplamasına olanak tanır. Veritabanı kullanılmaz; bu nedenle proje küçük ölçekli uygulamalar ve öğrenme amaçlı kullanım için uygundur.

---

## 🔧 Kurulum Adımları

### 1. Projeyi Klonlayın

```terminal
git clone https://github.com/cagmadeniz/quiz-api.git

```

### 2. Bağımlılıkları Kurun

```terminal
npm install
```

### 3. Sunucuyu Başlatın

```terminal
npm start
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışır.

---

## 📌 API Endpoint Açıklamaları

### ✅ 1. `GET /quiz/questions`

Tüm soruları getirir.

#### Yanıt:
```json
[
    {
        "id": 1,
        "question": "Türkiye'nin başkenti neresidir?",
        "options": [
            "A) İstanbul",
            "B) Ankara",
            "C) İzmir",
            "D) Bursa"
        ],
        "correctAnswer": "B"
    },
    {
        "id": 2,
        "question": "İstanbul ne zaman fethedilmiştir?",
        "options": [
            "A) 1453",
            "B) 1492",
            "C) 1204",
            "D) 1923"
        ],
        "correctAnswer": "A"
    },
    {
        "id": 3,
        "question": "Atatürk'ün doğum yılı nedir?",
        "options": [
            "A) 1881",
            "B) 1882",
            "C) 1883",
            "D) 1884"
        ],
        "correctAnswer": "A"
    },
    {
        "id": 4,
        "question": "İlk bilgisayar ne zaman yapıldı?",
        "options": [
            "A) 1945",
            "B) 1950",
            "C) 1960",
            "D) 1970"
        ],
        "correctAnswer": "A"
    },
    {
        "id": 5,
        "question": "JavaScript'in ilk çıkış yılı nedir?",
        "options": [
            "A) 1990",
            "B) 1995",
            "C) 2000",
            "D) 2005"
        ],
        "correctAnswer": "B"
    }
]
```
