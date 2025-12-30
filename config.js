// Firebase konfiguratsiyasi
const firebaseConfig = {
    // O'zingizning Firebase konfiguratsiyangizni qo'ying
    // Agar test qilish uchun bo'lsa, quyidagilardan foydalanishingiz mumkin
    apiKey: "AIzaSyDEXAMPLEEXAMPLEEXAMPLEEXAMPLE",
    authDomain: "test-project-12345.firebaseapp.com",
    databaseURL: "https://test-project-12345-default-rtdb.firebaseio.com",
    projectId: "test-project-12345",
    storageBucket: "test-project-12345.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890abcdef"
};

// Firebase dasturni ishga tushirish
try {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase muvaffaqiyatli ishga tushirildi");
} catch (error) {
    console.error("Firebase ishga tushirishda xatolik:", error);
}

const database = firebase.database();
console.log("Database ob'ekti yaratildi");