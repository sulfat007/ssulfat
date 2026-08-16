export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'atomic-habits-james-clear',
    title: 'Ringkasan: Atomic Habits — James Clear',
    excerpt:
      'Perubahan kecil yang dilakukan terus-menerus bisa ngasilin hasil yang luar biasa. Buku ini ngajarin gimana bikin kebiasaan baik nempel dan ngilangin yang buruk.',
    date: '2025-03-10',
    readTime: '5 mnt baca',
    category: 'Self Improvement',
    content: [
      'Atomic Habits itu salah satu buku yang bikin cara aku liat progress berubah total. Intinya simpel: kamu nggak perlu lompat jauh. Yang penting, sistemnya jalan setiap hari.',
      'James Clear ngejelasin konsep 1% better every day. Kedengerannya sepele, tapi kalau dikali setahun, hasilnya absurd bagus. Sebaliknya, 1% lebih buruk tiap hari juga bisa ngerusak pelan-pelan.',
      'Yang paling nempel: identity-based habits. Jangan cuma bilang "aku mau baca buku", tapi jadiin "aku orang yang baca". Identitas dulu, baru aksinya ngikut.',
      'Empat hukum kebiasaan yang dia ajarin juga gampang diinget: bikin kebaikan itu obvious, attractive, easy, dan satisfying. Kebiasaan buruk? Balikin semuanya.',
      'Buat aku yang masih maba dan lagi bangun ritme kuliah plus konten, buku ini kayak manual kecil. Nggak langsung sempurna — tapi setidaknya arahnya jelas.',
    ],
  },
  {
    slug: 'filosofi-teras-dewa-eka-prayoga',
    title: 'Ringkasan: Filosofi Teras — Dewa Eka Prayoga',
    excerpt:
      'Buku tentang mind-set orang-orang sukses. Bukan rumus cepat kaya, tapi cara mikir yang bikin kita nggak gampang nyerah pas lagi di bawah.',
    date: '2025-02-22',
    readTime: '4 mnt baca',
    category: 'Mindset',
    content: [
      'Filosofi Teras ngebawa stoicism ke bahasa yang enak dibaca orang Indonesia. Nggak kaku, nggak sok bijak — justru relatable.',
      'Inti yang aku bawa: bedain mana yang bisa dikontrol dan mana yang nggak. Energi kehal yang bisa diubah, sisanya dilepas pelan-pelan.',
      'Pas lagi stuck di tugas, atau konten sepi engagement, prinsip ini ngebantu. Frustrasi tetap ada, tapi nggak sampe ngunci langkah.',
      'Buku ini cocok dibaca pelan. Satu bab, direnungin, baru lanjut. Bukan race buat selesai, lebih ke latihan mikir.',
    ],
  },
  {
    slug: 'the-magic-of-thinking-big-david-schwartz',
    title: 'Ringkasan: The Magic of Thinking Big — David Schwartz',
    excerpt:
      'Buku klasik soal kekuatan berpikir besar. Ngajarin kita buat nggak underestimate diri sendiri dan mulai berani mimpi yang lebih besar dari yang biasa kita target.',
    date: '2025-01-08',
    readTime: '6 mnt baca',
    category: 'Self Improvement',
    content: [
      'Thinking Big ngebuka satu hal sederhana: batas kita seringkali cuma ada di kepala. Bukan di skill, bukan di kondisi — di cara kita frame kemungkinan.',
      'Schwartz nulis dengan gaya lama tapi pesannya masih relevan. Percaya diri bukan soal sombong, tapi soal ngasih ruang buat potensimu kerja.',
      'Beberapa takeaway praktis: kelilingi orang yang mikir besar, tindak lanjuti ide meski belum sempurna, dan jangan biarin rasa takut nentuin skala mimpimu.',
      'Sebagai mahasiswa yang juga ngejar sisi kreatif, ini pengingat bagus. Portofolio bisa mulai kecil — tapi visi di belakangnya boleh ambisius.',
    ],
  },
  {
    slug: 'deep-work-cal-newport',
    title: 'Ringkasan: Deep Work — Cal Newport',
    excerpt:
      'Di era notifikasi numpuk, kemampuan fokus dalam jadi skill langka. Catatan singkat soal cara jaga deep work di tengah kuliah dan konten.',
    date: '2024-12-15',
    readTime: '5 mnt baca',
    category: 'Produktivitas',
    content: [
      'Deep Work argumentasinya tajam: kerja dangkal (balas chat, scroll, multitasking) gampang — tapi yang bikin maju justru sesi fokus tanpa gangguan.',
      'Newport ngasih beberapa filosofi jadwal: monastic, bimodal, rhythmic, journalistic. Aku condong ke rhythmic — blok fokus tiap hari, walau cuma 60–90 menit.',
      'Buat mahasiswa plus content creator, godaan distraksi dobel. HP di mode hening, tab ditutup, timer jalan — kedengerannya basic, tapi efektif.',
      'Yang aku coba apply: satu sesi deep work buat kuliah, satu sesi buat edit/konten. Nggak perfect setiap hari, tapi frekuensinya naik pelan-pelan.',
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
