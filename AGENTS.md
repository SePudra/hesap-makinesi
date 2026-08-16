# Hesap Makinesi

Basit, bağımlılıksız bir web hesap makinesi. Bu repo Hermes'in Telegram → proje → branch → test akışını doğrulamak için kullanılır.

## Çalıştırma
- Uygulama: `python3 -m http.server 8000`
- Test: `node --test`

## Kurallar
- Yalnızca `hermes/*` branchlerinde çalış; main'e doğrudan yazma veya merge etme.
- Yeni paket ya da framework ekleme; HTML, CSS ve JavaScript'in yerel özelliklerini kullan.
- Küçük, kök nedene yönelik değişiklikler yap.
- Erişilebilirliği ve klavye kullanımını koru.
- Başarılı test çalıştırmadan işi tamamlandı sayma.
- Deploy, publish veya uzak repoya push için kullanıcı onayı al.
