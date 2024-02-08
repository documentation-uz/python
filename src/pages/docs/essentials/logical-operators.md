# Logical operators

## `bool` ma'lumot turi

`bool` toifasiga faqat 2ta qiymat kiradi: `True` va `False`.

`True` - rost

`False` - yolg'on

Agar mulohaza rost bo'lsa, javob `True` bo'ladi. Masalan, 7 soni 5 sonidan katta. Bu mulohaza rost, chunki haqiqatdan
7 soni 5 sonidan katta. Demak javob `True` bo'ladi.

Buni dasturlashda quyidagicha yozamiz:

```python
print(7 > 5)
```

Natija

```text
True
```

Agar mulohaza yolg'on bo'lsa, javob `False` bo'ladi. Masalan,
12 soni 100 sonidan katta. Bu mulohaza yolg'on, demak javob `False` bo'ladi.

```python
print(12 > 100)
```

Natija

```text
False
```

## O'zgaruvchilar bilan ishlash

```python {4}
a = 45
b = 89

print(a < b)
```

Bu holatda `a` o'zgaruvchisining qiymati `b` o'zgaruvchisining qiymatidan kichik
degan mulohaza bo'lmoqda. `a` va `b` o'zgaruvchilari o'rniga ularning qiymatlarini
qo'yib tekshirsak, mulohaza rost bo'ladi. Demak natija

```text
True
```

Yana bir misol

```python {1}
a = 34 > 23

print(a)
```

`a` o'zgaruvchisining qiymati mulohazaning natijasiga teng bo'ladi. `34` soni `23` sonidan
katta bo'lgani uchun natija

```text
True
```

## `not` mantiqiy operatori

`not` operatori `True` qiymatni `False`ga va aksincha, `False` qiymatni `True`ga
o'zgartiradi.

```python {3}
a = True

print(not a)
```

Natija

```text
False
```

## `and` mantiqiy operatori

`and` mantiqiy ko'paytirish operatori bo'lib, mantiqiy elementlar ustida
amal bajarish uchun foydalaniladi.

:::tip Eslatma
`True` va `False` qiymatlari mantiqiy elementlar deb ham ataladi.

Qiymati mantiqiy element bo'lgan o'zgaruvchilar mantiqiy o'zgaruvchilar deyiladi.
:::

Mantiqiy ko'paytirish jadvali:

|   a   |   b   | a and b |
|:-----:|:-----:|:-------:|
| False | False |  False  |
| True  | False |  False  |
| False | True  |  False  |
| True  | True  |  True   |

Mantiqiy ko'paytirishga misol:

```python {4}
a = True
b = False

print(a and b)
```

Jadvalga ko'ra natija

```text
False
```

## `or` mantiqiy qo'shish

`or` mantiqiy qo'shish operatori bo'lib, mantiqiy elementlar ustida
amal bajarish uchun foydalaniladi.

Mantiqiy qo'shish jadvali:

|   a   |   b   | a or b |
|:-----:|:-----:|:------:|
| False | False | False  |
| True  | False |  True  |
| False | True  |  True  |
| True  | True  |  True  |

Mantiqiy qo'shishga misol:

```python {4}
a = True
b = True

print(a or b)
```

Jadvalga ko'ra natija

```text
True
```

:::tip Yodda tuting
`and`, `or`, `not` mantiqiy operatorlaridan birinchi `not` inkor amali, keyin `and`
ko'paytirish amali va oxirida `or` mantiqiy qo'shish amali bajariladi.
:::
