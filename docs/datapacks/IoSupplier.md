# IoSupplier

**Package:** `net.minecraft.server.packs.resources`
**Type:** interface<T>
**Side:** 🖧 Server
**Annotations:** `@FunctionalInterface`

## Methods

### create

```java
static IoSupplier<InputStream> create(Path p_248941_)
```

**Parameters:**

- `p_248941_` (`Path`)

**Returns:** `static IoSupplier<InputStream>`

### create

```java
static IoSupplier<InputStream> create(ZipFile p_249624_, ZipEntry p_248688_)
```

**Parameters:**

- `p_249624_` (`ZipFile`)
- `p_248688_` (`ZipEntry`)

**Returns:** `static IoSupplier<InputStream>`

### get

```java
T get()
```

**Returns:** `T`
