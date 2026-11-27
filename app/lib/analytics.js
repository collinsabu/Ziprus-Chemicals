export const measurementId=process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID||"";
export const enabled=/^G-[A-Z0-9]+$/.test(measurementId);
export const preferenceKey="ziprus_analytics_preference_v1";
export function trackEnquiry(type){if(!enabled||typeof window==="undefined"||window["ga-disable-"+measurementId]!==false||typeof window.gtag!=="function"||!["contact","quotation","order","callback"].includes(type))return;window.gtag("event","generate_lead",{enquiry_type:type,send_to:measurementId});}
