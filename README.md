💬 Chat with Soul AI

🧠 Project Overview

Chat with Soul AI is a responsive web application that allows users to chat with an AI model, provide feedback on responses, and view past conversations with ratings and comments.

The app is designed to deliver an interactive experience with clean UI, smooth animations, and proper state management. Users can engage in multiple conversations, rate the AI at the end, and even revisit their past chats with all associated feedback.

🚀 Features

💭 Core Chat Functionality

Users can chat with the Soul AI model in a conversational interface.

Each AI response is displayed using a <p> tag.

If the query doesn’t match any known question, AI replies with:

“Sorry, Did not understand your query!”

👍 Feedback System

Hover over any AI response to reveal thumbs up / thumbs down buttons for quick feedback.

At the end of the conversation, users can provide:

⭐ A rating out of 5 (stars or Likert scale).

📝 Subjective written feedback.

💾 Conversation History

Conversations are automatically saved upon clicking the Save button (type="button").

Saved conversations can be revisited through the /history route.

Each saved chat retains the feedback and rating associated with it.

📂 Feedback View

A separate section allows users to view all feedback points across different conversations.

Includes filtering options based on ratings.

🖼️ UI & Design
Layout

Clean and modern UI that matches the provided Figma design reference.

Displays Soul AI using a <span> tag.

Chat Input Placeholder: Message Bot AI…

Ask Button: Must have type="submit".

Save Button: Must have type="button".

Responsiveness

Fully responsive and adapts seamlessly to mobile, tablet, and desktop views.

Layout adjusts dynamically for smaller screens with optimized spacing and typography.

🧩 Component Overview
Component	Description
ChatBox	Displays real-time conversation between the user and Soul AI.

FeedbackButtons	Floating like/dislike icons visible on hover over AI messages.


RatingModal	Allows users to submit star rating and written feedback after chat ends.

HistoryPanel	Lists all saved conversations with timestamp and feedback summary.

FeedbackView	Displays all feedback entries across conversations with rating filters.

🧰 Tech Stack

Category	Technology

Frontend Framework	React / Next.js

Styling	Tailwind CSS / CSS Modules

Routing	React Router / Next.js Routes

State Management	React Hooks / Context API

Icons	Lucide Icons / React Icons

Data Handling	Local JSON (sample data provided in stub.json)

🧪 Functionality Checklist

✅ Design & Layout

 Matches the Figma mockups

 Consistent spacing and alignment

 Responsive across devices

✅ Functionality

 AI responds correctly to known queries

 Displays default message for unknown queries

 Feedback buttons appear on hover

 Ratings and comments work properly

 Conversations can be saved and revisited

✅ Performance

 No console errors

 Optimized images and CSS

✅ Accessibility

 Keyboard navigable buttons

 Proper ARIA labels for feedback icons

✅ Code Quality

 Reusable components

 Proper naming conventions

 Meaningful commit messages

1️⃣ Clone the repository
git clone https://github.com/yourusername/chat-with-soul-ai.git
cd chat-with-soul-ai

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Build for production
npm run build
npm start

5️⃣ Visit in browser
http://localhost:3000

🌐 Routes
Route	Description
/	Chat with Soul AI
/history	View saved conversations
/feedback	View all feedback with filters
💾 Sample Data Structure (stub.json)
{
  "chats": [
    {
      "id": 1,
      "userMessage": "Hello",
      "botReply": "Hi there! How can I assist you?",
      "liked": true,
      "rating": 5,
      "feedback": "Very helpful response!"
    }
  ]
}

📘 Evaluation Notes

✅ Placeholder in chat input: "Message Bot AI…"

✅ Ask button → type="submit"

✅ Save button → type="button"

✅ AI response inside <p> tag

✅ “Soul AI” displayed inside <span>

✅ Unknown query → "Sorry, Did not understand your query!"

✅ Saved chats route → /history

🧾 Deployment

You can deploy your project easily on Vercel, Netlify, or GitHub Pages.

Example Vercel deployment steps:

npm install -g vercel

vercel

🪪 License

This project is licensed under the MIT License.

Feel free to use and modify it for learning or development purposes.

👨‍💻 Author

Developed by: Dhamodharan S
Full Stack Web Developer Intern
📧 Email: dhamodharans206@gmail.com

Deployment Link:
```base
