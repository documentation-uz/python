# List

Bir o'zgaruvchida bir nechta qiymatlarni saqlash uchun `list`dan
foydalaniladi.

Masalan

```python
a = [1, 4, 8, 2, 5, 8]
```

Bu yerda `a` o'zgaruvchisida bir nechta qiymatlarni saqlashga
misol keltirilgan.

`[]` ichidagi vergul bilan ajratilgan har bir son `list elementlari` deyiladi.

## List uzunligi

List uzunligi deganda list elementlarining soni tushuniladi.

List uzunligini len funksiyasi orqali topamiz.

```python {3}
a = ['apple', 1, True, 45, 'yellow']

print(len(a))
```

Natija

```text
5
```

Bu degani list 5ta elementdan tashkil topgan.

## Ma'lum bir indeksdagi elementni olish

```python {3}
b = [78, 90, 65, 34, 56]

print(b[2])
```

Bu kod ishga tushganda ekranga 2-indeksdagi element chiqadi. Pythonda sanoq
noldan boshlanadi. Demak natija

```text
65
```

## Bir nechta elementlarni olish

```python {3}
c = ['apple', 'banana', 'cherry', 'mango']

print(c[1:3])
```

Xuddi stringdagi kabi bu yerda ham 1-indeksdan 3-indeksgacha bo'lgan
elementlarni oladi, lekin oxirgi 3-indeksning o'zi kirmaydi. Natija

```text
['banana', 'cherry']
```

Agar boshlanish indeksi yozilmasa, boshidan boshlab oladi. Agar tugash indeksi
yozilmasa, oxirigacha oladi.

```python {3,4}
a = [1, 2, 3, 4, 5, 6, 7]

print(a[:4]) # boshidan 4-indeksgacha bo'lgan elementlarni oladi, faqat 4-indeksdagi elementning o'zi kirmaydi
print(a[6:]) # 6-indeksdan oxirigacha bo'lgan elementlarni oladi
```

## Qadam tashlab olish

```python {3}
m = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

print(m[1:9:3])
```

Bu kodda avval 1-indeksdagi elementni, keyin 3ta qadam tashlab 4-indeksdagi elementni va oxirida
7-indeksdagi elementni oladi. Natija

```text
['a', 'd', 'g']
```

## Listlarni birlashtirish

Listlarni birlashtirish uchun shunchaki ularni qo'shishning o'zi kifoya.

```python {4}
a = [1, 2, 3]
b = [4, 5, 6, 7, 8]

print(a + b)
```

Natija

```text
[1, 2, 3, 4, 5, 6, 7, 8]
```

## Element mavjudligini tekshirish

Masalan biror bir son listda bor yoki yo'qligini aniqlash uchun quyidagicha yozamiz:

```python {3}
a = [34, 78, 90, 65, 43]

print(56 in a)
```

Agar `56` soni listda mavjud bo'lsa, ekranga `True` qiymati chiqadi, aks holda `False`
qiymati chiqadi.

## Elementlarning qiymatini almashtirish

```python {3}
a = [1, 2, 3, 4, 5, 6, 7, 8]

a[5] = 90

print(a)
```

Bu kodda `a` o'zgaruvchisining 5-indeksdagi qiymatini `90` soniga o'zagartiradi.

Natija

```text
[1, 2, 3, 4, 5, 90, 7, 8]
```

Bir nechta qiymatlarni o'zgartirmoqchi bo'lsak, quyidagicha yozamiz:

```python {3}
a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

a[1:5] = [100, 99, 98, 97]

print(a)
```

Natija

```text
[10, 100, 99, 98, 97, 5, 4, 3, 2, 1]
```
