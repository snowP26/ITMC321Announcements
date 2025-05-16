import axios from "axios";

const API_URL = 'https://sys-integ-production.up.railway.app/api/notes' 

export const fetchNotes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data
    } catch (error) {
        console.error("Error fetching products: ", error);
        throw error;
    }
}

// store/notesAPI.js
export const fetchApprovedNotes = async () => {
    const res = await fetch('https://your-backend-url/api/approved-notes');
    if (!res.ok) throw new Error('Failed to fetch approved notes');
    return await res.json();
  };
  