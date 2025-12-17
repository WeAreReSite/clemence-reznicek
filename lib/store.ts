import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Service {
  id: string
  name: string
  slug: string
  category: string
  description: string
  shortDescription: string
  duration: number
  price: number
  image: string
  benefits: string[]
  isPopular?: boolean
}

export interface Therapist {
  id: string
  name: string
  title: string
  image: string
  specialties: string[]
  bio: string
}

interface BookingState {
  serviceId: string | null
  therapistId: string | null
  date: Date | null
  timeSlot: string | null
  clientInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    notes: string
  } | null
  step: number
  setService: (id: string) => void
  setTherapist: (id: string | null) => void
  setDate: (date: Date) => void
  setTimeSlot: (time: string) => void
  setClientInfo: (info: BookingState['clientInfo']) => void
  setStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  reset: () => void
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      serviceId: null,
      therapistId: null,
      date: null,
      timeSlot: null,
      clientInfo: null,
      step: 1,
      setService: (id) => set({ serviceId: id }),
      setTherapist: (id) => set({ therapistId: id }),
      setDate: (date) => set({ date }),
      setTimeSlot: (time) => set({ timeSlot: time }),
      setClientInfo: (info) => set({ clientInfo: info }),
      setStep: (step) => set({ step }),
      nextStep: () => set((state) => ({ step: state.step + 1 })),
      prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
      reset: () =>
        set({
          serviceId: null,
          therapistId: null,
          date: null,
          timeSlot: null,
          clientInfo: null,
          step: 1,
        }),
    }),
    {
      name: 'booking-storage',
      partialize: (state) => ({
        serviceId: state.serviceId,
        therapistId: state.therapistId,
        date: state.date,
        timeSlot: state.timeSlot,
        step: state.step,
      }),
    }
  )
)

interface CookieConsentState {
  hasConsented: boolean | null
  preferences: {
    necessary: boolean
    analytics: boolean
    marketing: boolean
  }
  setConsent: (consent: boolean, preferences?: CookieConsentState['preferences']) => void
  updatePreferences: (preferences: Partial<CookieConsentState['preferences']>) => void
}

export const useCookieConsentStore = create<CookieConsentState>()(
  persist(
    (set) => ({
      hasConsented: null,
      preferences: {
        necessary: true,
        analytics: false,
        marketing: false,
      },
      setConsent: (consent, preferences) =>
        set((state) => ({
          hasConsented: consent,
          preferences: preferences || state.preferences,
        })),
      updatePreferences: (newPreferences) =>
        set((state) => ({
          preferences: { ...state.preferences, ...newPreferences },
        })),
    }),
    {
      name: 'cookie-consent',
    }
  )
)
