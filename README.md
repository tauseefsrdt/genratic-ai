# SRMU Generative AI Board Demo

A modern, official university-themed **Generative AI Board Dashboard** modeled after **[Shri Ramswaroop Memorial University (SRMU)](https://srmu.ac.in/)**, built with **React, Vite, TypeScript, and Tailwind CSS**.

---

## 🎨 Theme & Brand Identity (Based on srmu.ac.in)

* **Primary Colors**: SRMU Deep Navy (`#14284e` / `#0f4a85`) & Warm Gold Accent (`#ffb703` / `#e09f00`).
* **Typography**: Clean Google Fonts (`Rubik` & `Inter`).
* **Official Helplines**: Toll-Free `1800 102 6004` / WhatsApp `+91 9120007948` / `admissions@srmu.ac.in`.
* **Campus & Location**: 100-Acre Green Campus on Lucknow-Deva Road, Barabanki, Uttar Pradesh (PIN: 225003).

---

## 🚀 Quick Start

### 1. Open the `demo` directory:
```bash
cd demo
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start development server:
```bash
npm run dev
```

Visit **`http://localhost:3000`** in your browser.

---

## 🧠 Knowledge Base & Topics Covered

* **115+ Courses Across 11 Disciplines**: B.Tech (16 Specializations), MBA, BBA, BCA, B.Pharm, LL.B, Agriculture, Journalism.
* **Admissions & SRMUSET**: Eligibility criteria, step-by-step admission roadmap, and merit scholarships up to 100%.
* **Placements & Recruiters**: 90%+ placement rate, ₹17 LPA highest package, Accenture, Amazon, Jaro Education, TCS, Infosys.
* **Campus & Facilities**: 100-acre smart campus, separate hostels, central library, sports complex, and university transport fleet.
* **Accreditations & Approvals**: UGC Approved, NAAC B+ (2.7), BCI approved, PCI approved, Ranked 70th in India Today 2025.

---

## 📁 Code Structure

```text
demo/
├── src/
│   ├── components/
│   │   ├── Header.tsx              # SRMU branding, top helpline bar, Clear Chat & Spring AI Modal
│   │   ├── AIBoardLanding.tsx      # SRMU metrics (115+ courses, 100 acres, 90% placements, NAAC B+)
│   │   ├── ChatWindow.tsx          # Scrollable message area with real-time streaming auto-scroll
│   │   ├── ChatMessage.tsx         # User & SRMU AI bubbles with markdown formatting and copy button
│   │   ├── ChatInput.tsx           # Auto-resizing input box with Send button & Enter key support
│   │   ├── SuggestedQuestions.tsx  # Categorized clickable prompt cards for SRMU inquiries
│   │   └── ArchitectureModal.tsx   # Visual overview of Spring Boot + Spring AI integration roadmap
│   ├── services/
│   │   └── aiService.ts            # Isolated AI service with simulated LLM token streaming & latency
│   ├── types/
│   │   └── chat.ts                 # TypeScript types (ChatMessageData, SuggestedQuestion, ChatSource)
│   ├── data/
│   │   └── demoResponses.ts        # Comprehensive SRMU university knowledge base
│   ├── App.tsx                     # Top-level state management & streaming response coordinator
│   ├── main.tsx                    # React root entry point
│   └── index.css                   # Custom Tailwind design & typing animations
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```
