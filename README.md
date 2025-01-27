# URL Shortener and Analytics

## Project Overview
The **URL Shortener and Analytics** project is a powerful web application built using **Next.js**, **MongoDB Atlas**, and **JavaScript**, with **Tailwind CSS** for styling. This application allows users to generate short URLs for long URLs and provides detailed analytics for each short URL.

## Features
1. **URL Shortening**:
   - Generate short URLs for long URLs with ease.

2. **Analytics Dashboard**:
   - Track the **number of visits** for each short URL.
   - View the **creation date** of the short URL.
   - Display the **last visit date** for the short URL.
   - Maintain a **history of visits**, including the exact date and time of each visit.

## Technologies Used
- **Frontend**: [Next.js](https://nextjs.org/) for building the user interface.
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for storing URL data and visit analytics.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for a responsive and modern design.
- **Backend**: Node.js API integrated within the Next.js framework.

## Getting Started
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for database setup

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Shiveshdixit07/Url_Shortener_And_Analytics.git
   cd Url_Shortener_And_Analytics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variable:
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGODB_URI=your-mongodb-atlas-connection-string
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage
1. **Shorten a URL** :
   - Enter a long URL in the input field.
   - Click the "Generate" button to generate a short URL.

2. **View Analytics** :
   - Access the analytics for any short URL to view its visit count, creation date, last visit date, and visit history.

## Contact
For queries or support, please reach out to [shiveshdixit8400@gmail.com](mailto:shiveshdixit8400@gmail.com).