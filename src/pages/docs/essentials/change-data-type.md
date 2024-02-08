# Change data type

Ma'lumotlar ustida ishlayotganda ba'zi bir amallarni bajarayotganda ularning 
toifasini o'zgartirishga ehtiyoj tug'iladi. Buni qanday amalga ishirishni quyida
misollar bilan ko'rib chiqamiz.

## `int` toifasiga o'tkazish

`str` toifasidagi ma'lumotni `int` toifasiga o'tkazib ko'ramiz.

```python {3}
a = "19"

a = int(a)

print(type(a))
```

Natija

```text
<class 'int'>
```

Lekin quyidagi ma'lumotni `int` toifasiga o'tkazish noto'g'ri.

```python
a = "Text"

a = int(a)

print(type(a))
```

Gap shundaki, qo'shtirnoq ichida faqat son turgandagina bu 
amalni bajarishimiz mumkin. Qolgan holatlarda xatolik beradi.

## `str` toifasiga o'tkazish

Endi int toifasidagi ma'lumotni str toifasiga o'tkazamiz.

```python {5,7}
a = 34

b = 39

a = str(a)

b = str(b)

print(a + b)
```

Ekranga chiqadigan natija

```text
3439
```

`a` va `b` o'zgaruvchilarining toifasini `str` toifasiga o'tkazganimiz uchun
qo'shish amali sonlar qoidasi bo'yicha emas, balki matnli ma'lumotlarni 
qo'shish qoidasi bo'yicha ishladi.
