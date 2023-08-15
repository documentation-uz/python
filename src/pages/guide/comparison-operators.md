# Comparison operators

Taqqoslash operatorlari ikkita ma'lumot ustida taqqoslash amalini
bajarish uchun foydalaniladi va bu amalning natijasi `bool` toifasida bo'ladi.

Quyida taqqoslash operatorlari ro'yxati:

`>` - katta

`<` - kichik

`>=` - katta yoki teng

`<=` - kichik yoki teng

`==` - tengmi

```python
a = 12 > 5 # 12 soni 5 sonidan kattaligini tekshiradi

b = 12 < 5 # 12 soni 5 sonidan kattaligini tekshiradi

c = 12 >= 5 # 12 soni 5 sonidan katta yoki tengligini tekshiradi

d = 12 <= 5 # 12 soni 5 sonidan kichik yoki tengligini tekshiradi

e = 12 == 5 # 12 soni 5 soniga tengligini tekshiradi
```

O'zgaruvchilarga olingan ko'rinishi quyidagicha bo'ladi

```python
x = 12
y = 5

a = x > y # x o'zgaruvchisining qiymati y o'zgaruvchisining qiymatidan kattaligini tekshiradi

b = x < y # x o'zgaruvchisining qiymati y o'zgaruvchisining qiymatidan kichikligini tekshiradi

c = x >= y # x o'zgaruvchisining qiymati y o'zgaruvchisining qiymatidan katta yoki tengligini tekshiradi

d = x <= y # x o'zgaruvchisining qiymati y o'zgaruvchisining qiymatidan kichik yoki tengligini tekshiradi

e = x == y # x o'zgaruvchisining qiymati y o'zgaruvchisining qiymatiga tengligini tekshiradi
```