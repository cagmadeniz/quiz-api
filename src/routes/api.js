const express = require('express');
const router = express.Router();
const questions = require('../data/questions');
const session = require('../data/session');

// Tüm soruları getir
router.get('/questions', (req, res) => {
  res.json(questions);
});

// Rastgele bir soru getir (isteğe bağlı zaman sınırıyla)
router.get('/question/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = { ...questions[randomIndex] };

  session.currentQuestion = randomQuestion;
  session.questionStartTime = Date.now();

  // Zaman sınırı kısımı
  if (req.query.timeLimit === 'true') {
    randomQuestion.timeLimit = session.timeLimit / 1000; 
    randomQuestion.expiresAt = Date.now() + session.timeLimit;
  }

  res.json(randomQuestion);
});

// Cevap kontrolü
router.post('/answer', (req, res) => {
  const { questionId, selectedOption } = req.body;
  const question = questions.find(q => q.id === questionId);
// Eğer soru bulunamazsa hata döndür
  if (!question) {
    return res.status(404).json({ error: 'Soru bulunamadı' });
  }
// Soru başına süre kontrol kısımı
  const now = Date.now();
  const timeTaken = now - session.questionStartTime;
  const timeLimitExceeded = timeTaken > session.timeLimit;
// Doğru cevap kontrolü
  const isCorrect = question.correctAnswer === selectedOption;
//  Skor güncelleme
  if (!timeLimitExceeded && isCorrect) {
    session.score += 10;
  }
// Cevaba göre sunucunun yanıtı
  res.json({
    correct: isCorrect,
    correctAnswer: question.correctAnswer,
    explanation: isCorrect
      ? "Tebrikler, doğru cevap!"
      : `Maalesef yanlış. Doğru cevap: ${question.correctAnswer}`,
    timeTaken: Math.floor(timeTaken / 1000) + " saniye",
    timeLimitExceeded,
    currentScore: session.score
  });
});

// Skoru göster
router.get('/score', (req, res) => {
  res.json({ currentScore: session.score });
});

// Skoru sıfırla
router.post('/reset', (req, res) => {
  session.score = 0;
  session.currentQuestion = null;
  session.questionStartTime = null;
  res.json({ message: 'Quiz sıfırlandı' });
});

module.exports = router;
