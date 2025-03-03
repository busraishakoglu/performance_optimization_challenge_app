# Kurulum
npm install

## Başlatma
npm start

# Geliştirme Özeti
Performans geliştirme olarak, useCallback, React.memo kullandım. Gereksiz render tekrarlarını ortadan kaldırdım. UseCallback ile increment butonuna tıklandıkça render olayını ortadan kaldırdım. Performans açısından optimize ettim. Virtulization list ile listenin sadece görünür kısmının çekilerek yüklenmesini sağlar, böylece tüm liste yerine görünen kısmının yüklenerek optimize ettim.

## Kullanılan Özellikler
1.useCallback
2.React.memo
3.Virtualization List

-----------------------------------------------------------------------------------------------------------

# Installation
npm install

# Starting
npm start

# Development Summary
For performance improvements, I used useCallback and React.memo to eliminate unnecessary re-renders. With useCallback, I prevented the render event every time the increment button was clicked, optimizing performance. I also used virtualization for the list, ensuring that only the visible portion of the list is loaded, thus optimizing the loading by fetching only the visible part instead of the entire list.

## Features Used
1. useCallback
2. React.memo
3. Virtualization List