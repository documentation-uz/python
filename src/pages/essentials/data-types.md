# Data types

Dasturlash tillarida ma'lumotlar bir necha turlarga bo'linib, ular ustida turli
xil amallar bajariladi.

Masalan, `5`, `12`, `90` lar butun sonlar, `4.5`, `8.97`, `0.123` kasr sonlar va boshqalar.

Ma'lumotlarni bir necha turlarga ularning ko'rinishi, matematik xossasi va boshqa
faktorlariga qarab ajratamiz.

Pythonda ma'lumotlar `int`, `float`, `str`, `bool`, `list`, `tuple` va boshqa bir necha turlarga
bo'linadi.

## `int` ma'lumot turi

`int` toifasiga barcha butun sonlar kiradi. Masalan,

```python
a = 456

b = -97
```

`456` butun son bo'lgani uchun uning toifasi `int` bo'ladi. `456` soni `a` o'zgaruvchisining qiymati
bo'lgani uchun `a` o'zgaruvchisining toifasi ham `int` bo'ladi. Xuddi shunday,
`-97` uchun ham `b` o'zgaruvchisining toifasi `int` bo'ladi.

## `float` ma'lumot turi

`float` toifasiga barcha kasr sonlar kiradi. (Oddiy qilib aytganda, nuqta ishtirok etgan sonlar)

```python
a = -6.7

b = 9.0
```

Bu yerda `a` va `b` o'zgaruvchilarining toifalari `float` bo'ladi.

`9.0` sonining kasr qismi bo'lmasa ham pythonda bu son `float` hisoblanadi.

## `str` ma'lumot turi

`str` toifasiga matnli ma'lumotlar kiradi. (Oddiy qilib aytganda qo'shtirnoq ichida yozilgan ma'lumotlar)

```python
a = "Hello"

b = 'Asliddin'

c = "12"
```

Bu yerda `a`, `b` va `c` o'zgaruvchilarining toifalari `str` bo'ladi.

`12` soni aslida `int` toifasiga kirishi kerak. Lekin bu yerda qo'shtirnoq
ichiga olingani uchun python `"12"` ni `str` deb hisoblaydi.

`str` so'zi `string` so'zining qisqartmasi.

## `bool` ma'lumot turi

`bool` toifasiga `True` va `False` qiymatlari kiradi.

```python
a = True

b = False
```

`bool` toifasiga batafasil keyingi darslarda to'xtalamiz.

## O'zgaruvchining toifasini qanday aniqlash mumkin?

O'zgaruvchining toifasini, ya'ni qaysi ma'lumot turiga kirishini `type` funksiyasi orqali
aniqlash mumkin.

```python {3}
a = "New"

print(type(a))
```

Natija

```text
<class 'str'>
```

Bundan `a` o'zgaruvchisining toifasi `str` ekanligi kelib chiqadi.
