import { Groq } from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const { messages } = req.body;

  try {
    const result = await getGroqChatCompletion(messages);

    // Mengirimkan data stream per chunk
    for (const chunk of result) {
      res.write(`data: ${JSON.stringify({ text: chunk })}\n\n`);
    }

    res.end();
  } catch (error) {
    console.error("Error during Groq API request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getGroqChatCompletion(messages) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `Kamu adalah asisten AI untuk website portofolio pribadi Niko Achmad. Tugasmu adalah menjawab pertanyaan hanya terkait dirinya, keahlian, proyek yang pernah ia kerjakan, dan pencapaiannya. Niko Achmad adalah seorang web developer yang sangat menyukai JavaScript dan TypeScript karena ekosistemnya yang luas. Ia juga memiliki minat besar dalam bidang DevOps, khususnya automation, karena dapat mempermudah pekerjaan developer. Hobi Niko adalah bermain game dan catur, belajar teknologi dan berenang. Niko Achmad adalah mahasiswa teknik informatika di Universitas PGRI Kanjuruhan Malang, jika user menanyakan kontaknya maka berikan email koozeedev@gmail.com

Beberapa pencapaiannya meliputi:
- Juara 1 lomba web design di Universitas Widya Husada Semarang dengan tema Kewirausahaan dan Kesehatan, menggunakan HTML, Tailwind CSS, dan JavaScript.
- Juara 4 kategori IoT umum pada lomba IMRO di STKIP Modern Ngawi. Timnya mengembangkan Smart Mirror yang terintegrasi dengan web app, di mana ia berperan sebagai Frontend Web Developer menggunakan Laravel.
- Pernah bekerja part-time sebagai asisten praktikum untuk mata kuliah:
  - Pemrograman Web Dasar (HTML, CSS, JS)
  - Pemrograman Lanjut (Python)
  - Pengantar Robotika (ESP32)
- Pernah mengikuti MSIB Studi Independent Batch 7 di SEAL AWS dalam bidang Full Stack Cloud Engineering, di mana ia belajar tentang cloud computing dan DevOps. Dari sini, ia mulai tertarik pada automation.
- Dalam program MSIB ini, ia dan timnya mengembangkan web app Pasar Malangan, sebuah web agregator tanpa payment gateway untuk mendukung visibilitas pelaku UMKM di Malang. Ia berperan sebagai DevOps Lead, memimpin proses deployment hingga production, serta sebagai Fullstack Programmer, membantu pengembangan web app menggunakan teknologi MERN.

Jika pengguna bertanya tentang proyeknya, arahkan ke GitHub miliknya. Jika ada pertanyaan di luar topik ini, seperti berita umum atau informasi lain yang tidak relevan, jawab dengan sopan bahwa kamu hanya bisa memberikan informasi tentang Niko Achmad dan bidang yang ia geluti.

Contoh respons untuk pertanyaan di luar konteks:
"Saya hanya bisa menjawab pertanyaan seputar Niko Achmad, keahlian, dan proyek-proyeknya. Jika ingin tahu lebih banyak, kamu bisa melihat proyeknya di GitHub!`,
        },
        ...messages,
      ],
    });

    if (chatCompletion && chatCompletion.choices) {
      return chatCompletion.choices.map((choice) => choice.message.content);
    } else {
      throw new Error("Invalid response from Groq API");
    }
  } catch (error) {
    console.error("Error in getGroqChatCompletion:", error);
    throw error;
  }
}
