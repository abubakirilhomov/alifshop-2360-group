import React from "react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <defs>
      <radialGradient id="ig-grad" r="150%" cx="30%" cy="107%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
      fill="url(#ig-grad)"
    />
    <circle
      cx="12"
      cy="12"
      r="4.5"
      stroke="white"
      strokeWidth="1.8"
      fill="none"
    />
    <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <rect width="24" height="24" rx="5" fill="#1877F2" />
    <path
      d="M15.5 8H13.5C13.2 8 13 8.2 13 8.5V10H15.5L15.1 12.5H13V19H10.5V12.5H9V10H10.5V8.5C10.5 6.6 11.8 5 14 5H15.5V8Z"
      fill="white"
    />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <circle cx="12" cy="12" r="12" fill="#26A5E4" />
    <path
      d="M17.5 6.5L5.5 11.1C5.1 11.3 5.1 11.7 5.5 11.8L8.5 12.8L9.5 16C9.6 16.4 10 16.5 10.3 16.2L11.8 14.7L14.8 16.9C15.2 17.1 15.5 16.9 15.6 16.5L18 7.2C18.1 6.7 17.9 6.3 17.5 6.5Z"
      fill="white"
    />
  </svg>
);

const AppStoreIcon = () => (
  <svg viewBox="0 0 120 40" className="h-8 w-auto" fill="none">
    <rect
      width="120"
      height="40"
      rx="6"
      fill="#1a1a1a"
      stroke="#444"
      strokeWidth="1"
    />
    <text x="36" y="14" fontSize="8" fill="#aaa" fontFamily="sans-serif">
      Загрузите в
    </text>
    <text
      x="36"
      y="28"
      fontSize="13"
      fill="white"
      fontFamily="sans-serif"
      fontWeight="600"
    >
      App Store
    </text>
    <text
      x="10"
      y="26"
      fontSize="22"
      fill="white"
      fontFamily="sans-serif"
    ></text>
  </svg>
);

const GooglePlayIcon = () => (
  <svg viewBox="0 0 130 40" className="h-8 w-auto" fill="none">
    <rect
      width="130"
      height="40"
      rx="6"
      fill="#1a1a1a"
      stroke="#444"
      strokeWidth="1"
    />
    <text x="36" y="14" fontSize="8" fill="#aaa" fontFamily="sans-serif">
      ДОСТУПНО В
    </text>
    <text
      x="36"
      y="28"
      fontSize="13"
      fill="white"
      fontFamily="sans-serif"
      fontWeight="600"
    >
      Google Play
    </text>
    <text x="10" y="26" fontSize="18" fill="white" fontFamily="sans-serif">
      ▶
    </text>
  </svg>
);

const QR_PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
  <rect width="160" height="160" fill="white"/>
  <rect x="10" y="10" width="50" height="50" fill="none" stroke="black" stroke-width="8"/>
  <rect x="22" y="22" width="26" height="26" fill="black"/>
  <rect x="100" y="10" width="50" height="50" fill="none" stroke="black" stroke-width="8"/>
  <rect x="112" y="22" width="26" height="26" fill="black"/>
  <rect x="10" y="100" width="50" height="50" fill="none" stroke="black" stroke-width="8"/>
  <rect x="22" y="112" width="26" height="26" fill="black"/>
  <rect x="72" y="10" width="16" height="16" fill="black"/>
  <rect x="72" y="32" width="16" height="16" fill="black"/>
  <rect x="72" y="54" width="16" height="16" fill="black"/>
  <rect x="72" y="72" width="16" height="16" fill="black"/>
  <rect x="100" y="72" width="16" height="16" fill="black"/>
  <rect x="120" y="72" width="16" height="16" fill="black"/>
  <rect x="140" y="72" width="16" height="16" fill="black"/>
  <rect x="100" y="90" width="16" height="16" fill="black"/>
  <rect x="100" y="110" width="36" height="16" fill="black"/>
  <rect x="140" y="90" width="16" height="56" fill="black"/>
  <rect x="10" y="72" width="16" height="16" fill="black"/>
  <rect x="30" y="72" width="16" height="16" fill="black"/>
  <rect x="50" y="72" width="16" height="16" fill="black"/>
</svg>`);

export default function Footer() {
  return (
    <footer className="bg-[#1e1e24] text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Сервис</h3>
            <ul className="space-y-3">
              {[
                "Продавайте на alif shop!",
                "Рассрочка в Исламе",
                "Возвраты",
                "Время намаза",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-4">
              Документы
            </h3>
            <ul className="space-y-3">
              {["Общие условия продажи", "Устав", "Свидетельство"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-4">Помощь</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="tel:+998555121212"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +998 555 12 12 12
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-4">
              Подписывайтесь
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-200"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-200"
              >
                <TelegramIcon />
              </a>
            </div>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col items-start lg:items-end">
            <div className="bg-white rounded-xl p-3 mb-3 shadow-lg">
              <img
                src={QR_PLACEHOLDER}
                alt="QR Code"
                className="w-36 h-36 object-contain"
              />
            </div>
            <div className="flex gap-2">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <AppStoreIcon />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <GooglePlayIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-5 flex items-center justify-between">
          <p className="text-sm text-gray-500">2026 © alifshop.uz</p>
        </div>
      </div>

      <div className="fixed bottom-5 right-5 z-50">
        <button className="bg-[#f5c842] text-black text-sm font-medium px-4 py-2.5 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-200 flex items-center gap-2">
          <span className="text-lg">💬</span>
          Murojaat uchun / Для обращений
        </button>
      </div>
    </footer>
  );
}
