# Quiz API

Bu proje, Node.js ve Express.js kullanılarak geliştirilmiş basit bir **Quiz** API sistemidir. Uygulama, sabit bir JSON dosyasındaki sorular üzerinden çalışır ve kullanıcıların soruları görüp cevaplamasına olanak tanır. Soru başı 60 saniye zaman sınırı vardır. Her doğru cevap 10 puan değerindedir.

---

## Kurulum Adımları

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
Çıktı olarak aşağıdaki ifadeyi almanız gerekiyor.
```terminal
Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışır.
```
---

## API Endpoint Açıklamaları

### 1. `GET /api/questions`

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
### 2. `GET /api/question/random?timeLimit=true`
Rastgele bir soru gönderir isteğe bağlı olarak zaman liti ?timeLimit=true ifadesi silinerek kaldırılabilir.
### Örnek Çıktı:
```json
{
    "id": 2,
    "question": "İstanbul ne zaman fethedilmiştir?",
    "options": [
        "A) 1453",
        "B) 1492",
        "C) 1204",
        "D) 1923"
    ],
    "correctAnswer": "A",
    "timeLimit": 60,
    "expiresAt": 1754040003765
}
,
```

### 3. `POST /api/answer`

Bir soruya verilen cevabın doğru olup olmadığını kontrol eder. Eğer girilen soru id si yoksa soru bulunamadı cevaplı bir hata döndürür. Zaman sınırı geçtiyse skora puan eklemez.

#### Örnek İstek:
Zaman sınırı geçtiği için skor puanı eklemedi yukarıdaki random soruya geç cevap verdik.
```json
{
    "correct": true,
    "correctAnswer": "A",
    "explanation": "Tebrikler, doğru cevap!",
    "timeTaken": "291 saniye",
    "timeLimitExceeded": true,
    "currentScore": 0
}
```
Zaman içerisinde cevap verilirse dönen veri şu şekilde olur.
```json
{
    "correct": true,
    "correctAnswer": "A",
    "explanation": "Tebrikler, doğru cevap!",
    "timeTaken": "3 saniye",
    "timeLimitExceeded": false,
    "currentScore": 10
}
```
Eğer girilen soru idsi yok ise şu şekil bir cevap alırız.
```json
{
    "error": "Soru bulunamadı"
}
```

### 4. `POST /api/reset`
Skoru sıfırlar.
```json
{
    "message": "Quiz skoru sıfırlandı"
}
```
### 5. `GET /api/score`
Anlık skoru görüntüler.
```json
{
    "currentScore": 0
}
```
