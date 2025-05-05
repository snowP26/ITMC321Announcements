import { create } from "zustand";

export const useAnnouncementStore = create((set) => ({
    announcements: [],
    setAnnouncements: (announcements) => set({ announcements }),
    createAnnouncement: async (newAnnouncement) => {
        if(!newAnnouncement.header || !newAnnouncement.description){
            return{success: false, message: "Please fill in all fields"}
        }

        const res = await fetch("/api/tickets", {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newAnnouncement)
        })

        const data = await res.json();
        set((state) => ({announcement:[...state.announcements, data.data]}))
        return{success: true, message: "Announcement successfully posted!"}
    }
}));