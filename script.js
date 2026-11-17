// ================= DATA EKSTRAKURIKULER =================
const ekskulList = [
  { id: "pramuka",  nama: "Pramuka",       icon: "🏕️", kategori: "Sosial",    desc: "Kepemimpinan & kemandirian di alam", counter: 42, kuota: 60, foto: "scout,camping", fotoUrl: "https://i.pinimg.com/1200x/ab/95/bc/ab95bcf69f9cc9b696bbb0d6a4f83bb7.jpg" },

  { id: "paskibra", nama: "Paskibra",      icon: "🚩", kategori: "Olahraga",  desc: "Baris-berbaris & pengibaran bendera", counter: 28, kuota: 32, foto: "flag,ceremony" , fotoUrl: "https://i.pinimg.com/736x/ca/0e/86/ca0e86bcb2468688bf558c3579a8b7e5.jpg" },

  { id: "pmr",      nama: "PMR",           icon: "⛑️", kategori: "Sosial",    desc: "Pertolongan pertama & kepalangmerahan", counter: 18, kuota: 30, foto: "firstaid,redcross" , fotoUrl: "https://i.pinimg.com/736x/da/f4/ec/daf4ecdeab83b28e3e0a1f1ddb262d39.jpg" },

  { id: "tari",     nama: "Tari",          icon: "💃", kategori: "Seni",      desc: "Seni tari tradisional & modern", counter: 20, kuota: 25, foto: "traditionaldance,indonesia" , fotoUrl: "https://i.pinimg.com/1200x/e4/88/09/e48809ae4d4dc6077733756131c0158c.jpg" },

  { id: "padus",    nama: "Paduan Suara",  icon: "🎤", kategori: "Seni",      desc: "Vokal grup & harmoni bernyanyi", counter: 14, kuota: 20, foto: "choir,singing" , fotoUrl: "https://i.pinimg.com/1200x/b9/d7/fb/b9d7fba9e4eac7f7b1b4409807fdd443.jpg" },

  { id: "rebana",   nama: "Rebana",        icon: "🥁", kategori: "Seni",      desc: "Musik islami dengan alat rebana", counter: 9, kuota: 20, foto: "islamicmusic,percussion" , fotoUrl: "https://media.istockphoto.com/id/1149420370/id/vektor/kartun-anak-anak-muslim-bermain-rebana.jpg?s=1024x1024&w=is&k=20&c=DEABzire7zv-GQIqSN2arNXl3Msg1kVb_GPmW0bM2LY=" },

  { id: "rohis",    nama: "Rohis",         icon: "🕌", kategori: "Keagamaan", desc: "Kajian & kegiatan keagamaan Islam", counter: 33, kuota: 40, foto: "mosque,quran", fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSz4K4t5LGsKzUEpoykm75z4Mcux4OIe7TSvG2CIx0A&s=10" },

  { id: "jepang",   nama: "Bahasa Jepang", icon: "🇯🇵", kategori: "Akademik",  desc: "Belajar bahasa & budaya Jepang", counter: 11, kuota: 25, foto: "japan,culture" , fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwf3sKTQJ9D3u26djtuDJ2x2oBhXH_hA-w85H0hjCIw&s=10" },

  { id: "fooster",  nama: "Fooster",       icon: "🏍️", kategori: "Otomotif",  desc: "Edukasi keselamatan berkendara sepeda motor (safety riding)", counter: 17, kuota: 30, fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUh1cxKkriRRCIS-jJQ9Y-YnARdZLE3TFKe_pmhAvTcA&s=10" },

  { id: "jurnalis", nama: "Jurnalistik",   icon: "📰", kategori: "Akademik",  desc: "Menulis berita & mengelola media sekolah", counter: 8, kuota: 20, foto: "journalism,newspaper" , fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LtTxoqE2OTPkW4C013WGC7p0EvmN_eYc6x4ToU4YSg&s=10" },

  { id: "drumband", nama: "Drumband",      icon: "🥁", kategori: "Seni",      desc: "Musik ketuk & baris-berbaris drumband", counter: 30, kuota: 35, foto: "marchingband,drum" , fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfle7g8rpVe6hzGadAbFIqo9Dxo8wtmjgGXAsIdyn_w&s=10" },

  { id: "mtq",      nama: "MTQ",           icon: "📖", kategori: "Keagamaan", desc: "Tilawah & musabaqah Al-Qur'an", counter: 13, kuota: 20, foto: "quran,recitation" , fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAX9lt2Ou6XLV9DHZvuyJHTbDNcJcF8_TlI5IyuGd64w&s=10" },

  { id: "voli",     nama: "Bola Voli",     icon: "🏐", kategori: "Olahraga",  desc: "Latihan teknik & tanding bola voli", counter: 24, kuota: 24, foto: "volleyball" , fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9FU7fx09EECrDiKFyRXeucVveT05rkx9gXFeYNTbWQ&s=10" },

  { id: "futsal",   nama: "Futsal",        icon: "⚽", kategori: "Olahraga",  desc: "Latihan teknik & tanding futsal", counter: 22, kuota: 24, foto: "futsal,soccer" , fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnK_YYnsF6ag66SXhel2P9K8AmSoT94E0Gw7YsMa6Uw&s=10" },

  { id: "silat",    nama: "Pencak Silat",  icon: "🥋", kategori: "Olahraga",  desc: "Beladiri tradisional pencak silat", counter: 19, kuota: 30, foto: "martialarts,silat" , fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsLY72WeWvTcICt0b8mZbWzNeQotHuQ5hy4XoPocBjQ&s=10" },
];
const kategoriList = ["Semua", ...new Set(ekskulList.map(e => e.kategori))];

// Kelas warna banner per kategori (dipetakan lewat CSS, lihat style.css)
const bannerClass = {
  Sosial: "banner-sosial", Olahraga: "banner-olahraga", Seni: "banner-seni",
  Keagamaan: "banner-keagamaan", Akademik: "banner-akademik", Otomotif: "banner-otomotif",
};

// Cari ekskul dengan persentase kuota tertinggi (untuk badge "Terpopuler" / "Kuota Penuh")
function getBadge(ekskul, allFiltered) {
  const persen = Math.round((ekskul.counter / ekskul.kuota) * 100);
  if (persen >= 100) return { text: "Kuota Penuh", cls: "badge-full" };
  const belumPenuh = allFiltered.filter(e => (e.counter / e.kuota) < 1);
  const tertinggi = Math.max(...belumPenuh.map(e => e.counter / e.kuota));
  if (belumPenuh.length && (ekskul.counter / ekskul.kuota) === tertinggi && persen >= 70) {
    return { text: "Terpopuler", cls: "badge-hot" };
  }
  return null;
}

// ================= ELEMEN DOM =================
const ekskulGrid = document.getElementById("ekskulGrid");
const emptyState = document.getElementById("emptyState");
const filterChips = document.getElementById("filterChips");
const searchInput = document.getElementById("searchInput");
const totalCounter = document.getElementById("totalCounter");

const listPage = document.getElementById("listPage");
const formPage = document.getElementById("formPage");
const backBtn = document.getElementById("backBtn");
const selectedEkskulName = document.getElementById("selectedEkskulName");
const formIcon = document.getElementById("formIcon");
const formCategory = document.getElementById("formCategory");
const ekskulInput = document.getElementById("ekskul");

const namaInput = document.getElementById("nama");
const kelasInput = document.getElementById("kelas");
const emailInput = document.getElementById("email");
const hpInput = document.getElementById("hp");
const passwordInput = document.getElementById("password");
const konfirmasiInput = document.getElementById("konfirmasi");
const strengthFill = document.getElementById("strengthFill");

const regForm = document.getElementById("regForm");
const formCard = document.querySelector(".form-card");
const resultCard = document.getElementById("resultCard");
const resultDetail = document.getElementById("resultDetail");
const daftarLagiBtn = document.getElementById("daftarLagiBtn");

let currentEkskul = null;
let activeCategory = "Semua";

// ================= FILTER CHIPS =================
kategoriList.forEach((kat) => {
  const chip = document.createElement("span");
  chip.className = "chip" + (kat === "Semua" ? " active" : "");
  chip.textContent = kat;
  chip.addEventListener("click", () => {
    activeCategory = kat;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    renderEkskulGrid();
  });
  filterChips.appendChild(chip);
});

searchInput.addEventListener("input", renderEkskulGrid);

// ================= RENDER GRID (dengan filter kategori + pencarian) =================
function renderEkskulGrid() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filtered = ekskulList.filter((e) => {
    const cocokKategori = activeCategory === "Semua" || e.kategori === activeCategory;
    const cocokKeyword = e.nama.toLowerCase().includes(keyword);
    return cocokKategori && cocokKeyword;
  });

  ekskulGrid.innerHTML = "";
  emptyState.classList.toggle("show", filtered.length === 0);

  filtered.forEach((ekskul) => {
    const persen = Math.min(100, Math.round((ekskul.counter / ekskul.kuota) * 100));
    const badge = getBadge(ekskul, filtered);

    const card = document.createElement("div");
    card.className = "ekskul-card";
    card.innerHTML = `
      <div class="ekskul-banner" style="background-image:url('${ekskul.fotoUrl || `https://loremflickr.com/400/300/${ekskul.foto}?lock=${ekskul.id}`}')">
        ${badge ? `<span class="badge-ribbon ${badge.cls}">${badge.text}</span>` : ""}
        <span class="banner-icon">${ekskul.icon}</span>
      </div>
      <div class="card-body">
        <span class="cat-tag">${ekskul.kategori}</span>
        <h3 class="name">${ekskul.nama}</h3>
        <p class="desc">${ekskul.desc}</p>
        <p class="stat-line"><b>Anggota:</b> ${ekskul.counter} / ${ekskul.kuota}</p>
        <div class="progress-wrap">
          <span class="progress-fill" style="width:${persen}%"></span>
          <span class="progress-label">${persen}%</span>
        </div>
        <button type="button" class="card-btn">Lihat selengkapnya →</button>
      </div>
    `;
    card.addEventListener("click", () => openForm(ekskul));
    ekskulGrid.appendChild(card);
  });

  totalCounter.textContent = ekskulList.reduce((sum, e) => sum + e.counter, 0);
}
renderEkskulGrid();

// ================= NAVIGASI HALAMAN =================
function openForm(ekskul) {
  currentEkskul = ekskul;
  ekskulInput.value = ekskul.id;
  selectedEkskulName.textContent = ekskul.nama;
  formIcon.textContent = ekskul.icon;
  formCategory.textContent = ekskul.kategori;
  resetForm();

  listPage.classList.remove("active");
  formPage.classList.add("active");
  window.scrollTo(0, 0);
}

function backToList() {
  formPage.classList.remove("active");
  listPage.classList.add("active");
  renderEkskulGrid();
}

backBtn.addEventListener("click", backToList);
daftarLagiBtn.addEventListener("click", backToList);

function resetForm() {
  regForm.reset();
  regForm.style.display = "block";
  resultCard.classList.remove("show");
  formCard.classList.remove("submitted");
  strengthFill.style.width = "0%";

  [namaInput, kelasInput, emailInput, hpInput, passwordInput, konfirmasiInput].forEach((input) => {
    input.classList.remove("valid", "invalid");
  });
  document.querySelectorAll(".error-msg").forEach((el) => (el.textContent = ""));
}

// ================= VALIDASI REAL-TIME =================
function setStatus(input, errorEl, isValid, message) {
  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  errorEl.textContent = isValid ? "" : message;
  return isValid;
}

function validateNama() {
  return setStatus(namaInput, document.getElementById("errNama"), namaInput.value.trim().length >= 3, "Nama minimal 3 karakter.");
}
function validateKelas() {
  return setStatus(kelasInput, document.getElementById("errKelas"), kelasInput.value.trim().length >= 5, "Kelas wajib diisi.");
}
function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return setStatus(emailInput, document.getElementById("errEmail"), regex.test(emailInput.value.trim()), "Format email tidak valid.");
}
function validateHp() {
  const regex = /^[0-9]{10,14}$/;
  return setStatus(hpInput, document.getElementById("errHp"), regex.test(hpInput.value.trim()), "Nomor HP harus 10-14 digit angka.");
}

// Meter kekuatan password: dihitung dari panjang + variasi karakter
function updateStrength(value) {
  let score = 0;
  if (value.length >= 8) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;

  const percent = (score / 4) * 100;
  const warna = score <= 1 ? "#dc2626" : score <= 2 ? "#f59e0b" : "#16a34a";
  strengthFill.style.width = percent + "%";
  strengthFill.style.background = warna;
}

function validatePassword() {
  const value = passwordInput.value;
  updateStrength(value);
  const valid = setStatus(passwordInput, document.getElementById("errPassword"), value.length >= 8, "Password minimal 8 karakter.");
  if (konfirmasiInput.value.length > 0) validateKonfirmasi();
  return valid;
}

function validateKonfirmasi() {
  const valid = konfirmasiInput.value.length > 0 && konfirmasiInput.value === passwordInput.value;
  return setStatus(konfirmasiInput, document.getElementById("errKonfirmasi"), valid, "Konfirmasi password tidak sama.");
}

namaInput.addEventListener("input", validateNama);
kelasInput.addEventListener("input", validateKelas);
emailInput.addEventListener("input", validateEmail);
hpInput.addEventListener("input", validateHp);
passwordInput.addEventListener("input", validatePassword);
konfirmasiInput.addEventListener("input", validateKonfirmasi);

// ================= SUBMIT FORM =================
regForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const semuaValid = [
    validateNama(), validateKelas(), validateEmail(),
    validateHp(), validatePassword(), validateKonfirmasi(),
  ].every(Boolean);

  if (semuaValid) {
    currentEkskul.counter += 1;

    resultDetail.innerHTML = `
      <li><span>Ekstrakurikuler</span><b>${currentEkskul.nama}</b></li>
      <li><span>Nama</span><b>${namaInput.value.trim()}</b></li>
      <li><span>Kelas</span><b>${kelasInput.value.trim()}</b></li>
      <li><span>Email</span><b>${emailInput.value.trim()}</b></li>
      <li><span>No. HP</span><b>${hpInput.value.trim()}</b></li>
    `;

    regForm.style.display = "none";
    formCard.classList.add("submitted");
    resultCard.classList.add("show");
  }
});