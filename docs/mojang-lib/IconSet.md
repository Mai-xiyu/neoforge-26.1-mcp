# IconSet

**Package:** `com.mojang.blaze3d.platform`
**Type:** enum
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SNAPSHOT

```java
, SNAPSHOT()
```

**Returns:** `,`

### IconSet

```java
private IconSet(String[]... p_281663_)
```

**Parameters:**

- `p_281663_` (`String[]...`)

**Returns:** `private`

### getStandardIcons

```java
public List<IoSupplier<InputStream>> getStandardIcons(PackResources p_281372_)
```

**Parameters:**

- `p_281372_` (`PackResources`)

**Returns:** `public List<IoSupplier<InputStream>>`

### getMacIcon

```java
public IoSupplier<InputStream> getMacIcon(PackResources p_281289_)
```

**Parameters:**

- `p_281289_` (`PackResources`)

**Returns:** `public IoSupplier<InputStream>`

### getFile

```java
private IoSupplier<InputStream> getFile(PackResources p_281570_, String p_281345_)
```

**Parameters:**

- `p_281570_` (`PackResources`)
- `p_281345_` (`String`)

**Returns:** `private IoSupplier<InputStream>`
