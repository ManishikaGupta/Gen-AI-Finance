# 💸 Gen-AI Finance Dashboard
[![Streamlit App](https://img.shields.io/badge/Streamlit-Deployed-brightgreen?logo=streamlit)](https://personalfinance-dashboard.netlify.app/)
[![Python](https://img.shields.io/badge/Python-3.10+-blue?logo=python)](https://www.python.org/)
[![License](https://img.shields.io/github/license/ManishikaGupta/Gen-AI-Finance)](https://github.com/ManishikaGupta/Gen-AI-Finance/blob/main/LICENSE)
[![Groq](https://img.shields.io/badge/LLM-Groq%20API-orange?logo=groq)](https://groq.com/)
[![LLaMA](https://img.shields.io/badge/LLaMA-3--8B-red?logo=meta)](https://ai.meta.com/llama/)
[![SQLite](https://img.shields.io/badge/Database-SQLite-003B57?logo=sqlite)](https://sqlite.org)
[![SQLAlchemy](https://img.shields.io/badge/ORM-SQLAlchemy-cc0000?logo=sqlalchemy)](https://www.sqlalchemy.org/)
[![Made with LangChain](https://img.shields.io/badge/Made%20with-LangChain-ff69b4?logo=langchain)](https://www.langchain.com/)
[![Made with Gemini](https://img.shields.io/badge/Made%20with-Gemini-blue?logo=google)

**Gen-AI Finance** is a unified personal finance dashboard that harnesses the power of GenAI to simplify and enrich financial decision-making. It features **three distinct, AI-powered modules**—each designed to support users in understanding, managing, and reflecting on their spending habits through interactive and personalized experiences.

🔗 **Live Demo:** [personalfinance-dashboard.netlify.app](https://personalfinance-dashboard.netlify.app/)

<img width="1440" height="900" alt="Screenshot 2025-07-19 at 6 14 42 PM" src="https://github.com/user-attachments/assets/a865eb74-da55-4b42-a231-88a6c2282b57" />
<img width="1440" height="900" alt="Screenshot 2025-07-19 at 6 16 19 PM" src="https://github.com/user-attachments/assets/0ba91c04-6c40-4293-97e5-add4c09bb91e" />

## 🧠 1. No-SQL Chatbot – *Query Your Finances Like a Pro*

An AI-powered chatbot that lets users ask natural language questions about their monthly transactions—**no SQL knowledge required**.

- 🔍 **Use Case:** “How much did I spend on food last week?” or “What was my highest expense category in June?”
- 📄 **Input:** Upload a CSV of bank or credit card transactions
- ⚙️ **How It Works:**  
  - Extracts relevant insights using Pandas  
  - Converts queries to pseudo-SQL logic using LLMs  
  - Filters, aggregates, and visualizes results dynamically
<img width="2880" height="1800" alt="image" src= "https://github.com/user-attachments/assets/3edd32fa-92fd-40a3-8ce6-6acd5bcc84d0" />
<img width="2880" height="1800" alt="image" src= "https://github.com/user-attachments/assets/3e8b9f89-5aff-4395-8454-c5aaf9493e80" />

---

## 🎯 2. Goal-Tracking Chatbot – *AI as Your Accountability Partner*

A conversational assistant that helps users **set savings goals** and track progress through subtle nudges and feedback.

- ✏️ **Input:** Define your financial goal (e.g., “Save ₹5000 this month”)
- 💬 **Response:** The bot evaluates your transaction data and guides you with suggestions like:
  - “You’ve already spent ₹1200 on food delivery—consider cutting down to meet your goal.”
- 👥 **For Whom:** Especially helpful for Gen Z users looking for personalized nudges rather than spreadsheets
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/e6625841-932e-4181-8254-60ded1fdbb8e" />
---

## 📖 3. Finance Story Generator – *Turn Numbers into Narratives*

Transforms monthly expense data into **engaging, Gen Z-style stories** with visuals and audio.

- 🎙️ **What It Does:**  
  - Analyzes your transactions and creates a humorous, personalized story (e.g., “Your Zomato addiction peaked on the 17th”)  
  - Generates visuals using Gemini Pro Vision  
  - Optionally reads out the story using text-to-speech (gTTS)
- 🖼️ **Use Case:** Makes finance fun, especially for users new to tracking their money

<img width="2544" height="1330" alt="image" src="https://github.com/user-attachments/assets/5db660b7-0479-487e-85ec-f85bc2aa618b" />
<img width="2552" height="1336" alt="image" src="https://github.com/user-attachments/assets/529fd3c8-3748-48f8-88be-8f31e74aecc3" />
---

## 💻 Tech Stack

 **No-SQL chatbot:**
- LLM Backend: Groq API with LLaMA 3-8B
- LLM Framework: LangChain SQL Agent + Toolkit
- Databases Supported: SQLite (finance.db) and MySQL
- ORM & Engine: SQLAlchemy
- Deployment: Localhost or Streamlit Cloud

**Goal Tracking Chatbot:**
- Backend: Python, Pandas
- LLM frameworks: Gemini API
- Deployment: Localhost or Streamlit Cloud

**Financial Story Generator:**
- LLM backend: Python, Pandas, Matplotlib
- LLM framework: Gemini API, LangChain, OpenAI (optional), gTTS, Deep Translator (for multilingual stories)
- Deployment: Localhost or Streamlit Cloud

---


## 🛠 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/ManishikaGupta/Gen-AI-Finance.git
   cd Gen-AI-Finance

2. Install dependencies:
   ```bash
   pip install -r requirements.txt

3. Run the app:
   ```bash
   npm run dev

---

## 🚀 Future Scope
- Budget alerts and overspending detection
- Integration with SMS/email reminders
- Support for Indian banks and UPI apps
- Pfd and image parsing
- Image and video generation using Replicate or SDXL
- 50-30-20 Budget Rule Comparison with color-coded bars (green: under, red: over)
- UI animations and downloadable PDF reports

## 🙌 Authors & Contributions

Built with ❤️ by 

@ManishikaGupta

@SaniaVr

@maanvi14

Krikshita Sachdeva

for Sansoftech pvt. Ltd.


Feel free to open issues, suggest features, or contribute!





