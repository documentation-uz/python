# String

Qisqartmasi `str` bo'lgan `string` bilan oldingi darslarda tanishganmiz.

Bu darsda `str` toifasiga batafsilroq to'xtalamiz.

## Bir necha qatorli matn

Bir nechta qatordan iborat matnni quyidagicha yozish mumkin.

```python
a = """
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.
"""
```

yoki

```python
a = '''
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.
'''
```

## Matndan belgini olish

Matndan biror bir belgini olish uchun shu belgining indeksiga
murojaat qilish kerak.

```python {3}
a = "Salom"

print(a[2])
```

Natija

```text
l
```

Nega natijada `l` belgisi chiqdi? Sababi pythonda sanoq 1dan emas,
balki 0dan boshlanadi.

Agar bizga birinchi belgi kerak bo'lsa, pythonda bu nolinchi
indeksdagi belgiga to'g'ri keladi.

Birinchi belgini olish uchun nolinchi indeksdagi belgini
olishimiz kerak bo'lsa, oxirgi belgini olish uchun -1 indeksda
turgan belgini olishimiz kerak.

```python {3}
b = "Goodbye"

print(b[-1])
```

Natija

```text
e
```

:::tip Yodda tuting
Belgini olishda manfiy sonlardan foydalansak, sanoq orqadan boshlanadi.
:::

Agar `-2` indeksdagi belgini olsak, bu oxiridan bitta oldingi belgi bo'ladi.

```python {3}
b = "Goodbye"

print(b[-2])
```

Natija

```text
y
```

## Bir necha belgilarni olish

Oldingi misollarda faqat bitta belgini olgan bo'lsak, bir nechta
belgilarni qanday olishni ko'rib chiqamiz.

```python {3}
a = "GoodBye"

print(a[1:4])
```

1-indeksdan 4-indeksgacha bo'lgan belgilarni oladi, lekin oxirgi
4-indeksdagi belgi kirmaydi. Natija

```text
ood
```

Agar satrning boshidan biror indeksgacha belgilarni olish
kerak bo'lsa, quyidagicha yozamiz:

```python {3}
a = "GoodBye"

print(a[:4])
```

1-indeks yozilmasa, boshidan boshlab olish kerakligini anglatadi.

Natija

```text
Good
```

Agar satrning biror indeksidan oxirigacha olish kerak bo'lsa,
bu holat quyidagicha bo'ladi:

```python {3}
a = "GoodBye"

print(a[4:])
```

Agar tugash indeksi yozilmasa, 4-indeksdan oxirigacha bo'lgan belgilarni oladi.
Natija

```text
Bye
```

## Belgilarni qadam tashlab olish

Satrdan belgilarni qadam tashlab olishimiz mumkin.

Masalan:

```python {3}
a = "mashaqqat"

print(a[1:8:2])
```

Yuqoridagi kodda a[1:4] deganda 1-, 2-, 3-indekdagi belgilarni
olayotgan edi, ya'ni 1ta qadam tashlab belgilarni olayotgan edi.

Bu misolda esa 1-indeksdan 8-indeksgacha bo'lgan belgilarni 2ta
qadam tashlab, ya'ni 1-, 3-, 5-, 7-indeksdagi belgilarni oladi.
Natija

```text
msaq
```
