# Input

Biror amal bajarish uchun foydalanuvchi tomonidan ma'lumot kiritish uchun
`input` funksiyasidan foydalanmiz.

```python {1}
a = input()

print("Siz kiritgan ma'lumot:", a)
```

Dasturni ishga tushirsak, bizdan ma'lumot kiritish so'raladi.
Masalan, `olma` deb kiritsak, natija

```text
Siz kiritgan ma'lumot: olma
```

`a` o'zgaruvchisining qiymati foydalanuvchi tomonidan kiritilgan ma'lumotga teng bo'ladi.

Dasturni ishga tushirganimizda bizdan aynan qanday qiymat kiritish kerakligi haqida
ma'lumot chiqarish uchun quyidagicha yozishimiz mumkin:

```python {1,2}
ism = input("Ismingizni kiriting: ")
familiya = input("Familiyangizni kiriting: ")

print("Salom", ism, familiya)
```

Yuqoridagidan farqi endi bu dasturni ishga tushirsak, dastur foydalanuvchidan
qanday ma'lumot kiritishni so'raydi va bu albatta qulaylik beradi.

Kodni ishlatganda `Usmon`, `Ergashev` ma'lumotlarini kiritsak, natija

```text
Salom Usmon Ergashev
```

`input` orqali ma'lumot kiritsak, o'zgaruvchining toifasi `str` bo'ladi.

```python
a = input("a = ")

print(type(a))
```

Natija

```text
<class 'str'>
```

Agar `input` ishtirokida biz 2ta sonni qo'shadigan dastur tuzsak, u quyidagicha bo'ladi:

```python
a = input("a = ")
b = input("b = ")

a = int(a)
b = int(b)

print(a + b)
```

`a` va `b` o'zgaruvchilariga foydalanuvchilar tomonidan qiymat kiritilganda dastlab
ularning toifasi `str` bo'ladi. Shuning uchun `int` toifasiga o'tkazib, keyin ularning
yig'indisini hisoblaymiz.
