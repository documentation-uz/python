# Variables

## O'zgaruvchilarni e'lon qilish

Quyidagi kodda `a` o'zgaruvchisi e'lon qilingan va uning qiymati `12` etib belgilangan.

```python
a = 12
```

::: tip Yodda tuting
Barobardan chap tomonda o'zgaruvchining nomi, o'ng tomonda esa o'zgaruvchining qiymati turadi.
:::

Bizning holatda `a` o'zgaruvchining nomi, `12` esa o'zgaruvchining qiymati deyiladi.

## O'zgaruvchining qiymatini ekranga chiqarish

O'zgaruvchining qiymatini ekranga chiqarish uchun `print` funksiyasiga murojaat qilamiz.

```python {3}
b = 12

print(b)
```

Natija
```text
12
```

`print` funksiyasi ichiga o'zgaruvchini yozib, dasturni ishga tushirsak, 
ekranga o'zgaruvchining qiymati chiqadi.

## O'zgaruvchilar ustida arifmetik amallar

```python
c = 45

print(c * 2) # 45 * 2 ni hisoblab, ekranga 90 sonini chiqaradi
```

Dastur ishga tushganda `c` o'rniga `45` qo'yilib, `45 * 2` hisoblanadi. 

Natija esa
```text
90
```

Boshqa bir misol

```python {3}
a = 12

b = a + 20

print(b)
```

Bu holatda `b` o'zgaruvchisining qiymati `a` o'zgaruvchisining qiymatiga `20` sonini qo'shganga teng bo'ladi.

Shuning uchun ekranga chiqadigan natija

```text
32
```

## O'zgaruvchining qiymatini orttirish

```python {3}
a = 12

a = a + 3

print(a)
```

Bu yerda `a` o'zgaruvchisining yangi qiymati `a` o'zgaruvchisining avvalgi qiymatiga `3` sonini qo'shganga teng bo'ladi.

Qisqa qilib aytganda bu dastur `a` o'zgaruvchisining qiymatini `3`taga orttiradi.

Shuning uchun natija

```text
15
```

## O'zgaruvchini to'g'ri e'lon qilish

O'zgaruvchini nomlash quyidagi talablar bajarilishi kerak:
* katta, kichik lotin harflaridan, _ belgisidan hamda sonlardan iborat bo'lishi kerak
```python
a = 4

apple = "Olma"

myName = "Asliddin"

test1 = "Misol"

last_name = "Maxmudov"
```
* son bilan boshlanmasligi kerak
```python
1a = 12 # o'zgaruvchini bunday e'lon qilish xato bo'ladi
```

:::warning E'tibor bering
a bilan A bir xil emas. Ular umuman boshqa-boshqa o'zgaruvchilar hisoblanadi.
:::

## Bir nechta o'zgaruvchini e'lon qilish

```python {1}
a, b, c = 1, 2, 3

print(a)
print(b)
print(c)
```

Bu yerda mos ravishda `a` ning qiymati `1`, `b` ning qiymati `2` va `c` ning qiymati `3` bo'ladi.

Bu bir qatorda bir nechta o'zgaruvchilarni e'lon qilish bo'ladi.

Ekranga chiqadigan natija

```text
1
2
3
```

Keyingi holat

```python {1}
a = b = c = 5

print(a)
print(b)
print(c)
```

Bu holatda esa `a`, `b`, `c` larning barchasining qiymatlari `5` ga teng bo'ladi.

Natija
```text
5
5
5
```
