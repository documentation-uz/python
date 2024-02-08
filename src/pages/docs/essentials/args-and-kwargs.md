# *args and **kwargs

## *args

Masalan 2ta sonning yig'indisini topadigan funksiya tuzdingiz. Birozdan keyin
3ta sonning yig'indisini topadigan funksiya ham kerak bo'lib qoldi. Hozirgi
bilimingiz bo'yicha 3ta sonning yig'indisini topish uchun yangi funksiya
yozasiz.

Bundan ko'ra o'zgaruvchilar soni istalgan bo'lganda ham ularning yig'indisini
hisoblaydigan funksiya yozish mumkin. Xoh 2ta, xoh 3ta bu funksiya ularning
yig'indisini hisoblab, natijani sizga qaytaradi.

Buning uchun `*args` dan foydalanamiz.

```python {1}
def sum_of_numbers(*args):
    s = 0
    for i in args:
        s += i
    return s
    
summa = sum_of_numbers(1, 4, 7, 12, 45, 122, 67)

print(summa)
```

Funksiyada `*args` deb yozilganda `args` argumenti funksiyaga berilgan barcha
argumentlarni `tuple` qilib o'z ichiga oladi. Natijada biz tupleni aylantirib,
umumiy yig'indini hisoblashimiz mumkin.

```text
258
```

## **kwargs

Agar argumentlar kalit so'zli variantda berilgan bo'lsa, `**kwargs` orqali
barcha qiymatlar kwargs o'zgaruvchisiga yig'ib olinadi va uning toifasi
`dict` bo'ladi.

```python {1}
def sum_of_numbers(**kwargs):
    s = 0
    for i in kwargs.values():
        s += i
    return s

summa = sum_of_numbers(a=1, b=4, c=7, d=12, e=45, f=122, g=67)

print(summa)
```

## *args va **kwargs birgalikda

```python {1}
def sum_of_numbers(*args, **kwargs):
    s = 0
    for i in list(args) + list(kwargs.values()):
        s += i
    return s

summa = sum_of_numbers(5, 3, 45, a=12, b=43, c=75, d=121)

print(summa)
```

Bu yerda faqat bitta talab bor. Funksiyada birinchi `*args`, keyin `**kwargs`
yozilgani uchun funksiyaga argumentlarni berayotganimizda ham avval oddiy
qiymatlarni, keyin esa kalit so'zli qiymatlarni berish kerak. Aralash bo'lishi
mumkin emas.
