# ModelProperty

**Package:** `net.neoforged.neoforge.client.model.data`
**Type:** class<T> implements Predicate<T>
**Side:** 🖥️ Client

## Description

A property to be used in `ModelData`.



May optionally validate incoming values.
@see ModelData

## Methods

### ModelProperty

```java
public ModelProperty()
```

**Returns:** `public`

### ModelProperty

```java
public ModelProperty(Predicate<T> predicate)
```

**Parameters:**

- `predicate` (`Predicate<T>`)

**Returns:** `public`

### test

```java
public boolean test(T value)
```

**Parameters:**

- `value` (`T`)

**Returns:** `boolean`
