# Function

Ko'p yerda takrorlanadigan amallarni shablonga olib qo'yish uchun yoki yuqori
hajmdagi kodni soddalashtirish uchun funksiyalardan foydalaniladi.

## Eng sodda funksiya

```python
def hello():
    print("Salom")
```

Yuqorida salom beradigan funksiya yozilgan. Funksiya `def` kalit so'zi bilan
yoziladi. Ammo dasturni ishga tushirganimizda ekranga hech qanday yozuv
chiqmaydi. Sababi biz funksiyani faqat e'lon qildik, lekin u ishlashi uchun
uni chaqirish kerak.

Funksiyani chaqirish juda ham oddiy.

```python {4}
def hello():
    print("Salom")
    
hello()
```

Ana endi dasturni ishga tushirsak, ekranga

```text
Salom
```

yozuvi chiqadi.

## Parametrli funksiya

```python {1}
def hello(first_name):
    print("Salom", first_name)
    
hello("Asliddin")
```

Dasturimizda funksiyadagi `first_name` o'zgaruvchisining qiymati `Asliddin`
bo'ladi va ekranga chiqadigan natija

```text
Salom Asliddin
```

Parametrlar bir nechta bo'lishi ham mumkin.

```python {1}
def hello(first_name, last_name):
    print("Salom", full_name, last_name)
    
hello("Asliddin", "Maxmudov")
```

Bu yerda esa mos ravishda `first_name` o'zgaruvchisining qiymati `Asliddin`,
`last_name` o'zgaruvchisining qiymati `Maxmudov` bo'ladi va natija

```text
Salom Asliddin Maxmudov
```

## Qiymat qaytaradigan funksiya

Yuqoridagi misollarda keltirilgan funksiyalar biror-bir amal bajaradi, lekin
hech qanday qiymat qaytarmayapti.

Masalan kvadratning tomonidan kelib chiqib, uning perimetrini hisoblab
qaytaradigan funksiya yozamiz.

Funksiyada qiymat qaytarish uchun `return` kalit so'zidan foydalaniladi.

```python {2}
def perimeter(a):
    return a * 4
    
p = perimeter(3)

print("Perimeter:", p)
```

`p` o'zgaruvchisining qiymati `perimeter()` funksiyasi qaytargan qiymatga teng
bo'ladi.

Natija

```text
12
```
