"use client";

import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SignupModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Оставляем только цифры
  function onlyDigits(value: string) {
    return value.replace(/\D/g, "");
  }

  // Форматируем при выводе
  function formatPhone(d: string) {
    if (d.length === 0) return "";
    let res = "+7";

    if (d.length >= 2) res += " " + d.slice(1, 4);
    if (d.length >= 5) res += " " + d.slice(4, 7);
    if (d.length >= 8) res += " " + d.slice(7, 9);
    if (d.length >= 10) res += " " + d.slice(9, 11);

    return res;
  }

  // Проверка корректности
  function isPhoneValid(digits: string) {
    return digits.length === 11 && digits.startsWith("7");
  }

  // Защита имени от XSS и мусора
  function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
    const cleaned = e.target.value
      .replace(/[^a-zA-Zа-яА-ЯёЁ\- ]/g, "") // только буквы, пробел, дефис
      .slice(0, 40); // ограничение длины
    setName(cleaned);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const digits = onlyDigits(phone);

    if (!isPhoneValid(digits)) {
      alert("Введите корректный номер телефона полностью.");
      return;
    }

    if (name.length < 2) {
      alert("Введите корректное имя.");
      return;
    }

    if (!agree) {
      alert("Необходимо согласиться с политикой конфиденциальности.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/sendRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone: formatPhone(digits) }),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
    } else {
      alert("Ошибка отправки. Попробуйте позже.");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative">
        {/* Закрытие */}
        <button
          className="absolute top-3 right-3 text-gray-700 text-xl"
          onClick={onClose}
        >
          ×
        </button>

        {!sent ? (
          <>
            <h2 className="text-2xl font-bold mb-2">Записаться в наш центр</h2>
            <p className="text-gray-600 mb-6">
              Оставьте контактные данные — мы перезвоним вам в ближайшее время.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Имя */}
              <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={handleNameInput}
                className="w-full border rounded-lg p-3"
                required
              />

              {/* Телефон */}
              <input
                type="tel"
                placeholder="+7 900 000 00 00"
                value={formatPhone(phone)}
                onChange={(e) => setPhone(onlyDigits(e.target.value))}
                className="w-full border rounded-lg p-3"
                required
              />

              {/* Согласие */}
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />
                Я согласен с политикой конфиденциальности
              </label>

              {/* Кнопка */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold"
              >
                {loading ? "Отправка..." : "Отправить"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold mb-2">Спасибо!</h2>
            <p className="text-gray-600 mb-6">Мы скоро вам перезвоним.</p>
            <button
              className="bg-orange-600 text-white px-6 py-3 rounded-lg"
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
