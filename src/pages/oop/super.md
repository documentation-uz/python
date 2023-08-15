# super()

Biror bir klassdan nasl olganda uning ba'zi metodlarini oldingisini saqlab qolgan holatda o'zgartirish kerak bo'ladi.

```python
class Animal:
    def __init__(self, n, fc, fl):
        self.name = n
        self.feet_count = fc
        self.fly = fl

class Bird(Animal):
    def __init__(self, w):
        self.wild = w

    def info(self):
        return f"Bu qushning nomi {self.name}."

bird1 = Bird("Burgut", 2, True)

print(bird1.info())
```

Agar biz `Bird` klassiga yangi `wild` parametrini qo'shsak, `Animal` klassidagi `name`, `feet_count`, `fly` parametrlari
ishlamaydi. Bu xatolikni tuzatish uchun kodni quyidagicha o'zgartiramiz.

```python {8-10}
class Animal:
    def __init__(self, n, fc, fl):
        self.name = n
        self.feet_count = fc
        self.fly = fl

class Bird(Animal):
    def __init__(self, n, fc, fl, w):
        Animal.__init__(self, n, fc, fl)
        self.wild = w

    def info(self):
        return f"Bu qushning nomi {self.name}."

bird1 = Bird("Burgut", 2, True, True)

print(bird1.info())
```

Ana endi `Animal` klassining `__init__` metodidagi xususiyatlarni saqlab qolib, qo'shimcha parametr qo'shildi.
Lekin bu universal yechim emas. Sababi ota klassning nomi boshqacha bo'lganda kod o'zgarishiga to'g'ri keladi.
Kodni quyidagiga o'zgartirsak, ota klassning nomi qanday bo'lishidan qat'iy nazar uning xususiyatlarini o'zlashtiradi.

```python {9}
class Animal:
    def __init__(self, n, fc, fl):
        self.name = n
        self.feet_count = fc
        self.fly = fl

class Bird(Animal):
    def __init__(self, n, fc, fl, w):
        super().__init__(n, fc, fl)
        self.wild = w

    def info(self):
        return f"Bu qushning nomi {self.name}."

bird1 = Bird("Burgut", 2, True, True)

print(bird1.info())
```

`super()` metodidan foydalanganimizda ota klassning xususiyatlarini o'z ichiga oladi.
