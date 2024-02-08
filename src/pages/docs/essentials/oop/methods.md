# Methods

Bu darsda metodlar haqida gaplashamiz.

````python
class Square:
    def __init__(self, x):
        self.tomon = x
    
    def perimeter(self):
        return self.tomon * 4
        
sq = Square(4)

p = sq.perimeter()

print(p)
````

:::tip Yodda tuting
Metodlarda birinchi argument sifatida `self` keladi va joriy obyektni anglatadi.
:::

Bu dasturda `Square` nomli klass yaratilgan va uning `perimeter` nomli metod
yozilgan. Klassdan tashqarida `sq` nomli obyekt yaratilgan. Undan keyin `sq` 
obyektining perimetrini topish uchun `perimeter` metodi ishlatilgan.

Natija

```text
16
```
