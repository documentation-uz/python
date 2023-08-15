# Class

Obyektga yo'naltirilgan dasturlashda bevosita obyektlar bilan ishlaymiz.
Obyektlar yaratish uchun avval klass ochishimiz kerak.

## Birinchi klassimiz

```python
class Person:
    pass
```

Yuqorida `Person` klassi ochilgan. Klass `class` kalit so'zi bilan ochiladi.

Endi shu klass orqali obyekt yaratamiz.

```python {4}
class Person:
    pass
    
p = Person()
```

`p` nomli obyekt yaratildi. Lekin biz bu obyekt ustida hech qanday amal
bajara olmaymiz, chunki klassning ichi bo'sh.

## `__init__` metodi

Har qanday klass orqali obyekt yaratilganda `__init__` metodi ishga tushadi.

:::tip Yodda tuting
Klass ichidagi funksiyalar metod deyiladi.
:::

```python {2-4}
class Person:
    def __init__(self, fn, ln):
        self.first_name = fn
        self.last_name = ln

p = Person("Asliddin", "Maxmudov")

print(p.first_name)
print(p.last_name)
```

`__init__` metodi ichida `first_name` va `last_name` parameterlari yaratildi.

Ularning qiymati obyekt yaratilganda klassga berilgan qiymatlar bo'ladi.

```python
p = Person("Asliddin", "Maxmudov")
```

`self` joriy obyektni bildiradi. Hozirgi holatda `self` `p` obyektiga teng.

Shunda `p` obyektining `first_name`, `last_name` parametrlari `Asliddin`,
`Maxmudov` deb belgilandi.

Agar biz `p.fist_name` ga murojaat qilsak, `Asliddin` qaytadi.
