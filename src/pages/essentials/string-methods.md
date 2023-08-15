# String methods

`str` bilan ishlashni osonlashtirish uchun uning asosiy metodlari tanishib chiqamiz.

## `capitalize` metodi

Satrning bosh harfini katta harfga o'tkazish uchun foydalaniladi.

```python {3}
a = "tulki"

a = a.capitalize()

print(a)
```

Natija

```text
Tulki
```


**For more information:**

[**▶︎ Watch free lesson on YouTube**](https://youtube.com)

## `upper` metodi

Satrdagi barcha harflarni katta harfga o'tkazish uchun foydalaniladi.

```python {3}
a = "quyon"

a = a.upper()

print(a)
```

Natija

```text
QUYON
```

## `lower` metodi

Satrdagi barcha harflarni kichik harfga o'tkazish uchun foydalaniladi.

```python {3}
a = "Asliddin"

a = a.lower()

print(a)
```

Natija

```text
asliddin
```

## `startswith` metodi

Satr ma'lum bir belgi yoki belgilar bilan boshlanganini tekshiradi va `bool`
toifasidagi qiymat qaytaradi.

```python {3,5}
a = "Salom"

b = a.startswith("Sa")

c = a.startswith("lo")

print(b)

print(c)
```

`b` o'zgaruvchisining qiymati `True` bo'ladi, chunki satr haqiqatdan `Sa` bilan boshlangan.
`c` o'zgaruvchisining qiymati `False` bo'ladi, chunki satr `lo` bilan boshlanmagan.

Natija

```python
True
False
```

