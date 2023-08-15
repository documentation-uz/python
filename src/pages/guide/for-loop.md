# For loop

`for` operatori biror qonuniyat bo'yicha bajariladigan, takrorlanadigan
amallarni bajarish uchun foydalaniladi.

## Sodda ko'rinishi

Quyidagi misolda listni qanday aylantirish ko'rsatilgan.

```python {3}
my_list = [1, 5, 6, 23, 12, 56]

for i in my_list:
    print(i)
```

Bu yerda `for` operatori ichidagi `print()` funksiyasini 6 marta ishlaydi,
chunki listning uzunligi 6ga teng.

`i` o'zgaruvchisining qiymati dastlab listning 0-indeksdagi elementiga teng
bo'ladi. `print()` funksiyasi ishlaydi va ekranga `i` o'zgaruvchisining
qiymati chiqadi. Keyin esa `i` o'zgaruvchisining qiymati 1-indeksdagi
elementga teng bo'ladi va yana `i` o'zgaruvchisining keyingi qiymati ham ekranga
chiqadi. Eng oxirida listning oxirgi elementi ekranga chiqadi va for operatori
o'z ishini tugadi. Natija

```text
1
5
6
23
12
56
```

## range funksiyasi

```python {1}
for i in range(10):
    print(i)
```

`range()` funksiyasi xuddi `list`ga o'xshaydi va butun sonlarni generatsiya qiladi.
`list` orqali butun sonlarni bittalab yozib chiqish o'rniga `range()` funksiyasidan
foydalangan ancha qulay.

Bu yerda `range(10)` funksiyasi `0`, `1`, `2`, ..., `9` sonlarini generatsiya qiladi.

Natija

```text
0
1
2
3
4
5
6
7
8
9
```

Agar `range()` funksiyasi ichiga `1ta` son yozilgan bo'lsa, 0 dan boshlab o'sha
songacha bo'lgan sonlarni generatsiya qiladi (oxirgi son kirmaydi).

Agar `range()` funksiyasi ichiga `2ta` son yozilgan bo'lsa, 1-sondan boshlab
2-songacha sonlarni generatsiya qiladi (oxirgi son kirmaydi).

`range(10, 20)` funksiyasi `10`, `11`, `12`, ..., `19` sonlarini generatsiya
qiladi.

Agar `range()` funksiyasi ichiga `3ta` son yozilgan bo'lsa, 1-sondan boshlab
2-songacha 3-son miqdorida qadam tashlab sonlarni generatsiya qiladi
(oxirgi son kirmaydi).

`range(10, 100, 3)` funksiyasi `10`, `13`, `16`, `19`, ..., `97` sonlarini
generatsiya qiladi.
