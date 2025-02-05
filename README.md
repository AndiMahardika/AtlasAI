# AtlasAI

## 📌 Ringkasan Proyek

AtlasAI adalah aplikasi **Single Page Application (SPA)** yang menampilkan informasi negara dari seluruh dunia serta menyediakan fitur asisten AI (Chatbot) yang dapat memberikan rekomendasi perjalanan, menerjemahkan informasi negara, dan menjawab pertanyaan terkait negara yang ditampilkan. Proyek ini dibangun menggunakan **React,** **Shadcn** **UI , Zustand**, **GraphQL**, dan **NVIDIA NIM API.**

## 🚀 Setup

Ikuti langkah-langkah berikut untuk menjalankan proyek ini secara lokal:

### 1. **Kloning Repositori**

```sh
git clone https://github.com/AndiMahardika/AtlasAI.git
cd AtlasAI
```

### 2. **Instalasi Dependensi**

Gunakan npm atau pnpm untuk menginstal dependensi yang diperlukan:

```sh
npm install
# atau
pnpm install
```

### 3. **Buat File**`.env`

Salin isi dari `.env.example` dan buat file `.env` untuk menyimpan variabel lingkungan yang dibutuhkan:

```env
VITE_URL_GRAPHQL=https://countries.trevorblades.com
VITE_NVDIA_API_KEY=your-nvidia-api-key
VITE_BASE_URL_AI=https://integrate.api.nvidia.com/v1
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. **Menjalankan Aplikasi**

```sh
npm run dev
```

Akses aplikasi melalui **[http://localhost:5173](http://localhost:5173)**.

---

## ✨ Fitur yang Tersedia

✅ **Tampilkan Daftar Negara**: Informasi negara beserta bendera, ibukota, dan mata uang.\
✅ **Detail Negara**: Klik pada negara untuk melihat informasi lebih lanjut seperti bahasa dan benua.\
✅ **Asisten AI**: Chatbot berbasis **NVIDIA NIM API** untuk:
- Menjawab pertanyaan tentang negara.
- Memberikan rekomendasi perjalanan.
- Menerjemahkan informasi negara.

✅ **Autentikasi OAuth:** Login dengan Google.
✅ **User Proofile** : Menampilkan Profile User
✅ **Desain Responsif**: Aplikasi dapat digunakan di berbagai ukuran layar.

---

## 🔧 Keputusan Teknis dan Arsitektur

- **Frontend**: Menggunakan **ReactJS, Shadcn UI**.
- **Bahasa Pemograman** : Menggunakan **TypeScript**.
- **State Management**: Menggunakan **Zustand** untuk pengelolaan state global.
- **GraphQL API**: Menggunakan **Apollo Client** untuk mengambil data.
- **AI Integration**: Menggunakan **NVIDIA NIM API (Llama-3 70B Instruct)** untuk fitur chatbot.
- **Autentikasi**: Implementasi **OAuth 2.0** dengan **Google (Supabase).**
- **CSS**: Menggunakan **Tailwind CSS** untuk styling yang fleksibel.

---

## 🚀 Pengembangan di Masa Depan

Beberapa fitur yang direncanakan untuk pengembangan selanjutnya:

- **Cache API:** Mengoptimalkan performa dengan menyimpan data negara secara lokal.
- **Mode Gelap:** Tambahkan fitur dark mode agar tampilan lebih nyaman.
- **Design UI/UX**: Perubahan design agar lebih bagus.
- **Pagination** : Menerapkan card pagination.

---

## 🤝 Kontribusi

Jika ingin berkontribusi dalam proyek ini, silakan buat **Pull Request** atau ajukan masalah (*Issues*) di repositori ini.

---

**Dibuat** :
**Email** : [andi.mahardika.mulya@gmail.com](mailto\:andi.mahardika.mulya@gmail.com)