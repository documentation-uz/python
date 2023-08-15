# If statement

If shart operatori hisoblanib, biror shart bajarilganda unga mos kelgan
amal bajarilishiga ruxsat berish uchun foydalaniladi.

## Sodda ko'rinishi

```python {5}
a = input("a = ")

a = int(a)

if a > 12:
    print("a o'zgaruvchisining qiymati 12 sonidan katta")
```

Dastur ishga tushganda konsolda `a` o'zgaruvchisiga qiymat kiritiladi.
Agar `a` o'zgaruvchisiga kiritilgan qiymat `a > 12` shartini bajarsa, ya'ni
ifodaning qiymati `True` bo'lsa, `if` shart operatorining ichiga kiradi va
`print()` funksiyasi ishga tushadi. Aks holda `print()` funksiyasi ishlamaydi.

:::tip Yodda tuting
if shart operatoridan keyingi qatorda yoki qatorlarda turgan kod chap tomondan
Tab tashab yozilgani if shart operatoriga tegishli hisoblanadi.
:::

```python {4-6}
b = 23

if b < 12:
    b = b + 1
    print(b)
    print(100)
    
print("Salom")
```

Yuqorida `if` shart operatoriga tegishli kod ajratib ko'rsatilgan.

## Bir necha holat bo'lganda

```python {5,7,9}
a = input("a = ")

a = int(a)

if a > 12:
    print("a o'zgaruvchisining qiymati 12 sonidan katta")
elif a < 12:
    print("a o'zgaruvchisining qiymati 12 sonidan kichik")
elif a == 12:
    print("a o'zgaruvchisining qiymati 12 soniga teng")
```

Faqat birinchi shart yozilganda `if` kalit so'zidan foydalaniladi. Qolgan
shartlar yozilganda `elif` kalit so'zidan foydalaniladi. Agar birorta shart 
bajarilsa, ya'ni ifodaning qiymati `True` chiqsa, undan keyingi shartlar 
ishlamaydi.

## Birorta ham shart bajarilmaganda

Agar birorta ham shart bajarilmasa, else holati ishlaydi.

```python {15,16}
b = input("b = ")

b = int(b)

if b == 16:
    print("Yashirin son 16ga teng")
elif b == 23:
    print("Yashirin son 23ga teng")
elif b == 87:
    print("Yashirin son 87ga teng")
elif b == 46:
    print("Yashirin son 46ga teng")
elif b == 63:
    print("Yashirin son 63ga teng")
else:
    print("Yashirin sonni topa olmadim")
```

Ammo yuqoridagi shartlardan birortasi bajarilib qolsa, `else` holati ham
ishlamaydi.
