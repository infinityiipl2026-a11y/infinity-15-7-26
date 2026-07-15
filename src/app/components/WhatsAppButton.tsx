import { siteConfig } from "../lib/site-config";

export default function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_22px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 animate-float-whatsapp"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.257.593 4.373 1.63 6.207L3.2 28.8l6.76-1.77a12.74 12.74 0 0 0 6.044 1.54h.005c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.57-12.805-12.57Zm0 23.36a10.5 10.5 0 0 1-5.36-1.47l-.385-.228-4.01 1.05 1.07-3.91-.25-.402a10.53 10.53 0 0 1-1.615-5.6c0-5.83 4.74-10.57 10.575-10.57 2.825 0 5.48 1.1 7.48 3.1a10.5 10.5 0 0 1 3.095 7.48c0 5.83-4.74 10.55-10.6 10.55Zm5.78-7.905c-.317-.16-1.874-.925-2.164-1.03-.29-.106-.5-.16-.71.16-.21.318-.814 1.03-1 1.24-.184.212-.368.238-.685.08-.317-.16-1.337-.494-2.548-1.578-.942-.84-1.578-1.878-1.763-2.196-.185-.318-.02-.49.14-.65.143-.142.317-.37.475-.556.16-.185.212-.318.318-.53.106-.212.053-.397-.027-.556-.08-.16-.71-1.71-.972-2.343-.256-.615-.516-.532-.71-.542l-.605-.01c-.212 0-.556.08-.847.397s-1.11 1.084-1.11 2.644 1.137 3.066 1.296 3.278c.16.212 2.238 3.42 5.424 4.796.758.327 1.35.523 1.812.67.762.242 1.455.208 2.003.126.611-.091 1.874-.766 2.14-1.505.264-.74.264-1.373.185-1.505-.08-.132-.291-.212-.608-.37Z" />
      </svg>
    </a>
  );
}
