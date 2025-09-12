# MVEstates 🏡

A modern real estate platform built with **Next.js 14**, featuring authentication, property management, image galleries, maps, and more.

---

## ✨ Features

- 🔐 **User Authentication** with Google & NextAuth  
- 🔑 **User Authorization** & Route Protection  
- 👤 **User Profiles** with personal property listings  
- 🏘️ **Property Listings CRUD** (create, update, delete, view)  
- 📸 **Multiple Property Image Uploads** (Cloudinary integration)  
- 🔍 **Property Search** with filters  
- 💬 **Internal Messaging** with **unread notifications**  
- 🖼️ **Image Gallery** (PhotoSwipe / Lightbox integration)  
- 🗺️ **Interactive Maps** with Mapbox  
- 🔔 **Toast Notifications** for actions  
- ⭐ **Property Bookmarking** / saved properties  
- 📤 **Social Media Sharing** (React Share)  
- ⏳ **Loading Spinners** for async actions  
- 📱 **Responsive Design** (Tailwind)  
- ⚠️ **Custom 404 Page**  
- ⚡ **Next.js Server Actions**  

---

## 🛠️ Tech Stack

- **Frontend / Framework**: [Next.js](https://nextjs.org/), [React](https://react.dev/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [React Icons](https://react-icons.github.io/react-icons/)  
- **Database**: [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)  
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (Google OAuth)  
- **Image Management**: [Cloudinary](https://cloudinary.com/), [PhotoSwipe](https://photoswipe.com/)  
- **Maps & Geo**: [Mapbox](https://www.mapbox.com/), [React Map GL](https://visgl.github.io/react-map-gl/), [React Geocode](https://www.npmjs.com/package/react-geocode)  
- **UI Enhancements**: [React Toastify](https://fkhadra.github.io/react-toastify/), [React Spinners](https://www.davidhu.io/react-spinners/), [React Share](https://github.com/nygardk/react-share)  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/mvestates.git
cd mvestates
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment variables
Create a `.env.local` file in the root and add your keys:  
```env
NEXT_PUBLIC_APP_NAME="MV Estates"
NEXT_PUBLIC_APP_DESCRIPTION="Find the best place to live"
NEXT_PUBLIC_DOMAIN="http://localhost:3000"
NEXT_PUBLIC_API_DOMAIN="http://localhost:3000/api"
MONGODB_URI=your_mongodb_connection
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY=your_google_api_key
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
```

### 4. Run the dev server
```bash
npm run dev
```
App will be available at: [http://localhost:3000](http://localhost:3000)


