# Magic methods

Obyektga biror funksiya yoki operator bilan murojaat qilinganda qanday amal
bajarilishini belgilash uchun magic metodlar ishlatiladi.

```python
class MyInteger:
    def __init__(self, value):
        self.value = value
        
    def __len__(self):
        return len(str(self.value))
        
a = MyInteger(123456789)

length = len(a)

print(length)
```

Yuqoridagi butun sonlarga oid MyInteger klassi ochilgan. Qachonki MyInteger
klassi orqali ochilgan obyektga `len()` funksiyasi orqali murojaat qilinganda
sonni uzunligini qaytaradigan magic metod yozilgan.

Natija

```text
9
```

Bunday magic methodlar ko'p.

Masalan, obyektga `str()` bilan murojaat qilinganda `__str__` magic metodi,
yoki bo'lmasam, `int()` bilan murojaat qilinganda `__int__` magic metodi
ishga tushadi.

Magic metodlarning to'liq ro'yxati bilan tanishib chiqish uchun [bu yerga](../../api-reference/magic-methods/index.md)
bosing.
