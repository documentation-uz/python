# Inheritance

Yangi yozmoqchi bo'lgan klassimizda biror klassning xususiyatlarini
o'zlashtirmoqchi bo'lsak, undan nasl olish kerak bo'ladi. Qaysi klassdan
nasl olgan bo'lsak, o'sha klass ota klass deyiladi.

```python {7}
class Animal: # ota klass
    def __init__(self, n, fc, fl):
        self.name = n
        self.feet_count = fc
        self.fly = fl

class Bird(Animal): # Animal klassidan nasl olindi
    def info(self):
        return f"Bu qushning nomi {self.name}."

bird1 = Bird("Burgut", 2, True)

print(bird1.info())
```

`Bird` klassi `Animal` klassining xususiyatlarini o'z ichiga oladi. Hozirgi
holatda `Animal` klassidagi `__init__` metodini o'z ichiga olyapti.
