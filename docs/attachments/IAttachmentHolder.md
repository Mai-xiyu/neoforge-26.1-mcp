# IAttachmentHolder

**Package:** `net.neoforged.neoforge.attachment`
**Type:** interface

## Description

An object that can hold data attachments.

## Methods

### hasAttachments

```java
boolean hasAttachments()
```

**Returns:** `boolean`

### hasData

```java
boolean hasData(AttachmentType<?> type)
```

**Parameters:**

- `type` (`AttachmentType<?>`)

**Returns:** `boolean`

### hasData

```java
default <T> boolean hasData(Supplier<AttachmentType<T>> type)
```

**Parameters:**

- `type` (`Supplier<AttachmentType<T>>`)

**Returns:** `boolean`

### getData

```java
<T> T getData(AttachmentType<T> type)
```

**Parameters:**

- `type` (`AttachmentType<T>`)

**Returns:** `T`

### getData

```java
default <T> T getData(Supplier<AttachmentType<T>> type)
```

**Parameters:**

- `type` (`Supplier<AttachmentType<T>>`)

**Returns:** `T`

### getExistingData

```java
<T> Optional<T> getExistingData(AttachmentType<T> type)
```

**Parameters:**

- `type` (`AttachmentType<T>`)

**Returns:** `Optional<T>`

### getExistingData

```java
default <T> Optional<T> getExistingData(Supplier<AttachmentType<T>> type)
```

**Parameters:**

- `type` (`Supplier<AttachmentType<T>>`)

**Returns:** `Optional<T>`

### setData

```java
T setData(AttachmentType<T> type, T data)
```

**Parameters:**

- `type` (`AttachmentType<T>`)
- `data` (`T`)

**Returns:** `T`

### setData

```java
T setData(Supplier<AttachmentType<T>> type, T data)
```

**Parameters:**

- `type` (`Supplier<AttachmentType<T>>`)
- `data` (`T`)

**Returns:** `T`

### removeData

```java
T removeData(AttachmentType<T> type)
```

**Parameters:**

- `type` (`AttachmentType<T>`)

**Returns:** `T`

### removeData

```java
T removeData(Supplier<AttachmentType<T>> type)
```

**Parameters:**

- `type` (`Supplier<AttachmentType<T>>`)

**Returns:** `T`
