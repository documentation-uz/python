# Lambda

Bir qator qilib e'lon qilinadigan funksiyalar `lambda` orqali yordamida yoziladi.

Ba'zi sodda funksiyalarni `lambda` orqali bir qator qilib yozish mumkin.

Masalan

```python
def perimeter(a):
    return a * 4
```

Bu funksiyani `lambda` orqali yozadigan bo'lsak,

```python
perimeter = lambda a: a * 4
```

Kvadratning yuzasini topish uchun esa

```python
area = lambda a: a * a

area_of_square = area(5)

print(area_of_square)
```

Natija

```text
25
```
