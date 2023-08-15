# Decorator

Dekorator funksiya xususiyatlarini o'zgartirish yoki qo'shimcha kiritish
uchun foydalaniladi.

## Dekorator qanday yoziladi?

Dekoratorga misol

```python
def information(func):
    def wrapper(*args, **kwargs):
        print("Function started working")

        func(*args, **kwargs)

        print("Function ended working")

    return wrapper
```

Bu dekorator funksiya ishga tushishidan oldin va ishlab bo'lgandan keyin
ekranga ma'lumot chiqaradi.

Avval dekorator funksiya orqali e'lon qilinadi va `func` parametri beriladi.
`func` parametri dekorator bog'lanadigan funksiya. Dekorator ichida yana
funksiya e'lon qilinadi va shu funksiya ichida dekorator mantig'iga oid
amallar yoziladi. Oxirida dekorator ichida e'lon qilingan funksiya `return`
orqali qaytariladi.

## Funksiyaga bog'lash

Dekoratorni funksiyaga bog'laymiz.

```python {11}
def information(func):
    def wrapper(*args, **kwargs):
        print("Function started working")

        func(*args, **kwargs)

        print("Function ended working")

    return wrapper

@information
def hello():
    print("Salom")

hello()
```

Endi `hello()` funksiyasi ishga tushganda avval dekoratordagi

```python
print("Function started working")
```

ishga tushadi, keyin `hello()` funksiyasining ichidagi kod ishlaydi va oxirida

```python
print("Function ended working")
```

ishlaydi. Natija

```text
Function started working
Salom
Function ended working
```
